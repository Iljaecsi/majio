/**
 * ============================================
 * MAJIO v0.03 - 5 СЧЕТЧИКОВ + АВТОРИЗАЦИЯ
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
        tab_submit: 'Подача',
        tab_history: 'История',
        tab_stats: 'Статистика',
        tab_profile: 'Профиль',
        apartment_label: 'Номер квартиры',
        name_label: 'Ваше имя',
        electricity_day_title: 'Эл-во (дневной)',
        electricity_night_title: 'Эл-во (льготный)',
        electricity_unit: 'кВт·ч',
        water_cold_title: 'Холодная вода',
        water_hot_title: 'Горячая вода',
        water_unit: 'м³',
        gas_title: 'Газ',
        gas_unit: 'м³',
        submit_btn: 'Отправить показания',
        th_apartment: 'Квартира',
        th_name: 'Имя',
        th_electricity_day: '☀️',
        th_electricity_night: '🌙',
        th_water_cold: '💧',
        th_water_hot: '🔥',
        th_gas: '🔥',
        th_date: '📅',
        nav_submit: 'Подача',
        nav_history: 'История',
        nav_stats: 'Статистика',
        nav_profile: 'Профиль',
        empty_message: 'Нет показаний',
        delete_confirm: 'Удалить это показание?',
        submitted: '🎉 Показания успешно поданы!',
        deleted: 'Показание удалено',
        fill_fields: '⚠️ Заполните все поля!',
        negative_error: '⚠️ Значения не могут быть отрицательными!',
        stats_total: 'Всего показаний',
        stats_apartments: 'Квартир',
        stats_people: 'Жильцов',
        stats_today: 'За сегодня',
        stats_consumption: 'Потребление ресурсов',
        stats_elec_day: 'Эл. дневной',
        stats_elec_night: 'Эл. льготный',
        stats_water_cold: 'Хол. вода',
        stats_water_hot: 'Гор. вода',
        stats_gas: 'Газ',
        stats_top: 'Активные квартиры',
        stats_no_data: 'Нет данных',
        profile_role: 'Пользователь Majio',
        profile_readings: 'показаний подано',
        profile_apartments: 'квартир',
        profile_settings: 'Настройки',
        profile_lang: 'Язык',
        profile_theme: 'Тема',
        profile_data: 'Данные',
        profile_logout: 'Выйти',
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
        auth_login_success: '✅ Добро пожаловать, {name}!',
        auth_register_success: '✅ Регистрация успешна! Войдите в систему.',
        auth_login_error: '❌ Неверное имя пользователя или пароль',
        auth_register_error: '❌ Пользователь уже существует',
        auth_password_mismatch: '❌ Пароли не совпадают',
        auth_empty_fields: '⚠️ Заполните все поля',
        auth_welcome: 'Добро пожаловать, {name}!'
    },
    et: {
        subtitle: 'Tark arvestus teie kodus',
        readings: 'näitu',
        apartments: 'korterit',
        tab_submit: 'Esita',
        tab_history: 'Ajalugu',
        tab_stats: 'Statistika',
        tab_profile: 'Profiil',
        apartment_label: 'Korteri number',
        name_label: 'Teie nimi',
        electricity_day_title: 'Elekter (päev)',
        electricity_night_title: 'Elekter (öö)',
        electricity_unit: 'kWh',
        water_cold_title: 'Külm vesi',
        water_hot_title: 'Soe vesi',
        water_unit: 'm³',
        gas_title: 'Gaas',
        gas_unit: 'm³',
        submit_btn: 'Saada näidud',
        th_apartment: 'Korter',
        th_name: 'Nimi',
        th_electricity_day: '☀️',
        th_electricity_night: '🌙',
        th_water_cold: '💧',
        th_water_hot: '🔥',
        th_gas: '🔥',
        th_date: '📅',
        nav_submit: 'Esita',
        nav_history: 'Ajalugu',
        nav_stats: 'Statistika',
        nav_profile: 'Profiil',
        empty_message: 'Näidud puuduvad',
        delete_confirm: 'Kas soovite selle näidu kustutada?',
        submitted: '🎉 Näidud edukalt esitatud!',
        deleted: 'Näidud kustutatud',
        fill_fields: '⚠️ Täitke kõik väljad!',
        negative_error: '⚠️ Väärtused ei saa olla negatiivsed!',
        stats_total: 'Näite kokku',
        stats_apartments: 'Korterit',
        stats_people: 'Elanikku',
        stats_today: 'Täna',
        stats_consumption: 'Tarbimine',
        stats_elec_day: 'Elekter päev',
        stats_elec_night: 'Elekter öö',
        stats_water_cold: 'Külm vesi',
        stats_water_hot: 'Soe vesi',
        stats_gas: 'Gaas',
        stats_top: 'Aktiivsed korterid',
        stats_no_data: 'Andmed puuduvad',
        profile_role: 'Majio kasutaja',
        profile_readings: 'näitu esitatud',
        profile_apartments: 'korterit',
        profile_settings: 'Seaded',
        profile_lang: 'Keel',
        profile_theme: 'Teema',
        profile_data: 'Andmed',
        profile_logout: 'Logi välja',
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
        auth_login_success: '✅ Tere tulemast, {name}!',
        auth_register_success: '✅ Registreerimine õnnestus! Logige sisse.',
        auth_login_error: '❌ Vale kasutajanimi või parool',
        auth_register_error: '❌ Kasutaja juba eksisteerib',
        auth_password_mismatch: '❌ Paroolid ei kattu',
        auth_empty_fields: '⚠️ Täitke kõik väljad',
        auth_welcome: 'Tere tulemast, {name}!'
    }
};

// ============================================
// НАСТРОЙКИ ПО УМОЛЧАНИЮ
// ============================================
let currentLang = localStorage.getItem('majio_lang') || 'ru';
let currentTheme = localStorage.getItem('majio_theme') || 'light';
let currentTab = 'submit';
let currentUser = localStorage.getItem('majio_user') || null;

// ============================================
// ФУНКЦИЯ ПРИМЕНЕНИЯ ПЕРЕВОДОВ
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

// ============================================
// ФУНКЦИЯ ПРИМЕНЕНИЯ ТЕМЫ
// ============================================
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
        metaColor.content = theme === 'dark' ? '#1a1a2e' : '#F5F5FA';
    }
    
    updateProfile();
}

// ============================================
// ОБНОВЛЕНИЕ ИНТЕРФЕЙСА
// ============================================
function refreshUI() {
    renderTable();
    updateStats();
    updateStatsPage();
    updateProfile();
    updateAuthUI();
}

// ============================================
// ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
// ============================================
function switchTab(tabId) {
    currentTab = tabId;
    
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

function saveUsers(users) {
    localStorage.setItem('majio_users', JSON.stringify(users));
}

function registerUser(username, password) {
    const users = getUsers();
    if (users[username]) {
        return { success: false, error: 'auth_register_error' };
    }
    users[username] = password;
    saveUsers(users);
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
    const authBtn = document.getElementById('authToggle');
    if (authBtn) {
        const icon = authBtn.querySelector('i');
        if (isAuthenticated()) {
            icon.className = 'fas fa-user-check';
            authBtn.style.background = '#43e97b';
            authBtn.style.color = '#0a0e27';
        } else {
            icon.className = 'fas fa-user';
            authBtn.style.background = 'var(--primary)';
            authBtn.style.color = 'white';
        }
    }
}

// ============================================
// МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ
// ============================================
function openAuthModal() {
    if (isAuthenticated()) {
        if (confirm('Выйти из аккаунта?')) {
            logoutUser();
            showNotification('Выход выполнен');
        }
        return;
    }
    
    const modal = document.getElementById('authModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('authStatus').textContent = '';
    document.getElementById('authStatus').className = '';
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// УВЕДОМЛЕНИЯ
// ============================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-20px) scale(0.9)';
        notification.style.transition = 'all 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// КЛАСС ДЛЯ УПРАВЛЕНИЯ ПОКАЗАНИЯМИ (5 счетчиков)
// ============================================
class MeterReadings {
    constructor() {
        this.readings = [];
        this.loadFromLocalStorage();
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('majio_readings');
        if (data) {
            try {
                this.readings = JSON.parse(data);
            } catch (e) {
                this.readings = [];
            }
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('majio_readings', JSON.stringify(this.readings));
    }

    addReading(apartment, name, electricityDay, electricityNight, waterCold, waterHot, gas) {
        const reading = {
            id: Date.now(),
            apartment: parseInt(apartment),
            name: name.trim(),
            electricityDay: parseFloat(electricityDay) || 0,
            electricityNight: parseFloat(electricityNight) || 0,
            waterCold: parseFloat(waterCold) || 0,
            waterHot: parseFloat(waterHot) || 0,
            gas: parseFloat(gas) || 0,
            user: currentUser || 'guest',
            date: new Date().toLocaleString(currentLang === 'et' ? 'et-EE' : 'ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            timestamp: Date.now()
        };

        this.readings.unshift(reading);
        this.saveToLocalStorage();
        return reading;
    }

    deleteReading(id) {
        this.readings = this.readings.filter(r => r.id !== id);
        this.saveToLocalStorage();
    }

    getAllReadings() {
        return this.readings;
    }

    getStats() {
        const uniqueApartments = new Set(this.readings.map(r => r.apartment));
        const uniqueNames = new Set(this.readings.map(r => r.name));
        const today = new Date().toDateString();
        const todayReadings = this.readings.filter(r => 
            new Date(r.timestamp).toDateString() === today
        );
        
        const totals = {
            electricityDay: 0,
            electricityNight: 0,
            waterCold: 0,
            waterHot: 0,
            gas: 0
        };
        
        this.readings.forEach(r => {
            totals.electricityDay += r.electricityDay || 0;
            totals.electricityNight += r.electricityNight || 0;
            totals.waterCold += r.waterCold || 0;
            totals.waterHot += r.waterHot || 0;
            totals.gas += r.gas || 0;
        });
        
        return {
            total: this.readings.length,
            apartments: uniqueApartments.size,
            people: uniqueNames.size,
            today: todayReadings.length,
            totals: totals
        };
    }

    getTopApartments(limit = 5) {
        const counts = {};
        this.readings.forEach(r => {
            const key = `${r.apartment} - ${r.name}`;
            counts[key] = (counts[key] || 0) + 1;
        });
        
        return Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, limit)
            .map(([name, count]) => ({ name, count }));
    }
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
const meterApp = new MeterReadings();

// ============================================
// DOM ЭЛЕМЕНТЫ
// ============================================
const form = document.getElementById('meterForm');
const readingsBody = document.getElementById('readingsBody');
const totalReadings = document.getElementById('totalReadings');
const totalApartments = document.getElementById('totalApartments');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const authToggle = document.getElementById('authToggle');
const authModal = document.getElementById('authModal');
const authCloseBtn = document.getElementById('authCloseBtn');
const authForm = document.getElementById('authForm');

// ============================================
// РЕНДЕРИНГ ТАБЛИЦЫ (9 колонок)
// ============================================
function renderTable() {
    const readings = meterApp.getAllReadings();
    const t = translations[currentLang];
    
    if (readings.length === 0) {
        readingsBody.innerHTML = `
            <tr>
                <td colspan="9" class="empty-message">
                    <i class="fas fa-inbox" style="display:block;font-size:24px;margin-bottom:8px;color:var(--text-muted)"></i>
                    ${t.empty_message}
                </td>
            </tr>
        `;
    } else {
        readingsBody.innerHTML = readings.map(reading => `
            <tr>
                <td><strong>${reading.apartment}</strong></td>
                <td>${reading.name}</td>
                <td>${reading.electricityDay}</td>
                <td>${reading.electricityNight}</td>
                <td>${reading.waterCold}</td>
                <td>${reading.waterHot}</td>
                <td>${reading.gas}</td>
                <td>${reading.date}</td>
                <td>
                    <button class="delete-btn" data-id="${reading.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `).join('');

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                const t = translations[currentLang];
                if (confirm(t.delete_confirm)) {
                    meterApp.deleteReading(id);
                    refreshUI();
                    showNotification(t.deleted);
                }
            });
        });
    }
}

// ============================================
// ОБНОВЛЕНИЕ СТАТИСТИКИ (ШАПКА)
// ============================================
function updateStats() {
    const stats = meterApp.getStats();
    totalReadings.textContent = stats.total;
    totalApartments.textContent = stats.apartments;
}

// ============================================
// ОБНОВЛЕНИЕ СТРАНИЦЫ СТАТИСТИКИ
// ============================================
function updateStatsPage() {
    const stats = meterApp.getStats();
    const t = translations[currentLang];
    
    document.getElementById('statsTotal').textContent = stats.total;
    document.getElementById('statsApartments').textContent = stats.apartments;
    document.getElementById('statsPeople').textContent = stats.people;
    document.getElementById('statsToday').textContent = stats.today;
    document.getElementById('statsElecDay').textContent = stats.totals.electricityDay.toFixed(1);
    document.getElementById('statsElecNight').textContent = stats.totals.electricityNight.toFixed(1);
    document.getElementById('statsWaterCold').textContent = stats.totals.waterCold.toFixed(1);
    document.getElementById('statsWaterHot').textContent = stats.totals.waterHot.toFixed(1);
    document.getElementById('statsGas').textContent = stats.totals.gas.toFixed(1);
    
    const topList = document.getElementById('topApartments');
    const topData = meterApp.getTopApartments(5);
    
    if (topData.length === 0) {
        topList.innerHTML = `<p class="empty-message-small">${t.stats_no_data}</p>`;
    } else {
        topList.innerHTML = topData.map((item, index) => `
            <div class="top-item">
                <span class="rank">#${index + 1}</span>
                <span class="name">${item.name}</span>
                <span class="count">${item.count} ${t.readings}</span>
            </div>
        `).join('');
    }
}

// ============================================
// ОБНОВЛЕНИЕ ПРОФИЛЯ
// ============================================
function updateProfile() {
    const stats = meterApp.getStats();
    const t = translations[currentLang];
    
    document.getElementById('profileName').textContent = isAuthenticated() ? currentUser : 'Гость';
    document.getElementById('profileRole').textContent = isAuthenticated() 
        ? t.auth_welcome.replace('{name}', currentUser) 
        : t.profile_role;
    document.getElementById('profileReadings').textContent = stats.total;
    document.getElementById('profileApartments').textContent = stats.apartments;
    document.getElementById('profileLangDisplay').textContent = currentLang === 'et' ? t.lang_et : t.lang_ru;
    document.getElementById('profileThemeDisplay').textContent = currentTheme === 'dark' ? t.theme_dark : t.theme_light;
    
    const data = localStorage.getItem('majio_readings') || '';
    const size = new Blob([data]).size;
    document.getElementById('profileDataSize').textContent = size > 0 ? (size / 1024).toFixed(1) + ' KB' : '0 KB';
}

// ============================================
// ОБРАБОТЧИК ФОРМЫ (5 полей)
// ============================================
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const apartment = document.getElementById('apartment').value;
    const name = document.getElementById('name').value;
    const electricityDay = document.getElementById('electricityDay').value;
    const electricityNight = document.getElementById('electricityNight').value;
    const waterCold = document.getElementById('waterCold').value;
    const waterHot = document.getElementById('waterHot').value;
    const gas = document.getElementById('gas').value;
    const t = translations[currentLang];

    if (!apartment || !name || !electricityDay || !electricityNight || !waterCold || !waterHot || !gas) {
        showNotification(t.fill_fields, 'error');
        return;
    }

    if (parseFloat(electricityDay) < 0 || parseFloat(electricityNight) < 0 || 
        parseFloat(waterCold) < 0 || parseFloat(waterHot) < 0 || parseFloat(gas) < 0) {
        showNotification(t.negative_error, 'error');
        return;
    }

    meterApp.addReading(apartment, name, electricityDay, electricityNight, waterCold, waterHot, gas);
    refreshUI();
    form.reset();
    showNotification(t.submitted);
});

// ============================================
// ОБРАБОТЧИК АВТОРИЗАЦИИ
// ============================================
authToggle.addEventListener('click', openAuthModal);
authCloseBtn.addEventListener('click', closeAuthModal);

authModal.addEventListener('click', function(e) {
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

authForm.addEventListener('submit', function(e) {
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
// ОБРАБОТЧИКИ ПРОФИЛЯ
// ============================================
document.getElementById('profileLogoutBtn').addEventListener('click', function() {
    if (confirm('Выйти из аккаунта?')) {
        logoutUser();
        showNotification('Выход выполнен');
    }
});

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

// ============================================
// ПЕРЕКЛЮЧЕНИЕ ТЕМЫ
// ============================================
themeToggle.addEventListener('click', function() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// ============================================
// ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
// ============================================
langToggle.addEventListener('click', function() {
    const newLang = currentLang === 'et' ? 'ru' : 'et';
    applyTranslations(newLang);
});

// ============================================
// ЗАГРУЗКА
// ============================================
applyTheme(currentTheme);
applyTranslations(currentLang);
switchTab('submit');
refreshUI();

console.log('🏠 Majio v0.03 - 5 meters + auth + tabs');
console.log(`🌓 Theme: ${currentTheme}, Language: ${currentLang}`);
console.log(`👤 User: ${currentUser || 'guest'}`);
console.log(`📊 ${meterApp.getAllReadings().length} readings loaded`);