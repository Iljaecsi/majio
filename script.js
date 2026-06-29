/**
 * ============================================
 * MAJIO v3.1 - СВЕТЛАЯ ТЕМА + РУССКИЙ ЯЗЫК
 * ============================================
 */

// ============================================
// ПЕРЕВОДЫ
// ============================================
const translations = {
    ru: {
        greeting: 'Здравствуйте,',
        readings: 'показаний',
        apartments: 'квартир',
        submit_title: 'Подать показания',
        new: 'Новое',
        apartment_label: 'Номер квартиры',
        name_label: 'Ваше имя',
        electricity_label: 'Электричество, кВт·ч',
        water_cold_label: 'Холодная вода, м³',
        water_hot_label: 'Горячая вода, м³',
        submit_btn: 'Отправить показания',
        history_title: 'История',
        th_apartment: 'Квартира',
        th_name: 'Имя',
        th_date: '📅',
        nav_home: 'Главная',
        nav_stats: 'Статистика',
        nav_profile: 'Профиль',
        empty_message: 'Нет показаний',
        delete_confirm: 'Удалить это показание?',
        clear_confirm: '🗑️ Удалить все показания?',
        clear_all: 'Все показания удалены',
        deleted: 'Показание удалено',
        submitted: '🎉 Показания успешно поданы!',
        export_success: '📥 CSV файл скачан',
        export_error: '📭 Нет данных для экспорта!',
        fill_fields: '⚠️ Заполните все поля!',
        negative_error: '⚠️ Значения не могут быть отрицательными!'
    },
    et: {
        greeting: 'Tere,',
        readings: 'näitu',
        apartments: 'korterit',
        submit_title: 'Esita näidud',
        new: 'Uus',
        apartment_label: 'Korteri number',
        name_label: 'Teie nimi',
        electricity_label: 'Elektrienergia, kWh',
        water_cold_label: 'Külm vesi, m³',
        water_hot_label: 'Soe vesi, m³',
        submit_btn: 'Saada näidud',
        history_title: 'Ajalugu',
        th_apartment: 'Korter',
        th_name: 'Nimi',
        th_date: '📅',
        nav_home: 'Avaleht',
        nav_stats: 'Statistika',
        nav_profile: 'Profiil',
        empty_message: 'Näidud puuduvad',
        delete_confirm: 'Kas soovite selle näidu kustutada?',
        clear_confirm: '🗑️ Kas soovite kõik näidud kustutada?',
        clear_all: 'Kõik näidud kustutatud',
        deleted: 'Näidud kustutatud',
        submitted: '🎉 Näidud edukalt esitatud!',
        export_success: '📥 CSV fail allalaetud',
        export_error: '📭 Andmed puuduvad!',
        fill_fields: '⚠️ Täitke kõik väljad!',
        negative_error: '⚠️ Väärtused ei saa olla negatiivsed!'
    }
};

// ============================================
// ТЕКУЩИЕ НАСТРОЙКИ (ПО УМОЛЧАНИЮ: СВЕТЛАЯ + РУССКИЙ)
// ============================================
let currentLang = localStorage.getItem('majio_lang') || 'ru';
let currentTheme = localStorage.getItem('majio_theme') || 'light';

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
    renderTable();
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
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
    
    const metaColor = document.getElementById('themeColor');
    if (metaColor) {
        metaColor.content = theme === 'dark' ? '#1a1a2e' : '#F5F5FA';
    }
}

