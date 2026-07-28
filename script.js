/**
 * ============================================
 * MAJIO - С corsproxy.io
 * ============================================
 */

// ============================================
// КОНФИГУРАЦИЯ API
// ============================================
const API_CONFIG = {
    baseUrl: 'https://proxy.cors.sh/https://v2.prima.ee:9002/',
    superUserKey: 'qwerty121314QWERtYY567890ghjxk',
    accessKey: null,
    memberPath: null,
    currentMemberData: null,
    isAdmin: false,
    membersList: null
};

const DEV_MODE = false;

// ============================================
// ПЕРЕВОДЫ
// ============================================
const translations = {
    ru: {
        subtitle: 'Умный учёт в вашем доме',
        tab_submit: 'Счетчики',
        tab_history: 'История',
        tab_stats: 'Статистика',
        tab_settings: 'Настройки',
        empty_message: 'Нет показаний',
        delete_confirm: 'Удалить это показание?',
        deleted: 'Показание удалено',
        fill_fields: 'Введите показание!',
        negative_error: 'Показание не может быть отрицательным!',
        less_than_previous: 'Новое показание ({new}) не может быть меньше предыдущего ({prev})',
        equal_to_previous: 'Новое показание совпадает с предыдущим ({prev})',
        confirm_title: 'Внимание!',
        confirm_message: 'Вы уверены, что показания правильные? ({value})',
        stats_total: 'Всего показаний',
        stats_properties: 'Квартир',
        stats_meters: 'Счетчиков',
        stats_today: 'За сегодня',
        stats_consumption: 'Потребление по счетчикам',
        stats_no_data: 'Нет данных',
        settings_role: 'Пользователь Majio',
        settings_readings: 'показаний',
        settings_properties: 'квартир',
        settings_options: 'Настройки',
        settings_lang: 'Язык',
        settings_theme: 'Тема',
        settings_credit: '© 2026 — Умный учёт в вашем доме',
        theme_light: 'Светлая',
        theme_dark: 'Тёмная',
        lang_ru: 'Русский',
        lang_et: 'Эстонский',
        auth_login: 'Вход',
        auth_register: 'Регистрация',
        auth_username: 'Имя пользователя',
        auth_password: 'Пароль',
        auth_password_confirm: 'Подтвердите пароль',
        auth_login_btn: 'Войти',
        auth_register_btn: 'Зарегистрироваться',
        auth_login_success: 'Добро пожаловать, {name}!',
        auth_register_success: 'Регистрация успешна! Войдите в систему.',
        auth_login_error: 'Неверное имя пользователя или пароль',
        auth_register_error: 'Пользователь уже существует',
        auth_password_mismatch: 'Пароли не совпадают',
        auth_empty_fields: 'Заполните все поля',
        auth_welcome: 'Добро пожаловать, {name}!',
        dropdown_login: 'Вход',
        dropdown_register: 'Регистрация',
        dropdown_properties: 'Квартиры',
        dropdown_logout: 'Выйти',
        property_title: 'Моя квартира',
        property_title_admin: 'Моё товарищество',
        property_modal_title: 'Выбор квартиры',
        property_add: 'Добавить квартиру',
        property_add_title: 'Добавить квартиру',
        property_address_label: 'Адрес (ул. д-кв, город, индекс)',
        property_owner_label: 'Имя собственника',
        property_save: 'Сохранить',
        reading_previous: 'Предыдущие показания:',
        reading_new_label: 'Новые показания',
        reading_submit: 'Добавить показание',
        reading_history: 'История счетчика',
        th_date: 'Дата',
        th_meter: 'Счетчик',
        th_previous: 'Предыдущее',
        th_current: 'Новое',
        th_diff: 'Разница',
        month_usage: 'За месяц: {value}',
        month_no_data: 'Показания не поданы',
        meter_sent: 'Показания счетчика "{meter}" отправлены!',
        invalid_number: 'Введите корректное число',
        comma_replaced: 'Запятая заменена на точку',
        meter_day: 'Электричество день',
        meter_night: 'Электричество ночь',
        meter_water_cold: 'Холодная вода',
        meter_water_hot: 'Горячая вода',
        meter_gas: 'Газ',
        ads_repair_title: 'Ремонт квартир со скидкой 20%',
        ads_repair_sub: 'Только до конца месяца! Вызов мастера бесплатно',
        ads_water_title: 'Установка счётчиков воды',
        ads_water_sub: 'Профессиональная установка с гарантией от 1 года',
        ads_garden_title: 'Озеленение двора',
        ads_garden_sub: 'Поможем с выбором растений и их посадкой',
        ads_security_title: 'Система видеонаблюдения',
        ads_security_sub: 'Установка камер и настройка доступа через телефон',
        connection_error: 'Ошибка подключения к серверу',
        auth_required: 'Требуется авторизация',
        admin_panel: 'Панель администратора',
        select_member: 'Выберите квартиру',
        member_list: 'Список квартир',
        association_name: 'Товарищество',
        apartment: 'Квартира',
        members_count: 'Квартир в товариществе',
        switch_to_member: 'Переключиться на квартиру',
        switch_to_association: 'Переключиться на товарищество',
        current_member: 'Текущая квартира',
        no_members: 'Нет квартир в товариществе',
        admin_badge: 'АДМИН'
    },
    et: {
        subtitle: 'Tark arvestus teie kodus',
        tab_submit: 'Arvestid',
        tab_history: 'Ajalugu',
        tab_stats: 'Statistika',
        tab_settings: 'Seaded',
        empty_message: 'Näidud puuduvad',
        delete_confirm: 'Kas soovite selle näidu kustutada?',
        deleted: 'Näidud kustutatud',
        fill_fields: 'Sisestage näit!',
        negative_error: 'Näit ei saa olla negatiivne!',
        less_than_previous: 'Uus näit ({new}) ei saa olla väiksem kui eelmine ({prev})',
        equal_to_previous: 'Uus näit on sama mis eelmine ({prev})',
        confirm_title: 'Tähelepanu!',
        confirm_message: 'Kas olete kindel, et näidud on õiged? ({value})',
        stats_total: 'Näite kokku',
        stats_properties: 'Korterit',
        stats_meters: 'Arvestit',
        stats_today: 'Täna',
        stats_consumption: 'Tarbimine arvestite kaupa',
        stats_no_data: 'Andmed puuduvad',
        settings_role: 'Majio kasutaja',
        settings_readings: 'näitu',
        settings_properties: 'korterit',
        settings_options: 'Seaded',
        settings_lang: 'Keel',
        settings_theme: 'Teema',
        settings_credit: '© 2026 — Tark arvestus teie kodus',
        theme_light: 'Hele',
        theme_dark: 'Tume',
        lang_ru: 'Vene',
        lang_et: 'Eesti',
        auth_login: 'Logi sisse',
        auth_register: 'Registreeru',
        auth_username: 'Kasutajanimi',
        auth_password: 'Parool',
        auth_password_confirm: 'Kinnita parool',
        auth_login_btn: 'Logi sisse',
        auth_register_btn: 'Registreeru',
        auth_login_success: 'Tere tulemast, {name}!',
        auth_register_success: 'Registreerimine õnnestus! Logige sisse.',
        auth_login_error: 'Vale kasutajanimi või parool',
        auth_register_error: 'Kasutaja juba eksisteerib',
        auth_password_mismatch: 'Paroolid ei kattu',
        auth_empty_fields: 'Täitke kõik väljad',
        auth_welcome: 'Tere tulemast, {name}!',
        dropdown_login: 'Logi sisse',
        dropdown_register: 'Registreeru',
        dropdown_properties: 'Korterid',
        dropdown_logout: 'Logi välja',
        property_title: 'Minu korter',
        property_title_admin: 'Minu ühistu',
        property_modal_title: 'Vali korter',
        property_add: 'Lisa korter',
        property_add_title: 'Lisa korter',
        property_address_label: 'Aadress (tänav maja-korter, linn, indeks)',
        property_owner_label: 'Omaniku nimi',
        property_save: 'Salvesta',
        reading_previous: 'Eelmised näidud:',
        reading_new_label: 'Uued näidud',
        reading_submit: 'Lisa näit',
        reading_history: 'Arvesti ajalugu',
        th_date: 'Kuupäev',
        th_meter: 'Arvesti',
        th_previous: 'Eelmine',
        th_current: 'Uus',
        th_diff: 'Vahe',
        month_usage: 'Kuu jooksul: {value}',
        month_no_data: 'Näidud puuduvad',
        meter_sent: 'Arvesti "{meter}" näidud saadetud!',
        invalid_number: 'Sisestage korrektne number',
        comma_replaced: 'Koma asendati punktiga',
        meter_day: 'Elekter päev',
        meter_night: 'Elekter öö',
        meter_water_cold: 'Külm vesi',
        meter_water_hot: 'Soe vesi',
        meter_gas: 'Gaas',
        ads_repair_title: 'Korterite remont 20% soodsamalt',
        ads_repair_sub: 'Ainult kuu lõpuni! Meistri kutsumine tasuta',
        ads_water_title: 'Vee arvestite paigaldus',
        ads_water_sub: 'Professionaalne paigaldus garantiiga alates 1 aastast',
        ads_garden_title: 'Hoovi haljastus',
        ads_garden_sub: 'Aitame taimede valikul ja istutamisel',
        ads_security_title: 'Videovalvesüsteem',
        ads_security_sub: 'Kaamerate paigaldus ja juurdepääsu seadistamine telefoni kaudu',
        connection_error: 'Ühenduse viga serveriga',
        auth_required: 'Autentimine on vajalik',
        admin_panel: 'Administraatori paneel',
        select_member: 'Vali korter',
        member_list: 'Korterite nimekiri',
        association_name: 'Ühistu',
        apartment: 'Korter',
        members_count: 'Korterit ühistus',
        switch_to_member: 'Lülitu korterile',
        switch_to_association: 'Lülitu ühistule',
        current_member: 'Praegune korter',
        no_members: 'Ühistus pole kortereid',
        admin_badge: 'ADMIN'
    }
};

