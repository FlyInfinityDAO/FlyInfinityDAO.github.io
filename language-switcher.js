// ============================================================
// Fly Infinity - Language Switcher
// کاملاً مستقل - بدون تداخل با کدهای موجود
// ============================================================

(function() {
    'use strict';

    // ==================== زبان‌های پشتیبانی شده ====================
    const LANGUAGES = [
        { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
        { code: 'zh', name: '中文', flag: '🇨🇳', dir: 'ltr' },
        { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
        { code: 'pt', name: 'Português', flag: '🇵🇹', dir: 'ltr' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
        { code: 'ar', name: 'العربية (العراق)', flag: '🇮🇶', dir: 'rtl' },
        { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
        { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩', dir: 'ltr' },
        { code: 'fa', name: 'فارسی', flag: '🇮🇷', dir: 'rtl' }
    ];

    // ==================== دیکشنری ترجمه ====================
    // اینجا تمام متن‌های سایت قرار می‌گیره
    // فعلاً فقط ساختارش رو می‌ذاریم، کم‌کم پر می‌کنیم
    const TRANSLATIONS = {
        // ===== منوی اصلی (Sidebar) =====
        'nav_dashboard': {
            en: 'Dashboard',
            zh: '仪表板',
            es: 'Panel',
            pt: 'Painel',
            ru: 'Панель',
            ar: 'لوحة التحكم',
            hi: 'डैशबोर्ड',
            tr: 'Gösterge Paneli',
            id: 'Dasbor',
            fa: 'داشبورد'
        },
        'nav_comparison': {
            en: 'Comparison',
            zh: '比较',
            es: 'Comparación',
            pt: 'Comparação',
            ru: 'Сравнение',
            ar: 'المقارنة',
            hi: 'तुलना',
            tr: 'Karşılaştırma',
            id: 'Perbandingan',
            fa: 'مقایسه'
        },
        'nav_dapp': {
            en: 'DApp',
            zh: '去中心化应用',
            es: 'DApp',
            pt: 'DApp',
            ru: 'DApp',
            ar: 'التطبيق اللامركزي',
            hi: 'DApp',
            tr: 'DApp',
            id: 'DApp',
            fa: 'دی‌اپ'
        },
        'nav_transactions': {
            en: 'Transactions',
            zh: '交易记录',
            es: 'Transacciones',
            pt: 'Transações',
            ru: 'Транзакции',
            ar: 'المعاملات',
            hi: 'लेन-देन',
            tr: 'İşlemler',
            id: 'Transaksi',
            fa: 'تراکنش‌ها'
        },
        'nav_privacy': {
            en: 'Privacy',
            zh: '隐私政策',
            es: 'Privacidad',
            pt: 'Privacidade',
            ru: 'Конфиденциальность',
            ar: 'الخصوصية',
            hi: 'गोपनीयता',
            tr: 'Gizlilik',
            id: 'Privasi',
            fa: 'حریم خصوصی'
        },
        'nav_warnings': {
            en: 'Warnings',
            zh: '警告',
            es: 'Advertencias',
            pt: 'Avisos',
            ru: 'Предупреждения',
            ar: 'تحذيرات',
            hi: 'चेतावनी',
            tr: 'Uyarılar',
            id: 'Peringatan',
            fa: 'هشدارها'
        },
        'nav_faq': {
            en: 'FAQ',
            zh: '常见问题',
            es: 'Preguntas Frecuentes',
            pt: 'Perguntas Frequentes',
            ru: 'Часто задаваемые вопросы',
            ar: 'الأسئلة الشائعة',
            hi: 'सामान्य प्रश्न',
            tr: 'SSS',
            id: 'FAQ',
            fa: 'سوالات متداول'
        },
        'nav_whitepaper': {
            en: 'White Paper',
            zh: '白皮书',
            es: 'Libro Blanco',
            pt: 'Whitepaper',
            ru: 'Белая книга',
            ar: 'الورقة البيضاء',
            hi: 'श्वेत पत्र',
            tr: 'Beyaz Kitap',
            id: 'Whitepaper',
            fa: 'سفیدنامه'
        },

        // ===== هدر و فوتر =====
        'site_title': {
            en: 'Fly Infinity DAO',
            zh: 'Fly Infinity DAO',
            es: 'Fly Infinity DAO',
            pt: 'Fly Infinity DAO',
            ru: 'Fly Infinity DAO',
            ar: 'Fly Infinity DAO',
            hi: 'Fly Infinity DAO',
            tr: 'Fly Infinity DAO',
            id: 'Fly Infinity DAO',
            fa: 'Fly Infinity DAO'
        },
        'footer_tagline': {
            en: 'Decentralized. Transparent. Forever Rising.',
            zh: '去中心化。透明。永远上涨。',
            es: 'Descentralizado. Transparente. Siempre en ascenso.',
            pt: 'Descentralizado. Transparente. Sempre em alta.',
            ru: 'Децентрализованно. Прозрачно. Вечно растущий.',
            ar: 'لامركزي. شفاف. يرتفع للأبد.',
            hi: 'विकेन्द्रीकृत। पारदर्शी। हमेशा बढ़ता हुआ।',
            tr: 'Merkeziyetsiz. Şeffaf. Sonsuza Kadar Yükselen.',
            id: 'Terdesentralisasi. Transparan. Selalu Naik.',
            fa: 'غیرمتمرکز. شفاف. همیشه در حال رشد.'
        },

        // ===== صفحه اصلی (Dashboard) =====
        'dashboard_title': {
            en: 'Fly Infinity Token (FIT)',
            zh: 'Fly Infinity 代币 (FIT)',
            es: 'Fly Infinity Token (FIT)',
            pt: 'Fly Infinity Token (FIT)',
            ru: 'Fly Infinity Token (FIT)',
            ar: 'رمز Fly Infinity (FIT)',
            hi: 'Fly Infinity टोकन (FIT)',
            tr: 'Fly Infinity Token (FIT)',
            id: 'Fly Infinity Token (FIT)',
            fa: 'توکن Fly Infinity (FIT)'
        },
        'chain_badge': {
            en: '🛡️ BNB Smart Chain (BSC) Mainnet',
            zh: '🛡️ BNB智能链（BSC）主网',
            es: '🛡️ BNB Smart Chain (BSC) Mainnet',
            pt: '🛡️ BNB Smart Chain (BSC) Mainnet',
            ru: '🛡️ BNB Smart Chain (BSC) Mainnet',
            ar: '🛡️ سلسلة BNB الذكية (BSC) الشبكة الرئيسية',
            hi: '🛡️ BNB स्मार्ट चेन (BSC) मेननेट',
            tr: '🛡️ BNB Akıllı Zincir (BSC) Ana Ağı',
            id: '🛡️ BNB Smart Chain (BSC) Mainnet',
            fa: '🛡️ شبکه اصلی BNB Smart Chain (BSC)'
        },
        'current_price_label': {
            en: 'Current Price',
            zh: '当前价格',
            es: 'Precio Actual',
            pt: 'Preço Atual',
            ru: 'Текущая цена',
            ar: 'السعر الحالي',
            hi: 'वर्तमान मूल्य',
            tr: 'Güncel Fiyat',
            id: 'Harga Saat Ini',
            fa: 'قیمت فعلی'
        },
        'token_stats': {
            en: 'Token Statistics',
            zh: '代币统计',
            es: 'Estadísticas del Token',
            pt: 'Estatísticas do Token',
            ru: 'Статистика токена',
            ar: 'إحصائيات الرمز',
            hi: 'टोकन आँकड़े',
            tr: 'Token İstatistikleri',
            id: 'Statistik Token',
            fa: 'آمار توکن'
        },
        'stat_total_supply': {
            en: 'Total Supply',
            zh: '总供应量',
            es: 'Suministro Total',
            pt: 'Oferta Total',
            ru: 'Общее предложение',
            ar: 'إجمالي العرض',
            hi: 'कुल आपूर्ति',
            tr: 'Toplam Arz',
            id: 'Total Pasokan',
            fa: 'کل عرضه'
        },
        'stat_reserve': {
            en: '$ Reserve',
            zh: '储备金',
            es: 'Reserva $',
            pt: 'Reserva $',
            ru: 'Резерв $',
            ar: 'الاحتياطي $',
            hi: 'रिजर्व $',
            tr: 'Rezerv $',
            id: 'Cadangan $',
            fa: 'ذخیره $'
        },
        'stat_market_cap': {
            en: 'Market Cap ($)',
            zh: '市值 ($)',
            es: 'Capitalización de Mercado ($)',
            pt: 'Capitalização de Mercado ($)',
            ru: 'Рыночная капитализация ($)',
            ar: 'القيمة السوقية ($)',
            hi: 'बाजार पूंजीकरण ($)',
            tr: 'Piyasa Değeri ($)',
            id: 'Kapitalisasi Pasar ($)',
            fa: 'ارزش بازار ($)'
        },
        'stat_holders': {
            en: 'Total Holders',
            zh: '持有者总数',
            es: 'Total de Titulares',
            pt: 'Total de Titulares',
            ru: 'Всего держателей',
            ar: 'إجمالي الحاملين',
            hi: 'कुल धारक',
            tr: 'Toplam Sahipler',
            id: 'Total Pemegang',
            fa: 'کل دارندگان'
        },
        'contract_address_label': {
            en: '📜 Contract Address',
            zh: '📜 合约地址',
            es: '📜 Dirección del Contrato',
            pt: '📜 Endereço do Contrato',
            ru: '📜 Адрес контракта',
            ar: '📜 عنوان العقد',
            hi: '📜 अनुबंध पता',
            tr: '📜 Sözleşme Adresi',
            id: '📜 Alamat Kontrak',
            fa: '📜 آدرس قرارداد'
        },
        'pricing_formula_label': {
            en: '💰 Pricing Formula',
            zh: '💰 定价公式',
            es: '💰 Fórmula de Precios',
            pt: '💰 Fórmula de Preços',
            ru: '💰 Формула цены',
            ar: '💰 صيغة التسعير',
            hi: '💰 मूल्य निर्धारण सूत्र',
            tr: '💰 Fiyatlandırma Formülü',
            id: '💰 Rumus Harga',
            fa: '💰 فرمول قیمت‌گذاری'
        },
        'pricing_formula_text': {
            en: 'Price = Reserve / Total Supply',
            zh: '价格 = 储备金 / 总供应量',
            es: 'Precio = Reserva / Suministro Total',
            pt: 'Preço = Reserva / Oferta Total',
            ru: 'Цена = Резерв / Общее предложение',
            ar: 'السعر = الاحتياطي / إجمالي العرض',
            hi: 'मूल्य = रिजर्व / कुल आपूर्ति',
            tr: 'Fiyat = Rezerv / Toplam Arz',
            id: 'Harga = Cadangan / Total Pasokan',
            fa: 'قیمت = ذخیره / کل عرضه'
        },

        // ===== دکمه‌های اقدام =====
        'btn_bscscan': {
            en: 'BscScan',
            zh: 'BscScan',
            es: 'BscScan',
            pt: 'BscScan',
            ru: 'BscScan',
            ar: 'BscScan',
            hi: 'BscScan',
            tr: 'BscScan',
            id: 'BscScan',
            fa: 'BscScan'
        },
        'btn_whitepaper': {
            en: 'Whitepaper',
            zh: '白皮书',
            es: 'Whitepaper',
            pt: 'Whitepaper',
            ru: 'Белая книга',
            ar: 'الورقة البيضاء',
            hi: 'श्वेत पत्र',
            tr: 'Beyaz Kitap',
            id: 'Whitepaper',
            fa: 'سفیدنامه'
        },
        'btn_buy_shares': {
            en: 'Buy Ownership Shares & FIT',
            zh: '购买所有权份额和FIT',
            es: 'Comprar Acciones de Propiedad y FIT',
            pt: 'Comprar Ações de Propriedade e FIT',
            ru: 'Купить доли владения и FIT',
            ar: 'شراء حصص الملكية و FIT',
            hi: 'स्वामित्व शेयर और FIT खरीदें',
            tr: 'Sahiplik Hisseleri ve FIT Satın Al',
            id: 'Beli Saham Kepemilikan dan FIT',
            fa: 'خرید سهام مالکیت و FIT'
        },

        // ===== چارت =====
        'chart_title': {
            en: '📈 Daily price chart ($ per FIT)',
            zh: '📈 每日价格图表（每FIT美元）',
            es: '📈 Gráfico de precios diario ($ por FIT)',
            pt: '📈 Gráfico de preços diário ($ por FIT)',
            ru: '📈 Ежедневный график цен ($ за FIT)',
            ar: '📈 مخطط الأسعار اليومي ($ لكل FIT)',
            hi: '📈 दैनिक मूल्य चार्ट ($ प्रति FIT)',
            tr: '📈 Günlük fiyat grafiği ($ / FIT)',
            id: '📈 Grafik harga harian ($ per FIT)',
            fa: '📈 نمودار قیمت روزانه (دلار به ازای هر FIT)'
        },

        // ===== تغییرات قیمت تاریخی =====
        'historical_changes': {
            en: 'Historical Price Changes',
            zh: '历史价格变化',
            es: 'Cambios Históricos de Precios',
            pt: 'Alterações Históricas de Preços',
            ru: 'Исторические изменения цен',
            ar: 'التغيرات التاريخية في الأسعار',
            hi: 'ऐतिहासिक मूल्य परिवर्तन',
            tr: 'Tarihsel Fiyat Değişiklikleri',
            id: 'Perubahan Harga Historis',
            fa: 'تغییرات قیمت تاریخی'
        },
        'period_24h': {
            en: '24h Ago',
            zh: '24小时前',
            es: 'Hace 24h',
            pt: '24h atrás',
            ru: '24ч назад',
            ar: 'قبل 24 ساعة',
            hi: '24 घंटे पहले',
            tr: '24s önce',
            id: '24 jam lalu',
            fa: '۲۴ ساعت پیش'
        },
        'period_7d': {
            en: '7 Days Ago',
            zh: '7天前',
            es: 'Hace 7 Días',
            pt: '7 Dias Atrás',
            ru: '7 дней назад',
            ar: 'قبل 7 أيام',
            hi: '7 दिन पहले',
            tr: '7 gün önce',
            id: '7 hari lalu',
            fa: '۷ روز پیش'
        },
        'period_30d': {
            en: '30 Days Ago',
            zh: '30天前',
            es: 'Hace 30 Días',
            pt: '30 Dias Atrás',
            ru: '30 дней назад',
            ar: 'قبل 30 يومًا',
            hi: '30 दिन पहले',
            tr: '30 gün önce',
            id: '30 hari lalu',
            fa: '۳۰ روز پیش'
        },
        'period_90d': {
            en: '90 Days Ago',
            zh: '90天前',
            es: 'Hace 90 Días',
            pt: '90 Dias Atrás',
            ru: '90 дней назад',
            ar: 'قبل 90 يومًا',
            hi: '90 दिन पहले',
            tr: '90 gün önce',
            id: '90 hari lalu',
            fa: '۹۰ روز پیش'
        },
        'period_180d': {
            en: '180 Days Ago',
            zh: '180天前',
            es: 'Hace 180 Días',
            pt: '180 Dias Atrás',
            ru: '180 дней назад',
            ar: 'قبل 180 يومًا',
            hi: '180 दिन पहले',
            tr: '180 gün önce',
            id: '180 hari lalu',
            fa: '۱۸۰ روز پیش'
        },
        'period_365d': {
            en: '365 Days Ago',
            zh: '365天前',
            es: 'Hace 365 Días',
            pt: '365 Dias Atrás',
            ru: '365 дней назад',
            ar: 'قبل 365 يومًا',
            hi: '365 दिन पहले',
            tr: '365 gün önce',
            id: '365 hari lalu',
            fa: '۳۶۵ روز پیش'
        },
        'period_initial': {
            en: 'Initial Price',
            zh: '初始价格',
            es: 'Precio Inicial',
            pt: 'Preço Inicial',
            ru: 'Начальная цена',
            ar: 'السعر الأولي',
            hi: 'प्रारंभिक मूल्य',
            tr: 'Başlangıç Fiyatı',
            id: 'Harga Awal',
            fa: 'قیمت اولیه'
        },

        // ===== دکمه مقایسه =====
        'comparison_title': {
            en: 'Comparison With Other Crypto',
            zh: '与其他加密货币比较',
            es: 'Comparación con Otras Criptomonedas',
            pt: 'Comparação com Outras Criptomoedas',
            ru: 'Сравнение с другими криптовалютами',
            ar: 'المقارنة مع العملات المشفرة الأخرى',
            hi: 'अन्य क्रिप्टो के साथ तुलना',
            tr: 'Diğer Kriptolarla Karşılaştırma',
            id: 'Perbandingan dengan Kripto Lain',
            fa: 'مقایسه با سایر ارزهای دیجیتال'
        },
        'comparison_sub': {
            en: 'Compare FIT price with Bitcoin, Ethereum, BNB and other cryptocurrencies',
            zh: '将FIT价格与比特币、以太坊、BNB和其他加密货币进行比较',
            es: 'Compare el precio de FIT con Bitcoin, Ethereum, BNB y otras criptomonedas',
            pt: 'Compare o preço da FIT com Bitcoin, Ethereum, BNB e outras criptomoedas',
            ru: 'Сравните цену FIT с Bitcoin, Ethereum, BNB и другими криптовалютами',
            ar: 'قارن سعر FIT مع Bitcoin و Ethereum و BNB والعملات المشفرة الأخرى',
            hi: 'FIT की कीमत Bitcoin, Ethereum, BNB और अन्य क्रिप्टोकरेंसी से तुलना करें',
            tr: 'FIT fiyatını Bitcoin, Ethereum, BNB ve diğer kriptolarla karşılaştırın',
            id: 'Bandingkan harga FIT dengan Bitcoin, Ethereum, BNB dan kripto lainnya',
            fa: 'قیمت FIT را با بیت‌کوین، اتریوم، BNB و سایر ارزهای دیجیتال مقایسه کنید'
        },

        // ===== شبیه‌ساز سود =====
        'profit_simulator': {
            en: '💰 Profit Simulator',
            zh: '💰 利润模拟器',
            es: '💰 Simulador de Ganancias',
            pt: '💰 Simulador de Lucro',
            ru: '💰 Симулятор прибыли',
            ar: '💰 محاكي الربح',
            hi: '💰 लाभ सिम्युलेटर',
            tr: '💰 Kar Simülatörü',
            id: '💰 Simulator Keuntungan',
            fa: '💰 شبیه‌ساز سود'
        },
        'sim_holdings_label': {
            en: 'Your FIT Holdings',
            zh: '您的FIT持仓',
            es: 'Sus Tenencias de FIT',
            pt: 'Suas Participações em FIT',
            ru: 'Ваши активы FIT',
            ar: 'ممتلكاتك من FIT',
            hi: 'आपके FIT होल्डिंग्स',
            tr: 'FIT Varlıklarınız',
            id: 'Kepemilikan FIT Anda',
            fa: 'میزان FIT شما'
        },
        'sim_daily': {
            en: '📈 Daily: --',
            zh: '📈 每日: --',
            es: '📈 Diario: --',
            pt: '📈 Diário: --',
            ru: '📈 Ежедневно: --',
            ar: '📈 يوميًا: --',
            hi: '📈 दैनिक: --',
            tr: '📈 Günlük: --',
            id: '📈 Harian: --',
            fa: '📈 روزانه: --'
        },
        'sim_weekly': {
            en: '📊 Weekly: --',
            zh: '📊 每周: --',
            es: '📊 Semanal: --',
            pt: '📊 Semanal: --',
            ru: '📊 Еженедельно: --',
            ar: '📊 أسبوعيًا: --',
            hi: '📊 साप्ताहिक: --',
            tr: '📊 Haftalık: --',
            id: '📊 Mingguan: --',
            fa: '📊 هفتگی: --'
        },
        'sim_monthly': {
            en: '📅 Monthly: --',
            zh: '📅 每月: --',
            es: '📅 Mensual: --',
            pt: '📅 Mensal: --',
            ru: '📅 Ежемесячно: --',
            ar: '📅 شهريًا: --',
            hi: '📅 मासिक: --',
            tr: '📅 Aylık: --',
            id: '📅 Bulanan: --',
            fa: '📅 ماهانه: --'
        },
        'sim_24h': {
            en: '24h Projection',
            zh: '24小时预测',
            es: 'Proyección 24h',
            pt: 'Projeção 24h',
            ru: 'Прогноз на 24ч',
            ar: 'توقعات 24 ساعة',
            hi: '24 घंटे का अनुमान',
            tr: '24s Projeksiyon',
            id: 'Proyeksi 24 Jam',
            fa: 'پیش‌بینی ۲۴ ساعته'
        },
        'sim_7d': {
            en: '7 Days Projection',
            zh: '7天预测',
            es: 'Proyección 7 Días',
            pt: 'Projeção 7 Dias',
            ru: 'Прогноз на 7 дней',
            ar: 'توقعات 7 أيام',
            hi: '7 दिन का अनुमान',
            tr: '7 Gün Projeksiyon',
            id: 'Proyeksi 7 Hari',
            fa: 'پیش‌بینی ۷ روزه'
        },
        'sim_30d': {
            en: '30 Days Projection',
            zh: '30天预测',
            es: 'Proyección 30 Días',
            pt: 'Projeção 30 Dias',
            ru: 'Прогноз на 30 дней',
            ar: 'توقعات 30 يومًا',
            hi: '30 दिन का अनुमान',
            tr: '30 Gün Projeksiyon',
            id: 'Proyeksi 30 Hari',
            fa: 'پیش‌بینی ۳۰ روزه'
        },
        'sim_disclaimer': {
            en: '⚡ Based on past growth rates. Not financial advice.',
            zh: '⚡ 基于过去的增长率。不是财务建议。',
            es: '⚡ Basado en tasas de crecimiento pasadas. No es asesoramiento financiero.',
            pt: '⚡ Baseado em taxas de crescimento passadas. Não é aconselhamento financeiro.',
            ru: '⚡ Основано на прошлых темпах роста. Не является финансовой консультацией.',
            ar: '⚡ بناءً على معدلات النمو السابقة. ليست نصيحة مالية.',
            hi: '⚡ पिछली वृद्धि दरों पर आधारित। वित्तीय सलाह नहीं।',
            tr: '⚡ Geçmiş büyüme oranlarına dayanır. Finansal tavsiye değildir.',
            id: '⚡ Berdasarkan tingkat pertumbuhan masa lalu. Bukan nasihat keuangan.',
            fa: '⚡ بر اساس نرخ‌های رشد گذشته. توصیه مالی نیست.'
        },

        // ===== شبیه‌ساز دستی =====
        'manual_simulator': {
            en: 'Manual Profit Simulator',
            zh: '手动利润模拟器',
            es: 'Simulador Manual de Ganancias',
            pt: 'Simulador Manual de Lucro',
            ru: 'Ручной симулятор прибыли',
            ar: 'محاكي الربح اليدوي',
            hi: 'मैन्युअल लाभ सिम्युलेटर',
            tr: 'Manuel Kar Simülatörü',
            id: 'Simulator Keuntungan Manual',
            fa: 'شبیه‌ساز دستی سود'
        },
        'manual_sub': {
            en: 'Calculate your potential profit based on daily price increase',
            zh: '根据每日价格上涨计算您的潜在利润',
            es: 'Calcule su beneficio potencial basado en el aumento diario de precios',
            pt: 'Calcule seu lucro potencial com base no aumento diário de preços',
            ru: 'Рассчитайте потенциальную прибыль на основе ежедневного роста цен',
            ar: 'احسب أرباحك المحتملة بناءً على زيادة الأسعار اليومية',
            hi: 'दैनिक मूल्य वृद्धि के आधार पर अपने संभावित लाभ की गणना करें',
            tr: 'Günlük fiyat artışına göre potansiyel karınızı hesaplayın',
            id: 'Hitung potensi keuntungan Anda berdasarkan kenaikan harga harian',
            fa: 'سود بالقوه خود را بر اساس افزایش قیمت روزانه محاسبه کنید'
        },
        'manual_daily_increase': {
            en: '📈 Daily Price Increase ($)',
            zh: '📈 每日价格上涨 ($)',
            es: '📈 Aumento Diario de Precios ($)',
            pt: '📈 Aumento Diário de Preços ($)',
            ru: '📈 Ежедневное увеличение цены ($)',
            ar: '📈 زيادة الأسعار اليومية ($)',
            hi: '📈 दैनिक मूल्य वृद्धि ($)',
            tr: '📈 Günlük Fiyat Artışı ($)',
            id: '📈 Kenaikan Harga Harian ($)',
            fa: '📈 افزایش قیمت روزانه (دلار)'
        },
        'manual_daily_profit': {
            en: '📅 Daily Profit',
            zh: '📅 每日利润',
            es: '📅 Ganancia Diaria',
            pt: '📅 Lucro Diário',
            ru: '📅 Ежедневная прибыль',
            ar: '📅 الربح اليومي',
            hi: '📅 दैनिक लाभ',
            tr: '📅 Günlük Kar',
            id: '📅 Keuntungan Harian',
            fa: '📅 سود روزانه'
        },
        'manual_weekly_profit': {
            en: '📊 Weekly Profit (7 Days)',
            zh: '📊 每周利润（7天）',
            es: '📊 Ganancia Semanal (7 Días)',
            pt: '📊 Lucro Semanal (7 Dias)',
            ru: '📊 Еженедельная прибыль (7 дней)',
            ar: '📊 الربح الأسبوعي (7 أيام)',
            hi: '📊 साप्ताहिक लाभ (7 दिन)',
            tr: '📊 Haftalık Kar (7 Gün)',
            id: '📊 Keuntungan Mingguan (7 Hari)',
            fa: '📊 سود هفتگی (۷ روز)'
        },
        'manual_monthly_profit': {
            en: '📅 Monthly Profit (30 Days)',
            zh: '📅 每月利润（30天）',
            es: '📅 Ganancia Mensual (30 Días)',
            pt: '📅 Lucro Mensal (30 Dias)',
            ru: '📅 Ежемесячная прибыль (30 дней)',
            ar: '📅 الربح الشهري (30 يومًا)',
            hi: '📅 मासिक लाभ (30 दिन)',
            tr: '📅 Aylık Kar (30 Gün)',
            id: '📅 Keuntungan Bulanan (30 Hari)',
            fa: '📅 سود ماهانه (۳۰ روز)'
        },
        'btn_calculate': {
            en: 'Calculate',
            zh: '计算',
            es: 'Calcular',
            pt: 'Calcular',
            ru: 'Рассчитать',
            ar: 'احسب',
            hi: 'गणना करें',
            tr: 'Hesapla',
            id: 'Hitung',
            fa: 'محاسبه'
        },

        // ===== ماشین حساب کارمزد =====
        'fee_calculator': {
            en: 'Fee Calculator (Buy: 3% | Sell: 6%)',
            zh: '费用计算器（买入：3% | 卖出：6%）',
            es: 'Calculadora de Tarifas (Comprar: 3% | Vender: 6%)',
            pt: 'Calculadora de Taxas (Comprar: 3% | Vender: 6%)',
            ru: 'Калькулятор комиссий (Покупка: 3% | Продажа: 6%)',
            ar: 'حاسبة الرسوم (شراء: 3% | بيع: 6%)',
            hi: 'शुल्क कैलकुलेटर (खरीद: 3% | बेच: 6%)',
            tr: 'Ücret Hesaplayıcı (Alım: 3% | Satım: 6%)',
            id: 'Kalkulator Biaya (Beli: 3% | Jual: 6%)',
            fa: 'ماشین حساب کارمزد (خرید: ۳٪ | فروش: ۶٪)'
        },
        'fee_buy_calc': {
            en: 'Buy Calculator',
            zh: '购买计算器',
            es: 'Calculadora de Compra',
            pt: 'Calculadora de Compra',
            ru: 'Калькулятор покупки',
            ar: 'حاسبة الشراء',
            hi: 'खरीद कैलकुलेटर',
            tr: 'Alım Hesaplayıcı',
            id: 'Kalkulator Beli',
            fa: 'ماشین حساب خرید'
        },
        'fee_sell_calc': {
            en: 'Sell Calculator',
            zh: '出售计算器',
            es: 'Calculadora de Venta',
            pt: 'Calculadora de Venda',
            ru: 'Калькулятор продажи',
            ar: 'حاسبة البيع',
            hi: 'बेच कैलकुलेटर',
            tr: 'Satım Hesaplayıcı',
            id: 'Kalkulator Jual',
            fa: 'ماشین حساب فروش'
        },
        'fee_amount_usd': {
            en: '💰 Amount (USD)',
            zh: '💰 金额 (USD)',
            es: '💰 Cantidad (USD)',
            pt: '💰 Quantia (USD)',
            ru: '💰 Сумма (USD)',
            ar: '💰 المبلغ (USD)',
            hi: '💰 राशि (USD)',
            tr: '💰 Tutar (USD)',
            id: '💰 Jumlah (USD)',
            fa: '💰 مبلغ (دلار)'
        },
        'fee_amount_fit': {
            en: '🪙 Amount (FIT)',
            zh: '🪙 数量 (FIT)',
            es: '🪙 Cantidad (FIT)',
            pt: '🪙 Quantia (FIT)',
            ru: '🪙 Количество (FIT)',
            ar: '🪙 المبلغ (FIT)',
            hi: '🪙 राशि (FIT)',
            tr: '🪙 Tutar (FIT)',
            id: '🪙 Jumlah (FIT)',
            fa: '🪙 مقدار (FIT)'
        },
        'fee_you_receive': {
            en: 'You will receive',
            zh: '您将收到',
            es: 'Recibirás',
            pt: 'Você receberá',
            ru: 'Вы получите',
            ar: 'ستتلقى',
            hi: 'आपको प्राप्त होगा',
            tr: 'Alacaksınız',
            id: 'Anda akan menerima',
            fa: 'دریافت خواهید کرد'
        },
        'fee_breakdown': {
            en: 'Fee: {fee}% | You get: ${amount} worth of FIT',
            zh: '费用：{fee}% | 您将获得价值${amount}的FIT',
            es: 'Tarifa: {fee}% | Obtienes: ${amount} en FIT',
            pt: 'Taxa: {fee}% | Você recebe: ${amount} em FIT',
            ru: 'Комиссия: {fee}% | Вы получаете: ${amount} в FIT',
            ar: 'الرسوم: {fee}% | تحصل على: ${amount} من FIT',
            hi: 'शुल्क: {fee}% | आपको ${amount} मूल्य का FIT मिलता है',
            tr: 'Ücret: {fee}% | ${amount} değerinde FIT alırsınız',
            id: 'Biaya: {fee}% | Anda mendapatkan FIT senilai ${amount}',
            fa: 'کارمزد: {fee}٪ | FIT به ارزش ${amount} دریافت می‌کنید'
        },
        'fee_current_price': {
            en: 'Current Price: ${price} USD',
            zh: '当前价格：${price} USD',
            es: 'Precio Actual: ${price} USD',
            pt: 'Preço Atual: ${price} USD',
            ru: 'Текущая цена: ${price} USD',
            ar: 'السعر الحالي: ${price} USD',
            hi: 'वर्तमान मूल्य: ${price} USD',
            tr: 'Güncel Fiyat: ${price} USD',
            id: 'Harga Saat Ini: ${price} USD',
            fa: 'قیمت فعلی: ${price} دلار'
        },

        // ===== خریدار FIT =====
        'purchase_calculator': {
            en: 'FIT Purchase Calculator',
            zh: 'FIT购买计算器',
            es: 'Calculadora de Compra de FIT',
            pt: 'Calculadora de Compra de FIT',
            ru: 'Калькулятор покупки FIT',
            ar: 'حاسبة شراء FIT',
            hi: 'FIT खरीद कैलकुलेटर',
            tr: 'FIT Alım Hesaplayıcı',
            id: 'Kalkulator Pembelian FIT',
            fa: 'ماشین حساب خرید FIT'
        },
        'purchase_sub': {
            en: 'Calculate required ownership shares based on Double Infinity network plan + Estimated Rewards for ALL shares',
            zh: '根据Double Infinity网络计划计算所需的所有权份额 + 所有份额的估计奖励',
            es: 'Calcule las acciones de propiedad requeridas según el plan de red Double Infinity + Recompensas estimadas para TODAS las acciones',
            pt: 'Calcule as ações de propriedade necessárias com base no plano de rede Double Infinity + Recompensas estimadas para TODAS as ações',
            ru: 'Рассчитайте необходимые доли владения на основе плана сети Double Infinity + Оценочные вознаграждения для ВСЕХ долей',
            ar: 'احسب حصص الملكية المطلوبة بناءً على خطة شبكة Double Infinity + المكافآت المقدرة لجميع الحصص',
            hi: 'Double Infinity नेटवर्क योजना के आधार पर आवश्यक स्वामित्व शेयरों की गणना करें + सभी शेयरों के लिए अनुमानित पुरस्कार',
            tr: 'Double Infinity ağ planına göre gerekli sahiplik hisselerini hesaplayın + TÜM hisseler için tahmini ödüller',
            id: 'Hitung saham kepemilikan yang diperlukan berdasarkan rencana jaringan Double Infinity + Perkiraan Hadiah untuk SEMUA saham',
            fa: 'محاسبه سهام مالکیت مورد نیاز بر اساس طرح شبکه Double Infinity + پاداش تخمینی برای تمام سهام'
        },
        'purchase_fit_amount': {
            en: '🪙 FIT Amount to Buy',
            zh: '🪙 要购买的FIT数量',
            es: '🪙 Cantidad de FIT a Comprar',
            pt: '🪙 Quantidade de FIT para Comprar',
            ru: '🪙 Количество FIT для покупки',
            ar: '🪙 كمية FIT للشراء',
            hi: '🪙 खरीदने के लिए FIT की मात्रा',
            tr: '🪙 Alınacak FIT Miktarı',
            id: '🪙 Jumlah FIT yang Akan Dibeli',
            fa: '🪙 مقدار FIT برای خرید'
        },
        'purchase_fit_price': {
            en: '💰 Current FIT Price (DAI)',
            zh: '💰 当前FIT价格 (DAI)',
            es: '💰 Precio Actual de FIT (DAI)',
            pt: '💰 Preço Atual do FIT (DAI)',
            ru: '💰 Текущая цена FIT (DAI)',
            ar: '💰 سعر FIT الحالي (DAI)',
            hi: '💰 वर्तमान FIT मूल्य (DAI)',
            tr: '💰 Güncel FIT Fiyatı (DAI)',
            id: '💰 Harga FIT Saat Ini (DAI)',
            fa: '💰 قیمت فعلی FIT (DAI)'
        },
        'purchase_share_cost': {
            en: '💎 Ownership Share Cost (DAI)',
            zh: '💎 所有权份额成本 (DAI)',
            es: '💎 Costo de Acción de Propiedad (DAI)',
            pt: '💎 Custo da Ação de Propriedade (DAI)',
            ru: '💎 Стоимость доли владения (DAI)',
            ar: '💎 تكلفة حصة الملكية (DAI)',
            hi: '💎 स्वामित्व शेयर लागत (DAI)',
            tr: '💎 Sahiplik Hissesi Maliyeti (DAI)',
            id: '💎 Biaya Saham Kepemilikan (DAI)',
            fa: '💎 هزینه سهم مالکیت (DAI)'
        },
        'purchase_reward_per_point': {
            en: '💰 Reward Value Per Point ($)',
            zh: '💰 每点奖励价值 ($)',
            es: '💰 Valor de Recompensa por Punto ($)',
            pt: '💰 Valor de Recompensa por Ponto ($)',
            ru: '💰 Стоимость вознаграждения за балл ($)',
            ar: '💰 قيمة المكافأة لكل نقطة ($)',
            hi: '💰 प्रति प्वाइंट पुरस्कार मूल्य ($)',
            tr: '💰 Puan Başına Ödül Değeri ($)',
            id: '💰 Nilai Hadiah Per Poin ($)',
            fa: '💰 ارزش پاداش به ازای هر امتیاز (دلار)'
        },
        'purchase_with_plan': {
            en: '✅ With Double Infinity Network Plan',
            zh: '✅ 使用Double Infinity网络计划',
            es: '✅ Con Plan de Red Double Infinity',
            pt: '✅ Com Plano de Rede Double Infinity',
            ru: '✅ С планом сети Double Infinity',
            ar: '✅ مع خطة شبكة Double Infinity',
            hi: '✅ Double Infinity नेटवर्क योजना के साथ',
            tr: '✅ Double Infinity Ağ Planı ile',
            id: '✅ Dengan Rencana Jaringan Double Infinity',
            fa: '✅ با طرح شبکه Double Infinity'
        },
        'purchase_without_plan': {
            en: '❌ Without Double Infinity Plan (Direct)',
            zh: '❌ 不使用Double Infinity计划（直接）',
            es: '❌ Sin Plan Double Infinity (Directo)',
            pt: '❌ Sem Plano Double Infinity (Direto)',
            ru: '❌ Без плана Double Infinity (Прямой)',
            ar: '❌ بدون خطة Double Infinity (مباشر)',
            hi: '❌ Double Infinity योजना के बिना (सीधा)',
            tr: '❌ Double Infinity Planı Olmadan (Doğrudan)',
            id: '❌ Tanpa Rencana Double Infinity (Langsung)',
            fa: '❌ بدون طرح Double Infinity (مستقیم)'
        },
        'purchase_required_shares': {
            en: 'Required Shares',
            zh: '所需份额',
            es: 'Acciones Requeridas',
            pt: 'Ações Necessárias',
            ru: 'Требуемые доли',
            ar: 'الحصص المطلوبة',
            hi: 'आवश्यक शेयर',
            tr: 'Gerekli Hisseler',
            id: 'Saham yang Diperlukan',
            fa: 'سهام مورد نیاز'
        },
        'purchase_total_cost': {
            en: 'Total Cost for Shares (DAI)',
            zh: '份额总成本 (DAI)',
            es: 'Costo Total de Acciones (DAI)',
            pt: 'Custo Total das Ações (DAI)',
            ru: 'Общая стоимость долей (DAI)',
            ar: 'التكلفة الإجمالية للحصص (DAI)',
            hi: 'शेयरों की कुल लागत (DAI)',
            tr: 'Hisselerin Toplam Maliyeti (DAI)',
            id: 'Total Biaya Saham (DAI)',
            fa: 'هزینه کل سهام (DAI)'
        },
        'purchase_fit_received': {
            en: 'FIT Received (after 3% fee)',
            zh: '收到的FIT（扣除3%费用后）',
            es: 'FIT Recibido (después de tarifa del 3%)',
            pt: 'FIT Recebido (após taxa de 3%)',
            ru: 'FIT получено (после комиссии 3%)',
            ar: 'FIT المستلم (بعد رسوم 3%)',
            hi: 'प्राप्त FIT (3% शुल्क के बाद)',
            tr: 'Alınan FIT (%3 ücret sonrası)',
            id: 'FIT Diterima (setelah biaya 3%)',
            fa: 'FIT دریافت شده (پس از کارمزد ۳٪)'
        },
        'purchase_max_cap': {
            en: 'Max Purchase Cap (DAI)',
            zh: '最大购买限额 (DAI)',
            es: 'Límite Máximo de Compra (DAI)',
            pt: 'Limite Máximo de Compra (DAI)',
            ru: 'Максимальный лимит покупки (DAI)',
            ar: 'الحد الأقصى للشراء (DAI)',
            hi: 'अधिकतम खरीद सीमा (DAI)',
            tr: 'Maksimum Alım Limiti (DAI)',
            id: 'Batas Pembelian Maksimum (DAI)',
            fa: 'حداکثر سقف خرید (DAI)'
        },
        'purchase_min_side': {
            en: 'Min Side (members)',
            zh: '最小分支（成员）',
            es: 'Lado Mínimo (miembros)',
            pt: 'Lado Mínimo (membros)',
            ru: 'Минимальная сторона (участники)',
            ar: 'الحد الأدنى للجانب (الأعضاء)',
            hi: 'न्यूनतम पक्ष (सदस्य)',
            tr: 'Min Taraf (üyeler)',
            id: 'Sisi Minimal (anggota)',
            fa: 'حداقل سمت (اعضا)'
        },
        'purchase_total_cost_with': {
            en: 'Total Cost (Shares + FIT)',
            zh: '总成本（份额 + FIT）',
            es: 'Costo Total (Acciones + FIT)',
            pt: 'Custo Total (Ações + FIT)',
            ru: 'Общая стоимость (Доли + FIT)',
            ar: 'التكلفة الإجمالية (الحصص + FIT)',
            hi: 'कुल लागत (शेयर + FIT)',
            tr: 'Toplam Maliyet (Hisseler + FIT)',
            id: 'Total Biaya (Saham + FIT)',
            fa: 'هزینه کل (سهام + FIT)'
        },
        'purchase_rewards': {
            en: 'Estimated Rewards (All Shares)',
            zh: '估计奖励（所有份额）',
            es: 'Recompensas Estimadas (Todas las Acciones)',
            pt: 'Recompensas Estimadas (Todas as Ações)',
            ru: 'Оценочные вознаграждения (Все доли)',
            ar: 'المكافآت المقدرة (جميع الحصص)',
            hi: 'अनुमानित पुरस्कार (सभी शेयर)',
            tr: 'Tahmini Ödüller (Tüm Hisseler)',
            id: 'Perkiraan Hadiah (Semua Saham)',
            fa: 'پاداش تخمینی (تمام سهام)'
        },
        'purchase_reward_points': {
            en: 'Total Reward Points',
            zh: '总奖励积分',
            es: 'Puntos de Recompensa Totales',
            pt: 'Pontos de Recompensa Totais',
            ru: 'Общее количество баллов вознаграждения',
            ar: 'إجمالي نقاط المكافأة',
            hi: 'कुल पुरस्कार अंक',
            tr: 'Toplam Ödül Puanı',
            id: 'Total Poin Hadiah',
            fa: 'کل امتیازات پاداش'
        },
        'purchase_reward_per': {
            en: 'Reward Per Point ($)',
            zh: '每点奖励 ($)',
            es: 'Recompensa por Punto ($)',
            pt: 'Recompensa por Ponto ($)',
            ru: 'Вознаграждение за балл ($)',
            ar: 'المكافأة لكل نقطة ($)',
            hi: 'प्रति प्वाइंट पुरस्कार ($)',
            tr: 'Puan Başına Ödül ($)',
            id: 'Hadiah Per Poin ($)',
            fa: 'پاداش به ازای هر امتیاز (دلار)'
        },
        'purchase_total_reward': {
            en: 'Total Estimated Reward ($)',
            zh: '估计总奖励 ($)',
            es: 'Recompensa Total Estimada ($)',
            pt: 'Recompensa Total Estimada ($)',
            ru: 'Общая оценочная награда ($)',
            ar: 'إجمالي المكافأة المقدرة ($)',
            hi: 'कुल अनुमानित पुरस्कार ($)',
            tr: 'Toplam Tahmini Ödül ($)',
            id: 'Total Perkiraan Hadiah ($)',
            fa: 'کل پاداش تخمینی (دلار)'
        },
        'purchase_savings': {
            en: '💰 Save {amount} DAI with Double Infinity Plan!',
            zh: '💰 使用Double Infinity计划节省{amount} DAI！',
            es: '💰 ¡Ahorra {amount} DAI con el Plan Double Infinity!',
            pt: '💰 Economize {amount} DAI com o Plano Double Infinity!',
            ru: '💰 Экономьте {amount} DAI с планом Double Infinity!',
            ar: '💰 وفر {amount} DAI مع خطة Double Infinity!',
            hi: '💰 Double Infinity योजना के साथ {amount} DAI बचाएं!',
            tr: '💰 Double Infinity Planı ile {amount} DAI tasarruf edin!',
            id: '💰 Hemat {amount} DAI dengan Rencana Double Infinity!',
            fa: '💰 با طرح Double Infinity {amount} DAI صرفه‌جویی کنید!'
        },
        'purchase_reward_bonus': {
            en: '🎁 Earn ${amount} in Rewards with Double Infinity Plan!',
            zh: '🎁 使用Double Infinity计划赚取${amount}奖励！',
            es: '🎁 ¡Gana ${amount} en Recompensas con el Plan Double Infinity!',
            pt: '🎁 Ganhe ${amount} em Recompensas com o Plano Double Infinity!',
            ru: '🎁 Заработайте ${amount} в виде вознаграждений с планом Double Infinity!',
            ar: '🎁 اكسب ${amount} في المكافآت مع خطة Double Infinity!',
            hi: '🎁 Double Infinity योजना के साथ ${amount} पुरस्कार अर्जित करें!',
            tr: '🎁 Double Infinity Planı ile ${amount} Ödül kazanın!',
            id: '🎁 Dapatkan ${amount} Hadiah dengan Rencana Double Infinity!',
            fa: '🎁 با طرح Double Infinity ${amount} پاداش کسب کنید!'
        },

        // ===== مقایسه (Comparison) =====
        'compare_title': {
            en: 'Live Price Comparison Table',
            zh: '实时价格对比表',
            es: 'Tabla de Comparación de Precios en Vivo',
            pt: 'Tabela de Comparação de Preços ao Vivo',
            ru: 'Таблица сравнения цен в реальном времени',
            ar: 'جدول مقارنة الأسعار المباشرة',
            hi: 'लाइव मूल्य तुलना तालिका',
            tr: 'Canlı Fiyat Karşılaştırma Tablosu',
            id: 'Tabel Perbandingan Harga Langsung',
            fa: 'جدول مقایسه قیمت لحظه‌ای'
        },
        'compare_sub': {
            en: 'Real-time price changes over the last 24 hours',
            zh: '过去24小时的实时价格变化',
            es: 'Cambios de precios en tiempo real en las últimas 24 horas',
            pt: 'Alterações de preços em tempo real nas últimas 24 horas',
            ru: 'Изменения цен в реальном времени за последние 24 часа',
            ar: 'تغيرات الأسعار في الوقت الفعلي خلال الـ 24 ساعة الماضية',
            hi: 'पिछले 24 घंटों में वास्तविक समय मूल्य परिवर्तन',
            tr: 'Son 24 saatteki gerçek zamanlı fiyat değişiklikleri',
            id: 'Perubahan harga real-time selama 24 jam terakhir',
            fa: 'تغییرات قیمت لحظه‌ای در ۲۴ ساعت گذشته'
        },
        'compare_table_coin': {
            en: 'Coin',
            zh: '币种',
            es: 'Moneda',
            pt: 'Moeda',
            ru: 'Монета',
            ar: 'العملة',
            hi: 'सिक्का',
            tr: 'Coin',
            id: 'Koin',
            fa: 'ارز'
        },
        'compare_table_price_24h': {
            en: 'Price (24h Ago)',
            zh: '价格（24小时前）',
            es: 'Precio (hace 24h)',
            pt: 'Preço (24h atrás)',
            ru: 'Цена (24ч назад)',
            ar: 'السعر (قبل 24 ساعة)',
            hi: 'मूल्य (24 घंटे पहले)',
            tr: 'Fiyat (24s önce)',
            id: 'Harga (24 jam lalu)',
            fa: 'قیمت (۲۴ ساعت پیش)'
        },
        'compare_table_current': {
            en: 'Current Price',
            zh: '当前价格',
            es: 'Precio Actual',
            pt: 'Preço Atual',
            ru: 'Текущая цена',
            ar: 'السعر الحالي',
            hi: 'वर्तमान मूल्य',
            tr: 'Güncel Fiyat',
            id: 'Harga Saat Ini',
            fa: 'قیمت فعلی'
        },
        'compare_table_change': {
            en: '24h Change',
            zh: '24小时变化',
            es: 'Cambio 24h',
            pt: 'Mudança 24h',
            ru: 'Изменение за 24ч',
            ar: 'التغيير خلال 24 ساعة',
            hi: '24 घंटे का परिवर्तन',
            tr: '24s Değişim',
            id: 'Perubahan 24 Jam',
            fa: 'تغییر ۲۴ ساعته'
        },
        'compare_history_today': {
            en: 'Today',
            zh: '今天',
            es: 'Hoy',
            pt: 'Hoje',
            ru: 'Сегодня',
            ar: 'اليوم',
            hi: 'आज',
            tr: 'Bugün',
            id: 'Hari Ini',
            fa: 'امروز'
        },
        'compare_history_yesterday': {
            en: 'Yesterday',
            zh: '昨天',
            es: 'Ayer',
            pt: 'Ontem',
            ru: 'Вчера',
            ar: 'أمس',
            hi: 'कल',
            tr: 'Dün',
            id: 'Kemarin',
            fa: 'دیروز'
        },
        'compare_history_7d': {
            en: '7 Days Ago',
            zh: '7天前',
            es: 'Hace 7 Días',
            pt: '7 Dias Atrás',
            ru: '7 дней назад',
            ar: 'قبل 7 أيام',
            hi: '7 दिन पहले',
            tr: '7 gün önce',
            id: '7 hari lalu',
            fa: '۷ روز پیش'
        },
        'compare_history_14d': {
            en: '14 Days Ago',
            zh: '14天前',
            es: 'Hace 14 Días',
            pt: '14 Dias Atrás',
            ru: '14 дней назад',
            ar: 'قبل 14 يومًا',
            hi: '14 दिन पहले',
            tr: '14 gün önce',
            id: '14 hari lalu',
            fa: '۱۴ روز پیش'
        },
        'compare_history_30d': {
            en: '30 Days Ago',
            zh: '30天前',
            es: 'Hace 30 Días',
            pt: '30 Dias Atrás',
            ru: '30 дней назад',
            ar: 'قبل 30 يومًا',
            hi: '30 दिन पहले',
            tr: '30 gün önce',
            id: '30 hari lalu',
            fa: '۳۰ روز پیش'
        },
        'compare_select_date': {
            en: 'Select a date...',
            zh: '选择日期...',
            es: 'Seleccionar fecha...',
            pt: 'Selecionar data...',
            ru: 'Выберите дату...',
            ar: 'اختر تاريخًا...',
            hi: 'तारीख चुनें...',
            tr: 'Bir tarih seçin...',
            id: 'Pilih tanggal...',
            fa: 'تاریخ را انتخاب کنید...'
        },
        'compare_go': {
            en: 'Go',
            zh: '前往',
            es: 'Ir',
            pt: 'Ir',
            ru: 'Перейти',
            ar: 'اذهب',
            hi: 'जाएं',
            tr: 'Git',
            id: 'Pergi',
            fa: 'برو'
        },
        'compare_refresh': {
            en: 'Refresh Table',
            zh: '刷新表格',
            es: 'Actualizar Tabla',
            pt: 'Atualizar Tabela',
            ru: 'Обновить таблицу',
            ar: 'تحديث الجدول',
            hi: 'तालिका ताज़ा करें',
            tr: 'Tabloyu Yenile',
            id: 'Segarkan Tabel',
            fa: 'به‌روزرسانی جدول'
        },
        'compare_description': {
            en: 'In this page, you can see the constantly rising (non-diminishing) chart of FIT alongside the volatile charts of top cryptocurrencies. FIT — the world\'s first non-diminishing, always rising digital asset.',
            zh: '在此页面中，您可以看到FIT持续上涨（永不减少）的图表，以及顶级加密货币的波动图表。FIT——世界上第一个永不减少、持续上涨的数字资产。',
            es: 'En esta página, puede ver el gráfico en constante aumento (no decreciente) de FIT junto a los gráficos volátiles de las principales criptomonedas. FIT — el primer activo digital no decreciente y siempre en aumento del mundo.',
            pt: 'Nesta página, você pode ver o gráfico em constante aumento (não decrescente) do FIT junto com os gráficos voláteis das principais criptomoedas. FIT — o primeiro ativo digital não decrescente e sempre crescente do mundo.',
            ru: 'На этой странице вы можете увидеть постоянно растущий (неубывающий) график FIT рядом с волатильными графиками ведущих криптовалют. FIT — первый в мире неубывающий, постоянно растущий цифровой актив.',
            ar: 'في هذه الصفحة، يمكنك رؤية الرسم البياني المتزايد باستمرار (غير المتناقص) لـ FIT جنبًا إلى جنب مع الرسوم البيانية المتقلبة للعملات المشفرة الرائدة. FIT — أول أصل رقمي غير متناقص ودائم الارتفاع في العالم.',
            hi: 'इस पेज पर, आप FIT का लगातार बढ़ता (गैर-घटता) चार्ट देख सकते हैं, साथ ही शीर्ष क्रिप्टोकरेंसी के अस्थिर चार्ट भी। FIT — दुनिया की पहली गैर-घटती, हमेशा बढ़ती डिजिटल संपत्ति।',
            tr: 'Bu sayfada, FIT\'in sürekli yükselen (azalmayan) grafiğini, en iyi kripto paraların değişken grafikleriyle birlikte görebilirsiniz. FIT — dünyanın ilk azalmayan, her zaman yükselen dijital varlığı.',
            id: 'Di halaman ini, Anda dapat melihat grafik FIT yang terus meningkat (tidak berkurang) bersama dengan grafik volatil dari cryptocurrency teratas. FIT — aset digital pertama di dunia yang tidak berkurang dan selalu naik.',
            fa: 'در این صفحه، می‌توانید نمودار همیشه در حال رشد (غیر کاهشی) FIT را در کنار نمودارهای نوسانی ارزهای دیجیتال برتر مشاهده کنید. FIT — اولین دارایی دیجیتال غیر کاهشی و همیشه در حال رشد در جهان.'
        },

        // ===== DApp =====
        'dapp_wallet_connect': {
            en: 'Connect Wallet',
            zh: '连接钱包',
            es: 'Conectar Billetera',
            pt: 'Conectar Carteira',
            ru: 'Подключить кошелек',
            ar: 'ربط المحفظة',
            hi: 'वॉलेट कनेक्ट करें',
            tr: 'Cüzdan Bağla',
            id: 'Hubungkan Dompet',
            fa: 'اتصال کیف پول'
        },
        'dapp_wallet_sub': {
            en: 'MetaMask, Trust Wallet, TokenPocket, or any Web3 wallet',
            zh: 'MetaMask、Trust Wallet、TokenPocket或任何Web3钱包',
            es: 'MetaMask, Trust Wallet, TokenPocket o cualquier billetera Web3',
            pt: 'MetaMask, Trust Wallet, TokenPocket ou qualquer carteira Web3',
            ru: 'MetaMask, Trust Wallet, TokenPocket или любой Web3-кошелек',
            ar: 'MetaMask، Trust Wallet، TokenPocket أو أي محفظة Web3',
            hi: 'MetaMask, Trust Wallet, TokenPocket या कोई भी Web3 वॉलेट',
            tr: 'MetaMask, Trust Wallet, TokenPocket veya herhangi bir Web3 cüzdan',
            id: 'MetaMask, Trust Wallet, TokenPocket, atau dompet Web3 lainnya',
            fa: 'متامسک، تراست والت، توکن‌پاکت یا هر کیف پول Web3 دیگر'
        },
        'dapp_fit_balance': {
            en: 'FIT Balance',
            zh: 'FIT余额',
            es: 'Saldo FIT',
            pt: 'Saldo FIT',
            ru: 'Баланс FIT',
            ar: 'رصيد FIT',
            hi: 'FIT शेष',
            tr: 'FIT Bakiyesi',
            id: 'Saldo FIT',
            fa: 'موجودی FIT'
        },
        'dapp_dai_balance': {
            en: 'DAI Balance',
            zh: 'DAI余额',
            es: 'Saldo DAI',
            pt: 'Saldo DAI',
            ru: 'Баланс DAI',
            ar: 'رصيد DAI',
            hi: 'DAI शेष',
            tr: 'DAI Bakiyesi',
            id: 'Saldo DAI',
            fa: 'موجودی DAI'
        },
        'dapp_disconnect': {
            en: 'Disconnect',
            zh: '断开连接',
            es: 'Desconectar',
            pt: 'Desconectar',
            ru: 'Отключить',
            ar: 'قطع الاتصال',
            hi: 'डिस्कनेक्ट करें',
            tr: 'Bağlantıyı Kes',
            id: 'Putuskan Sambungan',
            fa: 'قطع اتصال'
        },
        'dapp_current_price': {
            en: 'Current FIT Price',
            zh: '当前FIT价格',
            es: 'Precio Actual de FIT',
            pt: 'Preço Atual do FIT',
            ru: 'Текущая цена FIT',
            ar: 'سعر FIT الحالي',
            hi: 'वर्तमान FIT मूल्य',
            tr: 'Güncel FIT Fiyatı',
            id: 'Harga FIT Saat Ini',
            fa: 'قیمت فعلی FIT'
        },
        'dapp_dai_allowance_network': {
            en: 'DAI Allowance (Network)',
            zh: 'DAI授权（网络）',
            es: 'Asignación de DAI (Red)',
            pt: 'Permissão de DAI (Rede)',
            ru: 'Разрешение DAI (Сеть)',
            ar: 'تفويض DAI (الشبكة)',
            hi: 'DAI अनुमति (नेटवर्क)',
            tr: 'DAI İzni (Ağ)',
            id: 'Izin DAI (Jaringan)',
            fa: 'مجوز DAI (شبکه)'
        },
        'dapp_dai_allowance_token': {
            en: 'DAI Allowance (Token)',
            zh: 'DAI授权（代币）',
            es: 'Asignación de DAI (Token)',
            pt: 'Permissão de DAI (Token)',
            ru: 'Разрешение DAI (Токен)',
            ar: 'تفويض DAI (الرمز)',
            hi: 'DAI अनुमति (टोकन)',
            tr: 'DAI İzni (Token)',
            id: 'Izin DAI (Token)',
            fa: 'مجوز DAI (توکن)'
        },
        'dapp_approve_dai': {
            en: 'Approve DAI',
            zh: '批准DAI',
            es: 'Aprobar DAI',
            pt: 'Aprovar DAI',
            ru: 'Одобрить DAI',
            ar: 'الموافقة على DAI',
            hi: 'DAI स्वीकृत करें',
            tr: 'DAI Onayla',
            id: 'Setujui DAI',
            fa: 'تأیید DAI'
        },
        'dapp_not_approved': {
            en: 'Not approved',
            zh: '未批准',
            es: 'No aprobado',
            pt: 'Não aprovado',
            ru: 'Не одобрено',
            ar: 'غير موافق عليه',
            hi: 'स्वीकृत नहीं',
            tr: 'Onaylanmadı',
            id: 'Tidak disetujui',
            fa: 'تأیید نشده'
        },
        'dapp_need_approval': {
            en: 'Need approval',
            zh: '需要批准',
            es: 'Necesita aprobación',
            pt: 'Precisa de aprovação',
            ru: 'Требуется одобрение',
            ar: 'بحاجة إلى موافقة',
            hi: 'स्वीकृति की आवश्यकता',
            tr: 'Onay gerekli',
            id: 'Perlu persetujuan',
            fa: 'نیاز به تأیید'
        },
        'dapp_approved': {
            en: 'Approved',
            zh: '已批准',
            es: 'Aprobado',
            pt: 'Aprovado',
            ru: 'Одобрено',
            ar: 'تمت الموافقة',
            hi: 'स्वीकृत',
            tr: 'Onaylandı',
            id: 'Disetujui',
            fa: 'تأیید شده'
        },
        'dapp_buy_shares_title': {
            en: '💎 Buy Fly Infinity Ownership Shares',
            zh: '💎 购买Fly Infinity所有权份额',
            es: '💎 Comprar Acciones de Propiedad de Fly Infinity',
            pt: '💎 Comprar Ações de Propriedade da Fly Infinity',
            ru: '💎 Купить доли владения Fly Infinity',
            ar: '💎 شراء حصص ملكية Fly Infinity',
            hi: '💎 Fly Infinity स्वामित्व शेयर खरीदें',
            tr: '💎 Fly Infinity Sahiplik Hisseleri Satın Al',
            id: '💎 Beli Saham Kepemilikan Fly Infinity',
            fa: '💎 خرید سهام مالکیت Fly Infinity'
        },
        'dapp_buy_shares_sub': {
            en: 'Follow these 3 steps to become a network owner',
            zh: '按照这3个步骤成为网络所有者',
            es: 'Sigue estos 3 pasos para ser propietario de la red',
            pt: 'Siga estes 3 passos para se tornar um proprietário da rede',
            ru: 'Следуйте этим 3 шагам, чтобы стать владельцем сети',
            ar: 'اتبع هذه الخطوات الثلاث لتصبح مالكًا للشبكة',
            hi: 'नेटवर्क मालिक बनने के लिए इन 3 चरणों का पालन करें',
            tr: 'Ağ sahibi olmak için bu 3 adımı izleyin',
            id: 'Ikuti 3 langkah ini untuk menjadi pemilik jaringan',
            fa: 'این ۳ مرحله را دنبال کنید تا مالک شبکه شوید'
        },
        'dapp_step_approve': {
            en: 'Approve DAI',
            zh: '批准DAI',
            es: 'Aprobar DAI',
            pt: 'Aprovar DAI',
            ru: 'Одобрить DAI',
            ar: 'الموافقة على DAI',
            hi: 'DAI स्वीकृत करें',
            tr: 'DAI Onayla',
            id: 'Setujui DAI',
            fa: 'تأیید DAI'
        },
        'dapp_step_agreement': {
            en: 'Agreement Road Map',
            zh: '协议路线图',
            es: 'Hoja de Ruta del Acuerdo',
            pt: 'Roteiro do Acordo',
            ru: 'Дорожная карта соглашения',
            ar: 'خريطة طريق الاتفاقية',
            hi: 'समझौता रोड मैप',
            tr: 'Anlaşma Yol Haritası',
            id: 'Peta Jalan Perjanjian',
            fa: 'نقشه راه توافق'
        },
        'dapp_step_owner': {
            en: 'Become Owner',
            zh: '成为所有者',
            es: 'Ser Propietario',
            pt: 'Tornar-se Proprietário',
            ru: 'Стать владельцем',
            ar: 'كن مالكًا',
            hi: 'मालिक बनें',
            tr: 'Sahip Ol',
            id: 'Menjadi Pemilik',
            fa: 'مالک شوید'
        },
        'dapp_referrer': {
            en: '👤 Referrer Address (Applicant)',
            zh: '👤 推荐人地址（申请人）',
            es: '👤 Dirección del Referente (Solicitante)',
            pt: '👤 Endereço do Referenciador (Candidato)',
            ru: '👤 Адрес реферера (Заявитель)',
            ar: '👤 عنوان المحيل (مقدم الطلب)',
            hi: '👤 रेफरर पता (आवेदक)',
            tr: '👤 Referans Adresi (Başvuru Sahibi)',
            id: '👤 Alamat Referensi (Pemohon)',
            fa: '👤 آدرس معرف (متقاضی)'
        },
        'dapp_buy_fit': {
            en: '🟢 Buy FIT',
            zh: '🟢 购买FIT',
            es: '🟢 Comprar FIT',
            pt: '🟢 Comprar FIT',
            ru: '🟢 Купить FIT',
            ar: '🟢 شراء FIT',
            hi: '🟢 FIT खरीदें',
            tr: '🟢 FIT Satın Al',
            id: '🟢 Beli FIT',
            fa: '🟢 خرید FIT'
        },
        'dapp_buy_fit_sub': {
            en: 'Allow Fly Infinity Token contract to spend DAI, then buy',
            zh: '允许Fly Infinity Token合约使用DAI，然后购买',
            es: 'Permita que el contrato de Fly Infinity Token gaste DAI, luego compre',
            pt: 'Permita que o contrato do Fly Infinity Token gaste DAI, depois compre',
            ru: 'Разрешите контракту Fly Infinity Token расходовать DAI, затем купите',
            ar: 'اسمح لعقد Fly Infinity Token بإنفاق DAI، ثم قم بالشراء',
            hi: 'Fly Infinity Token कॉन्ट्रैक्ट को DAI खर्च करने की अनुमति दें, फिर खरीदें',
            tr: 'Fly Infinity Token sözleşmesinin DAI harcamasına izin verin, ardından satın alın',
            id: 'Izinkan kontrak Fly Infinity Token untuk menggunakan DAI, lalu beli',
            fa: 'به قرارداد Fly Infinity Token اجازه دهید DAI خرج کند، سپس خرید کنید'
        },
        'dapp_buyer_address': {
            en: '👤 Buyer Wallet Address',
            zh: '👤 买家钱包地址',
            es: '👤 Dirección de la Billetera del Comprador',
            pt: '👤 Endereço da Carteira do Comprador',
            ru: '👤 Адрес кошелька покупателя',
            ar: '👤 عنوان محفظة المشتري',
            hi: '👤 खरीदार का वॉलेट पता',
            tr: '👤 Alıcı Cüzdan Adresi',
            id: '👤 Alamat Dompet Pembeli',
            fa: '👤 آدرس کیف پول خریدار'
        },
        'dapp_buy_amount': {
            en: '💰 Amount (DAI) to Buy',
            zh: '💰 购买金额 (DAI)',
            es: '💰 Cantidad (DAI) a Comprar',
            pt: '💰 Quantia (DAI) para Comprar',
            ru: '💰 Сумма (DAI) для покупки',
            ar: '💰 المبلغ (DAI) للشراء',
            hi: '💰 खरीदने के लिए राशि (DAI)',
            tr: '💰 Alınacak Miktar (DAI)',
            id: '💰 Jumlah (DAI) untuk Dibeli',
            fa: '💰 مبلغ برای خرید (DAI)'
        },
        'dapp_you_receive': {
            en: 'You will receive',
            zh: '您将收到',
            es: 'Recibirás',
            pt: 'Você receberá',
            ru: 'Вы получите',
            ar: 'ستتلقى',
            hi: 'आपको प्राप्त होगा',
            tr: 'Alacaksınız',
            id: 'Anda akan menerima',
            fa: 'دریافت خواهید کرد'
        },
        'dapp_buy': {
            en: 'Buy FIT',
            zh: '购买FIT',
            es: 'Comprar FIT',
            pt: 'Comprar FIT',
            ru: 'Купить FIT',
            ar: 'شراء FIT',
            hi: 'FIT खरीदें',
            tr: 'FIT Satın Al',
            id: 'Beli FIT',
            fa: 'خرید FIT'
        },
        'dapp_sell_fit': {
            en: '🔴 Sell FIT',
            zh: '🔴 出售FIT',
            es: '🔴 Vender FIT',
            pt: '🔴 Vender FIT',
            ru: '🔴 Продать FIT',
            ar: '🔴 بيع FIT',
            hi: '🔴 FIT बेचें',
            tr: '🔴 FIT Sat',
            id: '🔴 Jual FIT',
            fa: '🔴 فروش FIT'
        },
        'dapp_sell_amount': {
            en: '🪙 Amount (FIT) to Sell',
            zh: '🪙 出售数量 (FIT)',
            es: '🪙 Cantidad (FIT) a Vender',
            pt: '🪙 Quantia (FIT) para Vender',
            ru: '🪙 Количество (FIT) для продажи',
            ar: '🪙 المبلغ (FIT) للبيع',
            hi: '🪙 बेचने के लिए राशि (FIT)',
            tr: '🪙 Satılacak Miktar (FIT)',
            id: '🪙 Jumlah (FIT) untuk Dijual',
            fa: '🪙 مقدار برای فروش (FIT)'
        },
        'dapp_sell': {
            en: 'Sell FIT',
            zh: '出售FIT',
            es: 'Vender FIT',
            pt: 'Vender FIT',
            ru: 'Продать FIT',
            ar: 'بيع FIT',
            hi: 'FIT बेचें',
            tr: 'FIT Sat',
            id: 'Jual FIT',
            fa: 'فروش FIT'
        },
        'dapp_gift_title': {
            en: '🎁 Join Fly Infinity Gift Smart Contract & Participate in $5 Prize Lottery',
            zh: '🎁 加入Fly Infinity Gift智能合约并参与$5奖金抽奖',
            es: '🎁 Únase al Contrato Inteligente Fly Infinity Gift y Participe en la Lotería de $5',
            pt: '🎁 Junte-se ao Contrato Inteligente Fly Infinity Gift e Participe da Loteria de $5',
            ru: '🎁 Присоединяйтесь к смарт-контракту Fly Infinity Gift и участвуйте в лотерее с призом $5',
            ar: '🎁 انضم إلى عقد Fly Infinity Gift الذكي وشارك في يانصيب الجائزة $5',
            hi: '🎁 Fly Infinity Gift स्मार्ट कॉन्ट्रैक्ट में शामिल हों और $5 पुरस्कार लॉटरी में भाग लें',
            tr: '🎁 Fly Infinity Gift Akıllı Sözleşmesine Katılın ve $5 Ödül Piyangosuna Katılın',
            id: '🎁 Bergabunglah dengan Kontrak Cerdas Fly Infinity Gift & Ikuti Lotere Hadiah $5',
            fa: '🎁 به قرارداد هوشمند Fly Infinity Gift بپیوندید و در قرعه‌کشی جایزه ۵ دلاری شرکت کنید'
        },
        'dapp_join_gift': {
            en: 'Join Contract (One-time)',
            zh: '加入合约（一次性）',
            es: 'Unirse al Contrato (Una vez)',
            pt: 'Juntar-se ao Contrato (Uma vez)',
            ru: 'Присоединиться к контракту (Однократно)',
            ar: 'الانضمام إلى العقد (مرة واحدة)',
            hi: 'कॉन्ट्रैक्ट में शामिल हों (एक बार)',
            tr: 'Sözleşmeye Katıl (Tek seferlik)',
            id: 'Bergabung dengan Kontrak (Sekali)',
            fa: 'پیوستن به قرارداد (یک بار)'
        },
        'dapp_join_gift_sub': {
            en: 'Join Fly Infinity Gift (One-time process, forever)',
            zh: '加入Fly Infinity Gift（一次性过程，永久有效）',
            es: 'Unirse a Fly Infinity Gift (Proceso único, para siempre)',
            pt: 'Juntar-se ao Fly Infinity Gift (Processo único, para sempre)',
            ru: 'Присоединиться к Fly Infinity Gift (Однократный процесс, навсегда)',
            ar: 'الانضمام إلى Fly Infinity Gift (عملية لمرة واحدة، للأبد)',
            hi: 'Fly Infinity Gift में शामिल हों (एक बार की प्रक्रिया, हमेशा के लिए)',
            tr: 'Fly Infinity Gift\'e Katıl (Tek seferlik süreç, sonsuza kadar)',
            id: 'Bergabung dengan Fly Infinity Gift (Proses sekali, selamanya)',
            fa: 'پیوستن به Fly Infinity Gift (فرایند یک بار، برای همیشه)'
        },
        'dapp_free_gift': {
            en: '$5 Gift Lottery',
            zh: '$5礼品抽奖',
            es: 'Lotería de Regalo $5',
            pt: 'Loteria de Presente $5',
            ru: 'Лотерея с призом $5',
            ar: 'يانصيب الهدية $5',
            hi: '$5 उपहार लॉटरी',
            tr: '$5 Hediye Piyangosu',
            id: 'Lotere Hadiah $5',
            fa: 'قرعه‌کشی هدیه ۵ دلاری'
        },
        'dapp_free_gift_sub': {
            en: 'Win a $5 gift',
            zh: '赢取$5礼品',
            es: 'Gana un regalo de $5',
            pt: 'Ganhe um presente de $5',
            ru: 'Выиграйте подарок $5',
            ar: 'اربح هدية $5',
            hi: '$5 का उपहार जीतें',
            tr: '$5 hediye kazanın',
            id: 'Menangkan hadiah $5',
            fa: 'یک هدیه ۵ دلاری برنده شوید'
        },
        'dapp_gift_contract': {
            en: '📜 Gift Smart Contract',
            zh: '📜 礼品智能合约',
            es: '📜 Contrato Inteligente de Regalos',
            pt: '📜 Contrato Inteligente de Presentes',
            ru: '📜 Смарт-контракт подарков',
            ar: '📜 عقد الهدية الذكي',
            hi: '📜 उपहार स्मार्ट कॉन्ट्रैक्ट',
            tr: '📜 Hediye Akıllı Sözleşme',
            id: '📜 Kontrak Cerdas Hadiah',
            fa: '📜 قرارداد هوشمند هدیه'
        },
        'dapp_gift_info': {
            en: 'Step 1: Join (one-time) → Step 2: Participate in lottery',
            zh: '步骤1：加入（一次性）→ 步骤2：参与抽奖',
            es: 'Paso 1: Unirse (una vez) → Paso 2: Participar en la lotería',
            pt: 'Passo 1: Juntar-se (uma vez) → Passo 2: Participar da loteria',
            ru: 'Шаг 1: Присоединиться (однократно) → Шаг 2: Участвовать в лотерее',
            ar: 'الخطوة 1: الانضمام (مرة واحدة) → الخطوة 2: المشاركة في اليانصيب',
            hi: 'चरण 1: शामिल हों (एक बार) → चरण 2: लॉटरी में भाग लें',
            tr: 'Adım 1: Katıl (tek seferlik) → Adım 2: Piyangoya katıl',
            id: 'Langkah 1: Bergabung (sekali) → Langkah 2: Ikuti lotere',
            fa: 'مرحله ۱: پیوستن (یک بار) → مرحله ۲: شرکت در قرعه‌کشی'
        },

        // ===== تراکنش‌ها (Transactions) =====
        'tx_title': {
            en: 'Transactions Explorer',
            zh: '交易浏览器',
            es: 'Explorador de Transacciones',
            pt: 'Explorador de Transações',
            ru: 'Обозреватель транзакций',
            ar: 'مستكشف المعاملات',
            hi: 'लेन-देन एक्सप्लोरर',
            tr: 'İşlem Gezgini',
            id: 'Penjelajah Transaksi',
            fa: 'مرورگر تراکنش‌ها'
        },
        'tx_all': {
            en: '📋 All Transactions',
            zh: '📋 所有交易',
            es: '📋 Todas las Transacciones',
            pt: '📋 Todas as Transações',
            ru: '📋 Все транзакции',
            ar: '📋 جميع المعاملات',
            hi: '📋 सभी लेन-देन',
            tr: '📋 Tüm İşlemler',
            id: '📋 Semua Transaksi',
            fa: '📋 همه تراکنش‌ها'
        },
        'tx_all_sub': {
            en: 'View all contract transactions',
            zh: '查看所有合约交易',
            es: 'Ver todas las transacciones del contrato',
            pt: 'Ver todas as transações do contrato',
            ru: 'Просмотреть все транзакции контракта',
            ar: 'عرض جميع معاملات العقد',
            hi: 'सभी कॉन्ट्रैक्ट लेन-देन देखें',
            tr: 'Tüm sözleşme işlemlerini görüntüle',
            id: 'Lihat semua transaksi kontrak',
            fa: 'مشاهده همه تراکنش‌های قرارداد'
        },
        'tx_buy': {
            en: '🟢 Buy Transactions',
            zh: '🟢 买入交易',
            es: '🟢 Transacciones de Compra',
            pt: '🟢 Transações de Compra',
            ru: '🟢 Транзакции покупки',
            ar: '🟢 معاملات الشراء',
            hi: '🟢 खरीद लेन-देन',
            tr: '🟢 Alım İşlemleri',
            id: '🟢 Transaksi Beli',
            fa: '🟢 تراکنش‌های خرید'
        },
        'tx_buy_sub': {
            en: 'Only Buy transactions (Buy function)',
            zh: '仅买入交易（买入功能）',
            es: 'Solo transacciones de compra (función Buy)',
            pt: 'Apenas transações de compra (função Buy)',
            ru: 'Только транзакции покупки (функция Buy)',
            ar: 'معاملات الشراء فقط (وظيفة Buy)',
            hi: 'केवल खरीद लेन-देन (Buy फ़ंक्शन)',
            tr: 'Sadece Alım işlemleri (Buy fonksiyonu)',
            id: 'Hanya transaksi Beli (fungsi Buy)',
            fa: 'فقط تراکنش‌های خرید (تابع Buy)'
        },
        'tx_sell': {
            en: '🔴 Sell Transactions',
            zh: '🔴 卖出交易',
            es: '🔴 Transacciones de Venta',
            pt: '🔴 Transações de Venda',
            ru: '🔴 Транзакции продажи',
            ar: '🔴 معاملات البيع',
            hi: '🔴 बिक्री लेन-देन',
            tr: '🔴 Satım İşlemleri',
            id: '🔴 Transaksi Jual',
            fa: '🔴 تراکنش‌های فروش'
        },
        'tx_sell_sub': {
            en: 'Only Sell transactions (Sell function)',
            zh: '仅卖出交易（卖出功能）',
            es: 'Solo transacciones de venta (función Sell)',
            pt: 'Apenas transações de venda (função Sell)',
            ru: 'Только транзакции продажи (функция Sell)',
            ar: 'معاملات البيع فقط (وظيفة Sell)',
            hi: 'केवल बिक्री लेन-देन (Sell फ़ंक्शन)',
            tr: 'Sadece Satım işlemleri (Sell fonksiyonu)',
            id: 'Hanya transaksi Jual (fungsi Sell)',
            fa: 'فقط تراکنش‌های فروش (تابع Sell)'
        },
        'tx_transfers': {
            en: '🔄 Token Transfers',
            zh: '🔄 代币转账',
            es: '🔄 Transferencias de Tokens',
            pt: '🔄 Transferências de Tokens',
            ru: '🔄 Переводы токенов',
            ar: '🔄 تحويلات الرموز',
            hi: '🔄 टोकन स्थानांतरण',
            tr: '🔄 Token Transferleri',
            id: '🔄 Transfer Token',
            fa: '🔄 انتقال توکن'
        },
        'tx_transfers_sub': {
            en: 'FIT token transfers between addresses',
            zh: '地址之间的FIT代币转账',
            es: 'Transferencias de tokens FIT entre direcciones',
            pt: 'Transferências de tokens FIT entre endereços',
            ru: 'Переводы токенов FIT между адресами',
            ar: 'تحويلات رمز FIT بين العناوين',
            hi: 'पतों के बीच FIT टोकन स्थानांतरण',
            tr: 'Adresler arası FIT token transferleri',
            id: 'Transfer token FIT antar alamat',
            fa: 'انتقال توکن FIT بین آدرس‌ها'
        },
        'tx_genesis': {
            en: '💧 Genesis Liquidity',
            zh: '💧 初始流动性',
            es: '💧 Liquidez Génesis',
            pt: '💧 Liquidez Gênesis',
            ru: '💧 Начальная ликвидность',
            ar: '💧 السيولة الأولية',
            hi: '💧 प्रारंभिक तरलता',
            tr: '💧 Başlangıç Likiditesi',
            id: '💧 Likuiditas Awal',
            fa: '💧 نقدینگی اولیه'
        },
        'tx_genesis_sub': {
            en: 'Creation of the initial base price',
            zh: '创建初始基准价格',
            es: 'Creación del precio base inicial',
            pt: 'Criação do preço base inicial',
            ru: 'Создание начальной базовой цены',
            ar: 'إنشاء السعر الأساسي الأولي',
            hi: 'प्रारंभिक आधार मूल्य का निर्माण',
            tr: 'Başlangıç taban fiyatının oluşturulması',
            id: 'Pembuatan harga dasar awal',
            fa: 'ایجاد قیمت پایه اولیه'
        },
        'tx_network_events': {
            en: 'Network Events',
            zh: '网络事件',
            es: 'Eventos de la Red',
            pt: 'Eventos da Rede',
            ru: 'События сети',
            ar: 'أحداث الشبكة',
            hi: 'नेटवर्क घटनाएँ',
            tr: 'Ağ Olayları',
            id: 'Acara Jaringan',
            fa: 'رویدادهای شبکه'
        },
        'tx_become_owner': {
            en: '👑 Become Owner Events',
            zh: '👑 成为所有者事件',
            es: '👑 Eventos de Convertirse en Propietario',
            pt: '👑 Eventos de Tornar-se Proprietário',
            ru: '👑 События становления владельцем',
            ar: '👑 أحداث تصبح مالكًا',
            hi: '👑 मालिक बनें घटनाएँ',
            tr: '👑 Sahip Olma Etkinlikleri',
            id: '👑 Acara Menjadi Pemilik',
            fa: '👑 رویدادهای مالک شدن'
        },
        'tx_become_owner_sub': {
            en: 'Registration of new Fly Infinity ownership shares (BeCome_Owner function)',
            zh: '新Fly Infinity所有权份额的注册（BeCome_Owner功能）',
            es: 'Registro de nuevas acciones de propiedad de Fly Infinity (función BeCome_Owner)',
            pt: 'Registro de novas ações de propriedade da Fly Infinity (função BeCome_Owner)',
            ru: 'Регистрация новых долей владения Fly Infinity (функция BeCome_Owner)',
            ar: 'تسجيل حصص ملكية Fly Infinity الجديدة (وظيفة BeCome_Owner)',
            hi: 'नए Fly Infinity स्वामित्व शेयरों का पंजीकरण (BeCome_Owner फ़ंक्शन)',
            tr: 'Yeni Fly Infinity sahiplik hisselerinin kaydı (BeCome_Owner fonksiyonu)',
            id: 'Pendaftaran saham kepemilikan Fly Infinity baru (fungsi BeCome_Owner)',
            fa: 'ثبت سهام مالکیت جدید Fly Infinity (تابع BeCome_Owner)'
        },
        'tx_reward': {
            en: '🪙 Reward Events',
            zh: '🪙 奖励事件',
            es: '🪙 Eventos de Recompensa',
            pt: '🪙 Eventos de Recompensa',
            ru: '🪙 События вознаграждения',
            ar: '🪙 أحداث المكافآت',
            hi: '🪙 पुरस्कार घटनाएँ',
            tr: '🪙 Ödül Etkinlikleri',
            id: '🪙 Acara Hadiah',
            fa: '🪙 رویدادهای پاداش'
        },
        'tx_reward_sub': {
            en: 'List of rewards paid to developers',
            zh: '支付给开发者的奖励列表',
            es: 'Lista de recompensas pagadas a los desarrolladores',
            pt: 'Lista de recompensas pagas aos desenvolvedores',
            ru: 'Список вознаграждений, выплаченных разработчикам',
            ar: 'قائمة المكافآت المدفوعة للمطورين',
            hi: 'डेवलपर्स को भुगतान किए गए पुरस्कारों की सूची',
            tr: 'Geliştiricilere ödenen ödüllerin listesi',
            id: 'Daftar hadiah yang dibayarkan kepada pengembang',
            fa: 'لیست پاداش‌های پرداخت شده به توسعه‌دهندگان'
        },
        'tx_gift': {
            en: '🎁 Gift Events',
            zh: '🎁 礼品事件',
            es: '🎁 Eventos de Regalos',
            pt: '🎁 Eventos de Presentes',
            ru: '🎁 События подарков',
            ar: '🎁 أحداث الهدايا',
            hi: '🎁 उपहार घटनाएँ',
            tr: '🎁 Hediye Etkinlikleri',
            id: '🎁 Acara Hadiah',
            fa: '🎁 رویدادهای هدیه'
        },
        'tx_gift_sub': {
            en: 'List of $5 gifts paid out',
            zh: '已支付的$5礼品列表',
            es: 'Lista de regalos de $5 pagados',
            pt: 'Lista de presentes de $5 pagos',
            ru: 'Список выплаченных подарков по $5',
            ar: 'قائمة الهدايا $5 المدفوعة',
            hi: '$5 उपहारों की सूची',
            tr: 'Ödenen $5 hediyelerin listesi',
            id: 'Daftar hadiah $5 yang dibayarkan',
            fa: 'لیست هدایای ۵ دلاری پرداخت شده'
        },
        'tx_holder_info': {
            en: 'Holder Information',
            zh: '持有者信息',
            es: 'Información de Titulares',
            pt: 'Informação de Titulares',
            ru: 'Информация о держателях',
            ar: 'معلومات الحاملين',
            hi: 'धारक जानकारी',
            tr: 'Sahip Bilgileri',
            id: 'Informasi Pemegang',
            fa: 'اطلاعات دارندگان'
        },
        'tx_holder_distribution': {
            en: '📊 Holder Distribution',
            zh: '📊 持有者分布',
            es: '📊 Distribución de Titulares',
            pt: '📊 Distribuição de Titulares',
            ru: '📊 Распределение держателей',
            ar: '📊 توزيع الحاملين',
            hi: '📊 धारक वितरण',
            tr: '📊 Sahip Dağılımı',
            id: '📊 Distribusi Pemegang',
            fa: '📊 توزیع دارندگان'
        },
        'tx_holder_distribution_sub': {
            en: 'Chart of holder distribution and ownership percentages',
            zh: '持有者分布和所有权百分比图表',
            es: 'Gráfico de distribución de titulares y porcentajes de propiedad',
            pt: 'Gráfico de distribuição de titulares e porcentagens de propriedade',
            ru: 'График распределения держателей и процентов владения',
            ar: 'رسم بياني لتوزيع الحاملين ونسب الملكية',
            hi: 'धारक वितरण और स्वामित्व प्रतिशत का चार्ट',
            tr: 'Sahip dağılımı ve sahiplik yüzdeleri grafiği',
            id: 'Grafik distribusi pemegang dan persentase kepemilikan',
            fa: 'نمودار توزیع دارندگان و درصدهای مالکیت'
        },
        'tx_top_holders': {
            en: '👥 Top Holders List',
            zh: '👥 顶级持有者列表',
            es: '👥 Lista de Principales Titulares',
            pt: '👥 Lista dos Principais Titulares',
            ru: '👥 Список крупнейших держателей',
            ar: '👥 قائمة كبار الحاملين',
            hi: '👥 शीर्ष धारकों की सूची',
            tr: '👥 En Büyük Sahipler Listesi',
            id: '👥 Daftar Pemegang Teratas',
            fa: '👥 لیست دارندگان برتر'
        },
        'tx_top_holders_sub': {
            en: 'Complete list of holders with FIT balances',
            zh: '带有FIT余额的持有者完整列表',
            es: 'Lista completa de titulares con saldos de FIT',
            pt: 'Lista completa de titulares com saldos de FIT',
            ru: 'Полный список держателей с балансами FIT',
            ar: 'قائمة كاملة بالحاملين مع أرصدة FIT',
            hi: 'FIT शेष के साथ धारकों की पूरी सूची',
            tr: 'FIT bakiyeleri olan sahiplerin tam listesi',
            id: 'Daftar lengkap pemegang dengan saldo FIT',
            fa: 'لیست کامل دارندگان با موجودی FIT'
        },
        'tx_contract_stats': {
            en: 'Contract Statistics',
            zh: '合约统计',
            es: 'Estadísticas del Contrato',
            pt: 'Estatísticas do Contrato',
            ru: 'Статистика контракта',
            ar: 'إحصائيات العقد',
            hi: 'अनुबंध आँकड़े',
            tr: 'Sözleşme İstatistikleri',
            id: 'Statistik Kontrak',
            fa: 'آمار قرارداد'
        },
        'tx_total_supply': {
            en: '🪙 Total Supply',
            zh: '🪙 总供应量',
            es: '🪙 Suministro Total',
            pt: '🪙 Oferta Total',
            ru: '🪙 Общее предложение',
            ar: '🪙 إجمالي العرض',
            hi: '🪙 कुल आपूर्ति',
            tr: '🪙 Toplam Arz',
            id: '🪙 Total Pasokan',
            fa: '🪙 کل عرضه'
        },
        'tx_total_supply_sub': {
            en: 'View total supply and token information',
            zh: '查看总供应量和代币信息',
            es: 'Ver suministro total e información del token',
            pt: 'Ver oferta total e informações do token',
            ru: 'Просмотр общего предложения и информации о токене',
            ar: 'عرض إجمالي العرض ومعلومات الرمز',
            hi: 'कुल आपूर्ति और टोकन जानकारी देखें',
            tr: 'Toplam arz ve token bilgilerini görüntüle',
            id: 'Lihat total pasokan dan informasi token',
            fa: 'مشاهده کل عرضه و اطلاعات توکن'
        },
        'tx_dai_reserve': {
            en: '💵 DAI Reserve',
            zh: '💵 DAI储备金',
            es: '💵 Reserva DAI',
            pt: '💵 Reserva DAI',
            ru: '💵 Резерв DAI',
            ar: '💵 احتياطي DAI',
            hi: '💵 DAI रिजर्व',
            tr: '💵 DAI Rezervi',
            id: '💵 Cadangan DAI',
            fa: '💵 ذخیره DAI'
        },
        'tx_dai_reserve_sub': {
            en: 'View DAI balance in the contract (Token Transfers)',
            zh: '查看合约中的DAI余额（代币转账）',
            es: 'Ver el saldo de DAI en el contrato (Transferencias de Tokens)',
            pt: 'Ver o saldo de DAI no contrato (Transferências de Tokens)',
            ru: 'Просмотр баланса DAI в контракте (Переводы токенов)',
            ar: 'عرض رصيد DAI في العقد (تحويلات الرموز)',
            hi: 'कॉन्ट्रैक्ट में DAI शेष देखें (टोकन स्थानांतरण)',
            tr: 'Sözleşmedeki DAI bakiyesini görüntüle (Token Transferleri)',
            id: 'Lihat saldo DAI dalam kontrak (Transfer Token)',
            fa: 'مشاهده موجودی DAI در قرارداد (انتقال توکن)'
        },
        'tx_source_code': {
            en: 'Contracts Source Code',
            zh: '合约源代码',
            es: 'Código Fuente de los Contratos',
            pt: 'Código Fonte dos Contratos',
            ru: 'Исходный код контрактов',
            ar: 'الكود المصدري للعقود',
            hi: 'अनुबंध स्रोत कोड',
            tr: 'Sözleşme Kaynak Kodu',
            id: 'Kode Sumber Kontrak',
            fa: 'کد منبع قراردادها'
        },
        'tx_token_contract': {
            en: 'Fly Infinity Token',
            zh: 'Fly Infinity代币',
            es: 'Fly Infinity Token',
            pt: 'Fly Infinity Token',
            ru: 'Fly Infinity Token',
            ar: 'رمز Fly Infinity',
            hi: 'Fly Infinity टोकन',
            tr: 'Fly Infinity Token',
            id: 'Fly Infinity Token',
            fa: 'توکن Fly Infinity'
        },
        'tx_network_contract': {
            en: 'Fly Infinity Network',
            zh: 'Fly Infinity网络',
            es: 'Fly Infinity Network',
            pt: 'Fly Infinity Network',
            ru: 'Fly Infinity Network',
            ar: 'شبكة Fly Infinity',
            hi: 'Fly Infinity नेटवर्क',
            tr: 'Fly Infinity Ağı',
            id: 'Fly Infinity Network',
            fa: 'شبکه Fly Infinity'
        },
        'tx_gift_contract': {
            en: 'Fly Infinity Gift',
            zh: 'Fly Infinity礼品',
            es: 'Fly Infinity Gift',
            pt: 'Fly Infinity Gift',
            ru: 'Fly Infinity Gift',
            ar: 'هدية Fly Infinity',
            hi: 'Fly Infinity उपहार',
            tr: 'Fly Infinity Hediye',
            id: 'Fly Infinity Gift',
            fa: 'هدیه Fly Infinity'
        },
        'tx_view_source': {
            en: 'View Source Code →',
            zh: '查看源代码 →',
            es: 'Ver Código Fuente →',
            pt: 'Ver Código Fonte →',
            ru: 'Посмотреть исходный код →',
            ar: 'عرض الكود المصدري →',
            hi: 'स्रोत कोड देखें →',
            tr: 'Kaynak Kodunu Görüntüle →',
            id: 'Lihat Kode Sumber →',
            fa: 'مشاهده کد منبع ←'
        },

        // ===== حریم خصوصی (Privacy) =====
        'privacy_title': {
            en: 'Privacy Policy & Decentralized Structure',
            zh: '隐私政策与去中心化结构',
            es: 'Política de Privacidad y Estructura Descentralizada',
            pt: 'Política de Privacidade e Estrutura Descentralizada',
            ru: 'Политика конфиденциальности и децентрализованная структура',
            ar: 'سياسة الخصوصية والهيكل اللامركزي',
            hi: 'गोपनीयता नीति और विकेन्द्रीकृत संरचना',
            tr: 'Gizlilik Politikası ve Merkeziyetsiz Yapı',
            id: 'Kebijakan Privasi dan Struktur Terdesentralisasi',
            fa: 'سیاست حریم خصوصی و ساختار غیرمتمرکز'
        },
        'privacy_badge_non_diminishing': {
            en: 'Non-Diminishing',
            zh: '永不减少',
            es: 'No Decreciente',
            pt: 'Não Decrescente',
            ru: 'Неубывающий',
            ar: 'غير متناقص',
            hi: 'गैर-घटता',
            tr: 'Azalmaz',
            id: 'Tidak Berkurang',
            fa: 'غیر کاهشی'
        },
        'privacy_badge_perpetual': {
            en: 'Perpetual Growth',
            zh: '永久增长',
            es: 'Crecimiento Perpetuo',
            pt: 'Crescimento Perpétuo',
            ru: 'Вечный рост',
            ar: 'نمو دائم',
            hi: 'शाश्वत वृद्धि',
            tr: 'Sonsuz Büyüme',
            id: 'Pertumbuhan Abadi',
            fa: 'رشد دائمی'
        },
        'privacy_badge_dao': {
            en: 'DAO Governance',
            zh: 'DAO治理',
            es: 'Gobernanza DAO',
            pt: 'Governança DAO',
            ru: 'Управление DAO',
            ar: 'حوكمة DAO',
            hi: 'DAO शासन',
            tr: 'DAO Yönetişimi',
            id: 'Tata Kelola DAO',
            fa: 'حاکمیت DAO'
        },
        'privacy_badge_non_manipulable': {
            en: 'Non-Manipulable Price',
            zh: '不可操纵的价格',
            es: 'Precio No Manipulable',
            pt: 'Preço Não Manipulável',
            ru: 'Неподверженная манипуляциям цена',
            ar: 'سعر غير قابل للتلاعب',
            hi: 'असंशोधनीय मूल्य',
            tr: 'Manipüle Edilemez Fiyat',
            id: 'Harga Tidak Dapat Dimanipulasi',
            fa: 'قیمت غیرقابل دستکاری'
        },

        // ===== هشدارها (Warnings) =====
        'warnings_title': {
            en: 'Important Warnings',
            zh: '重要警告',
            es: 'Advertencias Importantes',
            pt: 'Avisos Importantes',
            ru: 'Важные предупреждения',
            ar: 'تحذيرات مهمة',
            hi: 'महत्वपूर्ण चेतावनी',
            tr: 'Önemli Uyarılar',
            id: 'Peringatan Penting',
            fa: 'هشدارهای مهم'
        },
        'warn_wallet_change_title': {
            en: '⚠️ Before Changing or Deleting Your Wallet',
            zh: '⚠️ 在更改或删除钱包之前',
            es: '⚠️ Antes de Cambiar o Eliminar su Billetera',
            pt: '⚠️ Antes de Alterar ou Excluir sua Carteira',
            ru: '⚠️ Перед изменением или удалением кошелька',
            ar: '⚠️ قبل تغيير أو حذف محفظتك',
            hi: '⚠️ अपना वॉलेट बदलने या हटाने से पहले',
            tr: '⚠️ Cüzdanınızı Değiştirmeden veya Silmeden Önce',
            id: '⚠️ Sebelum Mengubah atau Menghapus Dompet Anda',
            fa: '⚠️ قبل از تغییر یا حذف کیف پول خود'
        },
        'warn_wallet_change_text': {
            en: 'If you intend to perform a wallet change operation, you must sell your tokens first. Otherwise, your tokens will lose their transferability and you will not be able to sell them afterward.',
            zh: '如果您打算执行钱包更改操作，您必须先出售您的代币。否则，您的代币将失去可转让性，您将无法再出售它们。',
            es: 'Si tiene la intención de realizar una operación de cambio de billetera, debe vender sus tokens primero. De lo contrario, sus tokens perderán su transferibilidad y no podrá venderlos después.',
            pt: 'Se você pretende realizar uma operação de troca de carteira, deve vender seus tokens primeiro. Caso contrário, seus tokens perderão sua transferibilidade e você não poderá vendê-los depois.',
            ru: 'Если вы собираетесь выполнить операцию смены кошелька, вы должны сначала продать свои токены. В противном случае ваши токены потеряют свою передаваемость, и вы не сможете их продать впоследствии.',
            ar: 'إذا كنت تنوي إجراء عملية تغيير المحفظة، يجب عليك بيع رموزك أولاً. وإلا، ستفقد رموزك قابليتها للتحويل ولن تتمكن من بيعها بعد ذلك.',
            hi: 'यदि आप वॉलेट बदलने का कार्य करने का इरादा रखते हैं, तो आपको पहले अपने टोकन बेचने होंगे। अन्यथा, आपके टोकन अपनी स्थानांतरणीयता खो देंगे और आप बाद में उन्हें नहीं बेच पाएंगे।',
            tr: 'Bir cüzdan değiştirme işlemi yapmayı düşünüyorsanız, önce tokenlerinizi satmalısınız. Aksi takdirde, tokenleriniz transfer edilebilirliğini kaybedecek ve daha sonra satamayacaksınız.',
            id: 'Jika Anda berniat melakukan operasi penggantian dompet, Anda harus menjual token Anda terlebih dahulu. Jika tidak, token Anda akan kehilangan kemampuan transfernya dan Anda tidak akan dapat menjualnya nanti.',
            fa: 'اگر قصد انجام عملیات تغییر کیف پول را دارید، ابتدا باید توکن‌های خود را بفروشید. در غیر این صورت، توکن‌های شما قابلیت انتقال خود را از دست می‌دهند و بعداً نمی‌توانید آنها را بفروشید.'
        },
        'warn_wallet_solution': {
            en: '🔧 Solution: First, sell all your FIT tokens → Then change your wallet → Finally, buy FIT again in your new wallet.',
            zh: '🔧 解决方案：首先，出售您所有的FIT代币 → 然后更换您的钱包 → 最后，在新钱包中重新购买FIT。',
            es: '🔧 Solución: Primero, venda todos sus tokens FIT → Luego cambie su billetera → Finalmente, compre FIT nuevamente en su nueva billetera.',
            pt: '🔧 Solução: Primeiro, venda todos os seus tokens FIT → Depois troque sua carteira → Finalmente, compre FIT novamente em sua nova carteira.',
            ru: '🔧 Решение: Сначала продайте все свои токены FIT → Затем смените кошелек → Наконец, снова купите FIT в новом кошельке.',
            ar: '🔧 الحل: أولاً، قم ببيع جميع رموز FIT الخاصة بك → ثم قم بتغيير محفظتك → أخيرًا، قم بشراء FIT مرة أخرى في محفظتك الجديدة.',
            hi: '🔧 समाधान: पहले, अपने सभी FIT टोकन बेचें → फिर अपना वॉलेट बदलें → अंत में, अपने नए वॉलेट में फिर से FIT खरीदें।',
            tr: '🔧 Çözüm: Önce, tüm FIT tokenlerinizi satın → Ardından cüzdanınızı değiştirin → Son olarak, yeni cüzdanınızda tekrar FIT satın alın.',
            id: '🔧 Solusi: Pertama, jual semua token FIT Anda → Kemudian ganti dompet Anda → Terakhir, beli FIT lagi di dompet baru Anda.',
            fa: '🔧 راه‌حل: ابتدا، تمام توکن‌های FIT خود را بفروشید → سپس کیف پول خود را تغییر دهید → در نهایت، دوباره FIT را در کیف پول جدید خود بخرید.'
        },
        'warn_recovery_phrase_title': {
            en: '⚠️ Never Share Your Recovery Phrase',
            zh: '⚠️ 切勿分享您的恢复短语',
            es: '⚠️ Nunca Comparta su Frase de Recuperación',
            pt: '⚠️ Nunca Compartilhe sua Frase de Recuperação',
            ru: '⚠️ Никогда не делитесь своей фразой восстановления',
            ar: '⚠️ لا تشارك أبدًا عبارة الاسترداد الخاصة بك',
            hi: '⚠️ अपना रिकवरी वाक्यांश कभी साझा न करें',
            tr: '⚠️ Kurtarma İfadenizi Asla Paylaşmayın',
            id: '⚠️ Jangan Pernah Bagikan Frasa Pemulihan Anda',
            fa: '⚠️ هرگز عبارت بازیابی خود را به اشتراک نگذارید'
        },
        'warn_recovery_phrase_text': {
            en: 'Recovery phrases (seed phrases) cannot be changed or reset. Keep them safe!',
            zh: '恢复短语（种子短语）不能更改或重置。请妥善保管！',
            es: 'Las frases de recuperación (frases semilla) no se pueden cambiar ni restablecer. ¡Manténgalas seguras!',
            pt: 'As frases de recuperação (frases-semente) não podem ser alteradas ou redefinidas. Mantenha-as seguras!',
            ru: 'Фразы восстановления (сид-фразы) нельзя изменить или сбросить. Храните их в безопасности!',
            ar: 'لا يمكن تغيير أو إعادة تعيين عبارات الاسترداد (عبارات البذور). احتفظ بها بأمان!',
            hi: 'रिकवरी वाक्यांश (सीड वाक्यांश) को बदला या रीसेट नहीं किया जा सकता। उन्हें सुरक्षित रखें!',
            tr: 'Kurtarma ifadeleri (tohum ifadeleri) değiştirilemez veya sıfırlanamaz. Onları güvende tutun!',
            id: 'Frasa pemulihan (frasa seed) tidak dapat diubah atau direset. Jaga keamanannya!',
            fa: 'عبارات بازیابی (عبارات دانه) قابل تغییر یا بازنشانی نیستند. آنها را ایمن نگه دارید!'
        },
        'warn_blockchain_title': {
            en: '⚠️ Blockchain Transactions Are Irreversible',
            zh: '⚠️ 区块链交易不可逆转',
            es: '⚠️ Las Transacciones en Blockchain Son Irreversibles',
            pt: '⚠️ As Transações em Blockchain São Irreversíveis',
            ru: '⚠️ Транзакции в блокчейне необратимы',
            ar: '⚠️ معاملات البلوكشين غير قابلة للعكس',
            hi: '⚠️ ब्लॉकचेन लेन-देन अपरिवर्तनीय हैं',
            tr: '⚠️ Blockchain İşlemleri Geri Alınamaz',
            id: '⚠️ Transaksi Blockchain Tidak Dapat Dibalik',
            fa: '⚠️ تراکنش‌های بلاکچین غیرقابل بازگشت هستند'
        },
        'warn_blockchain_text': {
            en: 'Blockchain is a decentralized system with no central authority. Once a transaction is confirmed, it is permanently recorded on the blockchain and cannot be reversed, modified, or deleted by anyone.',
            zh: '区块链是一个没有中央权威的去中心化系统。一旦交易被确认，它就会被永久记录在区块链上，任何人都无法撤销、修改或删除。',
            es: 'Blockchain es un sistema descentralizado sin autoridad central. Una vez que se confirma una transacción, se registra permanentemente en la blockchain y no puede ser revertida, modificada o eliminada por nadie.',
            pt: 'Blockchain é um sistema descentralizado sem autoridade central. Uma vez que uma transação é confirmada, ela é permanentemente registrada na blockchain e não pode ser revertida, modificada ou excluída por ninguém.',
            ru: 'Блокчейн — это децентрализованная система без центрального органа. После подтверждения транзакция постоянно записывается в блокчейн и не может быть отменена, изменена или удалена кем-либо.',
            ar: 'البلوكشين هو نظام لامركزي بدون سلطة مركزية. بمجرد تأكيد المعاملة، يتم تسجيلها بشكل دائم في البلوكشين ولا يمكن عكسها أو تعديلها أو حذفها من قبل أي شخص.',
            hi: 'ब्लॉकचेन एक विकेन्द्रीकृत प्रणाली है जिसमें कोई केंद्रीय प्राधिकरण नहीं है। एक बार लेन-देन की पुष्टि हो जाने के बाद, इसे स्थायी रूप से ब्लॉकचेन पर दर्ज किया जाता है और इसे किसी के द्वारा उलटा, संशोधित या हटाया नहीं जा सकता है।',
            tr: 'Blockchain, merkezi bir otoritesi olmayan merkeziyetsiz bir sistemdir. Bir işlem onaylandıktan sonra, blockchain üzerinde kalıcı olarak kaydedilir ve hiç kimse tarafından geri alınamaz, değiştirilemez veya silinemez.',
            id: 'Blockchain adalah sistem terdesentralisasi tanpa otoritas pusat. Setelah transaksi dikonfirmasi, transaksi tersebut secara permanen dicatat di blockchain dan tidak dapat dibatalkan, dimodifikasi, atau dihapus oleh siapa pun.',
            fa: 'بلاکچین یک سیستم غیرمتمرکز بدون مرجعیت مرکزی است. پس از تأیید یک تراکنش، به طور دائمی در بلاکچین ثبت می‌شود و هیچ کس نمی‌تواند آن را برگرداند، تغییر دهد یا حذف کند.'
        },

        // ===== سوالات متداول (FAQ) =====
        'faq_title': {
            en: 'Frequently Asked Questions',
            zh: '常见问题',
            es: 'Preguntas Frecuentes',
            pt: 'Perguntas Frequentes',
            ru: 'Часто задаваемые вопросы',
            ar: 'الأسئلة الشائعة',
            hi: 'सामान्य प्रश्न',
            tr: 'Sıkça Sorulan Sorular',
            id: 'Pertanyaan yang Sering Diajukan',
            fa: 'سوالات متداول'
        },
        'faq_cost_title': {
            en: '🔹 How much does it cost to buy Fly Infinity ownership shares?',
            zh: '🔹 购买Fly Infinity所有权份额需要多少钱？',
            es: '🔹 ¿Cuánto cuesta comprar acciones de propiedad de Fly Infinity?',
            pt: '🔹 Quanto custa comprar ações de propriedade da Fly Infinity?',
            ru: '🔹 Сколько стоит купить доли владения Fly Infinity?',
            ar: '🔹 كم تكلفة شراء حصص ملكية Fly Infinity؟',
            hi: '🔹 Fly Infinity स्वामित्व शेयर खरीदने में कितना खर्च आता है?',
            tr: '🔹 Fly Infinity sahiplik hisseleri satın almanın maliyeti nedir?',
            id: '🔹 Berapa biaya untuk membeli saham kepemilikan Fly Infinity?',
            fa: '🔹 هزینه خرید سهام مالکیت Fly Infinity چقدر است؟'
        },
        'faq_cost_answer': {
            en: 'To purchase Fly Infinity ownership shares, you need to have the following in your wallet: 100 DAI — for the ownership share purchase, Approximately $1 worth of BNB — for network gas fees. Important: Make sure you have enough BNB in your wallet to cover transaction fees on the BNB Smart Chain network.',
            zh: '要购买Fly Infinity所有权份额，您需要在钱包中拥有以下内容：100 DAI — 用于购买所有权份额，大约价值$1的BNB — 用于网络Gas费。重要提示：确保您的钱包中有足够的BNB来支付BNB智能链网络上的交易费用。',
            es: 'Para comprar acciones de propiedad de Fly Infinity, necesita tener lo siguiente en su billetera: 100 DAI — para la compra de la acción de propiedad, Aproximadamente $1 en BNB — para las tarifas de gas de la red. Importante: Asegúrese de tener suficiente BNB en su billetera para cubrir las tarifas de transacción en la red BNB Smart Chain.',
            pt: 'Para comprar ações de propriedade da Fly Infinity, você precisa ter o seguinte em sua carteira: 100 DAI — para a compra da ação de propriedade, Aproximadamente $1 em BNB — para taxas de gas da rede. Importante: Certifique-se de ter BNB suficiente em sua carteira para cobrir as taxas de transação na rede BNB Smart Chain.',
            ru: 'Для покупки долей владения Fly Infinity вам необходимо иметь в кошельке следующее: 100 DAI — для покупки доли владения, Примерно $1 в BNB — для оплаты газа сети. Важно: Убедитесь, что у вас достаточно BNB в кошельке для покрытия комиссий за транзакции в сети BNB Smart Chain.',
            ar: 'لشراء حصص ملكية Fly Infinity، يجب أن يكون لديك ما يلي في محفظتك: 100 DAI — لشراء حصة الملكية، ما يقرب من $1 من BNB — لرسوم الغاز الشبكية. مهم: تأكد من أن لديك ما يكفي من BNB في محفظتك لتغطية رسوم المعاملات على شبكة BNB Smart Chain.',
            hi: 'Fly Infinity स्वामित्व शेयर खरीदने के लिए, आपके वॉलेट में निम्नलिखित होना चाहिए: 100 DAI — स्वामित्व शेयर खरीद के लिए, लगभग $1 मूल्य का BNB — नेटवर्क गैस शुल्क के लिए। महत्वपूर्ण: सुनिश्चित करें कि BNB स्मार्ट चेन नेटवर्क पर लेन-देन शुल्क को कवर करने के लिए आपके वॉलेट में पर्याप्त BNB है।',
            tr: 'Fly Infinity sahiplik hisseleri satın almak için cüzdanınızda aşağıdakilere sahip olmanız gerekir: 100 DAI — sahiplik hissesi satın alımı için, Yaklaşık $1 değerinde BNB — ağ gas ücretleri için. Önemli: BNB Akıllı Zincir ağındaki işlem ücretlerini karşılamak için cüzdanınızda yeterli BNB olduğundan emin olun.',
            id: 'Untuk membeli saham kepemilikan Fly Infinity, Anda perlu memiliki berikut ini di dompet Anda: 100 DAI — untuk pembelian saham kepemilikan, Sekitar $1 dalam BNB — untuk biaya gas jaringan. Penting: Pastikan Anda memiliki cukup BNB di dompet Anda untuk menutupi biaya transaksi di jaringan BNB Smart Chain.',
            fa: 'برای خرید سهام مالکیت Fly Infinity، باید موارد زیر را در کیف پول خود داشته باشید: ۱۰۰ DAI — برای خرید سهم مالکیت، حدود ۱ دلار BNB — برای هزینه گاز شبکه. مهم: مطمئن شوید که BNB کافی در کیف پول خود دارید تا هزینه‌های تراکنش در شبکه BNB Smart Chain را پوشش دهید.'
        },
        'faq_how_buy_title': {
            en: '🔹 How do I buy ownership shares?',
            zh: '🔹 如何购买所有权份额？',
            es: '🔹 ¿Cómo compro acciones de propiedad?',
            pt: '🔹 Como compro ações de propriedade?',
            ru: '🔹 Как купить доли владения?',
            ar: '🔹 كيف أشتري حصص الملكية؟',
            hi: '🔹 मैं स्वामित्व शेयर कैसे खरीदूं?',
            tr: '🔹 Sahiplik hisselerini nasıl satın alırım?',
            id: '🔹 Bagaimana cara membeli saham kepemilikan?',
            fa: '🔹 چگونه سهام مالکیت بخرم؟'
        },
        'faq_how_buy_answer': {
            en: 'To purchase Fly Infinity ownership shares, follow these steps: Step 1: Go to the DApp page. Step 2: Connect your wallet (MetaMask, TrustWallet, or TokenPocket). Step 3: First, approve 100 DAI for the network contract. Step 4: Sign the Agreement Road Map. Step 5: Enter your referrer address and complete registration as a network owner. After registration, you will be recognized as an official owner of the Fly Infinity network and can enjoy all its benefits.',
            zh: '要购买Fly Infinity所有权份额，请按照以下步骤操作：步骤1：前往DApp页面。步骤2：连接您的钱包（MetaMask、TrustWallet或TokenPocket）。步骤3：首先，为网络合约批准100 DAI。步骤4：签署协议路线图。步骤5：输入您的推荐人地址并完成网络所有者注册。注册后，您将被认可为Fly Infinity网络的官方所有者，并享受其所有好处。',
            es: 'Para comprar acciones de propiedad de Fly Infinity, siga estos pasos: Paso 1: Vaya a la página DApp. Paso 2: Conecte su billetera (MetaMask, TrustWallet o TokenPocket). Paso 3: Primero, apruebe 100 DAI para el contrato de red. Paso 4: Firme la Hoja de Ruta del Acuerdo. Paso 5: Ingrese su dirección de referente y complete el registro como propietario de la red. Después del registro, será reconocido como propietario oficial de la red Fly Infinity y podrá disfrutar de todos sus beneficios.',
            pt: 'Para comprar ações de propriedade da Fly Infinity, siga estes passos: Passo 1: Vá para a página DApp. Passo 2: Conecte sua carteira (MetaMask, TrustWallet ou TokenPocket). Passo 3: Primeiro, aprove 100 DAI para o contrato de rede. Passo 4: Assine o Roteiro do Acordo. Passo 5: Insira o endereço do seu referenciador e complete o registro como proprietário da rede. Após o registro, você será reconhecido como proprietário oficial da rede Fly Infinity e poderá desfrutar de todos os seus benefícios.',
            ru: 'Чтобы купить доли владения Fly Infinity, выполните следующие шаги: Шаг 1: Перейдите на страницу DApp. Шаг 2: Подключите свой кошелек (MetaMask, TrustWallet или TokenPocket). Шаг 3: Сначала одобрите 100 DAI для сетевого контракта. Шаг 4: Подпишите Дорожную карту соглашения. Шаг 5: Введите адрес реферера и завершите регистрацию в качестве владельца сети. После регистрации вы будете признаны официальным владельцем сети Fly Infinity и сможете пользоваться всеми ее преимуществами.',
            ar: 'لشراء حصص ملكية Fly Infinity، اتبع هذه الخطوات: الخطوة 1: انتقل إلى صفحة DApp. الخطوة 2: قم بتوصيل محفظتك (MetaMask أو TrustWallet أو TokenPocket). الخطوة 3: أولاً، وافق على 100 DAI لعقد الشبكة. الخطوة 4: وقع على خريطة طريق الاتفاقية. الخطوة 5: أدخل عنوان المحيل وأكمل التسجيل كمالك للشبكة. بعد التسجيل، سيتم الاعتراف بك كمالك رسمي لشبكة Fly Infinity ويمكنك الاستمتاع بجميع مزاياها.',
            hi: 'Fly Infinity स्वामित्व शेयर खरीदने के लिए, इन चरणों का पालन करें: चरण 1: DApp पेज पर जाएं। चरण 2: अपना वॉलेट कनेक्ट करें (MetaMask, TrustWallet या TokenPocket)। चरण 3: पहले, नेटवर्क कॉन्ट्रैक्ट के लिए 100 DAI स्वीकृत करें। चरण 4: समझौता रोड मैप पर हस्ताक्षर करें। चरण 5: अपना रेफरर पता दर्ज करें और नेटवर्क मालिक के रूप में पंजीकरण पूरा करें। पंजीकरण के बाद, आपको Fly Infinity नेटवर्क का आधिकारिक मालिक माना जाएगा और आप इसके सभी लाभों का आनंद ले सकेंगे।',
            tr: 'Fly Infinity sahiplik hisseleri satın almak için şu adımları izleyin: Adım 1: DApp sayfasına gidin. Adım 2: Cüzdanınızı bağlayın (MetaMask, TrustWallet veya TokenPocket). Adım 3: Önce, ağ sözleşmesi için 100 DAI onaylayın. Adım 4: Anlaşma Yol Haritasını imzalayın. Adım 5: Referans adresinizi girin ve ağ sahibi olarak kaydı tamamlayın. Kayıttan sonra, Fly Infinity ağının resmi sahibi olarak tanınacak ve tüm avantajlarından yararlanabileceksiniz.',
            id: 'Untuk membeli saham kepemilikan Fly Infinity, ikuti langkah-langkah berikut: Langkah 1: Pergi ke halaman DApp. Langkah 2: Hubungkan dompet Anda (MetaMask, TrustWallet atau TokenPocket). Langkah 3: Pertama, setujui 100 DAI untuk kontrak jaringan. Langkah 4: Tandatangani Peta Jalan Perjanjian. Langkah 5: Masukkan alamat referensi Anda dan selesaikan pendaftaran sebagai pemilik jaringan. Setelah pendaftaran, Anda akan diakui sebagai pemilik resmi jaringan Fly Infinity dan dapat menikmati semua manfaatnya.',
            fa: 'برای خرید سهام مالکیت Fly Infinity، این مراحل را دنبال کنید: مرحله ۱: به صفحه DApp بروید. مرحله ۲: کیف پول خود را متصل کنید (MetaMask، TrustWallet یا TokenPocket). مرحله ۳: ابتدا، ۱۰۰ DAI را برای قرارداد شبکه تأیید کنید. مرحله ۴: نقشه راه توافق را امضا کنید. مرحله ۵: آدرس معرف خود را وارد کنید و ثبت‌نام را به عنوان مالک شبکه تکمیل کنید. پس از ثبت‌نام، شما به عنوان مالک رسمی شبکه Fly Infinity شناخته می‌شوید و می‌توانید از تمام مزایای آن بهره‌مند شوید.'
        },
        'faq_how_buy_fit_title': {
            en: '🔹 How do I buy FIT tokens?',
            zh: '🔹 如何购买FIT代币？',
            es: '🔹 ¿Cómo compro tokens FIT?',
            pt: '🔹 Como compro tokens FIT?',
            ru: '🔹 Как купить токены FIT?',
            ar: '🔹 كيف أشتري رموز FIT؟',
            hi: '🔹 मैं FIT टोकन कैसे खरीदूं?',
            tr: '🔹 FIT tokenlerini nasıl satın alırım?',
            id: '🔹 Bagaimana cara membeli token FIT?',
            fa: '🔹 چگونه توکن FIT بخرم؟'
        },
        'faq_how_buy_fit_answer': {
            en: 'To purchase FIT tokens, you must first buy Fly Infinity ownership shares, then follow these steps: Step 1: After registering as an owner, return to the DApp page. Step 2: Approve 1000 DAI for the token contract. Step 3: Enter the amount of DAI you want to spend. Step 4: Click the Buy FIT button and confirm the transaction in your wallet. After confirmation, the equivalent FIT will be sent to your wallet. Important: You can only buy FIT after purchasing ownership shares. Buy fee: 3%',
            zh: '要购买FIT代币，您必须先购买Fly Infinity所有权份额，然后按照以下步骤操作：步骤1：注册为所有者后，返回DApp页面。步骤2：为代币合约批准1000 DAI。步骤3：输入您想花费的DAI金额。步骤4：点击购买FIT按钮并在钱包中确认交易。确认后，等值的FIT将发送到您的钱包。重要提示：您只能在购买所有权份额后购买FIT。购买费用：3%',
            es: 'Para comprar tokens FIT, primero debe comprar acciones de propiedad de Fly Infinity, luego siga estos pasos: Paso 1: Después de registrarse como propietario, regrese a la página DApp. Paso 2: Apruebe 1000 DAI para el contrato de tokens. Paso 3: Ingrese la cantidad de DAI que desea gastar. Paso 4: Haga clic en el botón Comprar FIT y confirme la transacción en su billetera. Después de la confirmación, el FIT equivalente se enviará a su billetera. Importante: Solo puede comprar FIT después de comprar acciones de propiedad. Tarifa de compra: 3%',
            pt: 'Para comprar tokens FIT, você deve primeiro comprar ações de propriedade da Fly Infinity, depois siga estes passos: Passo 1: Após se registrar como proprietário, retorne à página DApp. Passo 2: Aprove 1000 DAI para o contrato de tokens. Passo 3: Insira a quantidade de DAI que deseja gastar. Passo 4: Clique no botão Comprar FIT e confirme a transação em sua carteira. Após a confirmação, o FIT equivalente será enviado para sua carteira. Importante: Você só pode comprar FIT após comprar ações de propriedade. Taxa de compra: 3%',
            ru: 'Чтобы купить токены FIT, вы должны сначала купить доли владения Fly Infinity, затем выполните следующие шаги: Шаг 1: После регистрации в качестве владельца вернитесь на страницу DApp. Шаг 2: Одобрите 1000 DAI для контракта токенов. Шаг 3: Введите сумму DAI, которую вы хотите потратить. Шаг 4: Нажмите кнопку Купить FIT и подтвердите транзакцию в своем кошельке. После подтверждения эквивалентный FIT будет отправлен в ваш кошелек. Важно: Вы можете купить FIT только после покупки долей владения. Комиссия за покупку: 3%',
            ar: 'لشراء رموز FIT، يجب عليك أولاً شراء حصص ملكية Fly Infinity، ثم اتبع هذه الخطوات: الخطوة 1: بعد التسجيل كمالك، عد إلى صفحة DApp. الخطوة 2: وافق على 1000 DAI لعقد الرموز. الخطوة 3: أدخل مبلغ DAI الذي تريد إنفاقه. الخطوة 4: انقر على زر شراء FIT وقم بتأكيد المعاملة في محفظتك. بعد التأكيد، سيتم إرسال FIT المعادل إلى محفظتك. مهم: يمكنك فقط شراء FIT بعد شراء حصص الملكية. رسوم الشراء: 3%',
            hi: 'FIT टोकन खरीदने के लिए, आपको पहले Fly Infinity स्वामित्व शेयर खरीदने होंगे, फिर इन चरणों का पालन करें: चरण 1: मालिक के रूप में पंजीकरण करने के बाद, DApp पेज पर वापस जाएं। चरण 2: टोकन कॉन्ट्रैक्ट के लिए 1000 DAI स्वीकृत करें। चरण 3: आप जितना DAI खर्च करना चाहते हैं उसकी राशि दर्ज करें। चरण 4: FIT खरीदें बटन पर क्लिक करें और अपने वॉलेट में लेन-देन की पुष्टि करें। पुष्टि के बाद, समतुल्य FIT आपके वॉलेट में भेज दिया जाएगा। महत्वपूर्ण: आप स्वामित्व शेयर खरीदने के बाद ही FIT खरीद सकते हैं। खरीद शुल्क: 3%',
            tr: 'FIT tokenleri satın almak için önce Fly Infinity sahiplik hisseleri satın almalısınız, ardından şu adımları izleyin: Adım 1: Sahip olarak kaydolduktan sonra DApp sayfasına geri dönün. Adım 2: Token sözleşmesi için 1000 DAI onaylayın. Adım 3: Harcamak istediğiniz DAI miktarını girin. Adım 4: FIT Satın Al düğmesine tıklayın ve işlemi cüzdanınızda onaylayın. Onaydan sonra, eşdeğer FIT cüzdanınıza gönderilecektir. Önemli: FIT\'i yalnızca sahiplik hisseleri satın aldıktan sonra satın alabilirsiniz. Alım ücreti: %3',
            id: 'Untuk membeli token FIT, Anda harus terlebih dahulu membeli saham kepemilikan Fly Infinity, lalu ikuti langkah-langkah berikut: Langkah 1: Setelah mendaftar sebagai pemilik, kembali ke halaman DApp. Langkah 2: Setujui 1000 DAI untuk kontrak token. Langkah 3: Masukkan jumlah DAI yang ingin Anda gunakan. Langkah 4: Klik tombol Beli FIT dan konfirmasi transaksi di dompet Anda. Setelah konfirmasi, FIT yang setara akan dikirim ke dompet Anda. Penting: Anda hanya dapat membeli FIT setelah membeli saham kepemilikan. Biaya pembelian: 3%',
            fa: 'برای خرید توکن‌های FIT، ابتدا باید سهام مالکیت Fly Infinity را بخرید، سپس این مراحل را دنبال کنید: مرحله ۱: پس از ثبت‌نام به عنوان مالک، به صفحه DApp بازگردید. مرحله ۲: ۱۰۰۰ DAI را برای قرارداد توکن تأیید کنید. مرحله ۳: مقدار DAI که می‌خواهید خرج کنید را وارد کنید. مرحله ۴: روی دکمه خرید FIT کلیک کنید و تراکنش را در کیف پول خود تأیید کنید. پس از تأیید، FIT معادل به کیف پول شما ارسال می‌شود. مهم: شما فقط پس از خرید سهام مالکیت می‌توانید FIT بخرید. کارمزد خرید: ۳٪'
        },
        'faq_how_sell_fit_title': {
            en: '🔹 How do I sell FIT tokens?',
            zh: '🔹 如何出售FIT代币？',
            es: '🔹 ¿Cómo vendo tokens FIT?',
            pt: '🔹 Como vendo tokens FIT?',
            ru: '🔹 Как продать токены FIT?',
            ar: '🔹 كيف أبيع رموز FIT؟',
            hi: '🔹 मैं FIT टोकन कैसे बेचूं?',
            tr: '🔹 FIT tokenlerini nasıl satarım?',
            id: '🔹 Bagaimana cara menjual token FIT?',
            fa: '🔹 چگونه توکن FIT بفروشم؟'
        },
        'faq_how_sell_fit_answer': {
            en: 'To sell FIT tokens, follow these steps: Step 1: Go to the DApp page. Step 2: Connect your wallet. Step 3: Enter the amount of FIT you want to sell. Step 4: Click the Sell FIT button. Step 5: Confirm the transaction in your wallet. After confirmation, the equivalent DAI will be sent to your wallet. Note: Every FIT sale adds a portion of the fee to the DAI reserve, increasing the base token price. Sell fee: 6%',
            zh: '要出售FIT代币，请按照以下步骤操作：步骤1：前往DApp页面。步骤2：连接您的钱包。步骤3：输入您要出售的FIT数量。步骤4：点击出售FIT按钮。步骤5：在钱包中确认交易。确认后，等值的DAI将发送到您的钱包。注意：每次FIT出售都会将一部分费用添加到DAI储备中，从而提高基础代币价格。出售费用：6%',
            es: 'Para vender tokens FIT, siga estos pasos: Paso 1: Vaya a la página DApp. Paso 2: Conecte su billetera. Paso 3: Ingrese la cantidad de FIT que desea vender. Paso 4: Haga clic en el botón Vender FIT. Paso 5: Confirme la transacción en su billetera. Después de la confirmación, el DAI equivalente se enviará a su billetera. Nota: Cada venta de FIT agrega una parte de la tarifa a la reserva de DAI, aumentando el precio base del token. Tarifa de venta: 6%',
            pt: 'Para vender tokens FIT, siga estes passos: Passo 1: Vá para a página DApp. Passo 2: Conecte sua carteira. Passo 3: Insira a quantidade de FIT que deseja vender. Passo 4: Clique no botão Vender FIT. Passo 5: Confirme a transação em sua carteira. Após a confirmação, o DAI equivalente será enviado para sua carteira. Nota: Cada venda de FIT adiciona uma parte da taxa à reserva de DAI, aumentando o preço base do token. Taxa de venda: 6%',
            ru: 'Чтобы продать токены FIT, выполните следующие шаги: Шаг 1: Перейдите на страницу DApp. Шаг 2: Подключите свой кошелек. Шаг 3: Введите количество FIT, которое вы хотите продать. Шаг 4: Нажмите кнопку Продать FIT. Шаг 5: Подтвердите транзакцию в своем кошельке. После подтверждения эквивалентный DAI будет отправлен в ваш кошелек. Примечание: Каждая продажа FIT добавляет часть комиссии в резерв DAI, увеличивая базовую цену токена. Комиссия за продажу: 6%',
            ar: 'لبيع رموز FIT، اتبع هذه الخطوات: الخطوة 1: انتقل إلى صفحة DApp. الخطوة 2: قم بتوصيل محفظتك. الخطوة 3: أدخل كمية FIT التي تريد بيعها. الخطوة 4: انقر على زر بيع FIT. الخطوة 5: قم بتأكيد المعاملة في محفظتك. بعد التأكيد، سيتم إرسال DAI المعادل إلى محفظتك. ملاحظة: كل عملية بيع لـ FIT تضيف جزءًا من الرسوم إلى احتياطي DAI، مما يزيد من سعر الرمز الأساسي. رسوم البيع: 6%',
            hi: 'FIT टोकन बेचने के लिए, इन चरणों का पालन करें: चरण 1: DApp पेज पर जाएं। चरण 2: अपना वॉलेट कनेक्ट करें। चरण 3: आप जितनी FIT बेचना चाहते हैं उसकी मात्रा दर्ज करें। चरण 4: FIT बेचें बटन पर क्लिक करें। चरण 5: अपने वॉलेट में लेन-देन की पुष्टि करें। पुष्टि के बाद, समतुल्य DAI आपके वॉलेट में भेज दिया जाएगा। नोट: प्रत्येक FIT बिक्री शुल्क का एक हिस्सा DAI रिजर्व में जोड़ती है, जिससे टोकन की आधार कीमत बढ़ जाती है। बिक्री शुल्क: 6%',
            tr: 'FIT tokenleri satmak için şu adımları izleyin: Adım 1: DApp sayfasına gidin. Adım 2: Cüzdanınızı bağlayın. Adım 3: Satmak istediğiniz FIT miktarını girin. Adım 4: FIT Sat düğmesine tıklayın. Adım 5: İşlemi cüzdanınızda onaylayın. Onaydan sonra, eşdeğer DAI cüzdanınıza gönderilecektir. Not: Her FIT satışı, ücretin bir kısmını DAI rezervine ekler ve token taban fiyatını artırır. Satım ücreti: %6',
            id: 'Untuk menjual token FIT, ikuti langkah-langkah berikut: Langkah 1: Pergi ke halaman DApp. Langkah 2: Hubungkan dompet Anda. Langkah 3: Masukkan jumlah FIT yang ingin Anda jual. Langkah 4: Klik tombol Jual FIT. Langkah 5: Konfirmasi transaksi di dompet Anda. Setelah konfirmasi, DAI yang setara akan dikirim ke dompet Anda. Catatan: Setiap penjualan FIT menambahkan sebagian dari biaya ke cadangan DAI, meningkatkan harga dasar token. Biaya penjualan: 6%',
            fa: 'برای فروش توکن‌های FIT، این مراحل را دنبال کنید: مرحله ۱: به صفحه DApp بروید. مرحله ۲: کیف پول خود را متصل کنید. مرحله ۳: مقدار FIT که می‌خواهید بفروشید را وارد کنید. مرحله ۴: روی دکمه فروش FIT کلیک کنید. مرحله ۵: تراکنش را در کیف پول خود تأیید کنید. پس از تأیید، DAI معادل به کیف پول شما ارسال می‌شود. توجه: هر فروش FIT بخشی از کارمزد را به ذخیره DAI اضافه می‌کند و قیمت پایه توکن را افزایش می‌دهد. کارمزد فروش: ۶٪'
        },
        'faq_transfer_title': {
            en: '🔹 Can I transfer tokens between wallets?',
            zh: '🔹 我可以在钱包之间转移代币吗？',
            es: '🔹 ¿Puedo transferir tokens entre billeteras?',
            pt: '🔹 Posso transferir tokens entre carteiras?',
            ru: '🔹 Могу ли я передавать токены между кошельками?',
            ar: '🔹 هل يمكنني تحويل الرموز بين المحافظ؟',
            hi: '🔹 क्या मैं वॉलेट के बीच टोकन स्थानांतरित कर सकता हूं?',
            tr: '🔹 Tokenleri cüzdanlar arasında transfer edebilir miyim?',
            id: '🔹 Bisakah saya mentransfer token antar dompet?',
            fa: '🔹 آیا می‌توانم توکن‌ها را بین کیف پول‌ها انتقال دهم؟'
        },
        'faq_transfer_answer': {
            en: 'No — FIT tokens cannot be transferred between wallets. This restriction is designed to maintain the constantly rising (non-diminishing) price algorithm, prevent black market creation, and ensure full transparency. The only way to change ownership is to sell through the contract and have someone else buy.',
            zh: '不能 — FIT代币不能在钱包之间转移。此限制旨在维护持续上涨（永不减少）的价格算法，防止黑市创建，并确保完全透明。改变所有权的唯一方法是通过合约出售并让其他人购买。',
            es: 'No — Los tokens FIT no se pueden transferir entre billeteras. Esta restricción está diseñada para mantener el algoritmo de precios en constante aumento (no decreciente), prevenir la creación de un mercado negro y garantizar la transparencia total. La única forma de cambiar la propiedad es vender a través del contrato y que alguien más compre.',
            pt: 'Não — Os tokens FIT não podem ser transferidos entre carteiras. Esta restrição foi projetada para manter o algoritmo de preços em constante aumento (não decrescente), prevenir a criação de mercado negro e garantir total transparência. A única maneira de mudar a propriedade é vender através do contrato e que outra pessoa compre.',
            ru: 'Нет — токены FIT нельзя передавать между кошельками. Это ограничение разработано для поддержания постоянно растущего (неубывающего) ценового алгоритма, предотвращения создания черного рынка и обеспечения полной прозрачности. Единственный способ изменить владельца — продать через контракт и позволить кому-то другому купить.',
            ar: 'لا — لا يمكن تحويل رموز FIT بين المحافظ. تم تصميم هذا القيد للحفاظ على خوارزمية الأسعار المتزايدة باستمرار (غير المتناقصة)، ومنع إنشاء السوق السوداء، وضمان الشفافية الكاملة. الطريقة الوحيدة لتغيير الملكية هي البيع من خلال العقد وشراء شخص آخر.',
            hi: 'नहीं — FIT टोकन वॉलेट के बीच स्थानांतरित नहीं किए जा सकते। यह प्रतिबंध लगातार बढ़ती (गैर-घटती) मूल्य एल्गोरिदम को बनाए रखने, ब्लैक मार्केट निर्माण को रोकने और पूर्ण पारदर्शिता सुनिश्चित करने के लिए डिज़ाइन किया गया है। स्वामित्व बदलने का एकमात्र तरीका अनुबंध के माध्यम से बेचना और किसी और को खरीदना है।',
            tr: 'Hayır — FIT tokenleri cüzdanlar arasında transfer edilemez. Bu kısıtlama, sürekli yükselen (azalmayan) fiyat algoritmasını korumak, kara piyasa oluşumunu önlemek ve tam şeffaflığı sağlamak için tasarlanmıştır. Sahipliği değiştirmenin tek yolu sözleşme aracılığıyla satmak ve başka birinin satın almasıdır.',
            id: 'Tidak — Token FIT tidak dapat ditransfer antar dompet. Pembatasan ini dirancang untuk mempertahankan algoritma harga yang terus meningkat (tidak berkurang), mencegah terciptanya pasar gelap, dan memastikan transparansi penuh. Satu-satunya cara untuk mengubah kepemilikan adalah dengan menjual melalui kontrak dan membiarkan orang lain membeli.',
            fa: 'نه — توکن‌های FIT قابل انتقال بین کیف پول‌ها نیستند. این محدودیت برای حفظ الگوریتم قیمت همیشه در حال رشد (غیر کاهشی)، جلوگیری از ایجاد بازار سیاه و تضمین شفافیت کامل طراحی شده است. تنها راه تغییر مالکیت، فروش از طریق قرارداد و خرید توسط شخص دیگر است.'
        },
        'faq_fees_title': {
            en: '🔹 What are the buy and sell fees?',
            zh: '🔹 买卖费用是多少？',
            es: '🔹 ¿Cuáles son las tarifas de compra y venta?',
            pt: '🔹 Quais são as taxas de compra e venda?',
            ru: '🔹 Каковы комиссии за покупку и продажу?',
            ar: '🔹 ما هي رسوم الشراء والبيع؟',
            hi: '🔹 खरीद और बिक्री शुल्क क्या हैं?',
            tr: '🔹 Alım ve satım ücretleri nelerdir?',
            id: '🔹 Berapa biaya pembelian dan penjualan?',
            fa: '🔹 کارمزد خرید و فروش چقدر است؟'
        },
        'faq_fees_answer': {
            en: 'Transaction fees in Fly Infinity Token are as follows: Buying FIT: 3% of the input amount, Selling FIT: 6% of the output amount. These fees are automatically added to the DAI reserve, which increases the base token price. The more transactions occur, the faster the FIT base price grows.',
            zh: 'Fly Infinity Token的交易费用如下：购买FIT：输入金额的3%，出售FIT：输出金额的6%。这些费用会自动添加到DAI储备中，从而提高基础代币价格。交易越多，FIT基础价格增长越快。',
            es: 'Las tarifas de transacción en Fly Infinity Token son las siguientes: Comprar FIT: 3% del monto de entrada, Vender FIT: 6% del monto de salida. Estas tarifas se agregan automáticamente a la reserva de DAI, lo que aumenta el precio base del token. Cuantas más transacciones ocurran, más rápido crece el precio base de FIT.',
            pt: 'As taxas de transação no Fly Infinity Token são as seguintes: Comprar FIT: 3% do valor de entrada, Vender FIT: 6% do valor de saída. Essas taxas são automaticamente adicionadas à reserva de DAI, o que aumenta o preço base do token. Quanto mais transações ocorrerem, mais rápido o preço base do FIT cresce.',
            ru: 'Комиссии за транзакции в Fly Infinity Token следующие: Покупка FIT: 3% от входной суммы, Продажа FIT: 6% от выходной суммы. Эти комиссии автоматически добавляются в резерв DAI, что увеличивает базовую цену токена. Чем больше транзакций происходит, тем быстрее растет базовая цена FIT.',
            ar: 'رسوم المعاملات في Fly Infinity Token هي كما يلي: شراء FIT: 3% من مبلغ الإدخال، بيع FIT: 6% من مبلغ الإخراج. تتم إضافة هذه الرسوم تلقائيًا إلى احتياطي DAI، مما يزيد من سعر الرمز الأساسي. كلما زادت المعاملات، زادت سرعة نمو سعر FIT الأساسي.',
            hi: 'Fly Infinity Token में लेन-देन शुल्क इस प्रकार हैं: FIT खरीदना: इनपुट राशि का 3%, FIT बेचना: आउटपुट राशि का 6%. ये शुल्क स्वचालित रूप से DAI रिजर्व में जोड़ दिए जाते हैं, जिससे टोकन की आधार कीमत बढ़ जाती है। जितने अधिक लेन-देन होंगे, FIT आधार मूल्य उतनी ही तेजी से बढ़ेगा।',
            tr: 'Fly Infinity Token\'daki işlem ücretleri şunlardır: FIT Alımı: Giriş tutarının %3\'ü, FIT Satımı: Çıkış tutarının %6\'sı. Bu ücretler otomatik olarak DAI rezervine eklenir ve bu da token taban fiyatını artırır. Ne kadar çok işlem olursa, FIT taban fiyatı o kadar hızlı büyür.',
            id: 'Biaya transaksi di Fly Infinity Token adalah sebagai berikut: Membeli FIT: 3% dari jumlah input, Menjual FIT: 6% dari jumlah output. Biaya ini secara otomatis ditambahkan ke cadangan DAI, yang meningkatkan harga dasar token. Semakin banyak transaksi terjadi, semakin cepat harga dasar FIT tumbuh.',
            fa: 'کارمزد تراکنش‌ها در Fly Infinity Token به شرح زیر است: خرید FIT: ۳٪ از مبلغ ورودی، فروش FIT: ۶٪ از مبلغ خروجی. این کارمزدها به طور خودکار به ذخیره DAI اضافه می‌شوند که قیمت پایه توکن را افزایش می‌دهد. هرچه تراکنش‌های بیشتری انجام شود، قیمت پایه FIT سریع‌تر رشد می‌کند.'
        },
        'faq_change_wallet_title': {
            en: '🔹 Can I change my wallet?',
            zh: '🔹 我可以更换我的钱包吗？',
            es: '🔹 ¿Puedo cambiar mi billetera?',
            pt: '🔹 Posso trocar minha carteira?',
            ru: '🔹 Могу ли я сменить кошелек?',
            ar: '🔹 هل يمكنني تغيير محفظتي؟',
            hi: '🔹 क्या मैं अपना वॉलेट बदल सकता हूं?',
            tr: '🔹 Cüzdanımı değiştirebilir miyim?',
            id: '🔹 Bisakah saya mengganti dompet saya?',
            fa: '🔹 آیا می‌توانم کیف پول خود را تغییر دهم؟'
        },
        'faq_change_wallet_answer': {
            en: 'Yes, but with one important condition: You must sell all your FIT before changing your wallet! If you change your wallet without selling first, your tokens will become inaccessible and you will lose the ability to sell them. Correct approach: First, sell all your FIT tokens → Change your wallet → Buy FIT again in your new wallet.',
            zh: '可以，但有一个重要条件：在更换钱包之前，您必须出售所有FIT！如果您在没有先出售的情况下更换钱包，您的代币将变得无法访问，您将失去出售它们的能力。正确方法：首先，出售您所有的FIT代币 → 更换钱包 → 在新钱包中重新购买FIT。',
            es: 'Sí, pero con una condición importante: ¡Debe vender todo su FIT antes de cambiar su billetera! Si cambia su billetera sin vender primero, sus tokens se volverán inaccesibles y perderá la capacidad de venderlos. Enfoque correcto: Primero, venda todos sus tokens FIT → Cambie su billetera → Compre FIT nuevamente en su nueva billetera.',
            pt: 'Sim, mas com uma condição importante: Você deve vender todo o seu FIT antes de trocar sua carteira! Se você trocar sua carteira sem vender primeiro, seus tokens se tornarão inacessíveis e você perderá a capacidade de vendê-los. Abordagem correta: Primeiro, venda todos os seus tokens FIT → Troque sua carteira → Compre FIT novamente em sua nova carteira.',
            ru: 'Да, но с одним важным условием: Вы должны продать весь свой FIT перед сменой кошелька! Если вы смените кошелек без предварительной продажи, ваши токены станут недоступными, и вы потеряете возможность их продать. Правильный подход: Сначала продайте все свои токены FIT → Смените кошелек → Купите FIT снова в новом кошельке.',
            ar: 'نعم، ولكن بشرط مهم واحد: يجب عليك بيع كل FIT الخاص بك قبل تغيير محفظتك! إذا قمت بتغيير محفظتك دون البيع أولاً، ستصبح رموزك غير قابلة للوصول وستفقد القدرة على بيعها. النهج الصحيح: أولاً، قم ببيع جميع رموز FIT الخاصة بك → قم بتغيير محفظتك → قم بشراء FIT مرة أخرى في محفظتك الجديدة.',
            hi: 'हाँ, लेकिन एक महत्वपूर्ण शर्त के साथ: अपना वॉलेट बदलने से पहले आपको अपनी सभी FIT बेचनी होगी! यदि आप पहले बेचे बिना अपना वॉलेट बदलते हैं, तो आपके टोकन दुर्गम हो जाएंगे और आप उन्हें बेचने की क्षमता खो देंगे। सही दृष्टिकोण: पहले, अपने सभी FIT टोकन बेचें → अपना वॉलेट बदलें → अपने नए वॉलेट में फिर से FIT खरीदें।',
            tr: 'Evet, ancak önemli bir şartla: Cüzdanınızı değiştirmeden önce tüm FIT\'inizi satmalısınız! Önce satmadan cüzdanınızı değiştirirseniz, tokenleriniz erişilemez hale gelir ve onları satma yeteneğinizi kaybedersiniz. Doğru yaklaşım: Önce, tüm FIT tokenlerinizi satın → Cüzdanınızı değiştirin → Yeni cüzdanınızda tekrar FIT satın alın.',
            id: 'Ya, tetapi dengan satu syarat penting: Anda harus menjual semua FIT Anda sebelum mengganti dompet Anda! Jika Anda mengganti dompet tanpa menjual terlebih dahulu, token Anda akan menjadi tidak dapat diakses dan Anda akan kehilangan kemampuan untuk menjualnya. Pendekatan yang benar: Pertama, jual semua token FIT Anda → Ganti dompet Anda → Beli FIT lagi di dompet baru Anda.',
            fa: 'بله، اما با یک شرط مهم: قبل از تغییر کیف پول خود، باید تمام FIT خود را بفروشید! اگر بدون فروش قبلی کیف پول خود را تغییر دهید، توکن‌های شما غیرقابل دسترس می‌شوند و توانایی فروش آنها را از دست می‌دهید. رویکرد صحیح: ابتدا، تمام توکن‌های FIT خود را بفروشید → کیف پول خود را تغییر دهید → دوباره FIT را در کیف پول جدید خود بخرید.'
        },
        'faq_recovery_phrase_title': {
            en: '🔹 What if I lose my recovery phrase?',
            zh: '🔹 如果我丢失了恢复短语怎么办？',
            es: '🔹 ¿Qué pasa si pierdo mi frase de recuperación?',
            pt: '🔹 E se eu perder minha frase de recuperação?',
            ru: '🔹 Что делать, если я потеряю свою фразу восстановления?',
            ar: '🔹 ماذا لو فقدت عبارة الاسترداد الخاصة بي؟',
            hi: '🔹 अगर मैं अपना रिकवरी वाक्यांश खो दूं तो क्या होगा?',
            tr: '🔹 Kurtarma ifademi kaybedersem ne olur?',
            id: '🔹 Bagaimana jika saya kehilangan frasa pemulihan saya?',
            fa: '🔹 اگر عبارت بازیابی خود را گم کنم چه؟'
        },
        'faq_recovery_phrase_answer': {
            en: 'Unfortunately, if you lose your recovery phrase (Seed Phrase / Recovery Phrase), there is no way to recover your wallet. The recovery phrase is the only way to access your wallet, and it cannot be changed, reset, or recovered by any support team. Security recommendations: Write your recovery phrase on paper and store it in a safe place, keep multiple copies in separate secure locations, never store it digitally, and never share it with anyone.',
            zh: '不幸的是，如果您丢失了恢复短语（种子短语/恢复短语），则无法恢复您的钱包。恢复短语是访问您的钱包的唯一方式，任何支持团队都无法更改、重置或恢复它。安全建议：将您的恢复短语写在纸上并存放在安全的地方，在多个安全位置保留多个副本，切勿以数字方式存储，切勿与任何人分享。',
            es: 'Desafortunadamente, si pierde su frase de recuperación (Frase Semilla / Frase de Recuperación), no hay forma de recuperar su billetera. La frase de recuperación es la única forma de acceder a su billetera, y ningún equipo de soporte puede cambiarla, restablecerla o recuperarla. Recomendaciones de seguridad: Escriba su frase de recuperación en papel y guárdela en un lugar seguro, mantenga varias copias en ubicaciones seguras separadas, nunca la almacene digitalmente y nunca la comparta con nadie.',
            pt: 'Infelizmente, se você perder sua frase de recuperação (Frase Semente / Frase de Recuperação), não há como recuperar sua carteira. A frase de recuperação é a única maneira de acessar sua carteira, e nenhuma equipe de suporte pode alterá-la, redefini-la ou recuperá-la. Recomendações de segurança: Escreva sua frase de recuperação no papel e guarde em um local seguro, mantenha várias cópias em locais seguros separados, nunca a armazene digitalmente e nunca a compartilhe com ninguém.',
            ru: 'К сожалению, если вы потеряете свою фразу восстановления (Сид-фразу / Фразу восстановления), нет способа восстановить ваш кошелек. Фраза восстановления — это единственный способ доступа к вашему кошельку, и никакая служба поддержки не может ее изменить, сбросить или восстановить. Рекомендации по безопасности: Запишите свою фразу восстановления на бумаге и храните ее в безопасном месте, храните несколько копий в отдельных безопасных местах, никогда не храните ее в цифровом виде и никогда не делитесь ею с кем-либо.',
            ar: 'لسوء الحظ، إذا فقدت عبارة الاسترداد الخاصة بك (عبارة البذور / عبارة الاسترداد)، فلا توجد طريقة لاستعادة محفظتك. عبارة الاسترداد هي الطريقة الوحيدة للوصول إلى محفظتك، ولا يمكن لأي فريق دعم تغييرها أو إعادة تعيينها أو استعادتها. توصيات الأمان: اكتب عبارة الاسترداد الخاصة بك على الورق واحفظها في مكان آمن، واحتفظ بعدة نسخ في مواقع آمنة منفصلة، ولا تخزنها أبدًا رقميًا، ولا تشاركها أبدًا مع أي شخص.',
            hi: 'दुर्भाग्य से, यदि आप अपना रिकवरी वाक्यांश (सीड वाक्यांश / रिकवरी वाक्यांश) खो देते हैं, तो आपके वॉलेट को पुनर्प्राप्त करने का कोई तरीका नहीं है। रिकवरी वाक्यांश आपके वॉलेट तक पहुंचने का एकमात्र तरीका है, और कोई भी सहायता टीम इसे बदल, रीसेट या पुनर्प्राप्त नहीं कर सकती है। सुरक्षा सिफारिशें: अपने रिकवरी वाक्यांश को कागज पर लिखें और इसे सुरक्षित स्थान पर रखें, अलग-अलग सुरक्षित स्थानों पर कई प्रतियां रखें, इसे कभी भी डिजिटल रूप से संग्रहीत न करें, और इसे कभी भी किसी के साथ साझा न करें।',
            tr: 'Ne yazık ki, kurtarma ifadenizi (Tohum İfadesi / Kurtarma İfadesi) kaybederseniz, cüzdanınızı kurtarmanın bir yolu yoktur. Kurtarma ifadesi, cüzdanınıza erişmenin tek yoludur ve hiçbir destek ekibi bunu değiştiremez, sıfırlayamaz veya kurtaramaz. Güvenlik önerileri: Kurtarma ifadenizi kağıda yazın ve güvenli bir yerde saklayın, ayrı güvenli konumlarda birden fazla kopya bulundurun, asla dijital olarak saklamayın ve asla kimseyle paylaşmayın.',
            id: 'Sayangnya, jika Anda kehilangan frasa pemulihan Anda (Frasa Seed / Frasa Pemulihan), tidak ada cara untuk memulihkan dompet Anda. Frasa pemulihan adalah satu-satunya cara untuk mengakses dompet Anda, dan tidak ada tim dukungan yang dapat mengubah, mengatur ulang, atau memulihkannya. Rekomendasi keamanan: Tulis frasa pemulihan Anda di atas kertas dan simpan di tempat yang aman, simpan beberapa salinan di lokasi aman yang terpisah, jangan pernah menyimpannya secara digital, dan jangan pernah membaginya dengan siapa pun.',
            fa: 'متأسفانه، اگر عبارت بازیابی خود (عبارت دانه / عبارت بازیابی) را گم کنید، هیچ راهی برای بازیابی کیف پول شما وجود ندارد. عبارت بازیابی تنها راه دسترسی به کیف پول شما است و هیچ تیم پشتیبانی نمی‌تواند آن را تغییر، بازنشانی یا بازیابی کند. توصیه‌های امنیتی: عبارت بازیابی خود را روی کاغذ بنویسید و در جای امن نگهداری کنید، چندین نسخه در مکان‌های امن جداگانه نگهداری کنید، هرگز آن را به صورت دیجیتالی ذخیره نکنید و هرگز آن را با کسی به اشتراک نگذارید.'
        }
    };

    // ==================== کلیدهای ترجمه برای داینامیک دیتا ====================
    // این کلیدها برای مقادیری که از بلاکچین می‌آیند استفاده می‌شوند
    const DYNAMIC_KEYS = {
        'loading': {
            en: 'Loading...',
            zh: '加载中...',
            es: 'Cargando...',
            pt: 'Carregando...',
            ru: 'Загрузка...',
            ar: 'جاري التحميل...',
            hi: 'लोड हो रहा है...',
            tr: 'Yükleniyor...',
            id: 'Memuat...',
            fa: 'در حال بارگذاری...'
        },
        'no_data': {
            en: 'No data',
            zh: '无数据',
            es: 'Sin datos',
            pt: 'Sem dados',
            ru: 'Нет данных',
            ar: 'لا توجد بيانات',
            hi: 'कोई डेटा नहीं',
            tr: 'Veri yok',
            id: 'Tidak ada data',
            fa: 'داده‌ای وجود ندارد'
        },
        'today': {
            en: 'Today (Live Data)',
            zh: '今天（实时数据）',
            es: 'Hoy (Datos en Vivo)',
            pt: 'Hoje (Dados ao Vivo)',
            ru: 'Сегодня (Live Data)',
            ar: 'اليوم (بيانات مباشرة)',
            hi: 'आज (लाइव डेटा)',
            tr: 'Bugün (Canlı Veri)',
            id: 'Hari Ini (Data Langsung)',
            fa: 'امروز (داده‌های لحظه‌ای)'
        },
        'showing': {
            en: 'Showing: {date}',
            zh: '显示：{date}',
            es: 'Mostrando: {date}',
            pt: 'Mostrando: {date}',
            ru: 'Показано: {date}',
            ar: 'عرض: {date}',
            hi: 'दिखा रहा है: {date}',
            tr: 'Gösteriliyor: {date}',
            id: 'Menampilkan: {date}',
            fa: 'نمایش: {date}'
        }
    };

    // ==================== سیستم ترجمه ====================
    let currentLanguage = 'en';
    let isRTL = false;

    function getTranslation(key, lang = null) {
        const langCode = lang || currentLanguage;
        if (TRANSLATIONS[key] && TRANSLATIONS[key][langCode]) {
            return TRANSLATIONS[key][langCode];
        }
        // Fallback to English
        if (TRANSLATIONS[key] && TRANSLATIONS[key]['en']) {
            return TRANSLATIONS[key]['en'];
        }
        return key; // اگر کلید پیدا نشد، خود کلید رو برگردون
    }

    function getDynamicText(key, lang = null) {
        const langCode = lang || currentLanguage;
        if (DYNAMIC_KEYS[key] && DYNAMIC_KEYS[key][langCode]) {
            return DYNAMIC_KEYS[key][langCode];
        }
        if (DYNAMIC_KEYS[key] && DYNAMIC_KEYS[key]['en']) {
            return DYNAMIC_KEYS[key]['en'];
        }
        return key;
    }

    function getLanguageDirection(lang = null) {
        const langCode = lang || currentLanguage;
        const found = LANGUAGES.find(l => l.code === langCode);
        return found ? found.dir : 'ltr';
    }

    function getCurrentLanguage() {
        return currentLanguage;
    }

    function setLanguage(lang) {
        if (!LANGUAGES.find(l => l.code === lang)) return;
        
        currentLanguage = lang;
        isRTL = getLanguageDirection(lang) === 'rtl';
        
        // ذخیره در localStorage
        localStorage.setItem('fly-infinity-lang', lang);
        
        // اعمال RTL/LTR به کل صفحه
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // به‌روزرسانی دکمه
        updateLanguageButton();
        
        // ترجمه صفحه
        translatePage();
        
        // رویداد تغییر زبان
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    function loadSavedLanguage() {
        const saved = localStorage.getItem('fly-infinity-lang');
        if (saved && LANGUAGES.find(l => l.code === saved)) {
            currentLanguage = saved;
        } else {
            // تشخیص زبان مرورگر
            const browserLang = navigator.language || navigator.languages?.[0] || 'en';
            const shortLang = browserLang.split('-')[0];
            // فقط زبان‌های پشتیبانی شده
            const supported = LANGUAGES.map(l => l.code);
            if (supported.includes(shortLang)) {
                currentLanguage = shortLang;
            }
        }
        isRTL = getLanguageDirection() === 'rtl';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;
    }

    // ==================== ساخت دکمه زبان ====================
    function createLanguageSwitcher() {
        // دکمه گرد - بدون تداخل با استایل‌های موجود
        const btn = document.createElement('div');
        btn.id = 'fly-lang-switcher';
        btn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            cursor: pointer;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0F0F0F, #1a1a1a);
            border: 2px solid #D4AF37;
            box-shadow: 0 4px 20px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
            user-select: none;
            backdrop-filter: blur(10px);
            color: #D4AF37;
        `;
        
        // آیکون کره یا پرچم
        const currentLang = LANGUAGES.find(l => l.code === currentLanguage);
        btn.innerHTML = currentLang ? currentLang.flag : '🌐';
        
        // هور
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.borderColor = '#00C896';
            btn.style.boxShadow = '0 4px 20px rgba(0,0,0,0.8), 0 0 30px rgba(0,200,150,0.2)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            btn.style.borderColor = '#D4AF37';
            btn.style.boxShadow = '0 4px 20px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.1)';
        });
        
        // ===== منوی dropdown =====
        const menu = document.createElement('div');
        menu.id = 'fly-lang-menu';
        menu.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            z-index: 9998;
            background: rgba(15, 15, 15, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 200, 150, 0.3);
            border-radius: 20px;
            padding: 8px 6px;
            min-width: 200px;
            max-height: 360px;
            overflow-y: auto;
            display: none;
            flex-direction: column;
            gap: 2px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.8);
        `;
        
        // استایل اسکرول منو
        menu.style.scrollbarWidth = 'thin';
        menu.style.scrollbarColor = '#00C896 #1a1a1a';
        
        // آیتم‌های زبان
        LANGUAGES.forEach(lang => {
            const item = document.createElement('div');
            item.style.cssText = `
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 8px 14px;
                border-radius: 14px;
                cursor: pointer;
                transition: all 0.2s ease;
                color: ${currentLanguage === lang.code ? '#D4AF37' : '#c0d0e8'};
                background: ${currentLanguage === lang.code ? 'rgba(212,175,55,0.08)' : 'transparent'};
                font-size: 14px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            `;
            item.innerHTML = `
                <span style="font-size: 20px;">${lang.flag}</span>
                <span style="font-weight: ${currentLanguage === lang.code ? '600' : '400'};">${lang.name}</span>
                ${currentLanguage === lang.code ? '<span style="margin-left: auto; color: #D4AF37;">✓</span>' : ''}
            `;
            
            item.addEventListener('mouseenter', () => {
                item.style.background = 'rgba(0,200,150,0.08)';
                item.style.color = '#00C896';
            });
            item.addEventListener('mouseleave', () => {
                item.style.background = currentLanguage === lang.code ? 'rgba(212,175,55,0.08)' : 'transparent';
                item.style.color = currentLanguage === lang.code ? '#D4AF37' : '#c0d0e8';
            });
            
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                setLanguage(lang.code);
                menu.style.display = 'none';
                // به‌روزرسانی دکمه
                btn.innerHTML = lang.flag;
            });
            
            menu.appendChild(item);
        });
        
        // اضافه کردن به صفحه
        document.body.appendChild(btn);
        document.body.appendChild(menu);
        
        // کلیک روی دکمه برای باز/بسته کردن منو
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // بستن منو با کلیک بیرون
        document.addEventListener('click', () => {
            menu.style.display = 'none';
        });
        
        // جلوگیری از بسته شدن منو با کلیک روی خود منو
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // ذخیره مرجع برای به‌روزرسانی
        window.__langBtn = btn;
        window.__langMenu = menu;
    }

    function updateLanguageButton() {
        const btn = document.getElementById('fly-lang-switcher');
        if (btn) {
            const currentLang = LANGUAGES.find(l => l.code === currentLanguage);
            btn.innerHTML = currentLang ? currentLang.flag : '🌐';
        }
        
        // به‌روزرسانی آیتم‌های منو
        const menu = document.getElementById('fly-lang-menu');
        if (menu) {
            const items = menu.querySelectorAll('div');
            LANGUAGES.forEach((lang, index) => {
                if (items[index]) {
                    const isActive = currentLanguage === lang.code;
                    items[index].style.color = isActive ? '#D4AF37' : '#c0d0e8';
                    items[index].style.background = isActive ? 'rgba(212,175,55,0.08)' : 'transparent';
                    items[index].style.fontWeight = isActive ? '600' : '400';
                    // به‌روزرسانی نشان ✓
                    const check = items[index].querySelector('span:last-child');
                    if (check) {
                        if (isActive) {
                            check.textContent = '✓';
                            check.style.display = '';
                        } else {
                            check.textContent = '';
                        }
                    }
                }
            });
        }
    }

    // ==================== ترجمه صفحه ====================
    function translatePage() {
        // عناصری که دارای attribute data-i18n هستند
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getTranslation(key);
            if (translation) {
                el.textContent = translation;
            }
        });
        
        // عناصری که placeholder دارند
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = getTranslation(key);
            if (translation) {
                el.placeholder = translation;
            }
        });
        
        // عنوان صفحه
        const title = document.querySelector('title');
        if (title) {
            const key = title.getAttribute('data-i18n');
            if (key) {
                const translation = getTranslation(key);
                if (translation) {
                    title.textContent = translation;
                }
            }
        }
        
        // به‌روزرسانی دکمه زبان
        updateLanguageButton();
        
        // رویداد ترجمه کامل شد
        document.dispatchEvent(new CustomEvent('pageTranslated', { detail: { language: currentLanguage } }));
    }

    // ==================== راه‌اندازی ====================
    function initLanguageSwitcher() {
        // بارگذاری زبان ذخیره شده
        loadSavedLanguage();
        
        // ساخت دکمه
        createLanguageSwitcher();
        
        // ترجمه اولیه
        translatePage();
        
        // گوش دادن به تغییرات DOM برای ترجمه عناصر جدید
        const observer = new MutationObserver(() => {
            translatePage();
        });
        observer.observe(document.body, { childList: true, subtree: true });
        
        // بازترجمه بعد از بارگذاری کامل
        window.addEventListener('load', () => {
            setTimeout(translatePage, 200);
        });
        
        console.log('✅ Fly Infinity Language Switcher initialized');
        console.log(`🌐 Current language: ${currentLanguage}`);
    }

    // ==================== راهنمای استفاده ====================
    /*
    ==== چگونه از این سیستم استفاده کنید ====
    
    1. کافیست این فایل رو به صفحه اضافه کنید:
       <script src="language-switcher.js"></script>
    
    2. برای ترجمه هر عنصر، attribute زیر رو بهش اضافه کنید:
       data-i18n="key_name"
    
    3. برای ترجمه placeholder:
       data-i18n-placeholder="key_name"
    
    4. برای دریافت ترجمه در جاوااسکریپت:
       const text = getTranslation('key_name');
    
    5. برای دریافت زبان فعلی:
       const lang = getCurrentLanguage();
    
    6. برای تغییر زبان از طریق جاوااسکریپت:
       setLanguage('fa'); // یا هر کد زبان دیگه
    
    7. برای گوش دادن به تغییر زبان:
       document.addEventListener('languageChanged', (e) => {
           console.log('Language changed to:', e.detail.language);
       });
    */

    // صادر کردن توابع برای استفاده در سایر اسکریپت‌ها
    window.FlyLang = {
        getTranslation,
        getDynamicText,
        getCurrentLanguage,
        setLanguage,
        getLanguageDirection,
        LANGUAGES,
        translatePage,
        TRANSLATIONS,
        DYNAMIC_KEYS
    };

    // راه‌اندازی خودکار
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
    } else {
        initLanguageSwitcher();
    }

})();