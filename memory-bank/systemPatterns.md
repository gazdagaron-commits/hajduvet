# Hajduvet Weboldal - Rendszer Minták

## Komponens Architektúra

### Header Komponens
- Rögzített pozíció (fixed)
- Dropdown menü a takarmánykiegészítőkhöz
- Mobil menü hamburger ikonnal
- Scroll-on árnyék változás

### Footer Komponens
- 4 oszlopos elrendezés (desktop)
- Cég info, gyors linkek, termékek, elérhetőség
- Verzió badge jobb alsó sarokban

## Design Minták

### Kártyák
- `.card` - alap kártya shadow és hover effekttel
- `.service-card` - szolgáltatás kártya felső színes csíkkal
- `.product-card` - termék kártya gradient headerrel

### Gombok
- `.btn-primary` - elsődleges kék gomb
- `.btn-secondary` - másodlagos outline gomb
- `.btn-accent` - hangsúlyos világoskék gomb

### Táblázatok
- `.data-table` - adattáblázat gradient headerrel

## JavaScript Minták

### Debug Logolás
Minden interaktív elem `onclick` attribútumában console.log:
```javascript
onclick="console.log('[DEBUG] Akció leírása');"
```

### Komponens Inicializálás
```javascript
document.addEventListener('DOMContentLoaded', function() {
    initComponents();
});
```

## Oldal Struktúra
1. Header container (`#header-container`)
2. Main tartalom
3. Footer container (`#footer-container`)
4. Scripts (components.js)



