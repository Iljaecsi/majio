/**
 * ============================================
 * MAJIO v0.10
 * ============================================
 */

// ============================================
// ПЕРЕВОДЫ
// ============================================
const translations = {
    ru: {
        subtitle: 'Умный учёт в вашем доме',
        readings: 'показаний',
        apartments: 'квартир',
        tab_submit: 'Счетчики',
        tab_history: 'История',
        tab_stats: 'Статистика',
        tab_profile: 'Профиль',
        submit_all: 'Отправить все показания',
        submit_status_ok: 'Все показания отправлены',
        submit_status_warning: 'Не отправлены показания: {count}',
        nav_submit: 'Счетчики',
        nav_history: 'История',
        nav_stats: 'Статистика',
        nav_profile: 'Профиль',
        empty_message: 'Нет показаний',
        delete_confirm: 'Удалить это показание?',
        submitted: 'Показания успешно поданы!',
        deleted: 'Показание удалено',
        fill_fields: 'Заполните все поля!',
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
        profile_role: 'Пользователь Majio',
        profile_readings: 'показаний',
        profile_properties: 'квартир',
        profile_settings: 'Настройки',
        profile_lang: 'Язык',
        profile_theme: 'Тема',
        profile_credit: '© 2026 — Умный учёт в вашем доме',
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
        dropdown_properties: 'Моя недвижимость',
        dropdown_logout: 'Выйти',
        property_title: 'Моя недвижимость',
        property_modal_title: 'Моя недвижимость',
        property_add: 'Добавить квартиру',
        property_add_title: 'Добавить квартиру',
        property_address_label: 'Адрес (ул. д-кв, город, индекс)',
        property_owner_label: 'Имя собственника',
        property_save: 'Сохранить',
        meters_title: 'Счетчики',
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
        month_no_data: 'Показания не поданы'
    },
    et: {
        subtitle: 'Tark arvestus teie kodus',
        readings: 'näitu',
        apartments: 'korterit',
        tab_submit: 'Arvestid',
        tab_history: 'Ajalugu',
        tab_stats: 'Statistika',
        tab_profile: 'Profiil',
        submit_all: 'Saada kõik näidud',
        submit_status_ok: 'Kõik näidud saadetud',
        submit_status_warning: 'Saatmata näidud: {count}',
        nav_submit: 'Arvestid',
        nav_history: 'Ajalugu',
        nav_stats: 'Statistika',
        nav_profile: 'Profiil',
        empty_message: 'Näidud puuduvad',
        delete_confirm: 'Kas soovite selle näidu kustutada?',
        submitted: 'Näidud edukalt esitatud!',
        deleted: 'Näidud kustutatud',
        fill_fields: 'Täitke kõik väljad!',
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
        profile_role: 'Majio kasutaja',
        profile_readings: 'näitu',
        profile_properties: 'korterit',
        profile_settings: 'Seaded',
        profile_lang: 'Keel',
        profile_theme: 'Teema',
        profile_credit: '© 2026 — Tark arvestus teie kodus',
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
        dropdown_properties: 'Minu kinnisvara',
        dropdown_logout: 'Logi välja',
        property_title: 'Minu kinnisvara',
        property_modal_title: 'Minu kinnisvara',
        property_add: 'Lisa korter',
        property_add_title: 'Lisa korter',
        property_address_label: 'Aadress (tänav maja-korter, linn, indeks)',
        property_owner_label: 'Omaniku nimi',
        property_save: 'Salvesta',
        meters_title: 'Arvestid',
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
        month_no_data: 'Näidud puuduvad'
    }
};

// ============================================
// НАСТРОЙКИ
// ============================================
let currentLang = localStorage.getItem('majio_lang') || 'ru';
let currentTheme = localStorage.getItem('majio_theme') || 'light';
let currentUser = localStorage.getItem('majio_user') || null;
let currentProperty = null;
let selectedMeter = null;
let pendingReadings = {};
let confirmCallback = null;

// ============================================
// ДАННЫЕ ПО УМОЛЧАНИЮ
// ============================================
const DEFAULT_PROPERTY = {
    id: 'prop_001',
    address: 'Kangelaste 41-38, Narva, 20607',
    owner: 'Иванов Иван Иванович'
};

