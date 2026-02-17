# 🍺 BeerScan v2.1.0

**Skeniraj bar-kodove piva, čuvaj ocene, lokacije i osvajaj bedževe!**

[![PWA](https://img.shields.io/badge/PWA-Ready-success)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-2.1.0-orange)](CHANGELOG-v2.1.0.md)

---

## ✨ Funkcionalnosti

### 📱 Osnovno
- 📸 **Skeniranje bar-kodova** - Automatska detekcija sa kamere
- 🗄️ **Lokalna baza** - Svi podaci čuvani u browseru
- 📊 **Statistika** - Prati koliko si piva probao
- ⭐ **Ocene** - Oceni piva od 1-5 zvezda
- 📝 **Beleške** - Dodaj lične komentare
- ❤️ **Favoriti** - Označi omiljena piva
- 📤 **Deljenje** - Podeli sa prijateljima

### 🆕 Novo u v2.1.0
- 📍 **GPS Lokacija** - Sačuvaj gde si probao pivo
- 🗺️ **Mapa** - Prikaži lokacije na Google Maps
- 🍺 **Untappd** - Integracija sa Untappd-om
- 📅 **Pivski Kalendar** - Planiraj degustacije
- 🎯 **Novi Bedževi** - 4 specijalna dostignuća
- 📱 **PWA** - Instaliraj kao aplikaciju
- 🔌 **Offline** - Radi bez interneta

---

## 🚀 Quick Start

### Za Korisnike

1. **Otvori aplikaciju:**
   ```
   https://TVOJ-URL.github.io/beerscan/
   ```

2. **Instaliraj na telefon:**
   - Android: Chrome → Meni → "Dodaj na početni ekran"
   - iOS: Safari → Share → "Add to Home Screen"

3. **Skeniraj prvo pivo!** 🍺

### Za Developere

```bash
# Clone
git clone https://github.com/TVOJE-IME/beerscan.git
cd beerscan

# Deploy na GitHub Pages
git push origin main
# Settings → Pages → Enable

# Ili Netlify
# Drag & drop folder na netlify.com/drop
```

**Detaljno:** [QUICK-START.md](QUICK-START.md)

---

## 📸 Screenshots

### Skeniranje
![Scan](screenshots/scan.png)

### Istorija
![History](screenshots/history.png)

### Statistika
![Stats](screenshots/stats.png)

---

## 🎯 Bedževi

### Osnovni
- 🥉 **Bronza** - Probaj 10 piva
- 🥈 **Srebro** - Probaj 25 piva
- 🥇 **Zlato** - Probaj 50 piva
- 🏆 **Legenda** - Probaj 100 piva

### Specijalni (NOVO!)
- 🗺️ **Istraživač** - Sačuvaj 5 lokacija
- 🌍 **Putnik** - Sačuvaj 10 lokacija
- 🤝 **Društvenjak** - Podeli 10 puta
- 🍺 **Untappd Fan** - Poveži 5 piva

---

## 📍 GPS Lokacija

Sačuvaj gde si probao svako pivo!

```javascript
// Automatski čuva:
{
  lat: 44.8176,
  lng: 20.4633,
  timestamp: 1234567890,
  accuracy: 10
}
```

**Kako koristiti:**
1. Skeniraj pivo
2. Klikni "📍 Lokacija"
3. Dozvoli pristup
4. Lokacija sačuvana!

**Prikaži na mapi:**
- Klikni "🗺️ Prikaži na mapi"
- Otvara Google Maps sa tačnom lokacijom

---

## 🍺 Untappd Integracija

Poveži sa najpopularnijom pivskom aplikacijom!

**Kako radi:**
1. Skeniraj pivo
2. Klikni "🍺 Untappd"
3. Otvara se Untappd pretraga
4. Dodaj check-in tamo

**Automatska pretraga:**
- Po nazivu piva (ako postoji)
- Po bar-kodu (fallback)

---

## 📅 Pivski Kalendar

Planiraj degustacije i pivske događaje!

**Funkcionalnosti:**
- ➕ Dodaj događaje
- 📍 Dodaj lokaciju događaja
- 🗓️ Sortiranje po datumu
- 🗑️ Brisanje događaja
- 📱 Povezivanje sa skeniranim pivima

**Primeri:**
- "Degustacija IPA piva - Pivnica XYZ"
- "Pivski festival - Beograd"
- "Probaj novo pivo - Kafana ABC"

---

## 📱 PWA Instalacija

Instaliraj kao pravu aplikaciju!

### Prednosti:
- ✅ Ikona na početnom ekranu
- ✅ Fullscreen režim
- ✅ Offline rad
- ✅ Brže učitavanje
- ✅ Push notifikacije (uskoro)

### Shortcuts:
- 🔍 **Skeniraj pivo** - Direktno otvara kameru
- 📋 **Istorija** - Pregledaj skenirane proizvode
- 📊 **Statistika** - Vidi bedževe i dostignuća

### Kako instalirati:

**Android (Chrome):**
1. Otvori aplikaciju
2. Klikni "Instaliraj" u toast notifikaciji
3. Ili: Meni → "Dodaj na početni ekran"

**iOS (Safari):**
1. Otvori aplikaciju
2. Share → "Add to Home Screen"
3. Potvrdi

**Desktop (Chrome/Edge):**
1. Ikona instalacije u address bar-u
2. Ili: Meni → "Instaliraj BeerScan"

---

## 🛠️ Tehnologije

### Frontend:
- **HTML5** - Semantic markup
- **CSS3** - Modern styling, gradients, animations
- **JavaScript (Vanilla)** - No frameworks!

### APIs:
- **Barcode Detection API** - Native barcode scanning
- **Geolocation API** - GPS coordinates
- **IndexedDB** - Local database
- **Service Workers** - Offline support
- **Web App Manifest** - PWA installation

### External:
- **Open Food Facts API** - Product information
- **Untappd** - Beer tracking integration
- **Google Maps** - Location display

---

## 📊 Statistika

### Prati:
- 📈 Ukupno skeniranih piva
- ✅ Probanih piva
- 🆕 Novih piva (nije probano)
- 🏷️ Top brendova
- 📍 Broj sačuvanih lokacija
- 🍺 Untappd povezivanja
- 📤 Broj deljenja

### Grafici:
- Bar chart za top brendove
- Progress bar za bedževe
- Statistika po kategorijama

---

## 🔒 Privatnost

### Lokalni podaci:
- ✅ Svi podaci čuvani lokalno (IndexedDB)
- ✅ Nema server-side storage
- ✅ Nema tracking-a
- ✅ Nema analytics-a (opciono)

### Dozvole:
- 📸 **Kamera** - Za skeniranje bar-kodova
- 📍 **Lokacija** - Za GPS koordinate (opciono)

### Export/Import:
- Exportuj sve podatke kao JSON
- Importuj backup
- Potpuna kontrola nad podacima

---

## 🌐 Browser Podrška

### Desktop:
- ✅ Chrome 90+ (preporučeno)
- ✅ Edge 90+
- ✅ Safari 14+
- ⚠️ Firefox 88+ (bez install prompt-a)

### Mobile:
- ✅ Chrome Android 90+
- ✅ Safari iOS 14+
- ✅ Samsung Internet 14+

### Zahtevi:
- **HTTPS** - Obavezno za GPS i PWA
- **Modern browser** - ES6+ support
- **JavaScript enabled**

---

## 📚 Dokumentacija

### Za Korisnike:
- [⚡ Quick Start](QUICK-START.md) - Brzi početak
- [📖 Nove Funkcionalnosti](README-NOVE-FUNKCIONALNOSTI.md) - Detaljno
- [🧪 Test Plan](TEST-NOVE-FUNKCIONALNOSTI.md) - Kako testirati

### Za Developere:
- [🚀 Deploy Uputstvo](DEPLOY-UPUTSTVO.md) - Kako deploy-ovati
- [🎨 Ikone Uputstvo](IKONE-UPUTSTVO.md) - Kako napraviti ikone
- [📝 Changelog](CHANGELOG-v2.1.0.md) - Šta je novo

---

## 🔮 Roadmap

### v2.2.0 (Q1 2025)
- [ ] 🗺️ Mapa sa svim lokacijama
- [ ] 📊 Grafikon posećenih mesta
- [ ] 🔔 Push notifikacije za kalendar
- [ ] 🤝 Deljenje sa prijateljima

### v2.3.0 (Q2 2025)
- [ ] 📸 Galerija slika piva
- [ ] 🏪 Integracija sa pivnicama
- [ ] 🎨 Custom teme
- [ ] 🌐 Multi-language support

### v3.0.0 (Q3 2025)
- [ ] 👥 Social features
- [ ] 🏆 Leaderboards
- [ ] 🎮 Gamification
- [ ] 💬 Comments & Reviews

---

## 🤝 Doprinos

Doprinosi su dobrodošli! 🎉

### Kako doprineti:
1. Fork repo
2. Kreiraj feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit promene (`git commit -m 'Add AmazingFeature'`)
4. Push na branch (`git push origin feature/AmazingFeature`)
5. Otvori Pull Request

### Ideje za doprinose:
- 🐛 Bug fixes
- ✨ Nove funkcionalnosti
- 📝 Dokumentacija
- 🎨 Dizajn poboljšanja
- 🌐 Prevodi

---

## 🐛 Poznati Problemi

### GPS:
- ❌ Ne radi na HTTP (samo HTTPS/localhost)
- ⚠️ iOS Safari može biti sporiji
- ⚠️ Accuracy zavisi od uređaja

### PWA:
- ⚠️ iOS Safari ima ograničenja
- ⚠️ Firefox nema install prompt
- ⚠️ Desktop Safari ne podržava PWA

### Barcode Detection:
- ⚠️ Samo Chrome/Edge (native API)
- ⚠️ Firefox/Safari ne podržavaju

---

## 📄 License

MIT License - Slobodno koristi i modifikuj!

```
Copyright (c) 2024 BeerScan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

Pun tekst: [LICENSE](LICENSE)

---

## 🙏 Credits

### APIs & Libraries:
- [Open Food Facts](https://world.openfoodfacts.org/) - Product database
- [Untappd](https://untappd.com/) - Beer tracking inspiration
- [Barcode Detection API](https://developer.mozilla.org/en-US/docs/Web/API/Barcode_Detection_API) - Chrome team

### Inspiration:
- Untappd - Beer tracking
- Vivino - Wine scanning
- MyFitnessPal - Food tracking

---

## 📞 Kontakt

- **GitHub:** [github.com/TVOJE-IME/beerscan](https://github.com/TVOJE-IME/beerscan)
- **Issues:** [github.com/TVOJE-IME/beerscan/issues](https://github.com/TVOJE-IME/beerscan/issues)
- **Email:** support@beerscan.app (placeholder)
- **Twitter:** [@beerscan](https://twitter.com/beerscan) (placeholder)

---

## ⭐ Star History

Ako ti se sviđa projekat, ostavi ⭐ na GitHub-u!

---

## 🍻 Nazdravlje!

**Verzija:** 2.1.0  
**Datum:** 2024  
**Status:** ✅ Production Ready  
**Piva skenirana:** ∞

---

**Made with 🍺 and ❤️**
