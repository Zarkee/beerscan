// Firebase Cloud Messaging Service Worker
// Ovaj fajl omogućava prijem push notifikacija kada aplikacija nije otvorena

// Import Firebase scripts
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Firebase konfiguracija (ista kao u index.html)
const firebaseConfig = {
  apiKey: "AIzaSyBYWCJt4t5zv633Ggegv58pZBed7oOVzBA",
  authDomain: "beer-scan.firebaseapp.com",
  projectId: "beer-scan",
  storageBucket: "beer-scan.firebasestorage.app",
  messagingSenderId: "86777402358",
  appId: "1:86777402358:web:975c5f91096ac48b24edd7",
  measurementId: "G-YBYQ4JYQEV"
};

// Inicijalizuj Firebase
firebase.initializeApp(firebaseConfig);

// Inicijalizuj Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Primljena background poruka:', payload);
  
  const notificationTitle = payload.notification?.title || 'BeerScan';
  const notificationOptions = {
    body: payload.notification?.body || 'Nova notifikacija',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: payload.data?.type || 'default',
    data: payload.data || {},
    requireInteraction: false,
    vibrate: [200, 100, 200]
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification click:', event);
  
  event.notification.close();
  
  // Otvori aplikaciju
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Ako je aplikacija već otvorena, fokusiraj je
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      
      // Ako nije otvorena, otvori novu
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

console.log('[firebase-messaging-sw.js] Service Worker učitan');