const DEFAULT_METERS = [
    { id: 'meter_001', name: 'Электричество (дневной)', icon: 'fa-bolt', unit: 'кВт·ч', type: 'electricity-day', value: 245.3, hasWarning: true },
    { id: 'meter_002', name: 'Электричество (льготный)', icon: 'fa-bolt', unit: 'кВт·ч', type: 'electricity-night', value: 123.7, hasWarning: false },
    { id: 'meter_003', name: 'Холодная вода', icon: 'fa-droplet', unit: 'м³', type: 'water-cold', value: 56.2, hasWarning: true },
    { id: 'meter_004', name: 'Горячая вода', icon: 'fa-droplet', unit: 'м³', type: 'water-hot', value: 34.8, hasWarning: false },
    { id: 'meter_005', name: 'Газ', icon: 'fa-fire-flame-curved', unit: 'м³', type: 'gas', value: 12.5, hasWarning: true }
];

// ============================================
// ЗАГРУЗКА/СОХРАНЕНИЕ
// ============================================
function loadData() {
    const data = localStorage.getItem('majio_data');
    if (data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            return null;
        }
    }
    return null;
}

function saveData(data) {
    localStorage.setItem('majio_data', JSON.stringify(data));
}

function getProperties() {
    const data = loadData();
    if (data && data.properties && data.properties.length > 0) {
        return data.properties;
    }
    const defaultData = {
        properties: [
            { 
                ...DEFAULT_PROPERTY, 
                meters: DEFAULT_METERS.map(m => ({ ...m })), 
                readings: [] 
            }
        ],
        currentPropertyId: DEFAULT_PROPERTY.id
    };
    saveData(defaultData);
    return defaultData.properties;
}

function getCurrentProperty() {
    const data = loadData();
    if (!data) return null;
    const prop = data.properties.find(p => p.id === data.currentPropertyId);
    if (!prop && data.properties.length > 0) {
        data.currentPropertyId = data.properties[0].id;
        saveData(data);
        return data.properties[0];
    }
    return prop || null;
}

function saveProperty(property) {
    const data = loadData();
    if (!data) return;
    const index = data.properties.findIndex(p => p.id === property.id);
    if (index !== -1) {
        data.properties[index] = property;
    } else {
        data.properties.push(property);
    }
    saveData(data);
}

function switchProperty(propertyId) {
    const data = loadData();
    if (!data) return;
    data.currentPropertyId = propertyId;
    saveData(data);
    currentProperty = getCurrentProperty();
    pendingReadings = {};
    refreshUI();
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
        metaColor.content = theme === 'dark' ? '#0D0D0D' : '#F8F9FA';
    }
}

// ============================================
// ОБНОВЛЕНИЕ ИНТЕРФЕЙСА
// ============================================
function refreshUI() {
    renderPropertyCard();
    renderMeters();
    renderTable();
    updateStats();
    updateStatsPage();
    updateProfile();
    updateAuthUI();
    updateSubmitStatus();
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === 'tab-' + tabId);
    });
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.tab === tabId);
    });
    if (tabId === 'stats') updateStatsPage();
    if (tabId === 'profile') updateProfile();
}

// ============================================
// УПРАВЛЕНИЕ АВТОРИЗАЦИЕЙ
// ============================================
function getUsers() {
    const data = localStorage.getItem('majio_users');
    return data ? JSON.parse(data) : {};
}

function registerUser(username, password) {
    const users = getUsers();
    if (users[username]) return { success: false, error: 'auth_register_error' };
    users[username] = password;
    localStorage.setItem('majio_users', JSON.stringify(users));
    return { success: true };
}

function loginUser(username, password) {
    const users = getUsers();
    if (users[username] && users[username] === password) {
        currentUser = username;
        localStorage.setItem('majio_user', username);
        return { success: true };
    }
    return { success: false, error: 'auth_login_error' };
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('majio_user');
    pendingReadings = {};
    refreshUI();
}

function isAuthenticated() {
    return currentUser !== null;
}

