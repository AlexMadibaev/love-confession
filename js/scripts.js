document.addEventListener('DOMContentLoaded', function() {
    const textArray = [
        "Милая Нилюфар❤️️",
        "Каждый момент, проведённый с тобой💑",
        "Наполняет мою жизнь радостью и светом😍",
        "😘Ты даришь мне столько тепла и счастья",
        "Что я не могу представить свои дни без твоего присутствия🙀",
        "🤩Когда я рядом с тобой, я чувствую себя самым счастливым человеком на свете😍",
        "Ты для меня невероятно дорога❤️",
        "И я хочу сделать наши взаимотношения ещё крепче🔒",
        "Давай сделаем этот рискованный😬",
        "Но по настоящему нужным нам шаг💑",
        "❤️Вместе👫❤️",
        "❤️Нилюш❤️",
        "❤️Родная❤️",
        "❤️Любимая❤️",
        "Готова ли ты пройти со мной этот удивительный путь длинною в жизнь?",
        "И наконец"
    ];

    let textIndex = 0;
    const contentDiv = document.getElementById('content');
    const orientationMessage = document.getElementById('orientation-message');
    const backgroundMusic = document.getElementById('background-music');

    if (!contentDiv || !backgroundMusic) {
        console.error('Missing content or background-music element');
        return;
    }

    // Проверка ориентации устройства
    function checkOrientation() {
        if (window.innerWidth < window.innerHeight) {
            if (orientationMessage) orientationMessage.style.display = 'flex';
            contentDiv.style.display = 'none'; // Скрыть контент
        } else {
            if (orientationMessage) orientationMessage.style.display = 'none';
            contentDiv.style.display = 'block'; // Показать контент
            startContent(); // Начать отображение контента
        }
    }

    // Начать отображение контента
    function startContent() {
        contentDiv.textContent = textArray[textIndex];

        document.body.addEventListener('click', () => {
            fadeOut(contentDiv, () => {
                if (textIndex < textArray.length - 1) {
                    textIndex++;
                    contentDiv.textContent = textArray[textIndex];
                } else {
                    contentDiv.textContent = "Будешь ли ты моей девушкой?";
                    backgroundMusic.play();
                }
                fadeIn(contentDiv);
            });
        });

        if (typeof createStars === 'function') createStars(101); // Создаем звезды
        if (typeof createFallingStar === 'function') setInterval(createFallingStar, 2000); // Генерируем падающие звезды
    }

    // Функция плавного исчезновения
    function fadeOut(element, callback) {
        element.style.opacity = '0';
        setTimeout(callback, 500);
    }

    // Функция плавного появления
    function fadeIn(element) {
        element.style.opacity = '1';
    }

    // Событие изменения ориентации
    window.addEventListener('resize', checkOrientation);
    checkOrientation(); // Проверка ориентации при загрузке страницы
});

// Функция создания звезд
function createStars(count) {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
    }
}

// Функция создания падающих звезд
function createFallingStar() {
    const fallingStarsContainer = document.querySelector('.falling-stars');
    const fallingStar = document.createElement('div');
    fallingStar.className = 'falling-star';
    fallingStar.style.top = `${Math.random() * 100}%`;
    fallingStar.style.left = `${Math.random() * 100}%`;
    fallingStarsContainer.appendChild(fallingStar);

    fallingStar.addEventListener('animationend', () => {
        fallingStarsContainer.removeChild(fallingStar);
    });
}
