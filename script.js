/**
 * ============================================
 * MAJIO - ПРЯМОЕ ПОДКЛЮЧЕНИЕ К API
 * ============================================
 */

// ============================================
// КОНФИГУРАЦИЯ API
// ============================================
const API_CONFIG = {
    baseUrl: 'https://v2.prima.ee:9002/',
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
        confirm_ok: 'Да, уверен',
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
        auth_path: 'Путь (например: t7 или t7/89)',
        auth_key: 'Ключ доступа',
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
        member_list: 'Квартиры в товариществе',
        association_name: 'Товарищество',
        apartment: 'Квартира',
        members_count: 'Квартир в товариществе',
        switch_to_member: 'Переключиться на квартиру',
        switch_to_association: 'Вернуться в товарищество',
        current_member: 'Текущая квартира',
        no_members: 'Нет квартир в товариществе',
        add_member: 'Добавить квартиру',
        delete_member: 'Удалить квартиру',
        add_counter: 'Добавить счётчик',
        delete_counter: 'Удалить счётчик',
        edit_member: 'Редактировать квартиру',
        edit_counter: 'Редактировать счётчик',
        member_tag: 'Тег квартиры',
        member_name: 'Название квартиры',
        member_type: 'Тип',
        member_permission: 'Права',
        counter_tag: 'Тег счётчика',
        counter_name: 'Название счётчика',
        counter_type: 'Тип счётчика',
        counter_current: 'Текущее значение',
        type_home: 'Дом',
        type_apartment: 'Квартира',
        type_room: 'Комната',
        permission_guest: 'Гость',
        permission_user: 'Пользователь',
        permission_admin: 'Администратор',
        counter_type_1: 'Электричество (день)',
        counter_type_2: 'Электричество (ночь)',
        counter_type_3: 'Газ',
        counter_type_4: 'Горячая вода',
        counter_type_5: 'Холодная вода',
        member_added: 'Квартира добавлена',
        member_deleted: 'Квартира удалена',
        member_updated: 'Квартира обновлена',
        counter_added: 'Счётчик добавлен',
        counter_deleted: 'Счётчик удалён',
        counter_updated: 'Счётчик обновлён',
        confirm_delete_member: 'Удалить квартиру "{name}"?',
        confirm_delete_counter: 'Удалить счётчик "{name}"?',
        enter_tag: 'Введите тег',
        enter_name: 'Введите название',
        enter_current: 'Введите текущее значение',
        counter_edit_title: 'Редактирование счётчика',
        member_edit_title: 'Редактирование квартиры',
        member_type_apartment: 'Квартира',
        member_type_room: 'Комната',
        apartment_actions: 'Управление квартирой',
        counter_actions: 'Управление счётчиками',
        back: 'Назад',
        cancel: 'Отмена',
        loading: 'Загрузка счетчиков...',
        announcement_water_title: 'Отключение воды',
        announcement_water_text: 'С 15 июля по 20 июля будет отключена горячая вода для плановых ремонтных работ.',
        announcement_water_date: '15.07.2026 — 20.07.2026',
        announcement_repair_title: 'Ремонт лифта',
        announcement_repair_text: 'С 10 по 12 июля будет проводиться плановое техническое обслуживание лифта.',
        announcement_repair_date: '10.07.2026 — 12.07.2026',
        announcement_garden_title: 'Озеленение двора',
        announcement_garden_text: 'Приглашаем жителей на субботник по озеленению двора 25 июля в 10:00.',
        announcement_garden_date: '25.07.2026, 10:00',
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
        confirm_ok: 'Jah, olen kindel',
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
        auth_path: 'Tee (nt: t7 või t7/89)',
        auth_key: 'Juurdepääsuvõti',
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
        member_list: 'Korterid ühistus',
        association_name: 'Ühistu',
        apartment: 'Korter',
        members_count: 'Korterit ühistus',
        switch_to_member: 'Lülitu korterile',
        switch_to_association: 'Tagasi ühistusse',
        current_member: 'Praegune korter',
        no_members: 'Ühistus pole kortereid',
        add_member: 'Lisa korter',
        delete_member: 'Kustuta korter',
        add_counter: 'Lisa arvesti',
        delete_counter: 'Kustuta arvesti',
        edit_member: 'Muuda korterit',
        edit_counter: 'Muuda arvestit',
        member_tag: 'Korteri tag',
        member_name: 'Korteri nimi',
        member_type: 'Tüüp',
        member_permission: 'Õigused',
        counter_tag: 'Arvesti tag',
        counter_name: 'Arvesti nimi',
        counter_type: 'Arvesti tüüp',
        counter_current: 'Praegune väärtus',
        type_home: 'Maja',
        type_apartment: 'Korter',
        type_room: 'Tuba',
        permission_guest: 'Külaline',
        permission_user: 'Kasutaja',
        permission_admin: 'Administraator',
        counter_type_1: 'Elekter (päev)',
        counter_type_2: 'Elekter (öö)',
        counter_type_3: 'Gaas',
        counter_type_4: 'Soe vesi',
        counter_type_5: 'Külm vesi',
        member_added: 'Korter lisatud',
        member_deleted: 'Korter kustutatud',
        member_updated: 'Korter uuendatud',
        counter_added: 'Arvesti lisatud',
        counter_deleted: 'Arvesti kustutatud',
        counter_updated: 'Arvesti uuendatud',
        confirm_delete_member: 'Kas kustutada korter "{name}"?',
        confirm_delete_counter: 'Kas kustutada arvesti "{name}"?',
        enter_tag: 'Sisestage tag',
        enter_name: 'Sisestage nimi',
        enter_current: 'Sisestage praegune väärtus',
        counter_edit_title: 'Arvesti redigeerimine',
        member_edit_title: 'Korteri redigeerimine',
        member_type_apartment: 'Korter',
        member_type_room: 'Tuba',
        apartment_actions: 'Korteri haldus',
        counter_actions: 'Arvestite haldus',
        back: 'Tagasi',
        cancel: 'Tühista',
        loading: 'Arvestite laadimine...',
        announcement_water_title: 'Vee väljalülitamine',
        announcement_water_text: '15. juulist kuni 20. juulini lülitatakse plaaniliste remonditööde tõttu soe vesi välja.',
        announcement_water_date: '15.07.2026 — 20.07.2026',
        announcement_repair_title: 'Lifti remont',
        announcement_repair_text: '10. kuni 12. juulini toimub lifti plaaniline hooldus.',
        announcement_repair_date: '10.07.2026 — 12.07.2026',
        announcement_garden_title: 'Hoovi haljastus',
        announcement_garden_text: 'Kutsume elanikke 25. juulil kell 10:00 hoovi haljastustalgutele.',
        announcement_garden_date: '25.07.2026, 10:00',
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
let isInitialized = false;

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
            'X-Api-Super-User-Key': API_CONFIG.superUserKey,
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        console.log(`🌐 Запрос к API: ${url}`);
        const response = await fetch(url, options);
        
        if (response.status === 204) return null;
        
        const responseData = await response.json();
        
        if (!response.ok) {
            throw new Error(responseData.error || `Ошибка HTTP: ${response.status}`);
        }
        
        return responseData;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

async function apiRequestWithSignature(endpoint, method = 'POST', data = null) {
    if (!API_CONFIG.memberPath) {
        throw new Error('Путь не указан');
    }
    const signature = await generateSignature();
    const requestData = {
        path: API_CONFIG.memberPath,
        signature: signature,
        ...data
    };
    return await apiRequest(endpoint, method, requestData);
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
    
    // Сохраняем состояние в localStorage
    saveFullState(path, data);
    
    return data;
}

// Сохранение полного состояния
function saveFullState(path, data) {
    try {
        const isAdmin = data.permission === 2;
        const isMemberView = data.type === 2;
        const currentTag = path.includes('/') ? path.split('/').pop() : null;
        
        const stateToSave = {
            memberPath: path,
            accessKey: API_CONFIG.accessKey,
            isAdmin: isAdmin,
            members: data.members || {},
            memberName: data.name || '',
            memberType: data.type,
            isMemberView: isMemberView,
            currentTag: currentTag,
            timestamp: Date.now()
        };
        localStorage.setItem('majio_full_state', JSON.stringify(stateToSave));
        console.log('💾 Состояние сохранено:', stateToSave);
    } catch (e) {
        console.warn('Не удалось сохранить состояние:', e);
    }
}

// Восстановление состояния из localStorage
function restoreFullState() {
    const savedState = localStorage.getItem('majio_full_state');
    if (!savedState) {
        console.log('ℹ️ Нет сохранённого состояния');
        return null;
    }
    
    try {
        const state = JSON.parse(savedState);
        console.log('🔄 Восстановление состояния из localStorage:', state);
        return state;
    } catch (e) {
        console.warn('Ошибка восстановления состояния:', e);
        return null;
    }
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
        
        document.getElementById('announcementCard').classList.add('hidden');
        
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
        
        document.getElementById('announcementCard').classList.remove('hidden');
        
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
    localStorage.removeItem('majio_full_state');
    currentUser = null;
    updateProfileIcon();
}

function isAuthenticated() {
    return API_CONFIG.accessKey !== null && API_CONFIG.memberPath !== null;
}

// ============================================
// АДМИН API ФУНКЦИИ
// ============================================

async function addMember(tag, name, type, permission) {
    const data = {
        tag: tag,
        name: name,
        type: type,
        permission: permission
    };
    return await apiRequestWithSignature('association/member/add', 'POST', data);
}

async function deleteMember(tag) {
    return await apiRequestWithSignature('association/member/delete', 'POST', { tag: tag });
}

async function modifyMember(tag, data) {
    const requestData = {
        tag: tag,
        ...data
    };
    return await apiRequestWithSignature('association/member/modify', 'POST', requestData);
}

async function addCounter(tag, name, type, current) {
    const data = {
        tag: tag,
        name: name,
        type: type,
        current: current || 0
    };
    return await apiRequestWithSignature('association/counter/add', 'POST', data);
}

async function deleteCounter(tag) {
    return await apiRequestWithSignature('association/counter/delete', 'POST', { tag: tag });
}

async function modifyCounter(tag, data) {
    const requestData = {
        tag: tag,
        ...data
    };
    return await apiRequestWithSignature('association/counter/modify', 'POST', requestData);
}

// ============================================
// ОБНОВЛЕНИЕ ИКОНКИ ПРОФИЛЯ
// ============================================
function updateProfileIcon() {
    const profileToggle = document.getElementById('profileToggle');
    const icon = profileToggle?.querySelector('i');
    
    if (!profileToggle || !icon) return;
    
    if (isAuthenticated() && API_CONFIG.isAdmin) {
        profileToggle.className = 'icon-btn auth-btn admin-mode';
        icon.className = 'fas fa-crown';
        profileToggle.style.background = 'var(--admin-gradient)';
        profileToggle.style.color = 'white';
    } else if (isAuthenticated()) {
        profileToggle.className = 'icon-btn auth-btn';
        profileToggle.style.background = '#2ECC71';
        profileToggle.style.color = 'white';
        icon.className = 'fas fa-user-check';
    } else {
        profileToggle.className = 'icon-btn auth-btn';
        profileToggle.style.background = '#34495E';
        profileToggle.style.color = 'white';
        icon.className = 'fas fa-user';
    }
}

// ============================================
// ВОССТАНОВЛЕНИЕ UI ИЗ СОХРАНЁННОГО СОСТОЯНИЯ
// ============================================
function restoreUIFromState() {
    const state = restoreFullState();
    if (!state) return false;
    
    // Восстанавливаем API_CONFIG
    if (state.memberPath) {
        API_CONFIG.memberPath = state.memberPath;
    }
    if (state.accessKey) {
        API_CONFIG.accessKey = state.accessKey;
    }
    if (state.isAdmin !== undefined) {
        API_CONFIG.isAdmin = state.isAdmin;
    }
    if (state.members) {
        API_CONFIG.membersList = state.members;
    }
    
    // Обновляем иконку профиля
    updateProfileIcon();
    
    // Если пользователь не админ - скрываем админ-панель
    if (!API_CONFIG.isAdmin) {
        document.getElementById('adminPanelContainer').style.display = 'none';
        document.getElementById('announcementCard').classList.remove('hidden');
        return true;
    }
    
    // Показываем админ-панель
    document.getElementById('adminPanelContainer').style.display = 'block';
    document.getElementById('propertyCard').classList.add('admin-card');
    
    // Обновляем заголовок
    const titleEl = document.getElementById('propertyTitle');
    titleEl.textContent = translations[currentLang].property_title_admin || 'Моё товарищество';
    
    // Если есть данные о квартирах
    if (state.members && Object.keys(state.members).length > 0) {
        const members = state.members;
        
        // Если мы в режиме просмотра квартиры
        if (state.isMemberView && state.currentTag && members[state.currentTag]) {
            // Показываем карточку квартиры
            document.getElementById('adminApartmentCard').style.display = 'block';
            document.getElementById('adminMembersSection').style.display = 'none';
            document.getElementById('backToAssociationBtn').style.display = 'block';
            document.getElementById('announcementCard').classList.add('hidden');
            
            const member = members[state.currentTag];
            document.getElementById('adminApartmentName').textContent = member.name || 'Квартира ' + state.currentTag;
            document.getElementById('adminApartmentPath').textContent = state.memberPath;
            
            // Рендерим кнопки
            renderApartmentActionsFromData(state.currentTag, member);
            
            // Обновляем property-body
            const addressEl = document.getElementById('propertyAddressText');
            if (addressEl) addressEl.textContent = member.name || 'Квартира ' + state.currentTag;
            
            return true;
        } else {
            // Показываем список квартир
            document.getElementById('adminApartmentCard').style.display = 'none';
            document.getElementById('adminMembersSection').style.display = 'block';
            document.getElementById('backToAssociationBtn').style.display = 'none';
            document.getElementById('announcementCard').classList.remove('hidden');
            
            renderMemberListFromState(members);
            return true;
        }
    }
    
    return true;
}

// Рендеринг списка квартир из сохранённых данных
function renderMemberListFromState(members) {
    const list = document.getElementById('adminMemberList');
    const countBadge = document.getElementById('adminCountBadge');
    const memberKeys = Object.keys(members);
    
    countBadge.textContent = memberKeys.length;
    
    if (memberKeys.length > 0) {
        list.innerHTML = memberKeys.map(tag => {
            const member = members[tag];
            const roleIcon = member.permission === 2 ? '<i class="fas fa-crown"></i>' : 
                           member.permission === 1 ? '<i class="fas fa-user"></i>' : 
                           '<i class="fas fa-eye"></i>';
            const roleText = member.permission === 2 ? 'Админ' : 
                           member.permission === 1 ? 'Жилец' : 'Гость';
            
            return `
                <button class="admin-member-item" data-tag="${tag}">
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
        }).join('');
        
        list.querySelectorAll('.admin-member-item').forEach(btn => {
            btn.addEventListener('click', async function() {
                const tag = this.dataset.tag;
                try {
                    await switchMember(tag);
                    document.getElementById('announcementCard').classList.add('hidden');
                    showNotification('Переключено на квартиру ' + tag, 'success');
                } catch (error) {
                    showNotification('Ошибка переключения: ' + error.message, 'error');
                }
            });
        });
    } else {
        list.innerHTML = `
            <div style="text-align:center; color:var(--text-muted); padding:16px 0; font-size:13px;">
                <i class="fas fa-info-circle"></i> ${translations[currentLang].no_members}
            </div>
        `;
    }
    
    // Кнопка добавления квартиры
    const addBtn = document.createElement('button');
    addBtn.className = 'admin-action-btn success';
    addBtn.innerHTML = `<i class="fas fa-plus"></i> ${translations[currentLang].add_member || 'Добавить квартиру'}`;
    addBtn.style.marginTop = '8px';
    addBtn.style.width = '100%';
    addBtn.addEventListener('click', () => openAddMemberModal());
    
    const existingAddBtn = list.parentElement.querySelector('.admin-add-member-btn');
    if (existingAddBtn) existingAddBtn.remove();
    addBtn.className += ' admin-add-member-btn';
    list.parentElement.appendChild(addBtn);
}

// Функция для рендеринга кнопок из сохранённых данных
function renderApartmentActionsFromData(memberTag, memberData) {
    const actionsContainer = document.getElementById('adminApartmentActions');
    if (!actionsContainer) return;
    
    const t = translations[currentLang];
    
    actionsContainer.innerHTML = `
        <div class="action-group-label">${t.apartment_actions || 'Управление квартирой'}</div>
        <div class="action-group">
            <button class="admin-apartment-action-btn primary" data-action="edit-member">
                <i class="fas fa-pen"></i> <span>${t.edit_member || 'Редактировать'}</span>
            </button>
            <button class="admin-apartment-action-btn danger" data-action="delete-member">
                <i class="fas fa-trash"></i> <span>${t.delete_member || 'Удалить'}</span>
            </button>
        </div>
        <div class="action-group-label">${t.counter_actions || 'Управление счётчиками'}</div>
        <div class="action-group">
            <button class="admin-apartment-action-btn success" data-action="add-counter">
                <i class="fas fa-plus"></i> <span>${t.add_counter || 'Добавить'}</span>
            </button>
            <button class="admin-apartment-action-btn warning" data-action="delete-counter">
                <i class="fas fa-minus"></i> <span>${t.delete_counter || 'Удалить'}</span>
            </button>
        </div>
    `;
    
    // Обработчики для кнопок
    actionsContainer.querySelector('[data-action="edit-member"]')?.addEventListener('click', () => {
        openEditMemberModal(memberTag, memberData);
    });
    
    actionsContainer.querySelector('[data-action="delete-member"]')?.addEventListener('click', async () => {
        const t = translations[currentLang];
        if (confirm(t.confirm_delete_member.replace('{name}', memberData?.name || memberTag))) {
            try {
                await deleteMember(memberTag);
                showNotification(t.member_deleted, 'success');
                // Переключаемся на товарищество
                await switchToAssociation();
            } catch (error) {
                showNotification('Ошибка удаления: ' + error.message, 'error');
            }
        }
    });
    
    actionsContainer.querySelector('[data-action="add-counter"]')?.addEventListener('click', () => {
        openAddCounterModal();
    });
    
    actionsContainer.querySelector('[data-action="delete-counter"]')?.addEventListener('click', () => {
        openDeleteCounterModal();
    });
}

// ============================================
// ОБНОВЛЕНИЕ ИНТЕРФЕЙСА
// ============================================

async function refreshUI() {
    if (!isAuthenticated()) {
        showAuthRequired();
        updateProfileIcon();
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
        updateProfileIcon();
        
        if (API_CONFIG.isAdmin) {
            renderAdminPanel(data);
        } else {
            document.getElementById('adminPanelContainer').style.display = 'none';
            document.getElementById('announcementCard').classList.remove('hidden');
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
    const adminPanel = document.getElementById('adminPanelContainer');
    if (adminPanel) adminPanel.style.display = 'none';
    updateAuthUI();
    updateProfileIcon();
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
    } else {
        card.classList.remove('admin-card');
        titleEl.textContent = t.property_title || 'Моя квартира';
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
    if (!data) return;
    
    const container = document.getElementById('adminPanelContainer');
    const list = document.getElementById('adminMemberList');
    const countBadge = document.getElementById('adminCountBadge');
    const backBtn = document.getElementById('backToAssociationBtn');
    const membersSection = document.getElementById('adminMembersSection');
    const apartmentCard = document.getElementById('adminApartmentCard');
    const apartmentName = document.getElementById('adminApartmentName');
    const apartmentPath = document.getElementById('adminApartmentPath');
    
    const isAssociation = data.type === 0;
    const isMemberView = data.type === 2;
    const members = data.members || {};
    const memberKeys = Object.keys(members);
    const currentPathStr = currentMemberPath || API_CONFIG.memberPath;
    const pathParts = currentPathStr.split('/');
    const currentTag = pathParts.length > 1 ? pathParts[pathParts.length - 1] : null;
    
    // Всегда показываем контейнер для админа
    container.style.display = 'block';
    
    const card = document.getElementById('propertyCard');
    card.classList.add('admin-card');
    
    const titleEl = document.getElementById('propertyTitle');
    titleEl.textContent = translations[currentLang].property_title_admin || 'Моё товарищество';
    
    backBtn.style.display = isMemberView ? 'block' : 'none';
    
    if (isMemberView) {
        membersSection.style.display = 'none';
        apartmentCard.style.display = 'block';
        
        const member = members[currentTag];
        apartmentName.textContent = member?.name || 'Квартира ' + currentTag;
        apartmentPath.textContent = currentPathStr;
        
        // Рендерим кнопки
        const actionsContainer = document.getElementById('adminApartmentActions');
        if (actionsContainer) {
            const t = translations[currentLang];
            actionsContainer.innerHTML = `
                <div class="action-group-label">${t.apartment_actions || 'Управление квартирой'}</div>
                <div class="action-group">
                    <button class="admin-apartment-action-btn primary" data-action="edit-member">
                        <i class="fas fa-pen"></i> <span>${t.edit_member || 'Редактировать'}</span>
                    </button>
                    <button class="admin-apartment-action-btn danger" data-action="delete-member">
                        <i class="fas fa-trash"></i> <span>${t.delete_member || 'Удалить'}</span>
                    </button>
                </div>
                <div class="action-group-label">${t.counter_actions || 'Управление счётчиками'}</div>
                <div class="action-group">
                    <button class="admin-apartment-action-btn success" data-action="add-counter">
                        <i class="fas fa-plus"></i> <span>${t.add_counter || 'Добавить'}</span>
                    </button>
                    <button class="admin-apartment-action-btn warning" data-action="delete-counter">
                        <i class="fas fa-minus"></i> <span>${t.delete_counter || 'Удалить'}</span>
                    </button>
                </div>
            `;
            
            actionsContainer.querySelector('[data-action="edit-member"]')?.addEventListener('click', () => {
                const member = members[currentTag];
                openEditMemberModal(currentTag, member);
            });
            
            actionsContainer.querySelector('[data-action="delete-member"]')?.addEventListener('click', async () => {
                const member = members[currentTag];
                const t = translations[currentLang];
                if (confirm(t.confirm_delete_member.replace('{name}', member?.name || currentTag))) {
                    try {
                        await deleteMember(currentTag);
                        showNotification(t.member_deleted, 'success');
                        await switchToAssociation();
                    } catch (error) {
                        showNotification('Ошибка удаления: ' + error.message, 'error');
                    }
                }
            });
            
            actionsContainer.querySelector('[data-action="add-counter"]')?.addEventListener('click', () => {
                openAddCounterModal();
            });
            
            actionsContainer.querySelector('[data-action="delete-counter"]')?.addEventListener('click', () => {
                openDeleteCounterModal();
            });
        }
        
    } else {
        membersSection.style.display = 'block';
        apartmentCard.style.display = 'none';
        
        if (isAssociation && memberKeys.length > 0) {
            countBadge.textContent = memberKeys.length;
            
            list.innerHTML = memberKeys.map(tag => {
                const member = members[tag];
                const isActive = currentPathStr === API_CONFIG.memberPath + '/' + tag;
                const roleIcon = member.permission === 2 ? '<i class="fas fa-crown"></i>' : 
                               member.permission === 1 ? '<i class="fas fa-user"></i>' : 
                               '<i class="fas fa-eye"></i>';
                const roleText = member.permission === 2 ? 'Админ' : 
                               member.permission === 1 ? 'Жилец' : 'Гость';
                
                return `
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
            }).join('');
            
            list.querySelectorAll('.admin-member-item').forEach(btn => {
                btn.addEventListener('click', async function() {
                    const tag = this.dataset.tag;
                    try {
                        await switchMember(tag);
                        document.getElementById('announcementCard').classList.add('hidden');
                        showNotification('Переключено на квартиру ' + tag, 'success');
                    } catch (error) {
                        showNotification('Ошибка переключения: ' + error.message, 'error');
                    }
                });
            });
        } else {
            countBadge.textContent = '0';
            list.innerHTML = `
                <div style="text-align:center; color:var(--text-muted); padding:16px 0; font-size:13px;">
                    <i class="fas fa-info-circle"></i> ${translations[currentLang].no_members}
                </div>
            `;
        }
        
        // Кнопка добавления квартиры
        const addBtn = document.createElement('button');
        addBtn.className = 'admin-action-btn success';
        addBtn.innerHTML = `<i class="fas fa-plus"></i> ${translations[currentLang].add_member || 'Добавить квартиру'}`;
        addBtn.style.marginTop = '8px';
        addBtn.style.width = '100%';
        addBtn.addEventListener('click', () => openAddMemberModal());
        
        const existingAddBtn = list.parentElement.querySelector('.admin-add-member-btn');
        if (existingAddBtn) existingAddBtn.remove();
        addBtn.className += ' admin-add-member-btn';
        list.parentElement.appendChild(addBtn);
    }
    
    backBtn.onclick = async function() {
        try {
            await switchToAssociation();
            document.getElementById('announcementCard').classList.remove('hidden');
            showNotification(translations[currentLang].switch_to_association || 'Переключено на товарищество', 'success');
        } catch (error) {
            showNotification('Ошибка: ' + error.message, 'error');
        }
    };
}