function updateAuthUI() {
    const dropdownLogin = document.getElementById('dropdownLogin');
    const dropdownRegister = document.getElementById('dropdownRegister');
    const dropdownLogout = document.getElementById('dropdownLogout');
    const profileToggle = document.getElementById('profileToggle');
    const icon = profileToggle.querySelector('i');
    
    if (isAuthenticated()) {
        dropdownLogin.style.display = 'none';
        dropdownRegister.style.display = 'none';
        dropdownLogout.style.display = 'flex';
        icon.className = 'fas fa-user-check';
        profileToggle.style.background = 'var(--primary)';
        profileToggle.style.color = 'white';
    } else {
        dropdownLogin.style.display = 'flex';
        dropdownRegister.style.display = 'flex';
        dropdownLogout.style.display = 'none';
        icon.className = 'fas fa-user';
        profileToggle.style.background = 'var(--primary)';
        profileToggle.style.color = 'white';
    }
}

// ============================================
// ДРОПДАУН
// ============================================
document.getElementById('profileToggle').addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('dropdownMenu').classList.toggle('active');
});

document.addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('active');
});

document.getElementById('dropdownLogin').addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('active');
    openAuthModal('login');
});

document.getElementById('dropdownRegister').addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('active');
    openAuthModal('register');
});

document.getElementById('dropdownProperties').addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('active');
    openPropertyModal();
});

document.getElementById('dropdownLogout').addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('active');
    logoutUser();
    showNotification('Выход выполнен', 'warning');
});

// ============================================
// КАРТОЧКА НЕДВИЖИМОСТИ
// ============================================
function renderPropertyCard() {
    const prop = getCurrentProperty();
    if (!prop) return;
    
    document.getElementById('propertyAddress').innerHTML = `<i class="fas fa-map-pin"></i><span>${prop.address}</span>`;
    document.getElementById('propertyOwner').innerHTML = `<i class="fas fa-user"></i><span>${prop.owner}</span>`;
}

// ============================================
// МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ
// ============================================
function openAuthModal(mode = 'login') {
    const modal = document.getElementById('authModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('authStatus').textContent = '';
    document.getElementById('authStatus').className = '';
    
    if (mode === 'register') {
        document.querySelector('.auth-tab[data-auth-tab="register"]').click();
    } else {
        document.querySelector('.auth-tab[data-auth-tab="login"]').click();
    }
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('authCloseBtn').addEventListener('click', closeAuthModal);
document.getElementById('authModal').addEventListener('click', function(e) {
    if (e.target === this) closeAuthModal();
});

document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const mode = this.dataset.authTab;
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.auth-pane').forEach(p => p.classList.remove('active'));
        document.getElementById('auth-' + mode).classList.add('active');
        document.getElementById('authTitle').textContent = this.textContent;
        document.getElementById('authStatus').textContent = '';
        document.getElementById('authStatus').className = '';
    });
});

document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const t = translations[currentLang];
    const activeTab = document.querySelector('.auth-tab.active');
    const mode = activeTab ? activeTab.dataset.authTab : 'login';
    const statusEl = document.getElementById('authStatus');
    
    statusEl.textContent = '';
    statusEl.className = '';
    
    if (mode === 'login') {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        if (!username || !password) {
            statusEl.textContent = t.auth_empty_fields;
            statusEl.className = 'error';
            return;
        }
        const result = loginUser(username, password);
        if (result.success) {
            statusEl.textContent = t.auth_login_success.replace('{name}', username);
            statusEl.className = 'success';
            refreshUI();
            setTimeout(closeAuthModal, 1000);
        } else {
            statusEl.textContent = t.auth_login_error;
            statusEl.className = 'error';
        }
    } else {
        const username = document.getElementById('registerUsername').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('registerPasswordConfirm').value;
        if (!username || !password || !confirm) {
            statusEl.textContent = t.auth_empty_fields;
            statusEl.className = 'error';
            return;
        }
        if (password !== confirm) {
            statusEl.textContent = t.auth_password_mismatch;
            statusEl.className = 'error';
            return;
        }
        const result = registerUser(username, password);
        if (result.success) {
            statusEl.textContent = t.auth_register_success;
            statusEl.className = 'success';
            document.querySelector('.auth-tab[data-auth-tab="login"]').click();
            document.getElementById('loginUsername').value = username;
            document.getElementById('loginPassword').value = '';
        } else {
            statusEl.textContent = t.auth_register_error;
            statusEl.className = 'error';
        }
    }
});

