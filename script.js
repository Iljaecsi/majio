/**
 * ============================================
 * MAJIO - СОВРЕМЕННОЕ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
 * ============================================
 */

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
            date: new Date().toLocaleString('et-EE', {
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
        if (confirm('🗑️ Kas soovite kõik näidud kustutada?')) {
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
        if (this.readings.length === 0) {
            this.showNotification('📭 Andmed puuduvad!', 'error');
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

// ============================================
// РЕНДЕРИНГ ТАБЛИЦЫ
// ============================================
function renderTable() {
    const readings = meterApp.getAllReadings();
    
    if (readings.length === 0) {
        readingsBody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-message">
                    <i class="fas fa-inbox" style="display:block;font-size:24px;margin-bottom:8px;color:var(--text-muted)"></i>
                    Näidud puuduvad
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
                if (confirm('Kas soovite selle näidu kustutada?')) {
                    meterApp.deleteReading(id);
                    renderTable();
                    updateStats();
                    meterApp.showNotification('✅ Näidud kustutatud');
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

    if (!apartment || !name || !electricity || !waterCold || !waterHot) {
        meterApp.showNotification('⚠️ Täitke kõik väljad!', 'error');
        return;
    }

    if (parseFloat(electricity) < 0 || parseFloat(waterCold) < 0 || parseFloat(waterHot) < 0) {
        meterApp.showNotification('⚠️ Väärtused ei saa olla negatiivsed!', 'error');
        return;
    }

    meterApp.addReading(apartment, name, electricity, waterCold, waterHot);
    renderTable();
    updateStats();
    form.reset();
    
    meterApp.showNotification('🎉 Näidud edukalt esitatud!');
});

// ============================================
// ОБРАБОТЧИКИ КНОПОК
// ============================================
clearAllBtn.addEventListener('click', function() {
    if (meterApp.clearAll()) {
        renderTable();
        updateStats();
        meterApp.showNotification('🗑️ Kõik näidud kustutatud');
    }
});

exportBtn.addEventListener('click', function() {
    meterApp.exportToCSV();
    meterApp.showNotification('📥 CSV fail allalaetud');
});

// ============================================
// ЗАГРУЗКА
// ============================================
renderTable();
updateStats();

console.log('🏠 Majio v2.0 - Modern Mobile UI');