// ============================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ============================================
let currentLang = localStorage.getItem('majio_lang') || 'ru';
let currentTheme = localStorage.getItem('majio_theme') || 'light';
let currentUser = localStorage.getItem('majio_user') || null;
let selectedMeterTag = null;
let currentAnnouncement = 0;
let announcementInterval = null;
let currentMemberData = null;
let currentMemberPath = null;

// ============================================
// API ФУНКЦИИ
// ============================================

async function generateSignature() {
    if (!API_CONFIG.accessKey) {
        throw new Error('Нет ключа доступа');
    }
    const accessTime = Math.floor(Date.now() / 1000).toString();
    const message = accessTime + API_CONFIG.accessKey;
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return accessTime + "$" + hashHex;
}

async function apiRequest(endpoint, method = 'POST', data = null) {
    const url = API_CONFIG.baseUrl + endpoint;
    
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        console.log(`🌐 Запрос к API: ${url}`);
        const response = await fetch(url, options);
        
        if (!response.ok) {
            const text = await response.text();
            throw new Error(`HTTP ${response.status}: ${text.substring(0, 100)}`);
        }
        
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

async function fetchMemberData(path = null) {
    if (!path) path = API_CONFIG.memberPath;
    if (!path) throw new Error('Путь не указан');

    const signature = await generateSignature();
    const data = await apiRequest('association/member/get', 'POST', {
        path: path,
        signature: signature
    });

    API_CONFIG.currentMemberData = data;
    currentMemberData = data;
    currentMemberPath = path;
    return data;
}

async function fetchCounterData(tag) {
    const signature = await generateSignature();
    return await apiRequest('association/counter/get', 'POST', {
        path: API_CONFIG.memberPath,
        signature: signature,
        tag: tag
    });
}

async function submitReading(tag, currentValue) {
    const signature = await generateSignature();
    return await apiRequest('association/counter/modify', 'POST', {
        path: API_CONFIG.memberPath,
        signature: signature,
        tag: tag,
        current: Number(currentValue)
    });
}

async function loginAPI(path, accessKey) {
    API_CONFIG.memberPath = path;
    API_CONFIG.accessKey = accessKey;
    
    try {
        const data = await fetchMemberData(path);
        localStorage.setItem('majio_member_path', path);
        localStorage.setItem('majio_access_key', accessKey);
        
        API_CONFIG.isAdmin = data.permission === 2;
        if (API_CONFIG.isAdmin && data.members) {
            API_CONFIG.membersList = data.members;
        }
        return data;
    } catch (error) {
        API_CONFIG.memberPath = null;
        API_CONFIG.accessKey = null;
        throw error;
    }
}

async function switchMember(memberTag) {
    if (!API_CONFIG.isAdmin) return;
    
    let basePath = API_CONFIG.memberPath;
    if (basePath.includes('/')) {
        basePath = basePath.split('/')[0];
    }
    const newPath = basePath + '/' + memberTag;
    
    try {
        const data = await fetchMemberData(newPath);
        localStorage.setItem('majio_member_path', newPath);
        API_CONFIG.memberPath = newPath;
        await refreshUI();
        return data;
    } catch (error) {
        console.error('Error switching member:', error);
        throw error;
    }
}

async function switchToAssociation() {
    if (!API_CONFIG.isAdmin) return;
    
    const basePath = API_CONFIG.memberPath.split('/')[0];
    
    try {
        const data = await fetchMemberData(basePath);
        localStorage.setItem('majio_member_path', basePath);
        API_CONFIG.memberPath = basePath;
        await refreshUI();
        return data;
    } catch (error) {
        console.error('Error switching to association:', error);
        throw error;
    }
}

function logoutAPI() {
    API_CONFIG.accessKey = null;
    API_CONFIG.memberPath = null;
    API_CONFIG.currentMemberData = null;
    API_CONFIG.isAdmin = false;
    API_CONFIG.membersList = null;
    currentMemberData = null;
    currentMemberPath = null;
    localStorage.removeItem('majio_member_path');
    localStorage.removeItem('majio_access_key');
    localStorage.removeItem('majio_user');
    currentUser = null;
}

function isAuthenticated() {
    return API_CONFIG.accessKey !== null && API_CONFIG.memberPath !== null;
}

// ============================================
// ОБНОВЛЕНИЕ ИНТЕРФЕЙСА
// ============================================

async function refreshUI() {
    if (!isAuthenticated()) {
        showAuthRequired();
        return;
    }

    try {
        const data = await fetchMemberData();
        renderPropertyCard(data);
        renderMeters(data);
        renderTable(data);
        updateStatsPage(data);
        updateSettings(data);
        updateAuthUI();
        
        const adminPanel = document.getElementById('adminPanel');
        if (API_CONFIG.isAdmin) {
            renderAdminPanel(data);
        } else {
            if (adminPanel) adminPanel.remove();
        }
    } catch (error) {
        console.error('Error refreshing UI:', error);
        showNotification(translations[currentLang].connection_error, 'error');
        if (error.message.includes('403') || error.message.includes('401')) {
            logoutAPI();
            showAuthRequired();
        }
    }
}

function showAuthRequired() {
    const grid = document.getElementById('metersGrid');
    if (grid) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px;">
                <i class="fas fa-lock" style="font-size: 48px; color: var(--text-muted); margin-bottom: 16px; display: block;"></i>
                <p style="color: var(--text-secondary);">${translations[currentLang].auth_required}</p>
                <button onclick="openAuthModal('login')" style="margin-top: 16px; padding: 10px 24px; background: var(--primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-sign-in-alt"></i> ${translations[currentLang].auth_login_btn}
                </button>
            </div>
        `;
    }
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) adminPanel.remove();
    updateAuthUI();
}

// ============================================
// ОТОБРАЖЕНИЕ КАРТОЧКИ
// ============================================
function renderPropertyCard(data) {
    if (!data) return;
    
    const card = document.getElementById('propertyCard');
    const titleEl = document.getElementById('propertyTitle');
    const addressEl = document.getElementById('propertyAddressText');
    const ownerEl = document.getElementById('propertyOwnerText');
    const t = translations[currentLang];
    
    if (API_CONFIG.isAdmin) {
        card.classList.add('admin-card');
        titleEl.textContent = t.property_title_admin || 'Моё товарищество';
        let badge = card.querySelector('.admin-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'admin-badge';
            badge.innerHTML = '<i class="fas fa-crown"></i> ' + (t.admin_badge || 'АДМИН');
            titleEl.parentNode.appendChild(badge);
        }
    } else {
        card.classList.remove('admin-card');
        titleEl.textContent = t.property_title || 'Моя квартира';
        const badge = card.querySelector('.admin-badge');
        if (badge) badge.remove();
    }
    
    let displayName = data.name || 'Без названия';
    let displayOwner = data.owner || 'Владелец не указан';
    
    if (data.type === 2 && data.name) {
        displayName = 'Квартира ' + data.name;
    }
    
    if (addressEl) addressEl.textContent = displayName;
    if (ownerEl) ownerEl.textContent = displayOwner;
}

// ============================================
// ОТОБРАЖЕНИЕ СЧЕТЧИКОВ
// ============================================
function renderMeters(data) {
    const grid = document.getElementById('metersGrid');
    if (!grid) return;
    
    if (!data || !data.counters || Object.keys(data.counters).length === 0) {
        grid.innerHTML = `<p class="empty-message">${translations[currentLang].empty_message}</p>`;
        return;
    }

    const t = translations[currentLang];
    const counterTypes = {
        1: { icon: 'fa-sun', type: 'electricity-day', name: 'meter_day' },
        2: { icon: 'fa-moon', type: 'electricity-night', name: 'meter_night' },
        3: { icon: 'fa-fire-flame-curved', type: 'gas', name: 'meter_gas' },
        4: { icon: 'fa-fire', type: 'water-hot', name: 'meter_water_hot' },
        5: { icon: 'fa-droplet', type: 'water-cold', name: 'meter_water_cold' }
    };

    grid.innerHTML = Object.entries(data.counters).map(([tag, counter]) => {
        const typeInfo = counterTypes[counter.type] || { icon: 'fa-bolt', type: 'electricity-day', name: 'meter' };
        const meterName = t[typeInfo.name] || counter.name || tag;
        const currentValue = counter.current || 0;
        const previousValue = counter.previous || 0;
        const diff = currentValue - previousValue;
        
        let lastDiff = 0;
        if (counter.past && counter.past.length > 0) {
            const lastPast = counter.past[counter.past.length - 1];
            lastDiff = currentValue - lastPast;
        }
        
        const hasMonthData = diff > 0 || lastDiff > 0;
        const displayDiff = diff > 0 ? diff : lastDiff;
        
        let monthClass = 'meter-month';
        let monthText = '';
        
        if (hasMonthData && displayDiff > 0) {
            monthClass = 'meter-month sent';
            monthText = t.month_usage.replace('{value}', displayDiff.toFixed(2));
        } else {
            monthClass = 'meter-month no-data';
            monthText = t.month_no_data;
        }
        
        return `
            <button class="meter-btn ${typeInfo.type}" data-tag="${tag}">
                <div class="meter-top">
                    <span class="meter-name">${meterName}</span>
                    ${displayDiff === 0 ? '<span class="meter-warning"><i class="fas fa-exclamation-triangle"></i></span>' : ''}
                </div>
                <i class="fas ${typeInfo.icon} meter-bg-icon"></i>
                <div class="meter-bottom">
                    <span class="meter-value">${Number(currentValue).toFixed(2)}</span>
                    <span class="meter-unit">ед.</span>
                    <span class="${monthClass}"><i class="fas fa-chart-line"></i> ${monthText}</span>
                </div>
            </button>
        `;
    }).join('');

    grid.querySelectorAll('.meter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tag = this.dataset.tag;
            openReadingModal(tag);
        });
    });
}

// ============================================
// ТАБЛИЦА ИСТОРИИ
// ============================================
function renderTable(data, filterTag = null) {
    const body = document.getElementById('readingsBody');
    if (!body) return;
    
    if (!data || !data.counters) {
        body.innerHTML = `<tr><td colspan="6" class="empty-message">${translations[currentLang].empty_message}</td></tr>`;
        return;
    }

    const t = translations[currentLang];
    const counterTypes = {
        1: { icon: 'fa-sun', name: 'meter_day' },
        2: { icon: 'fa-moon', name: 'meter_night' },
        3: { icon: 'fa-fire-flame-curved', name: 'meter_gas' },
        4: { icon: 'fa-fire', name: 'meter_water_hot' },
        5: { icon: 'fa-droplet', name: 'meter_water_cold' }
    };

    let readings = [];
    
    Object.entries(data.counters).forEach(([tag, counter]) => {
        if (filterTag && tag !== filterTag) return;
        
        const typeInfo = counterTypes[counter.type] || { icon: 'fa-bolt', name: 'meter' };
        const meterName = t[typeInfo.name] || counter.name || tag;
        
        const past = counter.past || [];
        if (past.length > 0) {
            const allReadings = [...past, counter.current];
            allReadings.forEach((value, index) => {
                const prevValue = index > 0 ? allReadings[index - 1] : counter.previous || 0;
                readings.push({
                    date: new Date(Date.now() - (allReadings.length - index) * 86400000).toLocaleString(),
                    meterName: meterName,
                    meterIcon: typeInfo.icon,
                    previousValue: prevValue,
                    newValue: value,
                    diff: value - prevValue,
                    id: `${tag}_${index}`
                });
            });
        } else {
            readings.push({
                date: new Date().toLocaleString(),
                meterName: meterName,
                meterIcon: typeInfo.icon,
                previousValue: counter.previous || 0,
                newValue: counter.current || 0,
                diff: (counter.current || 0) - (counter.previous || 0),
                id: `${tag}_current`
            });
        }
    });

    if (readings.length === 0) {
        body.innerHTML = `<tr><td colspan="6" class="empty-message">${t.empty_message}</td></tr>`;
        return;
    }

    readings.sort((a, b) => b.newValue - a.newValue);

    body.innerHTML = readings.map(r => `
        <tr>
            <td>${r.date}</td>
            <td><i class="fas ${r.meterIcon}"></i> ${r.meterName}</td>
            <td>${r.previousValue.toFixed(2)}</td>
            <td><strong>${r.newValue.toFixed(2)}</strong></td>
            <td>${r.diff.toFixed(2)}</td>
            <td>
                <button class="delete-btn" data-id="${r.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    `).join('');

    body.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm(translations[currentLang].delete_confirm)) {
                showNotification(translations[currentLang].deleted, 'success');
            }
        });
    });
}

