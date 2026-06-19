// ============================================
// FLY INFINITY - MULTI LANGUAGE SYSTEM
// ============================================

const LANGUAGES = {
    en: { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
    zh: { code: 'zh', name: '中文', flag: '🇨🇳', dir: 'ltr' },
    es: { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
    pt: { code: 'pt', name: 'Português', flag: '🇵🇹', dir: 'ltr' },
    ru: { code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
    ar: { code: 'ar', name: 'العربية', flag: '🇮🇶', dir: 'rtl' },
    hi: { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
    tr: { code: 'tr', name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
    id: { code: 'id', name: 'Indonesia', flag: '🇮🇩', dir: 'ltr' },
    fa: { code: 'fa', name: 'فارسی', flag: '🇮🇷', dir: 'rtl' }
};

const TRANSLATIONS = {
    // ========== HEADER ==========
    'header.title': {
        en: 'Fly Infinity DAO',
        zh: 'Fly Infinity DAO',
        es: 'Fly Infinity DAO',
        pt: 'Fly Infinity DAO',
        ru: 'Fly Infinity DAO',
        ar: 'Fly Infinity DAO',
        hi: 'Fly Infinity DAO',
        tr: 'Fly Infinity DAO',
        id: 'Fly Infinity DAO',
        fa: 'فلای اینفینیتی دائو'
    },

    // ========== NAVIGATION ==========
    'nav.dashboard': {
        en: 'Dashboard', zh: '仪表板', es: 'Panel', pt: 'Painel',
        ru: 'Панель', ar: 'لوحة القيادة', hi: 'डैशबोर्ड',
        tr: 'Gösterge Paneli', id: 'Dasbor', fa: 'داشبورد'
    },
    'nav.comparison': {
        en: 'Comparison', zh: '对比', es: 'Comparación', pt: 'Comparação',
        ru: 'Сравнение', ar: 'مقارنة', hi: 'तुलना',
        tr: 'Karşılaştırma', id: 'Perbandingan', fa: 'مقایسه'
    },
    'nav.dapp': {
        en: 'DApp', zh: 'DApp', es: 'DApp', pt: 'DApp',
        ru: 'DApp', ar: 'التطبيق', hi: 'DApp',
        tr: 'DApp', id: 'DApp', fa: 'دی‌اپ'
    },
    'nav.transactions': {
        en: 'Transactions', zh: '交易', es: 'Transacciones', pt: 'Transações',
        ru: 'Транзакции', ar: 'المعاملات', hi: 'लेन-देन',
        tr: 'İşlemler', id: 'Transaksi', fa: 'تراکنش‌ها'
    },
    'nav.privacy': {
        en: 'Privacy', zh: '隐私', es: 'Privacidad', pt: 'Privacidade',
        ru: 'Конфиденциальность', ar: 'الخصوصية', hi: 'गोपनीयता',
        tr: 'Gizlilik', id: 'Privasi', fa: 'حریم خصوصی'
    },
    'nav.warnings': {
        en: 'Warnings', zh: '警告', es: 'Advertencias', pt: 'Avisos',
        ru: 'Предупреждения', ar: 'تحذيرات', hi: 'चेतावनी',
        tr: 'Uyarılar', id: 'Peringatan', fa: 'هشدارها'
    },
    'nav.faq': {
        en: 'FAQ', zh: '常见问题', es: 'Preguntas Frecuentes', pt: 'Perguntas Frequentes',
        ru: 'Часто задаваемые вопросы', ar: 'الأسئلة الشائعة', hi: 'अक्सर पूछे जाने वाले प्रश्न',
        tr: 'SSS', id: 'FAQ', fa: 'سوالات متداول'
    },
    'nav.whitepaper': {
        en: 'White Paper', zh: '白皮书', es: 'Libro Blanco', pt: 'White Paper',
        ru: 'Белая книга', ar: 'الورقة البيضاء', hi: 'श्वेत पत्र',
        tr: 'Beyaz Bülten', id: 'Kertas Putih', fa: 'وایت‌پیپر'
    },

    // ========== FOOTER ==========
    'footer.tagline': {
        en: 'Fly Infinity — Decentralized. Transparent. Forever Rising.',
        zh: 'Fly Infinity — 去中心化。透明。永远上涨。',
        es: 'Fly Infinity — Descentralizado. Transparente. Siempre Subiendo.',
        pt: 'Fly Infinity — Descentralizado. Transparente. Sempre Subindo.',
        ru: 'Fly Infinity — Децентрализованный. Прозрачный. Вечно Растущий.',
        ar: 'Fly Infinity — لا مركزي. شفاف. يرتفع للأبد.',
        hi: 'Fly Infinity — विकेंद्रीकृत। पारदर्शी। हमेशा बढ़ता हुआ।',
        tr: 'Fly Infinity — Merkeziyetsiz. Şeffaf. Sonsuza Yükselen.',
        id: 'Fly Infinity — Terdesentralisasi. Transparan. Selalu Naik.',
        fa: 'فلای اینفینیتی — غیرمتمرکز. شفاف. همیشه در حال رشد.'
    },

    // ========== WHITEPAPER ==========
    'whitepaper.title': {
        en: 'White Paper',
        zh: '白皮书',
        es: 'Libro Blanco',
        pt: 'White Paper',
        ru: 'Белая книга',
        ar: 'الورقة البيضاء',
        hi: 'श्वेत पत्र',
        tr: 'Beyaz Bülten',
        id: 'Kertas Putih',
        fa: 'وایت‌پیپر'
    },
    'whitepaper.version': {
        en: 'Version 1.0',
        zh: '版本 1.0',
        es: 'Versión 1.0',
        pt: 'Versão 1.0',
        ru: 'Версия 1.0',
        ar: 'الإصدار 1.0',
        hi: 'संस्करण 1.0',
        tr: 'Sürüm 1.0',
        id: 'Versi 1.0',
        fa: 'نسخه ۱.۰'
    },
    'whitepaper.release': {
        en: 'Release Date: June 2026',
        zh: '发布日期：2026年6月',
        es: 'Fecha de Lanzamiento: Junio 2026',
        pt: 'Data de Lançamento: Junho 2026',
        ru: 'Дата выпуска: Июнь 2026',
        ar: 'تاريخ الإصدار: يونيو 2026',
        hi: 'रिलीज़ दिनांक: जून 2026',
        tr: 'Yayın Tarihi: Haziran 2026',
        id: 'Tanggal Rilis: Juni 2026',
        fa: 'تاریخ انتشار: ژوئن ۲۰۲۶'
    },

    // ========== BUTTONS ==========
    'btn.refresh': {
        en: 'Refresh', zh: '刷新', es: 'Actualizar', pt: 'Atualizar',
        ru: 'Обновить', ar: 'تحديث', hi: 'ताज़ा करें',
        tr: 'Yenile', id: 'Muat Ulang', fa: 'بروزرسانی'
    },
    'btn.loading': {
        en: 'Loading...', zh: '加载中...', es: 'Cargando...', pt: 'Carregando...',
        ru: 'Загрузка...', ar: 'جاري التحميل...', hi: 'लोड हो रहा है...',
        tr: 'Yükleniyor...', id: 'Memuat...', fa: 'در حال بارگذاری...'
    }
};

// ============================================
// LANGUAGE DETECTION & STORAGE
// ============================================

let currentLang = 'en';

function getDefaultLang() {
    const saved = localStorage.getItem('fit_lang');
    if (saved && LANGUAGES[saved]) return saved;
    const browserLang = navigator.language.split('-')[0];
    if (LANGUAGES[browserLang]) return browserLang;
    return 'en';
}

function setLanguage(lang) {
    if (!LANGUAGES[lang]) return;
    currentLang = lang;
    localStorage.setItem('fit_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGUAGES[lang].dir;
    updateAllTranslations();
    updateLangButton();
}

function t(key) {
    const translation = TRANSLATIONS[key];
    if (!translation) return key;
    return translation[currentLang] || translation.en || key;
}

// ============================================
// UPDATE ALL TRANSLATIONS
// ============================================

function updateAllTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });
}

// ============================================
// LANGUAGE BUTTON
// ============================================

function createLangButton() {
    const btn = document.createElement('button');
    btn.id = 'langBtn';
    btn.className = 'lang-btn';
    btn.setAttribute('aria-label', 'Change language');
    btn.innerHTML = '🌐';
    btn.addEventListener('click', toggleLangDropdown);
    return btn;
}

function createLangDropdown() {
    const dropdown = document.createElement('div');
    dropdown.id = 'langDropdown';
    dropdown.className = 'lang-dropdown';
    
    Object.keys(LANGUAGES).forEach(code => {
        const lang = LANGUAGES[code];
        const item = document.createElement('a');
        item.href = '#';
        item.className = 'lang-item' + (code === currentLang ? ' active' : '');
        item.setAttribute('data-lang', code);
        item.innerHTML = `${lang.flag} ${lang.name}`;
        item.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage(code);
            closeLangDropdown();
        });
        dropdown.appendChild(item);
    });
    
    return dropdown;
}

function toggleLangDropdown(e) {
    e.stopPropagation();
    const dropdown = document.getElementById('langDropdown');
    if (!dropdown) return;
    dropdown.classList.toggle('open');
}

function closeLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) dropdown.classList.remove('open');
}

