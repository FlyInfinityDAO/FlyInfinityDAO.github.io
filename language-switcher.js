// ============================================================
// Fly Infinity - Language Switcher (نسخه نهایی با ترجمه کامل)
// ============================================================

(function() {
    'use strict';

    // ==================== زبان‌ها ====================
    const LANGUAGES = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'pt', name: 'Português', flag: '🇵🇹' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'ar', name: 'العربية', flag: '🇮🇶' },
        { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
        { code: 'fa', name: 'فارسی', flag: '🇮🇷' }
    ];

    let currentLang = 'en';
    let translations = {};

    // ==================== بارگذاری ترجمه‌ها از صفحه ====================
    function loadTranslations() {
        const script = document.getElementById('lang-data');
        if (script) {
            try {
                translations = JSON.parse(script.textContent);
                console.log('✅ Translations loaded:', Object.keys(translations).length, 'keys');
                return true;
            } catch(e) {
                console.error('❌ Error loading translations:', e);
                return false;
            }
        }
        console.warn('⚠️ No translation data found in page');
        return false;
    }

    // ==================== ترجمه صفحه ====================
    function translatePage(lang) {
        if (!translations || Object.keys(translations).length === 0) {
            console.warn('⚠️ No translations available');
            return;
        }

        const elements = document.querySelectorAll('[data-i18n]');
        let count = 0;
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                const translation = translations[key][lang];
                // اگر داخل ترجمه placeholder وجود داشت، جایگزین کن
                if (translation.includes('{')) {
                    // فعلاً ساده بذار
                    el.textContent = translation;
                } else {
                    el.textContent = translation;
                }
                count++;
            }
        });
        console.log(`✅ Translated ${count} elements to ${lang}`);
    }

    // ==================== تغییر زبان ====================
    function setLanguage(lang) {
        if (!LANGUAGES.find(l => l.code === lang)) return;
        
        currentLang = lang;
        localStorage.setItem('fly-lang', lang);
        
        // به‌روزرسانی دکمه
        const btn = document.getElementById('langBtn');
        if (btn) {
            const found = LANGUAGES.find(l => l.code === lang);
            btn.innerHTML = found ? found.flag : '🌐';
        }
        
        // ترجمه صفحه
        translatePage(lang);
        
        // RTL
        const isRTL = lang === 'fa' || lang === 'ar';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        console.log(`🌐 Language changed to: ${lang}`);
    }

    // ==================== ساخت دکمه زبان ====================
    function createLanguageSwitcher() {
        // دکمه
        const btn = document.createElement('div');
        btn.id = 'langBtn';
        const found = LANGUAGES.find(l => l.code === currentLang);
        btn.innerHTML = found ? found.flag : '🌐';
        btn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #0F0F0F;
            border: 2px solid #D4AF37;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(0,0,0,0.6);
            transition: all 0.3s ease;
            user-select: none;
        `;
        
        btn.onmouseenter = () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.borderColor = '#00C896';
        };
        btn.onmouseleave = () => {
            btn.style.transform = 'scale(1)';
            btn.style.borderColor = '#D4AF37';
        };
        
        // منو
        let menu = null;
        let isOpen = false;
        
        btn.onclick = function(e) {
            e.stopPropagation();
            
            if (isOpen) {
                if (menu) menu.remove();
                isOpen = false;
                return;
            }
            
            menu = document.createElement('div');
            menu.style.cssText = `
                position: fixed;
                bottom: 80px;
                right: 20px;
                z-index: 9998;
                background: rgba(15,15,15,0.95);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(0,200,150,0.3);
                border-radius: 16px;
                padding: 6px 4px;
                min-width: 180px;
                max-height: 350px;
                overflow-y: auto;
                box-shadow: 0 20px 50px rgba(0,0,0,0.8);
            `;
            
            LANGUAGES.forEach(lang => {
                const isActive = currentLang === lang.code;
                const item = document.createElement('div');
                item.innerHTML = `
                    <span style="font-size:18px;margin-right:10px;">${lang.flag}</span>
                    <span style="font-weight:${isActive?'600':'400'};">${lang.name}</span>
                    ${isActive ? '<span style="margin-left:auto;color:#D4AF37;">✓</span>' : ''}
                `;
                item.style.cssText = `
                    display: flex;
                    align-items: center;
                    padding: 7px 14px;
                    border-radius: 12px;
                    cursor: pointer;
                    color: ${isActive ? '#D4AF37' : '#c0d0e8'};
                    background: ${isActive ? 'rgba(212,175,55,0.08)' : 'transparent'};
                    font-size: 14px;
                    font-family: 'Segoe UI', sans-serif;
                    transition: all 0.2s ease;
                `;
                
                item.onmouseenter = function() {
                    this.style.background = 'rgba(0,200,150,0.08)';
                    this.style.color = '#00C896';
                };
                item.onmouseleave = function() {
                    const active = currentLang === lang.code;
                    this.style.background = active ? 'rgba(212,175,55,0.08)' : 'transparent';
                    this.style.color = active ? '#D4AF37' : '#c0d0e8';
                };
                
                item.onclick = function(e) {
                    e.stopPropagation();
                    setLanguage(lang.code);
                    if (menu) menu.remove();
                    isOpen = false;
                };
                
                menu.appendChild(item);
            });
            
            document.body.appendChild(menu);
            isOpen = true;
        };
        
        // بستن منو با کلیک بیرون
        document.addEventListener('click', function() {
            if (menu && isOpen) {
                menu.remove();
                isOpen = false;
            }
        });
        
        document.body.appendChild(btn);
    }

    // ==================== راه‌اندازی ====================
    function init() {
        // بارگذاری زبان ذخیره شده
        const saved = localStorage.getItem('fly-lang');
        if (saved && LANGUAGES.find(l => l.code === saved)) {
            currentLang = saved;
        } else {
            // تشخیص زبان مرورگر
            const browserLang = (navigator.language || 'en').split('-')[0];
            if (LANGUAGES.find(l => l.code === browserLang)) {
                currentLang = browserLang;
            }
        }
        
        // بارگذاری ترجمه‌ها
        const hasTranslations = loadTranslations();
        
        // ساخت دکمه
        createLanguageSwitcher();
        
        // ترجمه اولیه
        if (hasTranslations) {
            translatePage(currentLang);
        }
        
        // RTL
        const isRTL = currentLang === 'fa' || currentLang === 'ar';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
        
        console.log(`✅ Language Switcher initialized (${currentLang})`);
    }

    // ==================== اجرا ====================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