// ============================================
// КЛАСС ДЛЯ УПРАВЛЕНИЯ ПОКАЗАНИЯМИ
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

    addReading(apartment, name, electricity, waterCold, waterHot) {
        const reading = {
            id: Date.now(),
            apartment: parseInt(apartment),
            name: name.trim(),
            electricity: parseFloat(electricity),
            waterCold: parseFloat(waterCold),
            waterHot: parseFloat(waterHot),
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

    clearAll() {
        const confirmMsg = currentLang === 'et' 
            ? translations.et.clear_confirm 
            : translations.ru.clear_confirm;
        if (confirm(confirmMsg)) {
            this.readings = [];
            this.saveToLocalStorage();
            return true;
        }
        return false;
    }

    getAllReadings() {
        return this.readings;
    }

    getStats() {
        const uniqueApartments = new Set(this.readings.map(r => r.apartment));
        return {
            total: this.readings.length,
            apartments: uniqueApartments.size
        };
    }

    exportToCSV() {
        const t = translations[currentLang];
        if (this.readings.length === 0) {
            this.showNotification(t.export_error, 'error');
            return;
        }

        const headers = ['Korter', 'Nimi', 'Elektrienergia', 'Külm vesi', 'Soe vesi', 'Kuupäev'];
        const rows = this.readings.map(r => [
            r.apartment,
            r.name,
            r.electricity,
            r.waterCold,
            r.waterHot,
            r.date
        ]);

        const csvContent = [headers, ...rows]
            .map(row => row.join(','))
            .join('\n');

        const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `majio_${new Date().toISOString().slice(0,10)}.csv`;
        link.click();
        URL.revokeObjectURL(link.href);
        this.showNotification(t.export_success);
    }

    showNotification(message, type = 'success') {
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
const clearAllBtn = document.getElementById('clearAllBtn');
const exportBtn = document.getElementById('exportBtn');
const totalReadings = document.getElementById('totalReadings');
const totalApartments = document.getElementById('totalApartments');
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');

// ============================================
// РЕНДЕРИНГ ТАБЛИЦЫ
// ============================================
function renderTable() {
    const readings = meterApp.getAllReadings();
    const t = translations[currentLang];
    
    if (readings.length === 0) {
        readingsBody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-message">
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
                <td>${reading.electricity}</td>
                <td>${reading.waterCold}</td>
                <td>${reading.waterHot}</td>
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
                    renderTable();
                    updateStats();
                    meterApp.showNotification(t.deleted);
                }
            });
        });
    }
}

// ============================================
// ОБНОВЛЕНИЕ СТАТИСТИКИ
// ============================================
function updateStats() {
    const stats = meterApp.getStats();
    totalReadings.textContent = stats.total;
    totalApartments.textContent = stats.apartments;
}

// ============================================
// ОБРАБОТЧИК ФОРМЫ
// ============================================
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const apartment = document.getElementById('apartment').value;
    const name = document.getElementById('name').value;
    const electricity = document.getElementById('electricity').value;
    const waterCold = document.getElementById('waterCold').value;
    const waterHot = document.getElementById('waterHot').value;
    const t = translations[currentLang];

    if (!apartment || !name || !electricity || !waterCold || !waterHot) {
        meterApp.showNotification(t.fill_fields, 'error');
        return;
    }

    if (parseFloat(electricity) < 0 || parseFloat(waterCold) < 0 || parseFloat(waterHot) < 0) {
        meterApp.showNotification(t.negative_error, 'error');
        return;
    }

    meterApp.addReading(apartment, name, electricity, waterCold, waterHot);
    renderTable();
    updateStats();
    form.reset();
    
    meterApp.showNotification(t.submitted);
});

// ============================================
// ОБРАБОТЧИКИ КНОПОК
// ============================================
clearAllBtn.addEventListener('click', function() {
    const t = translations[currentLang];
    if (meterApp.clearAll()) {
        renderTable();
        updateStats();
        meterApp.showNotification(t.clear_all);
    }
});

exportBtn.addEventListener('click', function() {
    meterApp.exportToCSV();
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
    renderTable();
});

// ============================================
// ЗАГРУЗКА
// ============================================
applyTheme(currentTheme);
applyTranslations(currentLang);
renderTable();
updateStats();

console.log('🏠 Majio v3.1 - Light theme + Russian default');
console.log(`🌓 Theme: ${currentTheme}, Language: ${currentLang}`);