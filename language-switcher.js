// ============================================================
// Fly Infinity - Language Switcher (بهینه‌شده)
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

    // ==================== دیکشنری اصلی (فقط کلیدهای پرکاربرد) ====================
    // کلیدهایی که واقعاً در صفحات استفاده میشن
    const TRANSLATIONS = {
        // ===== منو =====
        'nav_dashboard': { en: 'Dashboard', fa: 'داشبورد', ar: 'لوحة التحكم', zh: '仪表板', es: 'Panel', pt: 'Painel', ru: 'Панель', hi: 'डैशबोर्ड', tr: 'Gösterge Paneli', id: 'Dasbor' },
        'nav_comparison': { en: 'Comparison', fa: 'مقایسه', ar: 'المقارنة', zh: '比较', es: 'Comparación', pt: 'Comparação', ru: 'Сравнение', hi: 'तुलना', tr: 'Karşılaştırma', id: 'Perbandingan' },
        'nav_dapp': { en: 'DApp', fa: 'دی‌اپ', ar: 'التطبيق اللامركزي', zh: '去中心化应用', es: 'DApp', pt: 'DApp', ru: 'DApp', hi: 'DApp', tr: 'DApp', id: 'DApp' },
        'nav_transactions': { en: 'Transactions', fa: 'تراکنش‌ها', ar: 'المعاملات', zh: '交易记录', es: 'Transacciones', pt: 'Transações', ru: 'Транзакции', hi: 'लेन-देन', tr: 'İşlemler', id: 'Transaksi' },
        'nav_privacy': { en: 'Privacy', fa: 'حریم خصوصی', ar: 'الخصوصية', zh: '隐私政策', es: 'Privacidad', pt: 'Privacidade', ru: 'Конфиденциальность', hi: 'गोपनीयता', tr: 'Gizlilik', id: 'Privasi' },
        'nav_warnings': { en: 'Warnings', fa: 'هشدارها', ar: 'تحذيرات', zh: '警告', es: 'Advertencias', pt: 'Avisos', ru: 'Предупреждения', hi: 'चेतावनी', tr: 'Uyarılar', id: 'Peringatan' },
        'nav_faq': { en: 'FAQ', fa: 'سوالات متداول', ar: 'الأسئلة الشائعة', zh: '常见问题', es: 'Preguntas Frecuentes', pt: 'Perguntas Frequentes', ru: 'Часто задаваемые вопросы', hi: 'सामान्य प्रश्न', tr: 'SSS', id: 'FAQ' },
        'nav_whitepaper': { en: 'White Paper', fa: 'سفیدنامه', ar: 'الورقة البيضاء', zh: '白皮书', es: 'Libro Blanco', pt: 'Whitepaper', ru: 'Белая книга', hi: 'श्वेत पत्र', tr: 'Beyaz Kitap', id: 'Whitepaper' },

        // ===== هدر و فوتر =====
        'site_title': { en: 'Fly Infinity DAO', fa: 'Fly Infinity DAO', ar: 'Fly Infinity DAO', zh: 'Fly Infinity DAO', es: 'Fly Infinity DAO', pt: 'Fly Infinity DAO', ru: 'Fly Infinity DAO', hi: 'Fly Infinity DAO', tr: 'Fly Infinity DAO', id: 'Fly Infinity DAO' },
        'footer_tagline': { en: 'Decentralized. Transparent. Forever Rising.', fa: 'غیرمتمرکز. شفاف. همیشه در حال رشد.', ar: 'لامركزي. شفاف. يرتفع للأبد.', zh: '去中心化。透明。永远上涨。', es: 'Descentralizado. Transparente. Siempre en ascenso.', pt: 'Descentralizado. Transparente. Sempre em alta.', ru: 'Децентрализованно. Прозрачно. Вечно растущий.', hi: 'विकेन्द्रीकृत। पारदर्शी। हमेशा बढ़ता हुआ।', tr: 'Merkeziyetsiz. Şeffaf. Sonsuza Kadar Yükselen.', id: 'Terdesentralisasi. Transparan. Selalu Naik.' },

        // ===== صفحه اصلی =====
        'dashboard_title': { en: 'Fly Infinity Token (FIT)', fa: 'توکن Fly Infinity (FIT)', ar: 'رمز Fly Infinity (FIT)', zh: 'Fly Infinity 代币 (FIT)', es: 'Fly Infinity Token (FIT)', pt: 'Fly Infinity Token (FIT)', ru: 'Fly Infinity Token (FIT)', hi: 'Fly Infinity टोकन (FIT)', tr: 'Fly Infinity Token (FIT)', id: 'Fly Infinity Token (FIT)' },
        'chain_badge': { en: '🛡️ BNB Smart Chain (BSC) Mainnet', fa: '🛡️ شبکه اصلی BNB Smart Chain (BSC)', ar: '🛡️ سلسلة BNB الذكية (BSC) الشبكة الرئيسية', zh: '🛡️ BNB智能链（BSC）主网', es: '🛡️ BNB Smart Chain (BSC) Mainnet', pt: '🛡️ BNB Smart Chain (BSC) Mainnet', ru: '🛡️ BNB Smart Chain (BSC) Mainnet', hi: '🛡️ BNB स्मार्ट चेन (BSC) मेननेट', tr: '🛡️ BNB Akıllı Zincir (BSC) Ana Ağı', id: '🛡️ BNB Smart Chain (BSC) Mainnet' },
        'current_price_label': { en: 'Current Price', fa: 'قیمت فعلی', ar: 'السعر الحالي', zh: '当前价格', es: 'Precio Actual', pt: 'Preço Atual', ru: 'Текущая цена', hi: 'वर्तमान मूल्य', tr: 'Güncel Fiyat', id: 'Harga Saat Ini' },
        'token_stats': { en: 'Token Statistics', fa: 'آمار توکن', ar: 'إحصائيات الرمز', zh: '代币统计', es: 'Estadísticas del Token', pt: 'Estatísticas do Token', ru: 'Статистика токена', hi: 'टोकन आँकड़े', tr: 'Token İstatistikleri', id: 'Statistik Token' },
        'stat_total_supply': { en: 'Total Supply', fa: 'کل عرضه', ar: 'إجمالي العرض', zh: '总供应量', es: 'Suministro Total', pt: 'Oferta Total', ru: 'Общее предложение', hi: 'कुल आपूर्ति', tr: 'Toplam Arz', id: 'Total Pasokan' },
        'stat_reserve': { en: '$ Reserve', fa: 'ذخیره $', ar: 'الاحتياطي $', zh: '储备金', es: 'Reserva $', pt: 'Reserva $', ru: 'Резерв $', hi: 'रिजर्व $', tr: 'Rezerv $', id: 'Cadangan $' },
        'stat_market_cap': { en: 'Market Cap ($)', fa: 'ارزش بازار ($)', ar: 'القيمة السوقية ($)', zh: '市值 ($)', es: 'Capitalización de Mercado ($)', pt: 'Capitalização de Mercado ($)', ru: 'Рыночная капитализация ($)', hi: 'बाजार पूंजीकरण ($)', tr: 'Piyasa Değeri ($)', id: 'Kapitalisasi Pasar ($)' },
        'stat_holders': { en: 'Total Holders', fa: 'کل دارندگان', ar: 'إجمالي الحاملين', zh: '持有者总数', es: 'Total de Titulares', pt: 'Total de Titulares', ru: 'Всего держателей', hi: 'कुल धारक', tr: 'Toplam Sahipler', id: 'Total Pemegang' },
        'contract_address_label': { en: '📜 Contract Address', fa: '📜 آدرس قرارداد', ar: '📜 عنوان العقد', zh: '📜 合约地址', es: '📜 Dirección del Contrato', pt: '📜 Endereço do Contrato', ru: '📜 Адрес контракта', hi: '📜 अनुबंध पता', tr: '📜 Sözleşme Adresi', id: '📜 Alamat Kontrak' },
        'pricing_formula_label': { en: '💰 Pricing Formula', fa: '💰 فرمول قیمت‌گذاری', ar: '💰 صيغة التسعير', zh: '💰 定价公式', es: '💰 Fórmula de Precios', pt: '💰 Fórmula de Preços', ru: '💰 Формула цены', hi: '💰 मूल्य निर्धारण सूत्र', tr: '💰 Fiyatlandırma Formülü', id: '💰 Rumus Harga' },
        'pricing_formula_text': { en: 'Price = Reserve / Total Supply', fa: 'قیمت = ذخیره / کل عرضه', ar: 'السعر = الاحتياطي / إجمالي العرض', zh: '价格 = 储备金 / 总供应量', es: 'Precio = Reserva / Suministro Total', pt: 'Preço = Reserva / Oferta Total', ru: 'Цена = Резерв / Общее предложение', hi: 'मूल्य = रिजर्व / कुल आपूर्ति', tr: 'Fiyat = Rezerv / Toplam Arz', id: 'Harga = Cadangan / Total Pasokan' },

        // ===== دکمه‌ها =====
        'btn_bscscan': { en: 'BscScan', fa: 'BscScan', ar: 'BscScan', zh: 'BscScan', es: 'BscScan', pt: 'BscScan', ru: 'BscScan', hi: 'BscScan', tr: 'BscScan', id: 'BscScan' },
        'btn_whitepaper': { en: 'Whitepaper', fa: 'سفیدنامه', ar: 'الورقة البيضاء', zh: '白皮书', es: 'Whitepaper', pt: 'Whitepaper', ru: 'Белая книга', hi: 'श्वेत पत्र', tr: 'Beyaz Kitap', id: 'Whitepaper' },
        'btn_buy_shares': { en: 'Buy Ownership Shares & FIT', fa: 'خرید سهام مالکیت و FIT', ar: 'شراء حصص الملكية و FIT', zh: '购买所有权份额和FIT', es: 'Comprar Acciones de Propiedad y FIT', pt: 'Comprar Ações de Propriedade e FIT', ru: 'Купить доли владения и FIT', hi: 'स्वामित्व शेयर और FIT खरीदें', tr: 'Sahiplik Hisseleri ve FIT Satın Al', id: 'Beli Saham Kepemilikan dan FIT' },
        'btn_refresh': { en: 'Refresh Price', fa: 'به‌روزرسانی قیمت', ar: 'تحديث السعر', zh: '刷新价格', es: 'Actualizar Precio', pt: 'Atualizar Preço', ru: 'Обновить цену', hi: 'मूल्य ताज़ा करें', tr: 'Fiyatı Yenile', id: 'Segarkan Harga' },
        'btn_calculate': { en: 'Calculate', fa: 'محاسبه', ar: 'احسب', zh: '计算', es: 'Calcular', pt: 'Calcular', ru: 'Рассчитать', hi: 'गणना करें', tr: 'Hesapla', id: 'Hitung' },
        'btn_fetch_live': { en: 'Fetch Live Price', fa: 'دریافت قیمت لحظه‌ای', ar: 'جلب السعر المباشر', zh: '获取实时价格', es: 'Obtener Precio en Vivo', pt: 'Buscar Preço ao Vivo', ru: 'Получить живую цену', hi: 'लाइव मूल्य प्राप्त करें', tr: 'Canlı Fiyatı Al', id: 'Ambil Harga Langsung' },

        // ===== چارت و تغییرات قیمت =====
        'chart_title': { en: '📈 Daily price chart ($ per FIT)', fa: '📈 نمودار قیمت روزانه (دلار به ازای هر FIT)', ar: '📈 مخطط الأسعار اليومي ($ لكل FIT)', zh: '📈 每日价格图表（每FIT美元）', es: '📈 Gráfico de precios diario ($ por FIT)', pt: '📈 Gráfico de preços diário ($ por FIT)', ru: '📈 Ежедневный график цен ($ за FIT)', hi: '📈 दैनिक मूल्य चार्ट ($ प्रति FIT)', tr: '📈 Günlük fiyat grafiği ($ / FIT)', id: '📈 Grafik harga harian ($ per FIT)' },
        'historical_changes': { en: 'Historical Price Changes', fa: 'تغییرات قیمت تاریخی', ar: 'التغيرات التاريخية في الأسعار', zh: '历史价格变化', es: 'Cambios Históricos de Precios', pt: 'Alterações Históricas de Preços', ru: 'Исторические изменения цен', hi: 'ऐतिहासिक मूल्य परिवर्तन', tr: 'Tarihsel Fiyat Değişiklikleri', id: 'Perubahan Harga Historis' },
        'period_24h': { en: '24h Ago', fa: '۲۴ ساعت پیش', ar: 'قبل 24 ساعة', zh: '24小时前', es: 'Hace 24h', pt: '24h atrás', ru: '24ч назад', hi: '24 घंटे पहले', tr: '24s önce', id: '24 jam lalu' },
        'period_7d': { en: '7 Days Ago', fa: '۷ روز پیش', ar: 'قبل 7 أيام', zh: '7天前', es: 'Hace 7 Días', pt: '7 Dias Atrás', ru: '7 дней назад', hi: '7 दिन पहले', tr: '7 gün önce', id: '7 hari lalu' },
        'period_30d': { en: '30 Days Ago', fa: '۳۰ روز پیش', ar: 'قبل 30 يومًا', zh: '30天前', es: 'Hace 30 Días', pt: '30 Dias Atrás', ru: '30 дней назад', hi: '30 दिन पहले', tr: '30 gün önce', id: '30 hari lalu' },
        'period_90d': { en: '90 Days Ago', fa: '۹۰ روز پیش', ar: 'قبل 90 يومًا', zh: '90天前', es: 'Hace 90 Días', pt: '90 Dias Atrás', ru: '90 дней назад', hi: '90 दिन पहले', tr: '90 gün önce', id: '90 hari lalu' },
        'period_180d': { en: '180 Days Ago', fa: '۱۸۰ روز پیش', ar: 'قبل 180 يومًا', zh: '180天前', es: 'Hace 180 Días', pt: '180 Dias Atrás', ru: '180 дней назад', hi: '180 दिन पहले', tr: '180 gün önce', id: '180 hari lalu' },
        'period_365d': { en: '365 Days Ago', fa: '۳۶۵ روز پیش', ar: 'قبل 365 يومًا', zh: '365天前', es: 'Hace 365 Días', pt: '365 Dias Atrás', ru: '365 дней назад', hi: '365 दिन पहले', tr: '365 gün önce', id: '365 hari lalu' },
        'period_initial': { en: 'Initial Price', fa: 'قیمت اولیه', ar: 'السعر الأولي', zh: '初始价格', es: 'Precio Inicial', pt: 'Preço Inicial', ru: 'Начальная цена', hi: 'प्रारंभिक मूल्य', tr: 'Başlangıç Fiyatı', id: 'Harga Awal' },

        // ===== مقایسه و شبیه‌ساز =====
        'comparison_title': { en: 'Comparison With Other Crypto', fa: 'مقایسه با سایر ارزهای دیجیتال', ar: 'المقارنة مع العملات المشفرة الأخرى', zh: '与其他加密货币比较', es: 'Comparación con Otras Criptomonedas', pt: 'Comparação com Outras Criptomoedas', ru: 'Сравнение с другими криптовалютами', hi: 'अन्य क्रिप्टो के साथ तुलना', tr: 'Diğer Kriptolarla Karşılaştırma', id: 'Perbandingan dengan Kripto Lain' },
        'comparison_sub': { en: 'Compare FIT price with Bitcoin, Ethereum, BNB and other cryptocurrencies', fa: 'قیمت FIT را با بیت‌کوین، اتریوم، BNB و سایر ارزهای دیجیتال مقایسه کنید', ar: 'قارن سعر FIT مع Bitcoin و Ethereum و BNB والعملات المشفرة الأخرى', zh: '将FIT价格与比特币、以太坊、BNB和其他加密货币进行比较', es: 'Compare el precio de FIT con Bitcoin, Ethereum, BNB y otras criptomonedas', pt: 'Compare o preço da FIT com Bitcoin, Ethereum, BNB e outras criptomoedas', ru: 'Сравните цену FIT с Bitcoin, Ethereum, BNB и другими криптовалютами', hi: 'FIT की कीमत Bitcoin, Ethereum, BNB और अन्य क्रिप्टोकरेंसी से तुलना करें', tr: 'FIT fiyatını Bitcoin, Ethereum, BNB ve diğer kriptolarla karşılaştırın', id: 'Bandingkan harga FIT dengan Bitcoin, Ethereum, BNB dan kripto lainnya' },
        'profit_simulator': { en: '💰 Profit Simulator', fa: '💰 شبیه‌ساز سود', ar: '💰 محاكي الربح', zh: '💰 利润模拟器', es: '💰 Simulador de Ganancias', pt: '💰 Simulador de Lucro', ru: '💰 Симулятор прибыли', hi: '💰 लाभ सिम्युलेटर', tr: '💰 Kar Simülatörü', id: '💰 Simulator Keuntungan' },
        'sim_holdings_label': { en: 'Your FIT Holdings', fa: 'میزان FIT شما', ar: 'ممتلكاتك من FIT', zh: '您的FIT持仓', es: 'Sus Tenencias de FIT', pt: 'Suas Participações em FIT', ru: 'Ваши активы FIT', hi: 'आपके FIT होल्डिंग्स', tr: 'FIT Varlıklarınız', id: 'Kepemilikan FIT Anda' },
        'sim_daily': { en: '📈 Daily: --', fa: '📈 روزانه: --', ar: '📈 يوميًا: --', zh: '📈 每日: --', es: '📈 Diario: --', pt: '📈 Diário: --', ru: '📈 Ежедневно: --', hi: '📈 दैनिक: --', tr: '📈 Günlük: --', id: '📈 Harian: --' },
        'sim_weekly': { en: '📊 Weekly: --', fa: '📊 هفتگی: --', ar: '📊 أسبوعيًا: --', zh: '📊 每周: --', es: '📊 Semanal: --', pt: '📊 Semanal: --', ru: '📊 Еженедельно: --', hi: '📊 साप्ताहिक: --', tr: '📊 Haftalık: --', id: '📊 Mingguan: --' },
        'sim_monthly': { en: '📅 Monthly: --', fa: '📅 ماهانه: --', ar: '📅 شهريًا: --', zh: '📅 每月: --', es: '📅 Mensual: --', pt: '📅 Mensal: --', ru: '📅 Ежемесячно: --', hi: '📅 मासिक: --', tr: '📅 Aylık: --', id: '📅 Bulanan: --' },
        'sim_24h': { en: '24h Projection', fa: 'پیش‌بینی ۲۴ ساعته', ar: 'توقعات 24 ساعة', zh: '24小时预测', es: 'Proyección 24h', pt: 'Projeção 24h', ru: 'Прогноз на 24ч', hi: '24 घंटे का अनुमान', tr: '24s Projeksiyon', id: 'Proyeksi 24 Jam' },
        'sim_7d': { en: '7 Days Projection', fa: 'پیش‌بینی ۷ روزه', ar: 'توقعات 7 أيام', zh: '7天预测', es: 'Proyección 7 Días', pt: 'Projeção 7 Dias', ru: 'Прогноз на 7 дней', hi: '7 दिन का अनुमान', tr: '7 Gün Projeksiyon', id: 'Proyeksi 7 Hari' },
        'sim_30d': { en: '30 Days Projection', fa: 'پیش‌بینی ۳۰ روزه', ar: 'توقعات 30 يومًا', zh: '30天预测', es: 'Proyección 30 Días', pt: 'Projeção 30 Dias', ru: 'Прогноз на 30 дней', hi: '30 दिन का अनुमान', tr: '30 Gün Projeksiyon', id: 'Proyeksi 30 Hari' },
        'sim_disclaimer': { en: '⚡ Based on past growth rates. Not financial advice.', fa: '⚡ بر اساس نرخ‌های رشد گذشته. توصیه مالی نیست.', ar: '⚡ بناءً على معدلات النمو السابقة. ليست نصيحة مالية.', zh: '⚡ 基于过去的增长率。不是财务建议。', es: '⚡ Basado en tasas de crecimiento pasadas. No es asesoramiento financiero.', pt: '⚡ Baseado em taxas de crescimento passadas. Não é aconselhamento financeiro.', ru: '⚡ Основано на прошлых темпах роста. Не является финансовой консультацией.', hi: '⚡ पिछली वृद्धि दरों पर आधारित। वित्तीय सलाह नहीं।', tr: '⚡ Geçmiş büyüme oranlarına dayanır. Finansal tavsiye değildir.', id: '⚡ Berdasarkan tingkat pertumbuhan masa lalu. Bukan nasihat keuangan.' },

        // ===== شبیه‌ساز دستی =====
        'manual_simulator': { en: 'Manual Profit Simulator', fa: 'شبیه‌ساز دستی سود', ar: 'محاكي الربح اليدوي', zh: '手动利润模拟器', es: 'Simulador Manual de Ganancias', pt: 'Simulador Manual de Lucro', ru: 'Ручной симулятор прибыли', hi: 'मैन्युअल लाभ सिम्युलेटर', tr: 'Manuel Kar Simülatörü', id: 'Simulator Keuntungan Manual' },
        'manual_sub': { en: 'Calculate your potential profit based on daily price increase', fa: 'سود بالقوه خود را بر اساس افزایش قیمت روزانه محاسبه کنید', ar: 'احسب أرباحك المحتملة بناءً على زيادة الأسعار اليومية', zh: '根据每日价格上涨计算您的潜在利润', es: 'Calcule su beneficio potencial basado en el aumento diario de precios', pt: 'Calcule seu lucro potencial com base no aumento diário de preços', ru: 'Рассчитайте потенциальную прибыль на основе ежедневного роста цен', hi: 'दैनिक मूल्य वृद्धि के आधार पर अपने संभावित लाभ की गणना करें', tr: 'Günlük fiyat artışına göre potansiyel karınızı hesaplayın', id: 'Hitung potensi keuntungan Anda berdasarkan kenaikan harga harian' },
        'manual_daily_increase': { en: '📈 Daily Price Increase ($)', fa: '📈 افزایش قیمت روزانه (دلار)', ar: '📈 زيادة الأسعار اليومية ($)', zh: '📈 每日价格上涨 ($)', es: '📈 Aumento Diario de Precios ($)', pt: '📈 Aumento Diário de Preços ($)', ru: '📈 Ежедневное увеличение цены ($)', hi: '📈 दैनिक मूल्य वृद्धि ($)', tr: '📈 Günlük Fiyat Artışı ($)', id: '📈 Kenaikan Harga Harian ($)' },
        'manual_daily_profit': { en: '📅 Daily Profit', fa: '📅 سود روزانه', ar: '📅 الربح اليومي', zh: '📅 每日利润', es: '📅 Ganancia Diaria', pt: '📅 Lucro Diário', ru: '📅 Ежедневная прибыль', hi: '📅 दैनिक लाभ', tr: '📅 Günlük Kar', id: '📅 Keuntungan Harian' },
        'manual_weekly_profit': { en: '📊 Weekly Profit (7 Days)', fa: '📊 سود هفتگی (۷ روز)', ar: '📊 الربح الأسبوعي (7 أيام)', zh: '📊 每周利润（7天）', es: '📊 Ganancia Semanal (7 Días)', pt: '📊 Lucro Semanal (7 Dias)', ru: '📊 Еженедельная прибыль (7 дней)', hi: '📊 साप्ताहिक लाभ (7 दिन)', tr: '📊 Haftalık Kar (7 Gün)', id: '📊 Keuntungan Mingguan (7 Hari)' },
        'manual_monthly_profit': { en: '📅 Monthly Profit (30 Days)', fa: '📅 سود ماهانه (۳۰ روز)', ar: '📅 الربح الشهري (30 يومًا)', zh: '📅 每月利润（30天）', es: '📅 Ganancia Mensual (30 Días)', pt: '📅 Lucro Mensal (30 Dias)', ru: '📅 Ежемесячная прибыль (30 дней)', hi: '📅 मासिक लाभ (30 दिन)', tr: '📅 Aylık Kar (30 Gün)', id: '📅 Keuntungan Bulanan (30 Hari)' },

        // ===== ماشین حساب کارمزد =====
        'fee_calculator': { en: 'Fee Calculator (Buy: 3% | Sell: 6%)', fa: 'ماشین حساب کارمزد (خرید: ۳٪ | فروش: ۶٪)', ar: 'حاسبة الرسوم (شراء: 3% | بيع: 6%)', zh: '费用计算器（买入：3% | 卖出：6%）', es: 'Calculadora de Tarifas (Comprar: 3% | Vender: 6%)', pt: 'Calculadora de Taxas (Comprar: 3% | Vender: 6%)', ru: 'Калькулятор комиссий (Покупка: 3% | Продажа: 6%)', hi: 'शुल्क कैलकुलेटर (खरीद: 3% | बेच: 6%)', tr: 'Ücret Hesaplayıcı (Alım: 3% | Satım: 6%)', id: 'Kalkulator Biaya (Beli: 3% | Jual: 6%)' },
        'fee_buy_calc': { en: 'Buy Calculator', fa: 'ماشین حساب خرید', ar: 'حاسبة الشراء', zh: '购买计算器', es: 'Calculadora de Compra', pt: 'Calculadora de Compra', ru: 'Калькулятор покупки', hi: 'खरीद कैलकुलेटर', tr: 'Alım Hesaplayıcı', id: 'Kalkulator Beli' },
        'fee_sell_calc': { en: 'Sell Calculator', fa: 'ماشین حساب فروش', ar: 'حاسبة البيع', zh: '出售计算器', es: 'Calculadora de Venta', pt: 'Calculadora de Venda', ru: 'Калькулятор продажи', hi: 'बेच कैलकुलेटर', tr: 'Satım Hesaplayıcı', id: 'Kalkulator Jual' },
        'fee_amount_usd': { en: '💰 Amount (USD)', fa: '💰 مبلغ (دلار)', ar: '💰 المبلغ (USD)', zh: '💰 金额 (USD)', es: '💰 Cantidad (USD)', pt: '💰 Quantia (USD)', ru: '💰 Сумма (USD)', hi: '💰 राशि (USD)', tr: '💰 Tutar (USD)', id: '💰 Jumlah (USD)' },
        'fee_amount_fit': { en: '🪙 Amount (FIT)', fa: '🪙 مقدار (FIT)', ar: '🪙 المبلغ (FIT)', zh: '🪙 数量 (FIT)', es: '🪙 Cantidad (FIT)', pt: '🪙 Quantia (FIT)', ru: '🪙 Количество (FIT)', hi: '🪙 राशि (FIT)', tr: '🪙 Tutar (FIT)', id: '🪙 Jumlah (FIT)' },
        'fee_you_receive': { en: 'You will receive', fa: 'دریافت خواهید کرد', ar: 'ستتلقى', zh: '您将收到', es: 'Recibirás', pt: 'Você receberá', ru: 'Вы получите', hi: 'आपको प्राप्त होगा', tr: 'Alacaksınız', id: 'Anda akan menerima' },
        'fee_current_price': { en: 'Current Price: ${price} USD', fa: 'قیمت فعلی: ${price} دلار', ar: 'السعر الحالي: ${price} USD', zh: '当前价格：${price} USD', es: 'Precio Actual: ${price} USD', pt: 'Preço Atual: ${price} USD', ru: 'Текущая цена: ${price} USD', hi: 'वर्तमान मूल्य: ${price} USD', tr: 'Güncel Fiyat: ${price} USD', id: 'Harga Saat Ini: ${price} USD' },

        // ===== خرید FIT =====
        'purchase_calculator': { en: 'FIT Purchase Calculator', fa: 'ماشین حساب خرید FIT', ar: 'حاسبة شراء FIT', zh: 'FIT购买计算器', es: 'Calculadora de Compra de FIT', pt: 'Calculadora de Compra de FIT', ru: 'Калькулятор покупки FIT', hi: 'FIT खरीद कैलकुलेटर', tr: 'FIT Alım Hesaplayıcı', id: 'Kalkulator Pembelian FIT' },
        'purchase_sub': { en: 'Calculate required ownership shares based on Double Infinity network plan + Estimated Rewards for ALL shares', fa: 'محاسبه سهام مالکیت مورد نیاز بر اساس طرح شبکه Double Infinity + پاداش تخمینی برای تمام سهام', ar: 'احسب حصص الملكية المطلوبة بناءً على خطة شبكة Double Infinity + المكافآت المقدرة لجميع الحصص', zh: '根据Double Infinity网络计划计算所需的所有权份额 + 所有份额的估计奖励', es: 'Calcule las acciones de propiedad requeridas según el plan de red Double Infinity + Recompensas estimadas para TODAS las acciones', pt: 'Calcule as ações de propriedade necessárias com base no plano de rede Double Infinity + Recompensas estimadas para TODAS as ações', ru: 'Рассчитайте необходимые доли владения на основе плана сети Double Infinity + Оценочные вознаграждения для ВСЕХ долей', hi: 'Double Infinity नेटवर्क योजना के आधार पर आवश्यक स्वामित्व शेयरों की गणना करें + सभी शेयरों के लिए अनुमानित पुरस्कार', tr: 'Double Infinity ağ planına göre gerekli sahiplik hisselerini hesaplayın + TÜM hisseler için tahmini ödüller', id: 'Hitung saham kepemilikan yang diperlukan berdasarkan rencana jaringan Double Infinity + Perkiraan Hadiah untuk SEMUA saham' },
        'purchase_fit_amount': { en: '🪙 FIT Amount to Buy', fa: '🪙 مقدار FIT برای خرید', ar: '🪙 كمية FIT للشراء', zh: '🪙 要购买的FIT数量', es: '🪙 Cantidad de FIT a Comprar', pt: '🪙 Quantidade de FIT para Comprar', ru: '🪙 Количество FIT для покупки', hi: '🪙 खरीदने के लिए FIT की मात्रा', tr: '🪙 Alınacak FIT Miktarı', id: '🪙 Jumlah FIT yang Akan Dibeli' },
        'purchase_fit_price': { en: '💰 Current FIT Price (DAI)', fa: '💰 قیمت فعلی FIT (DAI)', ar: '💰 سعر FIT الحالي (DAI)', zh: '💰 当前FIT价格 (DAI)', es: '💰 Precio Actual de FIT (DAI)', pt: '💰 Preço Atual do FIT (DAI)', ru: '💰 Текущая цена FIT (DAI)', hi: '💰 वर्तमान FIT मूल्य (DAI)', tr: '💰 Güncel FIT Fiyatı (DAI)', id: '💰 Harga FIT Saat Ini (DAI)' },
        'purchase_share_cost': { en: '💎 Ownership Share Cost (DAI)', fa: '💎 هزینه سهم مالکیت (DAI)', ar: '💎 تكلفة حصة الملكية (DAI)', zh: '💎 所有权份额成本 (DAI)', es: '💎 Costo de Acción de Propiedad (DAI)', pt: '💎 Custo da Ação de Propriedade (DAI)', ru: '💎 Стоимость доли владения (DAI)', hi: '💎 स्वामित्व शेयर लागत (DAI)', tr: '💎 Sahiplik Hissesi Maliyeti (DAI)', id: '💎 Biaya Saham Kepemilikan (DAI)' },
        'purchase_reward_per_point': { en: '💰 Reward Value Per Point ($)', fa: '💰 ارزش پاداش به ازای هر امتیاز (دلار)', ar: '💰 قيمة المكافأة لكل نقطة ($)', zh: '💰 每点奖励价值 ($)', es: '💰 Valor de Recompensa por Punto ($)', pt: '💰 Valor de Recompensa por Ponto ($)', ru: '💰 Стоимость вознаграждения за балл ($)', hi: '💰 प्रति प्वाइंट पुरस्कार मूल्य ($)', tr: '💰 Puan Başına Ödül Değeri ($)', id: '💰 Nilai Hadiah Per Poin ($)' },
        'purchase_with_plan': { en: '✅ With Double Infinity Network Plan', fa: '✅ با طرح شبکه Double Infinity', ar: '✅ مع خطة شبكة Double Infinity', zh: '✅ 使用Double Infinity网络计划', es: '✅ Con Plan de Red Double Infinity', pt: '✅ Com Plano de Rede Double Infinity', ru: '✅ С планом сети Double Infinity', hi: '✅ Double Infinity नेटवर्क योजना के साथ', tr: '✅ Double Infinity Ağ Planı ile', id: '✅ Dengan Rencana Jaringan Double Infinity' },
        'purchase_without_plan': { en: '❌ Without Double Infinity Plan (Direct)', fa: '❌ بدون طرح Double Infinity (مستقیم)', ar: '❌ بدون خطة Double Infinity (مباشر)', zh: '❌ 不使用Double Infinity计划（直接）', es: '❌ Sin Plan Double Infinity (Directo)', pt: '❌ Sem Plano Double Infinity (Direto)', ru: '❌ Без плана Double Infinity (Прямой)', hi: '❌ Double Infinity योजना के बिना (सीधा)', tr: '❌ Double Infinity Planı Olmadan (Doğrudan)', id: '❌ Tanpa Rencana Double Infinity (Langsung)' },
        'purchase_required_shares': { en: 'Required Shares', fa: 'سهام مورد نیاز', ar: 'الحصص المطلوبة', zh: '所需份额', es: 'Acciones Requeridas', pt: 'Ações Necessárias', ru: 'Требуемые доли', hi: 'आवश्यक शेयर', tr: 'Gerekli Hisseler', id: 'Saham yang Diperlukan' },
        'purchase_total_cost': { en: 'Total Cost for Shares (DAI)', fa: 'هزینه کل سهام (DAI)', ar: 'التكلفة الإجمالية للحصص (DAI)', zh: '份额总成本 (DAI)', es: 'Costo Total de Acciones (DAI)', pt: 'Custo Total das Ações (DAI)', ru: 'Общая стоимость долей (DAI)', hi: 'शेयरों की कुल लागत (DAI)', tr: 'Hisselerin Toplam Maliyeti (DAI)', id: 'Total Biaya Saham (DAI)' },
        'purchase_fit_received': { en: 'FIT Received (after 3% fee)', fa: 'FIT دریافت شده (پس از کارمزد ۳٪)', ar: 'FIT المستلم (بعد رسوم 3%)', zh: '收到的FIT（扣除3%费用后）', es: 'FIT Recibido (después de tarifa del 3%)', pt: 'FIT Recebido (após taxa de 3%)', ru: 'FIT получено (после комиссии 3%)', hi: 'प्राप्त FIT (3% शुल्क के बाद)', tr: 'Alınan FIT (%3 ücret sonrası)', id: 'FIT Diterima (setelah biaya 3%)' },
        'purchase_max_cap': { en: 'Max Purchase Cap (DAI)', fa: 'حداکثر سقف خرید (DAI)', ar: 'الحد الأقصى للشراء (DAI)', zh: '最大购买限额 (DAI)', es: 'Límite Máximo de Compra (DAI)', pt: 'Limite Máximo de Compra (DAI)', ru: 'Максимальный лимит покупки (DAI)', hi: 'अधिकतम खरीद सीमा (DAI)', tr: 'Maksimum Alım Limiti (DAI)', id: 'Batas Pembelian Maksimum (DAI)' },
        'purchase_min_side': { en: 'Min Side (members)', fa: 'حداقل سمت (اعضا)', ar: 'الحد الأدنى للجانب (الأعضاء)', zh: '最小分支（成员）', es: 'Lado Mínimo (miembros)', pt: 'Lado Mínimo (membros)', ru: 'Минимальная сторона (участники)', hi: 'न्यूनतम पक्ष (सदस्य)', tr: 'Min Taraf (üyeler)', id: 'Sisi Minimal (anggota)' },
        'purchase_total_cost_with': { en: 'Total Cost (Shares + FIT)', fa: 'هزینه کل (سهام + FIT)', ar: 'التكلفة الإجمالية (الحصص + FIT)', zh: '总成本（份额 + FIT）', es: 'Costo Total (Acciones + FIT)', pt: 'Custo Total (Ações + FIT)', ru: 'Общая стоимость (Доли + FIT)', hi: 'कुल लागत (शेयर + FIT)', tr: 'Toplam Maliyet (Hisseler + FIT)', id: 'Total Biaya (Saham + FIT)' },
        'purchase_rewards': { en: 'Estimated Rewards (All Shares)', fa: 'پاداش تخمینی (تمام سهام)', ar: 'المكافآت المقدرة (جميع الحصص)', zh: '估计奖励（所有份额）', es: 'Recompensas Estimadas (Todas las Acciones)', pt: 'Recompensas Estimadas (Todas as Ações)', ru: 'Оценочные вознаграждения (Все доли)', hi: 'अनुमानित पुरस्कार (सभी शेयर)', tr: 'Tahmini Ödüller (Tüm Hisseler)', id: 'Perkiraan Hadiah (Semua Saham)' },
        'purchase_reward_points': { en: 'Total Reward Points', fa: 'کل امتیازات پاداش', ar: 'إجمالي نقاط المكافأة', zh: '总奖励积分', es: 'Puntos de Recompensa Totales', pt: 'Pontos de Recompensa Totais', ru: 'Общее количество баллов вознаграждения', hi: 'कुल पुरस्कार अंक', tr: 'Toplam Ödül Puanı', id: 'Total Poin Hadiah' },
        'purchase_reward_per': { en: 'Reward Per Point ($)', fa: 'پاداش به ازای هر امتیاز (دلار)', ar: 'المكافأة لكل نقطة ($)', zh: '每点奖励 ($)', es: 'Recompensa por Punto ($)', pt: 'Recompensa por Ponto ($)', ru: 'Вознаграждение за балл ($)', hi: 'प्रति प्वाइंट पुरस्कार ($)', tr: 'Puan Başına Ödül ($)', id: 'Hadiah Per Poin ($)' },
        'purchase_total_reward': { en: 'Total Estimated Reward ($)', fa: 'کل پاداش تخمینی (دلار)', ar: 'إجمالي المكافأة المقدرة ($)', zh: '估计总奖励 ($)', es: 'Recompensa Total Estimada ($)', pt: 'Recompensa Total Estimada ($)', ru: 'Общая оценочная награда ($)', hi: 'कुल अनुमानित पुरस्कार ($)', tr: 'Toplam Tahmini Ödül ($)', id: 'Total Perkiraan Hadiah ($)' },
        'purchase_savings': { en: '💰 Save {amount} DAI with Double Infinity Plan!', fa: '💰 با طرح Double Infinity {amount} DAI صرفه‌جویی کنید!', ar: '💰 وفر {amount} DAI مع خطة Double Infinity!', zh: '💰 使用Double Infinity计划节省{amount} DAI！', es: '💰 ¡Ahorra {amount} DAI con el Plan Double Infinity!', pt: '💰 Economize {amount} DAI com o Plano Double Infinity!', ru: '💰 Экономьте {amount} DAI с планом Double Infinity!', hi: '💰 Double Infinity योजना के साथ {amount} DAI बचाएं!', tr: '💰 Double Infinity Planı ile {amount} DAI tasarruf edin!', id: '💰 Hemat {amount} DAI dengan Rencana Double Infinity!' },
        'purchase_reward_bonus': { en: '🎁 Earn ${amount} in Rewards with Double Infinity Plan!', fa: '🎁 با طرح Double Infinity ${amount} پاداش کسب کنید!', ar: '🎁 اكسب ${amount} في المكافآت مع خطة Double Infinity!', zh: '🎁 使用Double Infinity计划赚取${amount}奖励！', es: '🎁 ¡Gana ${amount} en Recompensas con el Plan Double Infinity!', pt: '🎁 Ganhe ${amount} em Recompensas com o Plano Double Infinity!', ru: '🎁 Заработайте ${amount} в виде вознаграждений с планом Double Infinity!', hi: '🎁 Double Infinity योजना के साथ ${amount} पुरस्कार अर्जित करें!', tr: '🎁 Double Infinity Planı ile ${amount} Ödül kazanın!', id: '🎁 Dapatkan ${amount} Hadiah dengan Rencana Double Infinity!' }
    };

    // ==================== متغیرها ====================
    let currentLanguage = 'en';
    let isRTL = false;

    // ==================== توابع اصلی ====================
    function getTranslation(key, lang) {
        const langCode = lang || currentLanguage;
        if (TRANSLATIONS[key] && TRANSLATIONS[key][langCode] !== undefined) {
            return TRANSLATIONS[key][langCode];
        }
        if (TRANSLATIONS[key] && TRANSLATIONS[key]['en'] !== undefined) {
            return TRANSLATIONS[key]['en'];
        }
        return key;
    }

    function getLanguageDirection(lang) {
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
        
        localStorage.setItem('fly-infinity-lang', lang);
        
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        updateLanguageButton();
        translatePage();
        
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    function loadSavedLanguage() {
        const saved = localStorage.getItem('fly-infinity-lang');
        if (saved && LANGUAGES.find(l => l.code === saved)) {
            currentLanguage = saved;
        } else {
            const browserLang = navigator.language || 'en';
            const shortLang = browserLang.split('-')[0];
            const supported = LANGUAGES.map(l => l.code);
            if (supported.includes(shortLang)) {
                currentLanguage = shortLang;
            }
        }
        isRTL = getLanguageDirection() === 'rtl';
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;
    }

    // ==================== دکمه زبان ====================
    function createLanguageSwitcher() {
        const btn = document.createElement('div');
        btn.id = 'fly-lang-switcher';
        btn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            cursor: pointer;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0F0F0F, #1a1a1a);
            border: 2px solid #D4AF37;
            box-shadow: 0 4px 20px rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            transition: all 0.3s ease;
            user-select: none;
            backdrop-filter: blur(10px);
            color: #D4AF37;
        `;
        
        const currentLang = LANGUAGES.find(l => l.code === currentLanguage);
        btn.innerHTML = currentLang ? currentLang.flag : '🌐';
        
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.borderColor = '#00C896';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            btn.style.borderColor = '#D4AF37';
        });
        
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
            border-radius: 16px;
            padding: 6px 4px;
            min-width: 180px;
            max-height: 320px;
            overflow-y: auto;
            display: none;
            flex-direction: column;
            gap: 2px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.8);
        `;
        
        LANGUAGES.forEach(lang => {
            const item = document.createElement('div');
            const isActive = currentLanguage === lang.code;
            item.style.cssText = `
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 7px 12px;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.2s ease;
                color: ${isActive ? '#D4AF37' : '#c0d0e8'};
                background: ${isActive ? 'rgba(212,175,55,0.08)' : 'transparent'};
                font-size: 13px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            `;
            item.innerHTML = `
                <span style="font-size: 18px;">${lang.flag}</span>
                <span style="font-weight: ${isActive ? '600' : '400'};">${lang.name}</span>
                ${isActive ? '<span style="margin-left: auto; color: #D4AF37;">✓</span>' : ''}
            `;
            
            item.addEventListener('mouseenter', () => {
                item.style.background = 'rgba(0,200,150,0.08)';
                item.style.color = '#00C896';
            });
            item.addEventListener('mouseleave', () => {
                const active = currentLanguage === lang.code;
                item.style.background = active ? 'rgba(212,175,55,0.08)' : 'transparent';
                item.style.color = active ? '#D4AF37' : '#c0d0e8';
            });
            
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                setLanguage(lang.code);
                menu.style.display = 'none';
                btn.innerHTML = lang.flag;
            });
            
            menu.appendChild(item);
        });
        
        document.body.appendChild(btn);
        document.body.appendChild(menu);
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        });
        
        document.addEventListener('click', () => {
            menu.style.display = 'none';
        });
        
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        window.__langBtn = btn;
        window.__langMenu = menu;
    }

    function updateLanguageButton() {
        const btn = document.getElementById('fly-lang-switcher');
        if (btn) {
            const currentLang = LANGUAGES.find(l => l.code === currentLanguage);
            btn.innerHTML = currentLang ? currentLang.flag : '🌐';
        }
        
        const menu = document.getElementById('fly-lang-menu');
        if (menu) {
            const items = menu.querySelectorAll('div');
            LANGUAGES.forEach((lang, index) => {
                if (items[index]) {
                    const isActive = currentLanguage === lang.code;
                    items[index].style.color = isActive ? '#D4AF37' : '#c0d0e8';
                    items[index].style.background = isActive ? 'rgba(212,175,55,0.08)' : 'transparent';
                    items[index].style.fontWeight = isActive ? '600' : '400';
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
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getTranslation(key);
            if (translation && translation !== key) {
                el.textContent = translation;
            }
        });
        
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translation = getTranslation(key);
            if (translation && translation !== key) {
                el.placeholder = translation;
            }
        });
        
        updateLanguageButton();
    }

    // ==================== راه‌اندازی ====================
    function initLanguageSwitcher() {
        loadSavedLanguage();
        createLanguageSwitcher();
        translatePage();
        
        const observer = new MutationObserver(() => {
            translatePage();
        });
        observer.observe(document.body, { childList: true, subtree: true });
        
        window.addEventListener('load', () => {
            setTimeout(translatePage, 300);
        });
        
        console.log('✅ Fly Infinity Language Switcher initialized');
    }

    // ==================== صادرات ====================
    window.FlyLang = {
        getTranslation,
        getCurrentLanguage,
        setLanguage,
        getLanguageDirection,
        LANGUAGES,
        translatePage
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
    } else {
        initLanguageSwitcher();
    }

})();
