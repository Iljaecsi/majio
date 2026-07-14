/**
 * ============================================
 * MAJIO v0.11 - MATERIAL DESIGN STYLE
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
        nav_submit: 'Счетчики',
        nav_history: 'История',
        nav_stats: 'Статистика',
        nav_profile: 'Профиль',
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
        dropdown_properties: 'Моя квартира',
        dropdown_logout: 'Выйти',
        property_title: 'Моя квартира',
        property_modal_title: 'Моя квартира',
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
        month_no_data: 'Показания не поданы',
        meter_sent: 'Показания счетчика "{meter}" отправлены!',
        invalid_number: 'Введите корректное число',
        comma_replaced: 'Запятая заменена на точку'
    },
    et: {
        subtitle: 'Tark arvestus teie kodus',
        readings: 'näitu',
        apartments: 'korterit',
        tab_submit: 'Arvestid',
        tab_history: 'Ajalugu',
        tab_stats: 'Statistika',
        tab_profile: 'Profiil',
        nav_submit: 'Arvestid',
        nav_history: 'Ajalugu',
        nav_stats: 'Statistika',
        nav_profile: 'Profiil',
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
        dropdown_properties: 'Minu korter',
        dropdown_logout: 'Logi välja',
        property_title: 'Minu korter',
        property_modal_title: 'Minu korter',
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
        month_no_data: 'Näidud puuduvad',
        meter_sent: 'Arvesti "{meter}" näidud saadetud!',
        invalid_number: 'Sisestage korrektne number',
        comma_replaced: 'Koma asendati punktiga'
    }
};

// ============================================
// НАСТРОЙКИ
// ============================================
let currentLang = localStorage.getItem('majio_lang') || 'ru';
let currentTheme = localStorage.getItem('majio_theme') || 'light';
let currentUser = localStorage.getItem('majio_user') || null;
let currentProperty = null;
let selectedMeterId = null;

// ============================================
// ДАННЫЕ ПО УМОЛЧАНИЮ
// ============================================
const DEFAULT_PROPERTY = {
    id: 'prop_001',
    address: 'Kangelaste 41-38, Narva, 20607',
    owner: 'Иванов Иван Иванович'
};

const DEFAULT_METERS = [
    { id: 'meter_001', name: 'Электричество (дневной)', icon: 'fa-sun', unit: 'кВт·ч', type: 'electricity-day', value: 245.30, hasWarning: true },
    { id: 'meter_002', name: 'Электричество (льготный)', icon: 'fa-moon', unit: 'кВт·ч', type: 'electricity-night', value: 123.70, hasWarning: false },
    { id: 'meter_003', name: 'Холодная вода', icon: 'fa-droplet', unit: 'м³', type: 'water-cold', value: 56.20, hasWarning: true },
    { id: 'meter_004', name: 'Горячая вода', icon: 'fa-fire', unit: 'м³', type: 'water-hot', value: 34.80, hasWarning: false },
    { id: 'meter_005', name: 'Газ', icon: 'fa-fire-flame-curved', unit: 'м³', type: 'gas', value: 12.50, hasWarning: true }
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
        metaColor.content = theme === 'dark' ? '#121212' : '#F5F7FA';
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
        profileToggle.style.background = '#2ECC71';
        profileToggle.style.color = 'white';
    } else {
        dropdownLogin.style.display = 'flex';
        dropdownRegister.style.display = 'flex';
        dropdownLogout.style.display = 'none';
        icon.className = 'fas fa-user';
        profileToggle.style.background = '#34495E';
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
    
    const addressEl = document.getElementById('propertyAddress');
    const ownerEl = document.getElementById('propertyOwner');
    if (addressEl) addressEl.innerHTML = `<i class="fas fa-map-pin"></i><span>${prop.address}</span>`;
    if (ownerEl) ownerEl.innerHTML = `<i class="fas fa-user"></i><span>${prop.owner}</span>`;
}

// ============================================
// МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ
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

document.getElementById('authForm').addEventListener('submit', function(e) {
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
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        if (!username || !password) {
            if (statusEl) {
                statusEl.textContent = t.auth_empty_fields;
                statusEl.className = 'error';
            }
            return;
        }
        const result = loginUser(username, password);
        if (result.success) {
            if (statusEl) {
                statusEl.textContent = t.auth_login_success.replace('{name}', username);
                statusEl.className = 'success';
            }
            refreshUI();
            setTimeout(closeAuthModal, 1000);
        } else {
            if (statusEl) {
                statusEl.textContent = t.auth_login_error;
                statusEl.className = 'error';
            }
        }
    } else {
        const username = document.getElementById('registerUsername').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('registerPasswordConfirm').value;
        if (!username || !password || !confirm) {
            if (statusEl) {
                statusEl.textContent = t.auth_empty_fields;
                statusEl.className = 'error';
            }
            return;
        }
        if (password !== confirm) {
            if (statusEl) {
                statusEl.textContent = t.auth_password_mismatch;
                statusEl.className = 'error';
            }
            return;
        }
        const result = registerUser(username, password);
        if (result.success) {
            if (statusEl) {
                statusEl.textContent = t.auth_register_success;
                statusEl.className = 'success';
            }
            const loginTab = document.querySelector('.auth-tab[data-auth-tab="login"]');
            if (loginTab) loginTab.click();
            const loginUserField = document.getElementById('loginUsername');
            if (loginUserField) loginUserField.value = username;
            const loginPassField = document.getElementById('loginPassword');
            if (loginPassField) loginPassField.value = '';
        } else {
            if (statusEl) {
                statusEl.textContent = t.auth_register_error;
                statusEl.className = 'error';
            }
        }
    }
});

// ============================================
// МОДАЛЬНОЕ ОКНО НЕДВИЖИМОСТИ
// ============================================
function openPropertyModal() {
    const modal = document.getElementById('propertyModal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderPropertyList();
}

function closePropertyModal() {
    const modal = document.getElementById('propertyModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.getElementById('propertyCloseBtn').addEventListener('click', closePropertyModal);
document.getElementById('propertyModal').addEventListener('click', function(e) {
    if (e.target === this) closePropertyModal();
});

function renderPropertyList() {
    const data = loadData();
    if (!data) return;
    const list = document.getElementById('propertyList');
    if (!list) return;
    
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
            showNotification('Квартира изменена', 'success');
        });
    });
}

document.getElementById('propertyAddBtn').addEventListener('click', function() {
    closePropertyModal();
    const modal = document.getElementById('propertyAddModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

document.getElementById('propertyAddCloseBtn').addEventListener('click', function() {
    const modal = document.getElementById('propertyAddModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
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
    
    const modal = document.getElementById('propertyAddModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    const addressField = document.getElementById('newPropertyAddress');
    const ownerField = document.getElementById('newPropertyOwner');
    if (addressField) addressField.value = '';
    if (ownerField) ownerField.value = '';
    
    refreshUI();
    showNotification('Квартира добавлена!', 'success');
});

// ============================================
// СЧЕТЧИКИ
// ============================================
function renderMeters() {
    const prop = getCurrentProperty();
    const grid = document.getElementById('metersGrid');
    if (!grid) return;
    
    if (!prop || !prop.meters || prop.meters.length === 0) {
        grid.innerHTML = `<p class="empty-message">Нет счетчиков</p>`;
        return;
    }
    
    const t = translations[currentLang];
    
    grid.innerHTML = prop.meters.map(meter => {
        const value = (meter.value !== undefined && meter.value !== null) ? meter.value : 0;
        const showWarning = meter.hasWarning === true;
        
        let monthUsage = 0;
        let hasMonthData = false;
        let isSent = false;
        
        if (prop.readings && prop.readings.length > 0) {
            const meterReadings = prop.readings.filter(r => r.meterId === meter.id);
            if (meterReadings.length > 0) {
                const sorted = meterReadings.sort((a, b) => b.timestamp - a.timestamp);
                const last = sorted[0];
                monthUsage = last.diff || 0;
                hasMonthData = true;
                isSent = true;
            }
        }
        
        let monthClass = 'meter-month';
        let monthText = '';
        
        if (hasMonthData && isSent) {
            monthClass = 'meter-month sent';
            monthText = t.month_usage.replace('{value}', monthUsage.toFixed(2));
        } else {
            monthClass = 'meter-month no-data';
            monthText = t.month_no_data;
        }
        
        return `
            <button class="meter-btn ${meter.type || 'electricity-day'}" data-id="${meter.id}">
                <div class="meter-top">
                    <span class="meter-name">${meter.name || 'Счетчик'}</span>
                    ${showWarning ? '<span class="meter-warning"><i class="fas fa-exclamation-triangle"></i></span>' : ''}
                </div>
                <i class="fas ${meter.icon || 'fa-bolt'} meter-bg-icon"></i>
                <div class="meter-bottom">
                    <span class="meter-value">${Number(value).toFixed(2)}</span>
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
// МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ
// ============================================
function showConfirmModal(title, message, callback) {
    const modal = document.getElementById('confirmModal');
    if (!modal) return;
    
    const titleEl = document.getElementById('confirmTitle');
    const msgEl = document.getElementById('confirmMessage');
    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;
    
    const okBtn = document.getElementById('confirmOk');
    const cancelBtn = document.getElementById('confirmCancel');
    
    if (!okBtn || !cancelBtn) return;
    
    const newOk = okBtn.cloneNode(true);
    const newCancel = cancelBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOk, okBtn);
    cancelBtn.parentNode.replaceChild(newCancel, cancelBtn);
    
    newCancel.addEventListener('click', function() {
        closeConfirmModal();
    });
    
    newOk.addEventListener('click', function() {
        if (callback) callback();
        closeConfirmModal();
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeConfirmModal() {
    const modal = document.getElementById('confirmModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.getElementById('confirmModal').addEventListener('click', function(e) {
    if (e.target === this) closeConfirmModal();
});

// ============================================
// МОДАЛЬНОЕ ОКНО ПОКАЗАНИЙ
// ============================================
function openReadingModal(meterId) {
    const prop = getCurrentProperty();
    if (!prop) return;
    
    const meter = prop.meters.find(m => m.id === meterId);
    if (!meter) return;
    
    selectedMeterId = meter.id;
    
    const modal = document.getElementById('readingModal');
    if (!modal) return;
    
    const icon = document.getElementById('readingModalIcon');
    const name = document.getElementById('readingModalName');
    const idEl = document.getElementById('readingModalId');
    const previous = document.getElementById('readingPreviousValue');
    const input = document.getElementById('readingInput');
    
    if (!input) return;
    const formGroup = input.closest('.form-group');
    
    const currentValue = meter.value;
    
    if (icon) {
        icon.className = `reading-modal-icon ${meter.type || 'electricity-day'}`;
        icon.innerHTML = `<i class="fas ${meter.icon || 'fa-bolt'}"></i>`;
    }
    if (name) name.textContent = meter.name || 'Счетчик';
    if (idEl) idEl.textContent = `ID: ${meter.id.slice(-3)}`;
    if (previous) previous.textContent = currentValue.toFixed(2);
    
    input.value = '';
    input.placeholder = ' ';
    if (formGroup) {
        formGroup.classList.remove('has-success', 'has-error');
    }
    input.classList.remove('error');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 300);
}

function closeReadingModal() {
    const modal = document.getElementById('readingModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.getElementById('readingCloseBtn').addEventListener('click', closeReadingModal);
document.getElementById('readingModal').addEventListener('click', function(e) {
    if (e.target === this) closeReadingModal();
});

// ============================================
// ФИЛЬТРАЦИЯ ВВОДА
// ============================================
function filterInput(value) {
    let filtered = value.replace(/[^0-9,.]/g, '');
    return filtered;
}

// ============================================
// ОТПРАВКА ПОКАЗАНИЙ
// ============================================
function submitMeterReading(property, meterId, newValue) {
    const t = translations[currentLang];
    
    const meter = property.meters.find(m => m.id === meterId);
    if (!meter) {
        showNotification('Ошибка: счетчик не найден', 'error');
        return;
    }
    
    const formattedValue = parseFloat(Number(newValue).toFixed(2));
    
    const reading = {
        id: 'read_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        meterId: meter.id,
        meterName: meter.name,
        meterType: meter.type,
        meterIcon: meter.icon,
        previousValue: meter.value,
        newValue: formattedValue,
        diff: formattedValue - meter.value,
        date: new Date().toLocaleString(currentLang === 'et' ? 'et-EE' : 'ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }),
        timestamp: Date.now()
    };
    
    meter.value = formattedValue;
    meter.hasWarning = false;
    
    if (!property.readings) property.readings = [];
    property.readings.push(reading);
    
    saveProperty(property);
    
    refreshUI();
    
    const message = t.meter_sent.replace('{meter}', meter.name);
    showNotification(message, 'success');
}

// ============================================
// ОСНОВНОЙ ОБРАБОТЧИК ПОКАЗАНИЙ
// ============================================
function handleReadingSubmit() {
    const prop = getCurrentProperty();
    if (!prop) {
        showNotification('Ошибка: нет недвижимости', 'error');
        return;
    }
    
    if (!selectedMeterId) {
        showNotification('Ошибка: выберите счетчик', 'error');
        return;
    }
    
    const input = document.getElementById('readingInput');
    if (!input) return;
    
    const rawValue = input.value.trim();
    const formGroup = input.closest('.form-group');
    const t = translations[currentLang];
    
    const meter = prop.meters.find(m => m.id === selectedMeterId);
    if (!meter) {
        showNotification('Ошибка: счетчик не найден', 'error');
        return;
    }
    
    const currentValue = meter.value;
    
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
    
    if (value - currentValue > 1000) {
        showConfirmModal(
            t.confirm_title,
            t.confirm_message.replace('{value}', value.toFixed(2)),
            function() {
                closeReadingModal();
                submitMeterReading(prop, selectedMeterId, value);
            }
        );
        return;
    }
    
    closeReadingModal();
    submitMeterReading(prop, selectedMeterId, value);
}

// ============================================
// ПОДКЛЮЧЕНИЕ ОБРАБОТЧИКОВ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('readingSubmitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', handleReadingSubmit);
    }
    
    const input = document.getElementById('readingInput');
    if (input) {
        input.addEventListener('input', function(e) {
            const filtered = filterInput(this.value);
            if (this.value !== filtered) {
                this.value = filtered;
            }
            
            let value = this.value;
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
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleReadingSubmit();
            }
        });
    }
    
    const historyBtn = document.getElementById('readingHistoryBtn');
    if (historyBtn) {
        historyBtn.addEventListener('click', function() {
            if (!selectedMeterId) return;
            closeReadingModal();
            switchTab('history');
            renderTable(selectedMeterId);
        });
    }
});

// ============================================
// ТАБЛИЦА ИСТОРИИ
// ============================================
function renderTable(filterMeterId = null) {
    const prop = getCurrentProperty();
    const body = document.getElementById('readingsBody');
    if (!body) return;
    
    if (!prop) {
        body.innerHTML = `<tr><td colspan="6" class="empty-message">Нет данных</td></tr>`;
        return;
    }
    
    let readings = prop.readings || [];
    if (filterMeterId) {
        readings = readings.filter(r => r.meterId === filterMeterId);
    }
    
    const t = translations[currentLang];
    
    if (readings.length === 0) {
        body.innerHTML = `<tr><td colspan="6" class="empty-message">${t.empty_message}</td></tr>`;
        return;
    }
    
    readings.sort((a, b) => b.timestamp - a.timestamp);
    
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
    
    const totalReadings = document.getElementById('totalReadings');
    const totalApartments = document.getElementById('totalApartments');
    
    if (totalReadings) {
        totalReadings.textContent = prop ? (prop.readings ? prop.readings.length : 0) : 0;
    }
    if (totalApartments) {
        totalApartments.textContent = prop ? 1 : 0;
    }
}

function getStats(prop) {
    if (!prop) return { total: 0, today: 0, meters: 0, totals: {} };
    
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
    
    const totalEl = document.getElementById('statsTotal');
    const propertiesEl = document.getElementById('statsProperties');
    const metersEl = document.getElementById('statsMeters');
    const todayEl = document.getElementById('statsToday');
    const consumptionEl = document.getElementById('statsConsumption');
    
    if (totalEl) totalEl.textContent = stats.total;
    if (propertiesEl) propertiesEl.textContent = 1;
    if (metersEl) metersEl.textContent = stats.meters;
    if (todayEl) todayEl.textContent = stats.today;
    
    if (consumptionEl) {
        consumptionEl.innerHTML = (prop.meters || []).map(m => `
            <div class="consumption-item">
                <span class="consumption-icon"><i class="fas ${m.icon}" style="color:var(--meter-color);"></i></span>
                <div class="consumption-info">
                    <span class="consumption-label">${m.name}</span>
                    <span class="consumption-value">${(stats.totals[m.id] || 0).toFixed(2)} ${m.unit}</span>
                </div>
            </div>
        `).join('');
    }
}

// ============================================
// ПРОФИЛЬ
// ============================================
function updateProfile() {
    const prop = getCurrentProperty();
    const t = translations[currentLang];
    
    const nameEl = document.getElementById('profileName');
    const roleEl = document.getElementById('profileRole');
    const readingsEl = document.getElementById('profileReadings');
    const propertiesEl = document.getElementById('profileProperties');
    const langDisplay = document.getElementById('profileLangDisplay');
    const themeDisplay = document.getElementById('profileThemeDisplay');
    
    if (nameEl) nameEl.textContent = isAuthenticated() ? currentUser : 'Гость';
    if (roleEl) {
        roleEl.textContent = isAuthenticated() 
            ? t.auth_welcome.replace('{name}', currentUser) 
            : t.profile_role;
    }
    
    const stats = prop ? getStats(prop) : { total: 0 };
    if (readingsEl) readingsEl.textContent = stats.total || 0;
    if (propertiesEl) propertiesEl.textContent = prop ? 1 : 0;
    if (langDisplay) langDisplay.textContent = currentLang === 'et' ? t.lang_et : t.lang_ru;
    if (themeDisplay) themeDisplay.textContent = currentTheme === 'dark' ? t.theme_dark : t.theme_light;
}

// ============================================
// УВЕДОМЛЕНИЯ - ТОЛЬКО ИКОНКИ
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
// ОБРАБОТЧИКИ ВКЛАДОК
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

console.log('🏠 Majio v0.25 - Material Design Style');
console.log(`🌓 Theme: ${currentTheme}, Language: ${currentLang}`);
console.log(`👤 User: ${currentUser || 'guest'}`);
console.log(`📍 Property: ${currentProperty ? currentProperty.address : 'none'}`);
console.log(`📊 Meters: ${currentProperty && currentProperty.meters ? currentProperty.meters.length : 0}`);