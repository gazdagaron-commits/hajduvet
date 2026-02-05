/**
 * Hajduvet Kft. - Közös komponensek
 * Verzió: 1.0.1
 * 
 * Ez a fájl tartalmazza a közös header és footer komponenseket,
 * amelyeket minden oldal használ.
 */

console.log('%c[HAJDUVET] Komponensek betöltése...', 'color: #0066B3; font-weight: bold;');

// Aktuális verzió
const APP_VERSION = '1.0.4';

// Ellenőrizzük, hogy a pages mappában vagyunk-e
function isInPagesFolder() {
    const path = window.location.pathname;
    const href = window.location.href;
    
    // Ellenőrizzük többféle módon
    const isInPages = path.includes('/pages/') || 
                      path.includes('\\pages\\') ||
                      path.includes('/pages\\') ||
                      href.includes('/pages/') ||
                      href.includes('%5Cpages%5C') || // URL encoded backslash
                      document.querySelector('script[src*="../js/components.js"]') !== null;
    
    console.log(`%c[DEBUG] Pages mappában vagyunk: ${isInPages}`, 'color: #666;');
    console.log(`%c[DEBUG] Path: ${path}`, 'color: #888;');
    console.log(`%c[DEBUG] Href: ${href}`, 'color: #888;');
    return isInPages;
}

// Útvonal prefix a GYÖKÉR mappához (index.html)
function getRootPrefix() {
    return isInPagesFolder() ? '../' : '';
}

// Útvonal prefix a PAGES mappához (aloldalak)
function getPagesPrefix() {
    return isInPagesFolder() ? '' : 'pages/';
}

// Aktuális oldal meghatározása
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '') || 'index';
    console.log(`%c[DEBUG] Aktuális oldal: ${page}`, 'color: #666;');
    return page;
}