// ============================================
// МОДАЛЬНЫЕ ОКНА АДМИНА
// ============================================

function openAddMemberModal() {
    const modal = document.getElementById('adminModal');
    const title = document.getElementById('adminModalTitle');
    const body = document.getElementById('adminModalBody');
    const footer = document.getElementById('adminModalFooter');
    const t = translations[currentLang];
    
    title.textContent = t.add_member || 'Добавить квартиру';
    
    body.innerHTML = `
        <div class="input-field">
            <i class="fas fa-tag input-icon"></i>
            <input type="text" id="adminMemberTag" required placeholder=" ">
            <label>${t.member_tag}</label>
        </div>
        <div class="input-field">
            <i class="fas fa-building input-icon"></i>
            <input type="text" id="adminMemberName" required placeholder=" ">
            <label>${t.member_name}</label>
        </div>
        <div class="input-field" style="padding: 0;">
            <i class="fas fa-tag input-icon" style="top:22px; transform:none;"></i>
            <select id="adminMemberType" style="width:100%; padding:18px 14px 6px 42px; background:var(--bg-input); border:none; outline:none; color:var(--text-primary); font-size:15px; font-family:'Inter',sans-serif; font-weight:500; min-height:56px; appearance:none; -webkit-appearance:none; cursor:pointer;">
                <option value="2">${t.type_apartment || 'Квартира'}</option>
                <option value="3">${t.type_room || 'Комната'}</option>
            </select>
            <label style="left:42px; top:8px; transform:translateY(0); font-size:10px; color:var(--admin-primary); font-weight:600;">${t.member_type}</label>
        </div>
        <div class="input-field" style="padding: 0;">
            <i class="fas fa-user-shield input-icon" style="top:22px; transform:none;"></i>
            <select id="adminMemberPermission" style="width:100%; padding:18px 14px 6px 42px; background:var(--bg-input); border:none; outline:none; color:var(--text-primary); font-size:15px; font-family:'Inter',sans-serif; font-weight:500; min-height:56px; appearance:none; -webkit-appearance:none; cursor:pointer;">
                <option value="0">${t.permission_guest || 'Гость'}</option>
                <option value="1" selected>${t.permission_user || 'Пользователь'}</option>
                <option value="2">${t.permission_admin || 'Администратор'}</option>
            </select>
            <label style="left:42px; top:8px; transform:translateY(0); font-size:10px; color:var(--admin-primary); font-weight:600;">${t.member_permission}</label>
        </div>
    `;
    
    footer.innerHTML = `
        <button class="admin-submit-btn success" id="adminSubmitBtn">
            <i class="fas fa-plus"></i> ${t.add_member || 'Добавить'}
        </button>
        <button class="admin-submit-btn" id="adminCancelBtn" style="background:var(--bg-input);color:var(--text-secondary);box-shadow:none;margin-top:8px;">
            ${t.cancel || 'Отмена'}
        </button>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    document.getElementById('adminSubmitBtn')?.addEventListener('click', async () => {
        const tag = document.getElementById('adminMemberTag').value.trim();
        const name = document.getElementById('adminMemberName').value.trim();
        const type = parseInt(document.getElementById('adminMemberType').value);
        const permission = parseInt(document.getElementById('adminMemberPermission').value);
        
        if (!tag || !name) {
            showNotification(t.enter_tag + ' и ' + t.enter_name, 'error');
            return;
        }
        
        try {
            await addMember(tag, name, type, permission);
            showNotification(t.member_added, 'success');
            closeAdminModal();
            refreshUI();
        } catch (error) {
            showNotification(error.message, 'error');
        }
    });
    
    document.getElementById('adminCancelBtn')?.addEventListener('click', closeAdminModal);
}

function openEditMemberModal(tag, member) {
    const modal = document.getElementById('adminModal');
    const title = document.getElementById('adminModalTitle');
    const body = document.getElementById('adminModalBody');
    const footer = document.getElementById('adminModalFooter');
    const t = translations[currentLang];
    
    title.textContent = t.edit_member || 'Редактировать квартиру';
    
    body.innerHTML = `
        <div class="input-field">
            <i class="fas fa-tag input-icon"></i>
            <input type="text" id="adminMemberTag" value="${tag}" disabled required placeholder=" ">
            <label>${t.member_tag}</label>
        </div>
        <div class="input-field">
            <i class="fas fa-building input-icon"></i>
            <input type="text" id="adminMemberName" value="${member?.name || ''}" required placeholder=" ">
            <label>${t.member_name}</label>
        </div>
        <div class="input-field" style="padding: 0;">
            <i class="fas fa-tag input-icon" style="top:22px; transform:none;"></i>
            <select id="adminMemberType" style="width:100%; padding:18px 14px 6px 42px; background:var(--bg-input); border:none; outline:none; color:var(--text-primary); font-size:15px; font-family:'Inter',sans-serif; font-weight:500; min-height:56px; appearance:none; -webkit-appearance:none; cursor:pointer;">
                <option value="2" ${member?.type === 2 ? 'selected' : ''}>${t.type_apartment || 'Квартира'}</option>
                <option value="3" ${member?.type === 3 ? 'selected' : ''}>${t.type_room || 'Комната'}</option>
            </select>
            <label style="left:42px; top:8px; transform:translateY(0); font-size:10px; color:var(--admin-primary); font-weight:600;">${t.member_type}</label>
        </div>
        <div class="input-field" style="padding: 0;">
            <i class="fas fa-user-shield input-icon" style="top:22px; transform:none;"></i>
            <select id="adminMemberPermission" style="width:100%; padding:18px 14px 6px 42px; background:var(--bg-input); border:none; outline:none; color:var(--text-primary); font-size:15px; font-family:'Inter',sans-serif; font-weight:500; min-height:56px; appearance:none; -webkit-appearance:none; cursor:pointer;">
                <option value="0" ${member?.permission === 0 ? 'selected' : ''}>${t.permission_guest || 'Гость'}</option>
                <option value="1" ${member?.permission === 1 ? 'selected' : ''}>${t.permission_user || 'Пользователь'}</option>
                <option value="2" ${member?.permission === 2 ? 'selected' : ''}>${t.permission_admin || 'Администратор'}</option>
            </select>
            <label style="left:42px; top:8px; transform:translateY(0); font-size:10px; color:var(--admin-primary); font-weight:600;">${t.member_permission}</label>
        </div>
    `;
    
    footer.innerHTML = `
        <button class="admin-submit-btn success" id="adminSubmitBtn">
            <i class="fas fa-save"></i> ${t.property_save || 'Сохранить'}
        </button>
        <button class="admin-submit-btn" id="adminCancelBtn" style="background:var(--bg-input);color:var(--text-secondary);box-shadow:none;margin-top:8px;">
            ${t.cancel || 'Отмена'}
        </button>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    document.getElementById('adminSubmitBtn')?.addEventListener('click', async () => {
        const name = document.getElementById('adminMemberName').value.trim();
        const type = parseInt(document.getElementById('adminMemberType').value);
        const permission = parseInt(document.getElementById('adminMemberPermission').value);
        
        if (!name) {
            showNotification(t.enter_name, 'error');
            return;
        }
        
        try {
            await modifyMember(tag, { name, type, permission });
            showNotification(t.member_updated, 'success');
            closeAdminModal();
            refreshUI();
        } catch (error) {
            showNotification(error.message, 'error');
        }
    });
    
    document.getElementById('adminCancelBtn')?.addEventListener('click', closeAdminModal);
}