function updateLangButton() {
    const btn = document.getElementById('langBtn');
    if (btn) {
        btn.innerHTML = LANGUAGES[currentLang].flag;
    }
    document.querySelectorAll('.lang-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-lang') === currentLang);
    });
}

// ============================================
// INIT
// ============================================

function initLanguageSystem() {
    currentLang = getDefaultLang();
    document.documentElement.lang = currentLang;
    document.documentElement.dir = LANGUAGES[currentLang].dir;
    
    // Create and insert language button
    const langBtn = createLangButton();
    const topBar = document.querySelector('.top-bar .logo');
    if (topBar && topBar.parentNode) {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'display: flex; align-items: center; gap: 12px;';
        const logoClone = topBar.cloneNode(true);
        wrapper.appendChild(logoClone);
        wrapper.appendChild(langBtn);
        topBar.parentNode.replaceChild(wrapper, topBar);
    } else {
        const topBarContainer = document.querySelector('.top-bar');
        if (topBarContainer) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display: flex; align-items: center; gap: 12px;';
            const logo = topBarContainer.querySelector('.logo');
            if (logo) {
                const logoClone = logo.cloneNode(true);
                wrapper.appendChild(logoClone);
            }
            wrapper.appendChild(langBtn);
            topBarContainer.prepend(wrapper);
        }
    }
    
    // Create and insert dropdown
    const dropdown = createLangDropdown();
    document.body.appendChild(dropdown);
    
    document.addEventListener('click', closeLangDropdown);
    
    updateAllTranslations();
    updateLangButton();
}

document.addEventListener('DOMContentLoaded', initLanguageSystem);
