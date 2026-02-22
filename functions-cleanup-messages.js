// Firebase Cloud Function za automatsko brisanje starih poruka
// Ovo je opciono - trenutna implementacija briše poruke kada korisnik otvori čet

const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Inicijalizuj Firebase Admin (samo jednom)
if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

/**
 * Cloud Function koja se pokreće svaki dan u ponoć (Belgrade vreme)
 * i briše sve poruke starije od 24h
 */
exports.cleanupOldMessages = functions.pubsub
  .schedule('0 0 * * *') // Svaki dan u ponoć
  .timeZone('Europe/Belgrade')
  .onRun(async (context) => {
    console.log('Pokrećem cleanup starih poruka...');
    
    try {
      // Izračunaj vreme pre 24h
      const oneDayAgo = admin.firestore.Timestamp.fromDate(
        new Date(Date.now() - 24 * 60 * 60 * 1000)
      );
      
      console.log('Tražim poruke starije od:', oneDayAgo.toDate());
      
      // Pronađi sve poruke starije od 24h
      const oldMessages = await db.collection('chatMessages')
        .where('timestamp', '<', oneDayAgo)
        .get();
      
      if (oldMessages.empty) {
        console.log('Nema starih poruka za brisanje');
        return null;
      }
      
      console.log(`Pronađeno ${oldMessages.size} starih poruka`);
      
      // Koristi batch za efikasno brisanje (max 500 po batch-u)
      const batches = [];
      let batch = db.batch();
      let operationCount = 0;
      let batchCount = 0;
      
      oldMessages.forEach(doc => {
        batch.delete(doc.ref);
        operationCount++;
        
        // Firestore batch limit je 500 operacija
        if (operationCount === 500) {
          batches.push(batch.commit());
          batch = db.batch();
          operationCount = 0;
          batchCount++;
        }
      });
      
      // Commit poslednji batch ako ima operacija
      if (operationCount > 0) {
        batches.push(batch.commit());
        batchCount++;
      }
      
      // Sačekaj da se svi batch-evi izvrše
      await Promise.all(batches);
      
      console.log(`✅ Uspešno obrisano ${oldMessages.size} poruka u ${batchCount} batch(eva)`);
      
      return null;
    } catch (error) {
      console.error('❌ Greška pri brisanju starih poruka:', error);
      throw error;
    }
  });

/**
 * Opciona funkcija koja se pokreće svaki sat
 * i briše neaktivne korisnike (offline duže od 5 minuta)
 */
exports.cleanupInactiveUsers = functions.pubsub
  .schedule('0 * * * *') // Svaki sat
  .timeZone('Europe/Belgrade')
  .onRun(async (context) => {
    console.log('Pokrećem cleanup neaktivnih korisnika...');
    
    try {
      const fiveMinutesAgo = admin.firestore.Timestamp.fromDate(
        new Date(Date.now() - 5 * 60 * 1000)
      );
      
      const inactiveUsers = await db.collection('activeUsers')
        .where('lastActive', '<', fiveMinutesAgo)
        .get();
      
      if (inactiveUsers.empty) {
        console.log('Nema neaktivnih korisnika');
        return null;
      }
      
      console.log(`Pronađeno ${inactiveUsers.size} neaktivnih korisnika`);
      
      const batch = db.batch();
      inactiveUsers.forEach(doc => {
        batch.delete(doc.ref);
      });
      
      await batch.commit();
      
      console.log(`✅ Uspešno obrisano ${inactiveUsers.size} neaktivnih korisnika`);
      
      return null;
    } catch (error) {
      console.error('❌ Greška pri brisanju neaktivnih korisnika:', error);
      throw error;
    }
  });

/**
 * HTTP funkcija za ručno pokretanje cleanup-a (za testiranje)
 * Pozovi: https://YOUR-REGION-YOUR-PROJECT.cloudfunctions.net/manualCleanup
 */
exports.manualCleanup = functions.https.onRequest(async (req, res) => {
  try {
    const oneDayAgo = admin.firestore.Timestamp.fromDate(
      new Date(Date.now() - 24 * 60 * 60 * 1000)
    );
    
    const oldMessages = await db.collection('chatMessages')
      .where('timestamp', '<', oneDayAgo)
      .get();
    
    if (oldMessages.empty) {
      res.json({ success: true, deleted: 0, message: 'Nema starih poruka' });
      return;
    }
    
    const batch = db.batch();
    oldMessages.forEach(doc => {
      batch.delete(doc.ref);
    });
    
    await batch.commit();
    
    res.json({ 
      success: true, 
      deleted: oldMessages.size, 
      message: `Obrisano ${oldMessages.size} poruka` 
    });
  } catch (error) {
    console.error('Greška:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});