// ============================================
// МОДАЛЬНОЕ ОКНО НЕДВИЖИМОСТИ
// ============================================
function openPropertyModal() {
    const modal = document.getElementById('propertyModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderPropertyList();
}

function closePropertyModal() {
    document.getElementById('propertyModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('propertyCloseBtn').addEventListener('click', closePropertyModal);
document.getElementById('propertyModal').addEventListener('click', function(e) {
    if (e.target === this) closePropertyModal();
});

function renderPropertyList() {
    const data = loadData();
    if (!data) return;
    const list = document.getElementById('propertyList');
    list.innerHTML = data.properties.map(p => `
        <div class="property-list-item" data-id="${p.id}">
            <div class="property-info">
                <span class="address">${p.address}</span>
                <span class="owner">${p.owner}</span>
            </div>
            ${p.id === data.currentPropertyId ? '<i class="fas fa-check-circle property-check"></i>' : ''}
        </div>
    `).join('');
    
    list.querySelectorAll('.property-list-item').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.dataset.id;
            switchProperty(id);
            closePropertyModal();
            showNotification('Недвижимость изменена', 'success');
        });
    });
}

document.getElementById('propertyAddBtn').addEventListener('click', function() {
    closePropertyModal();
    document.getElementById('propertyAddModal').classList.add('active');
    document.body.style.overflow = 'hidden';
});

document.getElementById('propertyAddCloseBtn').addEventListener('click', function() {
    document.getElementById('propertyAddModal').classList.remove('active');
    document.body.style.overflow = '';
});

document.getElementById('propertyAddModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.getElementById('propertySaveBtn').addEventListener('click', function() {
    const address = document.getElementById('newPropertyAddress').value.trim();
    const owner = document.getElementById('newPropertyOwner').value.trim();
    const t = translations[currentLang];
    
    if (!address || !owner) {
        showNotification(t.fill_fields, 'error');
        return;
    }
    
    const data = loadData();
    if (!data) return;
    
    const newProperty = {
        id: 'prop_' + Date.now(),
        address: address,
        owner: owner,
        meters: DEFAULT_METERS.map(m => ({ ...m })),
        readings: []
    };
    
    data.properties.push(newProperty);
    data.currentPropertyId = newProperty.id;
    saveData(data);
    
    document.getElementById('propertyAddModal').classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('newPropertyAddress').value = '';
    document.getElementById('newPropertyOwner').value = '';
    
    pendingReadings = {};
    refreshUI();
    showNotification('✅ Недвижимость добавлена!', 'success');
});

// ============================================
// СЧЕТЧИКИ
// ============================================
function renderMeters() {
    const prop = getCurrentProperty();
    if (!prop) return;
    
    const grid = document.getElementById('metersGrid');
    if (!grid) return;
    
    if (!prop.meters || prop.meters.length === 0) {
        grid.innerHTML = `<p class="empty-message">Нет счетчиков</p>`;
        return;
    }
    
    const t = translations[currentLang];
    
    grid.innerHTML = prop.meters.map(meter => {
        const value = (meter.value !== undefined && meter.value !== null) ? meter.value : 0;
        const hasPending = pendingReadings[meter.id] !== undefined;
        const displayValue = hasPending ? pendingReadings[meter.id] : value;
        
        const showWarning = !hasPending && meter.hasWarning === true;
        
        let monthUsage = 0;
        let hasMonthData = false;
        if (prop.readings && prop.readings.length > 0) {
            const meterReadings = prop.readings.filter(r => r.meterId === meter.id);
            if (meterReadings.length > 0) {
                const sorted = meterReadings.sort((a, b) => b.timestamp - a.timestamp);
                const last = sorted[0];
                monthUsage = last.diff || 0;
                hasMonthData = true;
            }
        }
        
        const monthText = hasMonthData 
            ? t.month_usage.replace('{value}', monthUsage.toFixed(1))
            : t.month_no_data;
        const monthClass = hasMonthData ? 'meter-month' : 'meter-month no-data';
        
        return `
            <button class="meter-btn ${meter.type || 'electricity-day'}" data-id="${meter.id}">
                <div class="meter-top">
                    <span class="meter-name">${meter.name || 'Счетчик'}</span>
                    ${showWarning ? '<span class="meter-warning"><i class="fas fa-exclamation-triangle"></i></span>' : ''}
                    ${hasPending ? '<span class="meter-pending"><i class="fas fa-pen"></i></span>' : ''}
                </div>
                <i class="fas ${meter.icon || 'fa-bolt'} meter-bg-icon"></i>
                <div class="meter-bottom">
                    <span class="meter-value">${Number(displayValue).toFixed(1)}</span>
                    <span class="meter-unit">${meter.unit || ''}</span>
                    <span class="${monthClass}"><i class="fas fa-chart-line"></i> ${monthText}</span>
                </div>
            </button>
        `;
    }).join('');
    
    grid.querySelectorAll('.meter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            openReadingModal(id);
        });
    });
}

