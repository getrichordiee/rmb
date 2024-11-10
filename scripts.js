// Получаем все элементы
const registerBtn = document.getElementById('registerBtn');
const accessBtn = document.getElementById('accessBtn');
const signalsContainer = document.getElementById('signals');
const rocketSignal = document.getElementById('rocketSignal');
const minesSignal = document.getElementById('minesSignal');
const signalResult = document.getElementById('signalResult');
const signalText = document.getElementById('signalText');
const getRocketSignalBtn = document.getElementById('getRocketSignalBtn');
const getMinesSignalBtn = document.getElementById('getMinesSignalBtn');
const backToSignalsBtn = document.getElementById('backToSignalsBtn');
const backToSignalsBtn2 = document.getElementById('backToSignalsBtn2');
const backToMenuBtn = document.getElementById('backToMenuBtn');
const newSignalBtn = document.getElementById('newSignalBtn');

// Функции для переключения видимости
function showElement(element) {
    element.classList.add('show');
}

function hideElement(element) {
    element.classList.remove('show');
}

// Стартовый экран
accessBtn.addEventListener('click', () => {
    hideElement(registerBtn);
    hideElement(accessBtn);
    showElement(signalsContainer);
});

// Перейти к сигнала Ракеты
rocketSignal.addEventListener('click', () => {
    hideElement(signalsContainer);
    showElement(rocketSignal);
});

// Перейти к сигнала Мины
minesSignal.addEventListener('click', () => {
    hideElement(signalsContainer);
    showElement(minesSignal);
});

// Получить сигнал Ракеты
getRocketSignalBtn.addEventListener('click', () => {
    generateSignal('rocket');
});

// Получить сигнал Мины
getMinesSignalBtn.addEventListener('click', () => {
    generateSignal('mines');
});

// Функция для генерации сигнала
function generateSignal(type) {
    hideElement(rocketSignal);
    hideElement(minesSignal);
    showElement(signalResult);

    if (type === 'rocket') {
        const coefficient = (Math.random() * (20 - 1.01) + 1.01).toFixed(2);
        const chance = Math.max(19, Math.floor(100 - coefficient * 5));
        const duration = Math.floor(Math.random() * (240 - 15 + 1)) + 15;

        signalText.innerHTML = `💰Коэффициент: ${coefficient}x<br>😈Шанс: ${chance}%<br>⏱️Срок действия: ${duration} секунд`;
    } else if (type === 'mines') {
        const numMines = Math.random() > 0.5 ? 1 : 3;
        const numStars = numMines === 1 ? 9 : 6;
        const matrix = Array.from({ length: 5 }, () => Array(5).fill("🟦"));
        const stars = [];

        while (stars.length < numStars) {
            const randPos = Math.floor(Math.random() * 25);
            if (!stars.includes(randPos)) {
                stars.push(randPos);
                matrix[Math.floor(randPos / 5)][randPos % 5] = "⭐";
            }
        }

        const matrixStr = matrix.map(row => row.join('')).join('\n');
        const duration = Math.floor(Math.random() * (240 - 15 + 1)) + 15;

        signalText.innerHTML = `💣Количество мин: ${numMines}<br>⏱️Срок действия: ${duration} секунд<br><br>⭐Выигрышный вариант:<br>${matrixStr}`;
    }
}

// Кнопки назад и новый сигнал
backToMenuBtn.addEventListener('click', () => {
    hideElement(signalResult);
    showElement(signalsContainer);
});

newSignalBtn.addEventListener('click', () => {
    generateSignal(rocketSignal.classList.contains('show') ? 'rocket' : 'mines');
});