// ============================================
// АДМИН-ПАНЕЛЬ
// ============================================
function renderAdminPanel(data) {
    let adminPanel = document.getElementById('adminPanel');
    
    if (!adminPanel) {
        adminPanel = document.createElement('div');
        adminPanel.id = 'adminPanel';
        adminPanel.className = 'admin-panel';
        const propertyCard = document.getElementById('propertyCard');
        if (propertyCard) {
            propertyCard.parentNode.insertBefore(adminPanel, propertyCard.nextSibling);
        }
    }

    const t = translations[currentLang];
    const members = data.members || {};
    const memberKeys = Object.keys(members);
    const isAssociation = data.type === 0;
    const isMemberView = data.type === 2;
    
    let html = `
        <div class="admin-panel-header">
            <h3><i class="fas fa-users-cog"></i> ${t.admin_panel}</h3>
            <span class="admin-badge-large"><i class="fas fa-crown"></i> ${t.admin_badge || 'АДМИН'}</span>
        </div>
    `;

    if (isAssociation && memberKeys.length > 0) {
        html += `
            <div style="margin-bottom: 10px;">
                <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">
                    <i class="fas fa-door-open"></i> ${t.members_count}: ${memberKeys.length}
                </div>
                <div class="admin-member-list">
        `;
        
        memberKeys.forEach(tag => {
            const member = members[tag];
            const isActive = currentMemberPath === API_CONFIG.memberPath + '/' + tag;
            const roleIcon = member.permission === 2 ? '<i class="fas fa-crown" style="color: var(--admin-primary);"></i>' : 
                           member.permission === 1 ? '<i class="fas fa-user" style="color: var(--success);"></i>' : 
                           '<i class="fas fa-eye" style="color: var(--text-muted);"></i>';
            const roleText = member.permission === 2 ? 'Админ' : 
                           member.permission === 1 ? 'Жилец' : 'Гость';
            
            html += `
                <button class="admin-member-item ${isActive ? 'active' : ''}" data-tag="${tag}">
                    <div class="member-info">
                        <i class="fas fa-door-open" style="color: var(--admin-primary);"></i>
                        <span>${member.name || 'Квартира ' + tag}</span>
                        <span class="member-tag">${tag}</span>
                    </div>
                    <span class="member-role" style="font-size: 11px; color: var(--text-muted);">
                        ${roleIcon} ${roleText}
                    </span>
                </button>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    if (isMemberView) {
        html += `
            <button class="admin-back-btn" id="backToAssociationBtn">
                <i class="fas fa-arrow-left"></i> 
                ${t.switch_to_association || 'Переключиться на товарищество'}
            </button>
        `;
    }
    
    html += `
        <div class="admin-path-info">
            <i class="fas fa-link"></i> ${t.current_member}: ${currentMemberPath || API_CONFIG.memberPath}
        </div>
    `;
    
    adminPanel.innerHTML = html;
    
    adminPanel.querySelectorAll('.admin-member-item').forEach(btn => {
        btn.addEventListener('click', async function() {
            const tag = this.dataset.tag;
            try {
                await switchMember(tag);
                showNotification('Переключено на квартиру ' + tag, 'success');
            } catch (error) {
                showNotification('Ошибка переключения: ' + error.message, 'error');
            }
        });
    });
    
    const backBtn = document.getElementById('backToAssociationBtn');
    if (backBtn) {
        backBtn.addEventListener('click', async function() {
            try {
                await switchToAssociation();
                showNotification('Переключено на товарищество', 'success');
            } catch (error) {
                showNotification('Ошибка: ' + error.message, 'error');
            }
        });
    }
}

// ============================================
// СТАТИСТИКА
// ============================================
function updateStatsPage(data) {
    if (!data) return;
    
    const t = translations[currentLang];
    const counters = data.counters || {};
    const counterKeys = Object.keys(counters);
    
    let totalReadings = 0;
    const consumption = {};

    Object.entries(counters).forEach(([tag, counter]) => {
        const past = counter.past || [];
        totalReadings += past.length;
        const current = counter.current || 0;
        const previous = counter.previous || 0;
        const diff = current - previous;
        consumption[tag] = diff > 0 ? diff : 0;
    });

    document.getElementById('statsTotal').textContent = totalReadings;
    document.getElementById('statsProperties').textContent = 1;
    document.getElementById('statsMeters').textContent = counterKeys.length;
    document.getElementById('statsToday').textContent = 0;

    const consumptionEl = document.getElementById('statsConsumption');
    if (consumptionEl) {
        const counterTypes = {
            1: { icon: 'fa-sun' },
            2: { icon: 'fa-moon' },
            3: { icon: 'fa-fire-flame-curved' },
            4: { icon: 'fa-fire' },
            5: { icon: 'fa-droplet' }
        };

        consumptionEl.innerHTML = Object.entries(counters).map(([tag, counter]) => {
            const typeInfo = counterTypes[counter.type] || { icon: 'fa-bolt' };
            const meterName = translations[currentLang][`meter_${tag}`] || counter.name || tag;
            return `
                <div class="consumption-item">
                    <span class="consumption-icon"><i class="fas ${typeInfo.icon}" style="color:var(--meter-color);"></i></span>
                    <div class="consumption-info">
                        <span class="consumption-label">${meterName}</span>
                        <span class="consumption-value">${(consumption[tag] || 0).toFixed(2)} ед.</span>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ============================================
// НАСТРОЙКИ
// ============================================
function updateSettings(data) {
    const t = translations[currentLang];
    
    const nameEl = document.getElementById('settingsName');
    const roleEl = document.getElementById('settingsRole');
    const readingsEl = document.getElementById('settingsReadings');
    const propertiesEl = document.getElementById('settingsProperties');
    const langDisplay = document.getElementById('settingsLangDisplay');
    const themeDisplay = document.getElementById('settingsThemeDisplay');
    
    if (nameEl) {
        nameEl.textContent = isAuthenticated() ? (data?.name || 'Пользователь') : 'Гость';
    }
    if (roleEl) {
        const role = data?.permission === 2 ? 'Администратор 👑' : 
                     data?.permission === 1 ? 'Жилец 👤' : 
                     data?.permission === 0 ? 'Гость 👁️' : 'Пользователь';
        roleEl.textContent = isAuthenticated() ? role : t.settings_role;
    }
    
    const totalReadings = data?.counters ? Object.values(data.counters).reduce((sum, c) => sum + (c.past?.length || 0), 0) : 0;
    if (readingsEl) readingsEl.textContent = totalReadings;
    if (propertiesEl) propertiesEl.textContent = data ? 1 : 0;
    if (langDisplay) langDisplay.textContent = currentLang === 'et' ? t.lang_et : t.lang_ru;
    if (themeDisplay) themeDisplay.textContent = currentTheme === 'dark' ? t.theme_dark : t.theme_light;
}

// ============================================
// АВТОРИЗАЦИЯ
// ============================================
function updateAuthUI() {
    const dropdownLogin = document.getElementById('dropdownLogin');
    const dropdownRegister = document.getElementById('dropdownRegister');
    const dropdownLogout = document.getElementById('dropdownLogout');
    const dropdownProperties = document.getElementById('dropdownProperties');
    const profileToggle = document.getElementById('profileToggle');
    const icon = profileToggle?.querySelector('i');
    
    if (isAuthenticated()) {
        if (dropdownLogin) dropdownLogin.style.display = 'none';
        if (dropdownRegister) dropdownRegister.style.display = 'none';
        if (dropdownLogout) dropdownLogout.style.display = 'flex';
        if (dropdownProperties) {
            dropdownProperties.style.display = 'flex';
            if (API_CONFIG.isAdmin) {
                dropdownProperties.innerHTML = `<i class="fas fa-crown"></i><span>Квартиры</span>`;
                dropdownProperties.className = 'dropdown-item admin-item';
            } else {
                dropdownProperties.innerHTML = `<i class="fas fa-building"></i><span>Моя квартира</span>`;
                dropdownProperties.className = 'dropdown-item';
            }
        }
        if (icon) icon.className = 'fas fa-user-check';
        if (profileToggle) {
            if (API_CONFIG.isAdmin) {
                profileToggle.className = 'icon-btn auth-btn admin-mode';
            } else {
                profileToggle.className = 'icon-btn auth-btn';
                profileToggle.style.background = '#2ECC71';
                profileToggle.style.color = 'white';
            }
        }
    } else {
        if (dropdownLogin) dropdownLogin.style.display = 'flex';
        if (dropdownRegister) dropdownRegister.style.display = 'flex';
        if (dropdownLogout) dropdownLogout.style.display = 'none';
        if (dropdownProperties) {
            dropdownProperties.style.display = 'flex';
            dropdownProperties.innerHTML = `<i class="fas fa-building"></i><span>${translations[currentLang].dropdown_properties}</span>`;
            dropdownProperties.className = 'dropdown-item';
        }
        if (icon) icon.className = 'fas fa-user';
        if (profileToggle) {
            profileToggle.className = 'icon-btn auth-btn';
            profileToggle.style.background = '#34495E';
            profileToggle.style.color = 'white';
        }
    }
}

// ============================================
// МОДАЛЬНЫЕ ОКНА
// ============================================
function openAuthModal(mode = 'login') {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const statusEl = document.getElementById('authStatus');
    if (statusEl) {
        statusEl.textContent = '';
        statusEl.className = '';
    }
    
    if (mode === 'register') {
        const tab = document.querySelector('.auth-tab[data-auth-tab="register"]');
        if (tab) tab.click();
    } else {
        const tab = document.querySelector('.auth-tab[data-auth-tab="login"]');
        if (tab) tab.click();
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// МОДАЛЬНОЕ ОКНО ПОКАЗАНИЙ
// ============================================
async function openReadingModal(tag) {
    if (!isAuthenticated()) {
        showNotification(translations[currentLang].auth_required, 'error');
        return;
    }

    try {
        const counterData = await fetchCounterData(tag);
        if (!counterData) {
            showNotification('Счетчик не найден', 'error');
            return;
        }

        selectedMeterTag = tag;
        
        const modal = document.getElementById('readingModal');
        if (!modal) return;
        
        const t = translations[currentLang];
        const counterTypes = {
            1: { icon: 'fa-sun', type: 'electricity-day' },
            2: { icon: 'fa-moon', type: 'electricity-night' },
            3: { icon: 'fa-fire-flame-curved', type: 'gas' },
            4: { icon: 'fa-fire', type: 'water-hot' },
            5: { icon: 'fa-droplet', type: 'water-cold' }
        };
        
        const typeInfo = counterTypes[counterData.type] || { icon: 'fa-bolt', type: 'electricity-day' };
        const meterName = t[`meter_${tag}`] || counterData.name || tag;
        
        const iconEl = document.getElementById('readingModalIcon');
        const nameEl = document.getElementById('readingModalName');
        const idEl = document.getElementById('readingModalId');
        const previousEl = document.getElementById('readingPreviousValue');
        const input = document.getElementById('readingInput');
        
        if (iconEl) {
            iconEl.className = `reading-modal-icon ${typeInfo.type}`;
            iconEl.innerHTML = `<i class="fas ${typeInfo.icon}"></i>`;
        }
        if (nameEl) nameEl.textContent = meterName;
        if (idEl) idEl.textContent = `ID: ${tag}`;
        if (previousEl) previousEl.textContent = (counterData.current || 0).toFixed(2);
        if (input) {
            input.value = '';
            input.placeholder = ' ';
            const formGroup = input.closest('.form-group');
            if (formGroup) {
                formGroup.classList.remove('has-success', 'has-error');
            }
            input.classList.remove('error');
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => input?.focus(), 300);
    } catch (error) {
        console.error('Error opening reading modal:', error);
        showNotification('Ошибка загрузки данных счетчика', 'error');
    }
}

function closeReadingModal() {
    const modal = document.getElementById('readingModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// ОБРАБОТЧИК ОТПРАВКИ ПОКАЗАНИЙ
// ============================================
async function handleReadingSubmit() {
    if (!isAuthenticated()) {
        showNotification(translations[currentLang].auth_required, 'error');
        return;
    }

    const input = document.getElementById('readingInput');
    if (!input) return;
    
    const rawValue = input.value.trim();
    const formGroup = input.closest('.form-group');
    const t = translations[currentLang];
    
    if (formGroup) {
        formGroup.classList.remove('has-success', 'has-error');
    }
    input.classList.remove('error');
    
    if (rawValue === '') {
        showNotification(t.fill_fields, 'error');
        if (formGroup) formGroup.classList.add('has-error');
        input.classList.add('error');
        return;
    }
    
    let processedValue = rawValue;
    if (processedValue.includes(',')) {
        processedValue = processedValue.replace(',', '.');
        showNotification(t.comma_replaced, 'warning');
    }
    
    const value = parseFloat(processedValue);
    
    if (isNaN(value)) {
        showNotification(t.invalid_number, 'error');
        if (formGroup) formGroup.classList.add('has-error');
        input.classList.add('error');
        return;
    }
    
    if (value < 0) {
        showNotification(t.negative_error, 'error');
        if (formGroup) formGroup.classList.add('has-error');
        input.classList.add('error');
        return;
    }
    
    try {
        const counterData = await fetchCounterData(selectedMeterTag);
        const currentValue = counterData.current || 0;
        
        if (value < currentValue) {
            showNotification(t.less_than_previous
                .replace('{new}', value.toFixed(2))
                .replace('{prev}', currentValue.toFixed(2)), 'error');
            if (formGroup) formGroup.classList.add('has-error');
            input.classList.add('error');
            return;
        }
        
        if (value === currentValue) {
            showNotification(t.equal_to_previous.replace('{prev}', currentValue.toFixed(2)), 'error');
            if (formGroup) formGroup.classList.add('has-error');
            input.classList.add('error');
            return;
        }
        
        await submitReading(selectedMeterTag, value);
        
        closeReadingModal();
        showNotification(t.meter_sent.replace('{meter}', counterData.name || selectedMeterTag), 'success');
        await refreshUI();
        
    } catch (error) {
        console.error('Error submitting reading:', error);
        showNotification('Ошибка отправки показаний: ' + error.message, 'error');
    }
}

// ============================================
// ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА / ТЕМЫ
// ============================================
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });
    
    document.getElementById('htmlRoot').setAttribute('lang', lang === 'et' ? 'et' : 'ru');
    localStorage.setItem('majio_lang', lang);
    currentLang = lang;
    refreshUI();
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('majio_theme', theme);
    currentTheme = theme;
    
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        const icon = themeBtn.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    const metaColor = document.getElementById('themeColor');
    if (metaColor) {
        metaColor.content = theme === 'dark' ? '#121212' : '#F5F7FA';
    }
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === 'tab-' + tabId);
    });
    if ((tabId === 'stats' || tabId === 'settings') && isAuthenticated()) {
        refreshUI();
    }
}

// ============================================
// УВЕДОМЛЕНИЯ
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    let icon = '';
    if (type === 'success') icon = '<i class="fas fa-check-circle"></i>';
    else if (type === 'error') icon = '<i class="fas fa-exclamation-circle"></i>';
    else if (type === 'warning') icon = '<i class="fas fa-exclamation-triangle"></i>';
    
    notification.innerHTML = `${icon} ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-20px) scale(0.95)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// ОБРАБОТЧИКИ СОБЫТИЙ
// ============================================

document.getElementById('profileToggle')?.addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('dropdownMenu').classList.toggle('active');
});

document.addEventListener('click', function() {
    document.getElementById('dropdownMenu')?.classList.remove('active');
});

document.getElementById('dropdownLogin')?.addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('active');
    openAuthModal('login');
});

document.getElementById('dropdownRegister')?.addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('active');
    openAuthModal('register');
});

document.getElementById('dropdownProperties')?.addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('active');
    if (API_CONFIG.isAdmin) {
        const adminPanel = document.getElementById('adminPanel');
        if (adminPanel) {
            adminPanel.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

document.getElementById('dropdownLogout')?.addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('active');
    logoutAPI();
    showNotification('Выход выполнен', 'warning');
    showAuthRequired();
    updateAuthUI();
});

document.getElementById('authCloseBtn')?.addEventListener('click', closeAuthModal);
document.getElementById('authModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeAuthModal();
});

document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const mode = this.dataset.authTab;
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.auth-pane').forEach(p => p.classList.remove('active'));
        const pane = document.getElementById('auth-' + mode);
        if (pane) pane.classList.add('active');
        const title = document.getElementById('authTitle');
        if (title) title.textContent = this.textContent;
        const status = document.getElementById('authStatus');
        if (status) {
            status.textContent = '';
            status.className = '';
        }
    });
});

document.getElementById('authForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const t = translations[currentLang];
    const activeTab = document.querySelector('.auth-tab.active');
    const mode = activeTab ? activeTab.dataset.authTab : 'login';
    const statusEl = document.getElementById('authStatus');
    
    if (statusEl) {
        statusEl.textContent = '';
        statusEl.className = '';
    }
    
    if (mode === 'login') {
        const path = document.getElementById('loginPath').value.trim();
        const key = document.getElementById('loginKey').value.trim();
        
        if (!path || !key) {
            if (statusEl) {
                statusEl.textContent = 'Введите путь и ключ доступа';
                statusEl.className = 'error';
            }
            return;
        }
        
        try {
            const data = await loginAPI(path, key);
            if (statusEl) {
                statusEl.textContent = t.auth_login_success.replace('{name}', data.name || 'Пользователь');
                statusEl.className = 'success';
            }
            currentUser = data.name || 'Пользователь';
            localStorage.setItem('majio_user', currentUser);
            await refreshUI();
            setTimeout(closeAuthModal, 1000);
        } catch (error) {
            if (statusEl) {
                statusEl.textContent = 'Ошибка входа: ' + error.message;
                statusEl.className = 'error';
            }
        }
    } else {
        if (statusEl) {
            statusEl.textContent = 'Регистрация через API пока не поддерживается';
            statusEl.className = 'error';
        }
    }
});

document.getElementById('themeToggle')?.addEventListener('click', function() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    updateSettings(currentMemberData);
});

document.getElementById('langToggle')?.addEventListener('click', function() {
    const newLang = currentLang === 'et' ? 'ru' : 'et';
    applyTranslations(newLang);
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        switchTab(this.dataset.tab);
    });
});

document.getElementById('readingCloseBtn')?.addEventListener('click', closeReadingModal);
document.getElementById('readingModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeReadingModal();
});

document.getElementById('readingSubmitBtn')?.addEventListener('click', handleReadingSubmit);

document.getElementById('readingInput')?.addEventListener('input', function(e) {
    let value = this.value.replace(/[^0-9,.]/g, '');
    if (value !== this.value) {
        this.value = value;
    }
    
    if (value.includes('.')) {
        const parts = value.split('.');
        if (parts[1] && parts[1].length > 2) {
            parts[1] = parts[1].slice(0, 2);
            this.value = parts[0] + '.' + parts[1];
        }
    }
    
    const formGroup = this.closest('.form-group');
    if (formGroup) {
        formGroup.classList.remove('has-error');
    }
    this.classList.remove('error');
});

document.getElementById('readingInput')?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleReadingSubmit();
    }
});

document.getElementById('readingHistoryBtn')?.addEventListener('click', function() {
    if (!selectedMeterTag) return;
    closeReadingModal();
    switchTab('history');
    refreshUI();
});

document.getElementById('confirmModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeConfirmModal();
});

function closeConfirmModal() {
    const modal = document.getElementById('confirmModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// КАРУСЕЛЬ ОБЪЯВЛЕНИЙ
// ============================================
function initAnnouncements() {
    const items = document.querySelectorAll('.announcement-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('announcementPrevBtn');
    const nextBtn = document.getElementById('announcementNextBtn');
    
    if (items.length === 0) return;
    
    function showAnnouncement(index) {
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        if (items[index]) items[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        currentAnnouncement = index;
    }
    
    function nextAnnouncement() {
        const next = (currentAnnouncement + 1) % items.length;
        showAnnouncement(next);
    }
    
    function prevAnnouncement() {
        const prev = (currentAnnouncement - 1 + items.length) % items.length;
        showAnnouncement(prev);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            prevAnnouncement();
            resetAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            nextAnnouncement();
            resetAutoPlay();
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.stopPropagation();
            showAnnouncement(index);
            resetAutoPlay();
        });
    });
    
    function startAutoPlay() {
        if (announcementInterval) clearInterval(announcementInterval);
        announcementInterval = setInterval(nextAnnouncement, 5000);
    }
    
    function resetAutoPlay() {
        if (announcementInterval) {
            clearInterval(announcementInterval);
            announcementInterval = setInterval(nextAnnouncement, 5000);
        }
    }
    
    showAnnouncement(0);
    startAutoPlay();
}

// ============================================
// КАРУСЕЛЬ РЕКЛАМЫ
// ============================================
let adsInterval = null;
let currentAd = 0;

function initAdsSlider() {
    const slides = document.querySelectorAll('.ads-slide');
    if (slides.length === 0) return;
    
    function showAd(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (slides[index]) slides[index].classList.add('active');
        currentAd = index;
    }
    
    function nextAd() {
        const next = (currentAd + 1) % slides.length;
        showAd(next);
    }
    
    function startAdsAutoPlay() {
        if (adsInterval) clearInterval(adsInterval);
        adsInterval = setInterval(nextAd, 5000);
    }
    
    showAd(0);
    startAdsAutoPlay();
}

// ============================================
// СТРАНИЦА ДЕТАЛЬНОГО ОБЪЯВЛЕНИЯ
// ============================================
const announcementData = [
    {
        icon: 'fa-triangle-exclamation',
        title: 'Отключение воды',
        date: '15.07.2026 — 20.07.2026',
        text: `
            <p>Уважаемые жители!</p>
            <p>В связи с плановыми ремонтными работами на центральной теплотрассе, с <strong>15 июля по 20 июля 2026 года</strong> будет временно отключена подача горячей воды во все дома нашего жилого комплекса.</p>
            <p><strong>Что нужно знать:</strong></p>
            <ul>
                <li>Отключение начнется в <strong>09:00 15 июля</strong></li>
                <li>Подача воды возобновится <strong>18:00 20 июля</strong></li>
                <li>Просим запастись водой на этот период</li>
                <li>В случае аварийных ситуаций звонить в аварийную службу по телефону <strong>+372 123 4567</strong></li>
            </ul>
            <p><strong>Важно!</strong> После возобновления подачи воды возможны временные перебои и появление мутной воды. Рекомендуем сливать воду до появления чистой.</p>
            <p>Приносим извинения за доставленные неудобства. Спасибо за понимание!</p>
            <p style="margin-top:12px; color:var(--text-muted); font-size:12px; text-align:right;">С уважением, <br>Управляющая компания</p>
        `
    },
    {
        icon: 'fa-wrench',
        title: 'Ремонт лифта',
        date: '10.07.2026 — 12.07.2026',
        text: `
            <p>Уважаемые жители!</p>
            <p>С <strong>10 по 12 июля 2026 года</strong> будет проводиться плановое техническое обслуживание лифтов в нашем доме.</p>
            <p><strong>График работ:</strong></p>
            <ul>
                <li><strong>10 июля:</strong> 1-й подъезд (09:00 - 18:00)</li>
                <li><strong>11 июля:</strong> 2-й подъезд (09:00 - 18:00)</li>
                <li><strong>12 июля:</strong> 3-й подъезд (09:00 - 18:00)</li>
            </ul>
            <p>Просим жителей заранее спланировать свои дела и пользоваться лестницей в указанные дни.</p>
            <p>Приносим извинения за временные неудобства.</p>
            <p style="margin-top:12px; color:var(--text-muted); font-size:12px; text-align:right;">С уважением, <br>Управляющая компания</p>
        `
    },
    {
        icon: 'fa-tree',
        title: 'Озеленение двора',
        date: '25.07.2026, 10:00',
        text: `
            <p>Уважаемые жители!</p>
            <p>Приглашаем всех желающих на <strong>субботник по озеленению двора</strong>, который состоится <strong>25 июля 2026 года в 10:00</strong>.</p>
            <p><strong>Что будем делать:</strong></p>
            <ul>
                <li>Посадка новых деревьев и кустарников</li>
                <li>Разбивка цветников и клумб</li>
                <li>Установка новых скамеек и урн</li>
                <li>Обновление детской площадки</li>
            </ul>
            <p><strong>Что нужно взять с собой:</strong></p>
            <ul>
                <li>Рабочие перчатки</li>
                <li>Садовые инструменты (лопаты, грабли)</li>
                <li>Хорошее настроение!</li>
            </ul>
            <p>Ждем всех! Вместе сделаем наш двор уютнее и красивее!</p>
            <p style="margin-top:12px; color:var(--text-muted); font-size:12px; text-align:right;">С уважением, <br>Совет дома</p>
        `
    }
];

function openAnnouncementDetail(index) {
    const data = announcementData[index];
    if (!data) return;
    
    const detail = document.getElementById('announcementDetail');
    document.getElementById('detailIcon').innerHTML = `<i class="fas ${data.icon}"></i>`;
    document.getElementById('detailTitle').textContent = data.title;
    document.getElementById('detailDate').innerHTML = `<i class="far fa-calendar-alt"></i> <span>${data.date}</span>`;
    document.getElementById('detailText').innerHTML = data.text;
    
    detail.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAnnouncementDetail() {
    const detail = document.getElementById('announcementDetail');
    detail.classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('announcementDetailBack')?.addEventListener('click', closeAnnouncementDetail);
document.getElementById('announcementDetailClose')?.addEventListener('click', closeAnnouncementDetail);
document.getElementById('announcementDetail')?.addEventListener('click', function(e) {
    if (e.target === this) closeAnnouncementDetail();
});

document.querySelectorAll('.announcement-item').forEach(item => {
    item.addEventListener('click', function() {
        const index = parseInt(this.dataset.id);
        if (!isNaN(index)) {
            openAnnouncementDetail(index);
        }
    });
    item.style.cursor = 'pointer';
});

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
async function initApp() {
    console.log('🚀 Запуск Majio...');
    console.log(`🌐 Прокси: corsproxy.io`);
    
    const savedPath = localStorage.getItem('majio_member_path');
    const savedKey = localStorage.getItem('majio_access_key');
    const savedUser = localStorage.getItem('majio_user');
    
    if (savedPath && savedKey) {
        API_CONFIG.memberPath = savedPath;
        API_CONFIG.accessKey = savedKey;
        if (savedUser) currentUser = savedUser;
        
        try {
            await refreshUI();
        } catch (error) {
            console.error('Auto-login failed:', error);
            logoutAPI();
            showAuthRequired();
        }
    } else {
        showAuthRequired();
    }
    
    applyTheme(currentTheme);
    applyTranslations(currentLang);
    
    setTimeout(initAnnouncements, 100);
    setTimeout(initAdsSlider, 150);
    
    console.log('🏠 Majio v0.26 - corsproxy.io');
    console.log(`🌓 Theme: ${currentTheme}, Language: ${currentLang}`);
    console.log(`🔑 Authenticated: ${isAuthenticated()}`);
    if (isAuthenticated()) {
        console.log(`📍 Path: ${API_CONFIG.memberPath}`);
        console.log(`👑 Admin: ${API_CONFIG.isAdmin}`);
    }
}

document.addEventListener('DOMContentLoaded', initApp);