// ============================================
// СТАТУС ОТПРАВКИ (НЕЖНЫЙ)
// ============================================
function updateSubmitStatus() {
    const prop = getCurrentProperty();
    if (!prop) return;
    
    const pendingCount = Object.keys(pendingReadings).length;
    const badge = document.getElementById('warningBadge');
    const warningCount = document.getElementById('warningCount');
    const status = document.getElementById('submitStatus');
    const t = translations[currentLang];
    
    if (pendingCount > 0) {
        badge.style.display = 'flex';
        warningCount.textContent = pendingCount;
        status.className = 'submit-status warning';
        status.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${t.submit_status_warning.replace('{count}', pendingCount)}`;
        status.classList.remove('hidden');
    } else {
        badge.style.display = 'none';
        status.className = 'submit-status';
        status.innerHTML = `<i class="fas fa-check-circle"></i> ${t.submit_status_ok}`;
        status.classList.remove('hidden');
    }
}

// ============================================
// МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ
// ============================================
function showConfirmModal(title, message, callback) {
    const modal = document.getElementById('confirmModal');
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    confirmCallback = callback;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeConfirmModal() {
    document.getElementById('confirmModal').classList.remove('active');
    document.body.style.overflow = '';
    confirmCallback = null;
}

document.getElementById('confirmCancel').addEventListener('click', function() {
    closeConfirmModal();
});

document.getElementById('confirmOk').addEventListener('click', function() {
    if (confirmCallback) {
        confirmCallback();
    }
    closeConfirmModal();
});

document.getElementById('confirmModal').addEventListener('click', function(e) {
    if (e.target === this) closeConfirmModal();
});

// ============================================
// ОТПРАВКА ВСЕХ ПОКАЗАНИЙ
// ============================================
document.getElementById('submitAllBtn').addEventListener('click', function() {
    const prop = getCurrentProperty();
    if (!prop) return;
    
    const pendingKeys = Object.keys(pendingReadings);
    if (pendingKeys.length === 0) {
        showNotification('Нет новых показаний для отправки', 'warning');
        return;
    }
    
    const t = translations[currentLang];
    let count = 0;
    
    pendingKeys.forEach(meterId => {
        const meter = prop.meters.find(m => m.id === meterId);
        if (meter) {
            const newValue = pendingReadings[meterId];
            const reading = {
                id: 'read_' + Date.now() + '_' + count,
                meterId: meter.id,
                meterName: meter.name,
                meterType: meter.type,
                meterIcon: meter.icon,
                previousValue: meter.value,
                newValue: newValue,
                diff: newValue - meter.value,
                date: new Date().toLocaleString(currentLang === 'et' ? 'et-EE' : 'ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                timestamp: Date.now()
            };
            
            meter.value = newValue;
            meter.hasWarning = false;
            if (!prop.readings) prop.readings = [];
            prop.readings.push(reading);
            count++;
        }
    });
    
    pendingReadings = {};
    saveProperty(prop);
    refreshUI();
    showNotification(`✅ ${t.submitted} (${count} показаний)`, 'success');
});

// ============================================
// МОДАЛЬНОЕ ОКНО ПОКАЗАНИЙ
// ============================================
function openReadingModal(meterId) {
    const prop = getCurrentProperty();
    if (!prop) return;
    
    const meter = prop.meters.find(m => m.id === meterId);
    if (!meter) return;
    
    selectedMeter = meter;
    
    const modal = document.getElementById('readingModal');
    const icon = document.getElementById('readingModalIcon');
    const name = document.getElementById('readingModalName');
    const idEl = document.getElementById('readingModalId');
    const previous = document.getElementById('readingPreviousValue');
    const input = document.getElementById('readingInput');
    
    const currentValue = pendingReadings[meter.id] !== undefined ? pendingReadings[meter.id] : meter.value;
    
    icon.className = `reading-modal-icon ${meter.type || 'electricity-day'}`;
    icon.innerHTML = `<i class="fas ${meter.icon || 'fa-bolt'}"></i>`;
    name.textContent = meter.name || 'Счетчик';
    idEl.textContent = `ID: ${meter.id.slice(-3)}`;
    previous.textContent = currentValue.toFixed(1);
    input.value = '';
    input.min = 0;
    input.placeholder = `Введите значение > ${currentValue.toFixed(1)}`;
    input.step = "0.1";
    
    input.classList.remove('error');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 300);
}

function closeReadingModal() {
    document.getElementById('readingModal').classList.remove('active');
    document.body.style.overflow = '';
    selectedMeter = null;
}

document.getElementById('readingCloseBtn').addEventListener('click', closeReadingModal);
document.getElementById('readingModal').addEventListener('click', function(e) {
    if (e.target === this) closeReadingModal();
});

// ============================================
// ОБРАБОТЧИК ДОБАВЛЕНИЯ ПОКАЗАНИЯ
// ============================================
document.getElementById('readingSubmitBtn').addEventListener('click', function() {
    const prop = getCurrentProperty();
    if (!prop || !selectedMeter) return;
    
    const input = document.getElementById('readingInput');
    const value = parseFloat(input.value);
    const t = translations[currentLang];
    
    const currentValue = pendingReadings[selectedMeter.id] !== undefined 
        ? pendingReadings[selectedMeter.id] 
        : selectedMeter.value;
    
    if (input.value.trim() === '') {
        showNotification(t.fill_fields, 'error');
        input.classList.add('error');
        return;
    }
    
    if (isNaN(value)) {
        showNotification('⚠️ Введите число', 'error');
        input.classList.add('error');
        return;
    }
    
    if (value < 0) {
        showNotification(t.negative_error, 'error');
        input.classList.add('error');
        return;
    }
    
    if (value < currentValue) {
        showNotification(t.less_than_previous.replace('{new}', value.toFixed(1)).replace('{prev}', currentValue.toFixed(1)), 'error');
        input.classList.add('error');
        return;
    }
    
    if (value === currentValue) {
        showNotification(t.equal_to_previous.replace('{prev}', currentValue.toFixed(1)), 'error');
        input.classList.add('error');
        return;
    }
    
    if (value - currentValue > 1000) {
        showConfirmModal(
            t.confirm_title,
            t.confirm_message.replace('{value}', value.toFixed(1)),
            function() {
                pendingReadings[selectedMeter.id] = value;
                input.classList.remove('error');
                closeReadingModal();
                refreshUI();
                showNotification(`📝 Показание ${value.toFixed(1)} добавлено в очередь`, 'success');
            }
        );
        return;
    }
    
    pendingReadings[selectedMeter.id] = value;
    input.classList.remove('error');
    closeReadingModal();
    refreshUI();
    showNotification(`📝 Показание ${value.toFixed(1)} добавлено в очередь`, 'success');
});

document.getElementById('readingHistoryBtn').addEventListener('click', function() {
    if (!selectedMeter) return;
    closeReadingModal();
    switchTab('history');
    renderTable(selectedMeter.id);
});

// ============================================
// ТАБЛИЦА ИСТОРИИ
// ============================================
function renderTable(filterMeterId = null) {
    const prop = getCurrentProperty();
    if (!prop) {
        document.getElementById('readingsBody').innerHTML = `<tr><td colspan="6" class="empty-message">Нет данных</td></tr>`;
        return;
    }
    
    let readings = prop.readings || [];
    if (filterMeterId) {
        readings = readings.filter(r => r.meterId === filterMeterId);
    }
    
    const t = translations[currentLang];
    const body = document.getElementById('readingsBody');
    
    if (readings.length === 0) {
        body.innerHTML = `<tr><td colspan="6" class="empty-message">${t.empty_message}</td></tr>`;
        return;
    }
    
    readings.sort((a, b) => b.timestamp - a.timestamp);
    
    body.innerHTML = readings.map(r => `
        <tr>
            <td>${r.date}</td>
            <td><i class="fas ${r.meterIcon}"></i> ${r.meterName}</td>
            <td>${r.previousValue.toFixed(1)}</td>
            <td><strong>${r.newValue.toFixed(1)}</strong></td>
            <td>${r.diff.toFixed(1)}</td>
            <td>
                <button class="delete-btn" data-id="${r.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    `).join('');
    
    body.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            const t = translations[currentLang];
            if (confirm(t.delete_confirm)) {
                const prop = getCurrentProperty();
                if (prop) {
                    prop.readings = prop.readings.filter(r => r.id !== id);
                    saveProperty(prop);
                    refreshUI();
                    showNotification(t.deleted, 'success');
                }
            }
        });
    });
}