// Header komponens
function createHeader() {
    console.log('%c[DEBUG] Header komponens létrehozása...', 'color: #00A0E3;');
    
    const currentPage = getCurrentPage();
    const rootPrefix = getRootPrefix();  // Főoldalhoz (index.html)
    const pagesPrefix = getPagesPrefix(); // Pages mappában lévő oldalakhoz
    
    console.log(`%c[DEBUG] Root prefix: "${rootPrefix}", Pages prefix: "${pagesPrefix}"`, 'color: #666;');
    
    const headerHTML = `
    <header class="fixed w-full top-0 left-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft" id="main-header">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-3">
                <!-- Logo -->
                <a href="${rootPrefix}index.html" class="flex items-center gap-3 group" onclick="console.log('[DEBUG] Logo kattintás - navigáció a főoldalra');">
                    <div class="w-12 h-12 bg-hajdu-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5"/>
                            <path d="M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold text-hajdu-primary font-heading">HAJDUVET</h1>
                        <p class="text-xs text-text-muted uppercase tracking-wider">Állatgyógyszer</p>
                    </div>
                </a>
                
                <!-- Desktop Navigation -->
                <nav class="hidden lg:flex items-center gap-1">
                    <a href="${rootPrefix}index.html" class="nav-link ${currentPage === 'index' ? 'active' : ''}" onclick="console.log('[DEBUG] Navigáció: Főoldal');">Főoldal</a>
                    <a href="${pagesPrefix}cegtortenet.html" class="nav-link ${currentPage === 'cegtortenet' ? 'active' : ''}" onclick="console.log('[DEBUG] Navigáció: Cégtörténet');">Cégtörténet</a>
                    
                    <!-- Takarmánykiegészítők dropdown -->
                    <div class="relative group">
                        <a href="${pagesPrefix}takarmanykiegeszitok.html" class="nav-link ${['takarmanykiegeszitok', 'selene', 'pantosal-new', 'metafisiol', 'aquacid', 'anpro-aminovit', 'anprosol-aminopan', 'acesol-plus'].includes(currentPage) ? 'active' : ''}" onclick="console.log('[DEBUG] Navigáció: Takarmánykiegészítők');">
                            Takarmánykiegészítők
                            <svg class="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </a>
                        <div class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div class="bg-white rounded-lg shadow-hover py-2 min-w-[200px]">
                                <a href="${pagesPrefix}selene.html" class="block px-4 py-2 text-text-secondary hover:text-hajdu-primary hover:bg-hajdu-light transition-colors" onclick="console.log('[DEBUG] Dropdown: SELENE');">SELENE</a>
                                <a href="${pagesPrefix}pantosal-new.html" class="block px-4 py-2 text-text-secondary hover:text-hajdu-primary hover:bg-hajdu-light transition-colors" onclick="console.log('[DEBUG] Dropdown: PANTOSAL NEW');">PANTOSAL NEW</a>
                                <a href="${pagesPrefix}metafisiol.html" class="block px-4 py-2 text-text-secondary hover:text-hajdu-primary hover:bg-hajdu-light transition-colors" onclick="console.log('[DEBUG] Dropdown: METAFISIOL');">METAFISIOL</a>
                                <a href="${pagesPrefix}aquacid.html" class="block px-4 py-2 text-text-secondary hover:text-hajdu-primary hover:bg-hajdu-light transition-colors" onclick="console.log('[DEBUG] Dropdown: AQUACID');">AQUACID</a>
                                <a href="${pagesPrefix}anpro-aminovit.html" class="block px-4 py-2 text-text-secondary hover:text-hajdu-primary hover:bg-hajdu-light transition-colors" onclick="console.log('[DEBUG] Dropdown: ANPRO AMINOVIT');">ANPRO AMINOVIT</a>
                                <a href="${pagesPrefix}anprosol-aminopan.html" class="block px-4 py-2 text-text-secondary hover:text-hajdu-primary hover:bg-hajdu-light transition-colors" onclick="console.log('[DEBUG] Dropdown: ANPROSOL AMINOPAN');">ANPROSOL AMINOPAN</a>
                                <a href="${pagesPrefix}acesol-plus.html" class="block px-4 py-2 text-text-secondary hover:text-hajdu-primary hover:bg-hajdu-light transition-colors" onclick="console.log('[DEBUG] Dropdown: ACESOL PLUS');">ACESOL PLUS</a>
                            </div>
                        </div>
                    </div>
                    
                    <a href="${pagesPrefix}fuljelolok.html" class="nav-link ${currentPage === 'fuljelolok' ? 'active' : ''}" onclick="console.log('[DEBUG] Navigáció: Füljelölők');">Füljelölők</a>
                    <a href="${pagesPrefix}gyogyszeradagolo.html" class="nav-link ${currentPage === 'gyogyszeradagolo' ? 'active' : ''}" onclick="console.log('[DEBUG] Navigáció: Gyógyszeradagoló');">Gyógyszeradagoló</a>
                    <a href="${pagesPrefix}szalmonella-mentesites.html" class="nav-link ${currentPage === 'szalmonella-mentesites' ? 'active' : ''}" onclick="console.log('[DEBUG] Navigáció: Szalmonella-mentesítés');">Szalmonella-mentesítés</a>
                    <a href="${pagesPrefix}palyazat.html" class="nav-link ${currentPage === 'palyazat' ? 'active' : ''}" onclick="console.log('[DEBUG] Navigáció: Pályázat');">Pályázat</a>
                    <a href="https://www.alphakarrier.hu/" target="_blank" rel="noopener noreferrer" class="nav-link" onclick="console.log('[DEBUG] Külső link: Karrier (alphakarrier.hu)');">Karrier ↗</a>
                </nav>
                
                <!-- CTA Button -->
                <div class="hidden lg:flex items-center gap-4">
                    <a href="${pagesPrefix}kapcsolat.html" class="btn-primary" onclick="console.log('[DEBUG] Kapcsolat gomb kattintás');">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        Kapcsolat
                    </a>
                </div>
                
                <!-- Mobile menu button -->
                <button class="lg:hidden p-2 text-hajdu-primary" id="mobile-menu-btn" onclick="toggleMobileMenu(); console.log('[DEBUG] Mobil menü toggle');">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="menu-icon-open">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <svg class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="menu-icon-close">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div class="lg:hidden hidden bg-white border-t border-gray-100" id="mobile-menu">
            <nav class="container mx-auto px-4 py-4 space-y-2">
                <a href="${rootPrefix}index.html" class="block py-2 px-4 rounded-lg ${currentPage === 'index' ? 'bg-hajdu-light text-hajdu-primary' : 'text-text-secondary hover:bg-hajdu-light'}" onclick="console.log('[DEBUG] Mobil nav: Főoldal');">Főoldal</a>
                <a href="${pagesPrefix}cegtortenet.html" class="block py-2 px-4 rounded-lg ${currentPage === 'cegtortenet' ? 'bg-hajdu-light text-hajdu-primary' : 'text-text-secondary hover:bg-hajdu-light'}" onclick="console.log('[DEBUG] Mobil nav: Cégtörténet');">Cégtörténet</a>
                <a href="${pagesPrefix}takarmanykiegeszitok.html" class="block py-2 px-4 rounded-lg ${currentPage === 'takarmanykiegeszitok' ? 'bg-hajdu-light text-hajdu-primary' : 'text-text-secondary hover:bg-hajdu-light'}" onclick="console.log('[DEBUG] Mobil nav: Takarmánykiegészítők');">Takarmánykiegészítők</a>
                <a href="${pagesPrefix}fuljelolok.html" class="block py-2 px-4 rounded-lg ${currentPage === 'fuljelolok' ? 'bg-hajdu-light text-hajdu-primary' : 'text-text-secondary hover:bg-hajdu-light'}" onclick="console.log('[DEBUG] Mobil nav: Füljelölők');">Füljelölők</a>
                <a href="${pagesPrefix}gyogyszeradagolo.html" class="block py-2 px-4 rounded-lg ${currentPage === 'gyogyszeradagolo' ? 'bg-hajdu-light text-hajdu-primary' : 'text-text-secondary hover:bg-hajdu-light'}" onclick="console.log('[DEBUG] Mobil nav: Gyógyszeradagoló');">Gyógyszeradagoló</a>
                <a href="${pagesPrefix}szalmonella-mentesites.html" class="block py-2 px-4 rounded-lg ${currentPage === 'szalmonella-mentesites' ? 'bg-hajdu-light text-hajdu-primary' : 'text-text-secondary hover:bg-hajdu-light'}" onclick="console.log('[DEBUG] Mobil nav: Szalmonella');">Szalmonella-mentesítés</a>
                <a href="${pagesPrefix}palyazat.html" class="block py-2 px-4 rounded-lg ${currentPage === 'palyazat' ? 'bg-hajdu-light text-hajdu-primary' : 'text-text-secondary hover:bg-hajdu-light'}" onclick="console.log('[DEBUG] Mobil nav: Pályázat');">Pályázat</a>
                <a href="https://www.alphakarrier.hu/" target="_blank" rel="noopener noreferrer" class="block py-2 px-4 rounded-lg text-text-secondary hover:bg-hajdu-light" onclick="console.log('[DEBUG] Mobil nav: Karrier külső');">Karrier ↗</a>
                <a href="${pagesPrefix}kapcsolat.html" class="block py-2 px-4 rounded-lg bg-hajdu-primary text-white text-center mt-4" onclick="console.log('[DEBUG] Mobil nav: Kapcsolat CTA');">Kapcsolat</a>
            </nav>
        </div>
    </header>
    
    <!-- Spacer for fixed header -->
    <div class="h-20"></div>
    `;
    
    console.log('%c[DEBUG] Header komponens sikeresen létrehozva', 'color: #28a745;');
    return headerHTML;
}

