# Hajduvet Weboldal - Technikai Kontextus

## Technológiák
- **Frontend:** Pure HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework:** Tailwind CSS 3.4.1
- **Fonts:** Montserrat (címek), Open Sans (szöveg) - Google Fonts
- **Build Tool:** Tailwind CLI

## Fájl Struktúra
```
hajduvet-redesign/
├── index.html                # Főoldal
├── package.json              # NPM konfiguráció
├── tailwind.config.js        # Tailwind beállítások
├── .gitignore
├── css/
│   └── style.css             # Buildelt Tailwind CSS
├── src/
│   └── input.css             # Tailwind input
├── js/
│   └── components.js         # Közös komponensek (header, footer)
├── pages/
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
└── memory-bank/
    └── ...
```

## Build Parancsok
```bash
npm install                    # Függőségek telepítése
npm run build:css              # Tailwind CSS build (minified)
npm run watch:css              # Fejlesztési mód (watch)
```

## Színpaletta
- Primary: #0066B3
- Secondary: #00A0E3
- Light: #E8F4FC
- Dark: #004A82
- Navy: #003366

## Biztonsági Beállítások
- Content-Security-Policy meta tag
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- Referrer-Policy: strict-origin-when-cross-origin

## SEO
- Minden oldal saját meta description és keywords
- Open Graph tagek
- Canonical URL-ek
- Szemantikus HTML struktúra