// ============================================
// СТАТИСТИКА
// ============================================
function updateStats() {
    const prop = getCurrentProperty();
    if (!prop) return;
    const stats = getStats(prop);
    document.getElementById('totalReadings').textContent = stats.total;
    document.getElementById('totalApartments').textContent = 1;
}

function getStats(prop) {
    const readings = prop.readings || [];
    const today = new Date().toDateString();
    const todayReadings = readings.filter(r => new Date(r.timestamp).toDateString() === today);
    
    const totals = {};
    (prop.meters || []).forEach(m => {
        totals[m.id] = 0;
    });
    readings.forEach(r => {
        if (totals[r.meterId] !== undefined) {
            totals[r.meterId] += r.diff || 0;
        }
    });
    
    return {
        total: readings.length,
        today: todayReadings.length,
        meters: (prop.meters || []).length,
        totals: totals
    };
}

function updateStatsPage() {
    const prop = getCurrentProperty();
    if (!prop) return;
    const stats = getStats(prop);
    const t = translations[currentLang];
    
    document.getElementById('statsTotal').textContent = stats.total;
    document.getElementById('statsProperties').textContent = 1;
    document.getElementById('statsMeters').textContent = stats.meters;
    document.getElementById('statsToday').textContent = stats.today;
    
    const container = document.getElementById('statsConsumption');
    container.innerHTML = (prop.meters || []).map(m => `
        <div class="consumption-item">
            <span class="consumption-icon"><i class="fas ${m.icon}" style="color:var(--meter-color);"></i></span>
            <div class="consumption-info">
                <span class="consumption-label">${m.name}</span>
                <span class="consumption-value">${(stats.totals[m.id] || 0).toFixed(1)} ${m.unit}</span>
            </div>
        </div>
    `).join('');
}