function openAddCounterModal() {
    const modal = document.getElementById('adminModal');
    const title = document.getElementById('adminModalTitle');
    const body = document.getElementById('adminModalBody');
    const footer = document.getElementById('adminModalFooter');
    const t = translations[currentLang];
    
    title.textContent = t.add_counter || 'Добавить счётчик';
    
    body.innerHTML = `
        <div class="input-field">
            <i class="fas fa-tag input-icon"></i>
            <input type="text" id="adminCounterTag" required placeholder=" ">
            <label>${t.counter_tag}</label>
        </div>
        <div class="input-field">
            <i class="fas fa-gauge-high input-icon"></i>
            <input type="text" id="adminCounterName" required placeholder=" ">
            <label>${t.counter_name}</label>
        </div>
        <div class="input-field" style="padding: 0;">
            <i class="fas fa-bolt input-icon" style="top:22px; transform:none;"></i>
            <select id="adminCounterType" style="width:100%; padding:18px 14px 6px 42px; background:var(--bg-input); border:none; outline:none; color:var(--text-primary); font-size:15px; font-family:'Inter',sans-serif; font-weight:500; min-height:56px; appearance:none; -webkit-appearance:none; cursor:pointer;">
                <option value="1">${t.counter_type_1 || 'Электричество (день)'}</option>
                <option value="2">${t.counter_type_2 || 'Электричество (ночь)'}</option>
                <option value="3">${t.counter_type_3 || 'Газ'}</option>
                <option value="4">${t.counter_type_4 || 'Горячая вода'}</option>
                <option value="5">${t.counter_type_5 || 'Холодная вода'}</option>
            </select>
            <label style="left:42px; top:8px; transform:translateY(0); font-size:10px; color:var(--admin-primary); font-weight:600;">${t.counter_type}</label>
        </div>
        <div class="input-field">
            <i class="fas fa-numbers input-icon"></i>
            <input type="text" id="adminCounterCurrent" value="0" required placeholder=" ">
            <label>${t.counter_current}</label>
        </div>
    `;
    
    footer.innerHTML = `
        <button class="admin-submit-btn success" id="adminSubmitBtn">
            <i class="fas fa-plus"></i> ${t.add_counter || 'Добавить'}
        </button>
        <button class="admin-submit-btn" id="adminCancelBtn" style="background:var(--bg-input);color:var(--text-secondary);box-shadow:none;margin-top:8px;">
            ${t.cancel || 'Отмена'}
        </button>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    document.getElementById('adminSubmitBtn')?.addEventListener('click', async () => {
        const tag = document.getElementById('adminCounterTag').value.trim();
        const name = document.getElementById('adminCounterName').value.trim();
        const type = parseInt(document.getElementById('adminCounterType').value);
        const current = parseFloat(document.getElementById('adminCounterCurrent').value) || 0;
        
        if (!tag || !name) {
            showNotification(t.enter_tag + ' и ' + t.enter_name, 'error');
            return;
        }
        
        try {
            await addCounter(tag, name, type, current);
            showNotification(t.counter_added, 'success');
            closeAdminModal();
            refreshUI();
        } catch (error) {
            showNotification(error.message, 'error');
        }
    });
    
    document.getElementById('adminCancelBtn')?.addEventListener('click', closeAdminModal);
}

function openDeleteCounterModal() {
    const modal = document.getElementById('adminModal');
    const title = document.getElementById('adminModalTitle');
    const body = document.getElementById('adminModalBody');
    const footer = document.getElementById('adminModalFooter');
    const t = translations[currentLang];
    
    title.textContent = t.delete_counter || 'Удалить счётчик';
    
    const counters = API_CONFIG.currentMemberData?.counters || {};
    const counterOptions = Object.entries(counters).map(([tag, counter]) => {
        const name = counter.name || tag;
        return `<option value="${tag}">${name} (${tag})</option>`;
    }).join('');
    
    body.innerHTML = `
        <div class="input-field" style="padding: 0;">
            <i class="fas fa-bolt input-icon" style="top:22px; transform:none;"></i>
            <select id="adminCounterSelect" style="width:100%; padding:18px 14px 6px 42px; background:var(--bg-input); border:none; outline:none; color:var(--text-primary); font-size:15px; font-family:'Inter',sans-serif; font-weight:500; min-height:56px; appearance:none; -webkit-appearance:none; cursor:pointer;">
                ${counterOptions || '<option value="">Нет счётчиков</option>'}
            </select>
            <label style="left:42px; top:8px; transform:translateY(0); font-size:10px; color:var(--admin-primary); font-weight:600;">${t.counter_name}</label>
        </div>
    `;
    
    footer.innerHTML = `
        <button class="admin-submit-btn danger" id="adminSubmitBtn">
            <i class="fas fa-trash"></i> ${t.delete_counter || 'Удалить'}
        </button>
        <button class="admin-submit-btn" id="adminCancelBtn" style="background:var(--bg-input);color:var(--text-secondary);box-shadow:none;margin-top:8px;">
            ${t.cancel || 'Отмена'}
        </button>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    document.getElementById('adminSubmitBtn')?.addEventListener('click', async () => {
        const tag = document.getElementById('adminCounterSelect').value;
        if (!tag) {
            showNotification('Выберите счётчик', 'error');
            return;
        }
        
        const counter = API_CONFIG.currentMemberData?.counters?.[tag];
        if (confirm(t.confirm_delete_counter.replace('{name}', counter?.name || tag))) {
            try {
                await deleteCounter(tag);
                showNotification(t.counter_deleted, 'success');
                closeAdminModal();
                refreshUI();
            } catch (error) {
                showNotification(error.message, 'error');
            }
        }
    });
    
    document.getElementById('adminCancelBtn')?.addEventListener('click', closeAdminModal);
}

function closeAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
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
    
    if (isAuthenticated()) {
        if (dropdownLogin) dropdownLogin.style.display = 'none';
        if (dropdownRegister) dropdownRegister.style.display = 'none';
        if (dropdownLogout) dropdownLogout.style.display = 'flex';
        if (dropdownProperties) {
            dropdownProperties.style.display = 'flex';
            if (API_CONFIG.isAdmin) {
                dropdownProperties.innerHTML = `<i class="fas fa-crown"></i><span>${translations[currentLang].dropdown_properties}</span>`;
                dropdownProperties.className = 'dropdown-item admin-item';
            } else {
                dropdownProperties.innerHTML = `<i class="fas fa-building"></i><span>${translations[currentLang].dropdown_properties}</span>`;
                dropdownProperties.className = 'dropdown-item';
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
        metaColor.content = theme === 'dark' ? '#0D1117' : '#F5F7FA';
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
        const adminPanel = document.getElementById('adminPanelContainer');
        if (adminPanel) {
            adminPanel.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

document.getElementById('dropdownLogout')?.addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.remove('active');
    logoutAPI();
    // Очищаем UI
    document.getElementById('adminPanelContainer').style.display = 'none';
    document.getElementById('announcementCard').classList.remove('hidden');
    document.getElementById('propertyCard').classList.remove('admin-card');
    document.getElementById('propertyTitle').textContent = translations[currentLang].property_title || 'Моя квартира';
    document.getElementById('propertyAddressText').textContent = 'Загрузка...';
    document.getElementById('propertyOwnerText').textContent = 'Загрузка...';
    
    showNotification('Выход выполнен', 'warning');
    showAuthRequired();
    updateAuthUI();
    updateProfileIcon();
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
            updateProfileIcon();
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

// ============================================
// ОБРАБОТЧИКИ АДМИН-МОДАЛЕЙ
// ============================================

document.getElementById('adminModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeAdminModal();
});

document.getElementById('adminCloseBtn')?.addEventListener('click', closeAdminModal);

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAdminModal();
        closeAuthModal();
        closeReadingModal();
        closeConfirmModal();
    }
});

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
// МОДАЛЬНОЕ ОКНО ПОДТВЕРЖДЕНИЯ
// ============================================
function openConfirmModal(title, message, onConfirm) {
    const modal = document.getElementById('confirmModal');
    const titleEl = document.getElementById('confirmTitle');
    const messageEl = document.getElementById('confirmMessage');
    
    if (titleEl) titleEl.textContent = title || translations[currentLang].confirm_title;
    if (messageEl) messageEl.textContent = message || translations[currentLang].confirm_message;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    document.getElementById('confirmOk').onclick = function() {
        closeConfirmModal();
        if (typeof onConfirm === 'function') onConfirm();
    };
    document.getElementById('confirmCancel').onclick = closeConfirmModal;
}

function closeConfirmModal() {
    const modal = document.getElementById('confirmModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.getElementById('confirmModal')?.addEventListener('click', function(e) {
    if (e.target === this) closeConfirmModal();
});

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
async function initApp() {
    console.log('🚀 Запуск Majio...');
    
    // Сначала пробуем восстановить UI из сохранённого состояния
    const stateRestored = restoreUIFromState();
    console.log(`🔄 Восстановление UI: ${stateRestored ? 'успешно' : 'нет данных'}`);
    
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
    
    console.log('🏠 KorterInfo v0.35 - Управление недвижимостью');
    console.log(`🌓 Theme: ${currentTheme}, Language: ${currentLang}`);
    console.log(`🔑 Authenticated: ${isAuthenticated()}`);
    if (isAuthenticated()) {
        console.log(`📍 Path: ${API_CONFIG.memberPath}`);
        console.log(`👑 Admin: ${API_CONFIG.isAdmin}`);
        const hasFullState = !!localStorage.getItem('majio_full_state');
        console.log(`📂 Полное состояние сохранено: ${hasFullState ? 'да' : 'нет'}`);
    }
}

document.addEventListener('DOMContentLoaded', initApp);