// Footer komponens
function createFooter() {
    console.log('%c[DEBUG] Footer komponens létrehozása...', 'color: #00A0E3;');
    
    const currentYear = new Date().getFullYear();
    const rootPrefix = getRootPrefix();  // Főoldalhoz (index.html)
    const pagesPrefix = getPagesPrefix(); // Pages mappában lévő oldalakhoz
    
    const footerHTML = `
    <footer class="bg-hajdu-navy text-white">
        <!-- Top Footer -->
        <div class="container mx-auto px-4 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <!-- Cég info -->
                <div>
                    <a href="${rootPrefix}index.html" class="flex items-center gap-3 mb-6 group">
                        <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-hajdu-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-hajdu-secondary group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                <path d="M2 17l10 5 10-5"/>
                                <path d="M2 12l10 5 10-5"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold font-heading">HAJDUVET</h3>
                            <p class="text-xs text-gray-400 uppercase tracking-wider">Állatgyógyszer</p>
                        </div>
                    </a>
                    <p class="text-gray-400 mb-6 leading-relaxed">
                        A HAJDUVET Kft a megalakulása óta meghatározó szereplője a magyar állatgyógyszer és takarmánykiegészítő kereskedelmi piacnak.
                    </p>
                    <div class="flex gap-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-hajdu-primary transition-colors" onclick="console.log('[DEBUG] Social: Facebook');">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                    </div>
                </div>
                
                <!-- Gyors linkek -->
                <div>
                    <h4 class="text-lg font-semibold mb-6 font-heading">Gyors linkek</h4>
                    <ul class="space-y-3">
                        <li><a href="${pagesPrefix}cegtortenet.html" class="text-gray-400 hover:text-white transition-colors" onclick="console.log('[DEBUG] Footer link: Cégtörténet');">Cégtörténet</a></li>
                        <li><a href="${pagesPrefix}takarmanykiegeszitok.html" class="text-gray-400 hover:text-white transition-colors" onclick="console.log('[DEBUG] Footer link: Takarmánykiegészítők');">Takarmánykiegészítők</a></li>
                        <li><a href="${pagesPrefix}fuljelolok.html" class="text-gray-400 hover:text-white transition-colors" onclick="console.log('[DEBUG] Footer link: Füljelölők');">Füljelölők</a></li>
                        <li><a href="${pagesPrefix}gyogyszeradagolo.html" class="text-gray-400 hover:text-white transition-colors" onclick="console.log('[DEBUG] Footer link: Gyógyszeradagoló');">Gyógyszeradagoló</a></li>
                        <li><a href="${pagesPrefix}szalmonella-mentesites.html" class="text-gray-400 hover:text-white transition-colors" onclick="console.log('[DEBUG] Footer link: Szalmonella');">Szalmonella-mentesítés</a></li>
                    </ul>
                </div>
                
                <!-- Termékek -->
                <div>
                    <h4 class="text-lg font-semibold mb-6 font-heading">Termékeink</h4>
                    <ul class="space-y-3">
                        <li><a href="${pagesPrefix}selene.html" class="text-gray-400 hover:text-white transition-colors" onclick="console.log('[DEBUG] Footer termék: SELENE');">SELENE</a></li>
                        <li><a href="${pagesPrefix}pantosal-new.html" class="text-gray-400 hover:text-white transition-colors" onclick="console.log('[DEBUG] Footer termék: PANTOSAL NEW');">PANTOSAL NEW</a></li>
                        <li><a href="${pagesPrefix}metafisiol.html" class="text-gray-400 hover:text-white transition-colors" onclick="console.log('[DEBUG] Footer termék: METAFISIOL');">METAFISIOL</a></li>
                        <li><a href="${pagesPrefix}aquacid.html" class="text-gray-400 hover:text-white transition-colors" onclick="console.log('[DEBUG] Footer termék: AQUACID');">AQUACID</a></li>
                        <li><a href="${pagesPrefix}acesol-plus.html" class="text-gray-400 hover:text-white transition-colors" onclick="console.log('[DEBUG] Footer termék: ACESOL PLUS');">ACESOL PLUS</a></li>
                    </ul>
                </div>
                
                <!-- Kapcsolat -->
                <div>
                    <h4 class="text-lg font-semibold mb-6 font-heading">Elérhetőség</h4>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-hajdu-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span class="text-gray-400">4030 Debrecen,<br>Monostorpályi út 5.</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-hajdu-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <a href="tel:+3652411100" class="text-gray-400 hover:text-white transition-colors">+36 52 411-100</a>
                        </li>
                        <li class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-hajdu-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <a href="mailto:megrendeles@hajduvet.hu" class="text-gray-400 hover:text-white transition-colors">megrendeles@hajduvet.hu</a>
                        </li>
                        <li class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-hajdu-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            </svg>
                            <span class="text-gray-400">Dr. Zsoldos István<br>+36 30 9259-120</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Bottom Footer -->
        <div class="border-t border-white/10">
            <div class="container mx-auto px-4 py-6">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-gray-400 text-sm text-center md:text-left">
                        © ${currentYear} Hajduvet Kft. Minden jog fenntartva!
                    </p>
                    <div class="flex items-center gap-6 text-sm">
                        <a href="${pagesPrefix}kapcsolat.html" class="text-gray-400 hover:text-white transition-colors">Kapcsolat</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
    
    console.log('%c[DEBUG] Footer komponens sikeresen létrehozva', 'color: #28a745;');
    return footerHTML;
}

// Mobil menü toggle
function toggleMobileMenu() {
    console.log('%c[DEBUG] toggleMobileMenu() meghívva', 'color: #ffc107;');
    
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    
    if (menu && iconOpen && iconClose) {
        menu.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
        console.log(`%c[DEBUG] Mobil menü állapot: ${menu.classList.contains('hidden') ? 'zárt' : 'nyitott'}`, 'color: #17a2b8;');
    } else {
        console.error('[ERROR] Mobil menü elemek nem találhatók!');
    }
}

// Header scroll hatás
function initHeaderScroll() {
    console.log('%c[DEBUG] Header scroll figyelő inicializálása...', 'color: #00A0E3;');
    
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
                header.classList.remove('shadow-soft');
            } else {
                header.classList.remove('shadow-lg');
                header.classList.add('shadow-soft');
            }
        });
        console.log('%c[DEBUG] Header scroll figyelő aktív', 'color: #28a745;');
    }
}

// Scroll animációk
function initScrollAnimations() {
    console.log('%c[DEBUG] Scroll animációk inicializálása...', 'color: #00A0E3;');
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    if (elements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    console.log(`%c[DEBUG] Elem megjelent: ${entry.target.className}`, 'color: #6f42c1;');
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => observer.observe(el));
        console.log(`%c[DEBUG] ${elements.length} elem figyelése aktív`, 'color: #28a745;');
    }
}

// Komponensek inicializálása
function initComponents() {
    console.log('%c[HAJDUVET] Komponensek inicializálása...', 'color: #0066B3; font-weight: bold;');
    
    try {
        // Header beszúrása
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) {
            headerContainer.innerHTML = createHeader();
            console.log('%c[DEBUG] Header beszúrva a DOM-ba', 'color: #28a745;');
        } else {
            console.warn('[WARN] Header container nem található!');
        }
        
        // Footer beszúrása
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = createFooter();
            console.log('%c[DEBUG] Footer beszúrva a DOM-ba', 'color: #28a745;');
        } else {
            console.warn('[WARN] Footer container nem található!');
        }
        
        // Effektek inicializálása
        initHeaderScroll();
        initScrollAnimations();
        
        console.log('%c[HAJDUVET] ✓ Minden komponens sikeresen betöltve!', 'color: #28a745; font-weight: bold;');
        console.log(`%c[INFO] Verzió: ${APP_VERSION}`, 'color: #0066B3;');
        
    } catch (error) {
        console.error('[ERROR] Hiba a komponensek inicializálásakor:', error);
    }
}

// DOM betöltés után inicializálás
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c[DEBUG] DOMContentLoaded esemény - inicializálás indul', 'color: #fd7e14;');
    initComponents();
});

// Globális hozzáférés
window.HAJDUVET = {
    version: APP_VERSION,
    toggleMobileMenu: toggleMobileMenu
};

console.log('%c[HAJDUVET] components.js betöltve', 'color: #0066B3; font-weight: bold;');
