/**
 * ============================================
 * MAJIO - ПРИЛОЖЕНИЕ ДЛЯ ПОДАЧИ ПОКАЗАНИЙ
 * ============================================
 * Версия: 1.0
 * Язык: Эстонский (интерфейс), русский (комментарии)
 * Хранение: localStorage
 * ============================================
 */

// ============================================
// КЛАСС ДЛЯ УПРАВЛЕНИЯ ПОКАЗАНИЯМИ
// ============================================
class MeterReadings {
    /**
     * Конструктор - загружает данные из localStorage
     */
    constructor() {
        this.readings = [];
        this.loadFromLocalStorage();
    }

    /**
     * Загрузка данных из localStorage
     */
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

    /**
     * Сохранение данных в localStorage
     */
    saveToLocalStorage() {
        localStorage.setItem('majio_readings', JSON.stringify(this.readings));
    }

    /**
     * Добавление нового показания
     * @param {number} apartment - номер квартиры
     * @param {string} name - имя жильца
     * @param {number} electricity - показания электричества
     * @param {number} waterCold - показания холодной воды
     * @param {number} waterHot - показания горячей воды
     * @returns {object} - созданная запись
     */
    addReading(apartment, name, electricity, waterCold, waterHot) {
        const reading = {
            id: Date.now(), // Уникальный ID на основе времени
            apartment: parseInt(apartment),
            name: name.trim(),
            electricity: parseFloat(electricity),
            waterCold: parseFloat(waterCold),
            waterHot: parseFloat(waterHot),
            date: new Date().toLocaleString('et-EE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            timestamp: Date.now()
        };

        // Добавляем в начало массива (свежие записи сверху)
        this.readings.unshift(reading);
        this.saveToLocalStorage();
        return reading;
    }

    /**
     * Удаление показания по ID
     * @param {number} id - ID записи
     */
    deleteReading(id) {
        this.readings = this.readings.filter(r => r.id !== id);
        this.saveToLocalStorage();
    }

    /**
     * Очистка всех показаний
     * @returns {boolean} - подтверждение действия
     */
    clearAll() {
        if (confirm('🗑️ Kas soovite kõik näidud kustutada?')) {
            this.readings = [];
            this.saveToLocalStorage();
            return true;
        }
        return false;
    }

    /**
     * Получение всех показаний
     * @returns {array} - массив всех записей
     */
    getAllReadings() {
        return this.readings;
    }

    /**
     * Получение статистики
     * @returns {object} - { total: количество записей, apartments: количество квартир }
     */
    getStats() {
        const uniqueApartments = new Set(this.readings.map(r => r.apartment));
        return {
            total: this.readings.length,
            apartments: uniqueApartments.size
        };
    }

    /**
     * Экспорт данных в CSV файл
     */
    exportToCSV() {
        if (this.readings.length === 0) {
            alert('📭 Andmed puuduvad!');
            return;
        }

        // Заголовки CSV
        const headers = ['Korter', 'Nimi', 'Elektrienergia', 'Külm vesi', 'Soe vesi', 'Kuupäev'];
        
        // Данные
        const rows = this.readings.map(r => [
            r.apartment,
            r.name,
            r.electricity,
            r.waterCold,
            r.waterHot,
            r.date
        ]);

        // Формируем CSV строку
        const csvContent = [headers, ...rows]
            .map(row => row.join(','))
            .join('\n');

        // Добавляем BOM для корректного отображения в Excel
        const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
        
        // Создаем ссылку для скачивания
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `majio_${new Date().toISOString().slice(0,10)}.csv`;
        link.click();
        URL.revokeObjectURL(link.href);
    }
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
// ============================================
const meterApp = new MeterReadings();

// ============================================
// ПОЛУЧЕНИЕ DOM ЭЛЕМЕНТОВ
// ============================================
const form = document.getElementById('meterForm');
const readingsBody = document.getElementById('readingsBody');
const clearAllBtn = document.getElementById('clearAllBtn');
const exportBtn = document.getElementById('exportBtn');
const totalReadings = document.getElementById('totalReadings');
const totalApartments = document.getElementById('totalApartments');

// ============================================
// РЕНДЕРИНГ ТАБЛИЦЫ
// ============================================
function renderTable() {
    const readings = meterApp.getAllReadings();
    
    if (readings.length === 0) {
        // Показываем пустое сообщение
        readingsBody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-message">
                    Näidud puuduvad. Lisage esimene!
                </td>
            </tr>
        `;
    } else {
        // Генерируем строки таблицы
        readingsBody.innerHTML = readings.map(reading => `
            <tr>
                <td><strong>${reading.apartment}</strong></td>
                <td>${reading.name}</td>
                <td>${reading.electricity}</td>
                <td>${reading.waterCold}</td>
                <td>${reading.waterHot}</td>
                <td>${reading.date}</td>
                <td>
                    <button class="delete-btn" data-id="${reading.id}">✕</button>
                </td>
            </tr>
        `).join('');

        // Добавляем обработчики для кнопок удаления
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.dataset.id);
                if (confirm('Kas soovite selle näidu kustutada?')) {
                    meterApp.deleteReading(id);
                    renderTable();
                    updateStats();
                    showNotification('✅ Näidud kustutatud');
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
// УВЕДОМЛЕНИЯ
// ============================================
function showNotification(message, isError = false) {
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    const colors = isError 
        ? 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
        : 'linear-gradient(135deg, #43e97b, #38f9d7)';
    
    // Стили уведомления
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: ${colors};
        color: ${isError ? 'white' : '#0a0e27'};
        padding: 18px 28px;
        border-radius: 16px;
        font-weight: 700;
        box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        font-family: 'Inter', sans-serif;
        font-size: 1em;
        max-width: 350px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.3);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Автоматическое исчезновение через 3 секунды
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// ДОБАВЛЕНИЕ АНИМАЦИЙ ДЛЯ УВЕДОМЛЕНИЙ
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(120%) scale(0.8);
            opacity: 0;
        }
        to {
            transform: translateX(0) scale(1);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        to {
            transform: translateX(120%) scale(0.8);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// ОБРАБОТЧИК ФОРМЫ
// ============================================
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Получаем значения полей
    const apartment = document.getElementById('apartment').value;
    const name = document.getElementById('name').value;
    const electricity = document.getElementById('electricity').value;
    const waterCold = document.getElementById('waterCold').value;
    const waterHot = document.getElementById('waterHot').value;

    // Проверка заполнения всех полей
    if (!apartment || !name || !electricity || !waterCold || !waterHot) {
        showNotification('⚠️ Täitke kõik väljad!', true);
        return;
    }

    // Проверка на отрицательные значения
    if (parseFloat(electricity) < 0 || parseFloat(waterCold) < 0 || parseFloat(waterHot) < 0) {
        showNotification('⚠️ Väärtused ei saa olla negatiivsed!', true);
        return;
    }

    // Добавляем показание
    meterApp.addReading(apartment, name, electricity, waterCold, waterHot);
    
    // Обновляем интерфейс
    renderTable();
    updateStats();
    
    // Очищаем форму
    form.reset();
    
    // Показываем уведомление об успехе
    showNotification('🎉 Näidud edukalt esitatud!');
});

// ============================================
// ОБРАБОТЧИК КНОПКИ ОЧИСТКИ
// ============================================
clearAllBtn.addEventListener('click', function() {
    if (meterApp.clearAll()) {
        renderTable();
        updateStats();
        showNotification('🗑️ Kõik näidud kustutatud');
    }
});

// ============================================
// ОБРАБОТЧИК КНОПКИ ЭКСПОРТА
// ============================================
exportBtn.addEventListener('click', function() {
    meterApp.exportToCSV();
    showNotification('📥 CSV fail allalaetud');
});

// ============================================
// ПЕРВОНАЧАЛЬНАЯ ЗАГРУЗКА ДАННЫХ
// ============================================
renderTable();
updateStats();

// ============================================
// ОБРАБОТКА ОШИБОК (для отладки)
// ============================================
console.log('🏠 Majio rakendus käivitatud!');
console.log(`📊 Hetkel ${meterApp.getStats().total} näitu ja ${meterApp.getStats().apartments} korterit`);