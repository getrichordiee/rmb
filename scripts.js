// Получаем элементы
const registerBtn = document.getElementById('registerBtn');
const signalsContainer = document.getElementById('signals');
const rocketSignal = document.getElementById('rocketSignal');
const minesSignal = document.getElementById('minesSignal');
const signalResult = document.getElementById('signalResult');
const signalText = document.getElementById('signalText');

// Функция для показа и скрытия элементов
function showElement(element) {
    element.classList.add('show');
}

function hideElement(element) {
    element.classList.remove('show');
}

// Переход на страницу регистрации
registerBtn.addEventListener('click', () => {
    window.location.href = "https://1warlo.top/casino/list?open=register&p=eu9d";
});

// Показать экран с выбором сигналов
registerBtn.addEventListener('click', () => {
    hideElement(document.getElementById('welcomeScreen'));
    showElement(signalsContainer);
});

// Ракетный сигнал
document.getElementById('rocketBtn').addEventListener('click', () => {
    hideElement(signalsContainer);
    showElement(rocketSignal);
});

// Сигнал мины
document.getElementById('minesBtn').addEventListener('click', () => {
    hideElement(signalsContainer);
    showElement(minesSignal);
});

// Назад в меню
document.getElementById('backToSignalsBtn').addEventListener('click', () => {
    hideElement(rocketSignal);
    showElement(signalsContainer);
});

document.getElementById('backToSignalsBtn2').addEventListener('click', () => {
    hideElement(minesSignal);
    showElement(signalsContainer);
});

// Генерация ракетного сигнала
document.getElementById('getRocketSignalBtn').addEventListener('click', async () => {
    const coefficient = (Math.random() * 20).toFixed(2);
    const chance = Math.max(19, Math.floor(100 - coefficient * 5));
    const duration = Math.floor(Math.random() * (240 - 15) + 15);

    const signalMessage = `
        Сигнал получен🔥
        💰Коэффициент: ${coefficient}x
        😈Шанс: ${chance}%
        ⏱️Срок действия: ${duration} секунд
    `;
    signalText.innerHTML = signalMessage;

    hideElement(rocketSignal);
    showElement(signalResult);
});

// Генерация сигнала мин
document.getElementById('getMinesSignalBtn').addEventListener('click', async () => {
    const numMines = Math.random() > 0.5 ? 1 : 3;  // 50% шанс на 1 или 3 мины
    const numStars = numMines === 1 ? 9 : 6;  // Для 1 мины — 9 звезд, для 3 — 6
    const duration = Math.floor(Math.random() * (240 - 15) + 15);

    let matrix = Array(5).fill().map(() => Array(5).fill('🟦'));
    const stars = [];
    while (stars.length < numStars) {
        const starIndex = Math.floor(Math.random() * 25);
        if (!stars.includes(starIndex)) stars.push(starIndex);
    }

    stars.forEach(star => {
        const row = Math.floor(star / 5);
        const col = star % 5;
        matrix[row][col] = '⭐';
    });

    const matrixStr = matrix.map(row => row.join('')).join('\n');
    const signalMessage = `
        Сигнал получен🔥
        💣Количество мин: ${numMines}
        ⏱️Срок действия: ${duration} секунд

        ⭐Выигрышный вариант:
        ${matrixStr}
    `;
    signalText.innerHTML = signalMessage;

    hideElement(minesSignal);
    showElement(signalResult);
});

// Новые сигналы
document.getElementById('newSignalBtn').addEventListener('click', () => {
    hideElement(signalResult);
    showElement(rocketSignal);  // или minesSignal в зависимости от выбора
});

// Назад в меню
document.getElementById('backToMenuBtn').addEventListener('click', () => {
    hideElement(signalResult);
    showElement(signalsContainer);
});
