# HAJDUVET Kft. - Weboldal

Modern, professzionális weboldal a Hajduvet Állatgyógyszer-kereskedelmi Kft. számára.

## 🚀 Verzió
**v1.0.0**

## 📋 Funkciók

- ✅ Reszponzív design (mobil, tablet, desktop)
- ✅ SEO optimalizált minden oldal
- ✅ Modern Tailwind CSS stílusok
- ✅ Közös header és footer komponensek
- ✅ Debug logolás a konzolba
- ✅ Biztonsági meta tagek

## 🏗️ Projekt Struktúra

```
hajduvet-redesign/
├── index.html              # Főoldal
├── pages/                  # Aloldalak
│   ├── cegtortenet.html
│   ├── takarmanykiegeszitok.html
│   ├── selene.html
│   ├── pantosal-new.html
│   ├── metafisiol.html
│   ├── aquacid.html
│   ├── anpro-aminovit.html
│   ├── anprosol-aminopan.html
│   ├── acesol-plus.html
│   ├── fuljelolok.html
│   ├── gyogyszeradagolo.html
│   ├── szalmonella-mentesites.html
│   ├── kapcsolat.html
│   └── palyazat.html
├── css/
│   └── style.css           # Buildelt Tailwind CSS
├── js/
│   └── components.js       # Közös komponensek
├── src/
│   └── input.css           # Tailwind input
└── memory-bank/            # Projekt dokumentáció
```

## 🛠️ Telepítés

```bash
# Függőségek telepítése
npm install

# CSS build (production)
npm run build:css

# CSS watch mód (fejlesztéshez)
npm run watch:css
```

## 🌐 Feltöltés FTP-re

1. Futtasd: `npm run build:css`
2. Töltsd fel az összes fájlt az FTP-re:
   - `index.html`
   - `pages/` mappa
   - `css/` mappa
   - `js/` mappa

**Nem szükséges feltölteni:**
- `node_modules/`
- `src/`
- `memory-bank/`
- `package.json`
- `tailwind.config.js`

## 🎨 Színpaletta

| Szín | Hex | Használat |
|------|-----|-----------|
| Primary | `#0066B3` | Fő kék szín |
| Secondary | `#00A0E3` | Világosabb kék |
| Light | `#E8F4FC` | Háttér |
| Dark | `#004A82` | Sötétebb kék |
| Navy | `#003366` | Footer |

## 📱 Oldalak

| Oldal | Leírás |
|-------|--------|
| Főoldal | Bemutató, szolgáltatások |
| Cégtörténet | A cég története |
| Takarmánykiegészítők | 7 termék listázása |
| Füljelölők | NÉBIH ENAR termékek |
| Gyógyszeradagoló | Cambridge Agricultural |
| Szalmonella-mentesítés | Program leírás |
| Kapcsolat | Elérhetőségek, térkép |
| Pályázat | EU támogatások |

## 📞 Kapcsolat

**Hajdúvet Állatgyógyszer-kereskedelmi Kft.**
- Cím: 4030 Debrecen, Monostorpályi út 5.
- Tel: +36 52 411-100
- Email: megrendeles@hajduvet.hu

---
© 2024 Hajduvet Kft. Minden jog fenntartva.