// ============================================
// ПРОФИЛЬ
// ============================================
function updateProfile() {
    const prop = getCurrentProperty();
    const t = translations[currentLang];
    
    document.getElementById('profileName').textContent = isAuthenticated() ? currentUser : 'Гость';
    document.getElementById('profileRole').textContent = isAuthenticated() 
        ? t.auth_welcome.replace('{name}', currentUser) 
        : t.profile_role;
    
    const stats = prop ? getStats(prop) : { total: 0 };
    document.getElementById('profileReadings').textContent = stats.total || 0;
    document.getElementById('profileProperties').textContent = prop ? 1 : 0;
    document.getElementById('profileLangDisplay').textContent = currentLang === 'et' ? t.lang_et : t.lang_ru;
    document.getElementById('profileThemeDisplay').textContent = currentTheme === 'dark' ? t.theme_dark : t.theme_light;
}

// ============================================
// УВЕДОМЛЕНИЯ (С ИКОНКАМИ)
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
// ОБРАБОТЧИКИ
// ============================================
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        switchTab(this.dataset.tab);
    });
});

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        switchTab(this.dataset.tab);
    });
});

document.getElementById('themeToggle').addEventListener('click', function() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

document.getElementById('langToggle').addEventListener('click', function() {
    const newLang = currentLang === 'et' ? 'ru' : 'et';
    applyTranslations(newLang);
});

// ============================================
// ЗАГРУЗКА
// ============================================
getProperties();
currentProperty = getCurrentProperty();

applyTheme(currentTheme);
applyTranslations(currentLang);
switchTab('submit');
refreshUI();

console.log('🏠 Majio v0.14 - Hover on meters, icons in alerts, gentle status');
console.log(`🌓 Theme: ${currentTheme}, Language: ${currentLang}`);
console.log(`👤 User: ${currentUser || 'guest'}`);
console.log(`📍 Property: ${currentProperty ? currentProperty.address : 'none'}`);
console.log(`📊 Meters: ${currentProperty && currentProperty.meters ? currentProperty.meters.length : 0}`);