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
    const backgroundMusic = document.getElementById('background-music');

    // Установить первое сообщение сразу при загрузке страницы
    contentDiv.textContent = textArray[textIndex];

    document.body.addEventListener('click', function() {
        // Уменьшаем непрозрачность перед сменой текста
        contentDiv.style.opacity = '0';

        setTimeout(() => {
            if (textIndex < textArray.length - 1) {
                textIndex++;
                contentDiv.textContent = textArray[textIndex];
            } else {
                contentDiv.textContent = "Будешь ли ты моей девушкой?";
                // Запуск музыки после последнего сообщения
                backgroundMusic.play();
            }
            // Увеличиваем непрозрачность после изменения текста
            contentDiv.style.opacity = '1';
        }, 500); // Время совпадает с временем перехода непрозрачности в CSS
    });

    // Генерация случайных звезд
    function createStars(numStars) {
        const starsContainer = document.querySelector('.stars');
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = Math.random() * 5 + 2; // Размер звезды от 2 до 7 пикселей
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 1 + 1}s`; // Случайная анимация от 1 до 2 секунд
            starsContainer.appendChild(star);
        }
    }

    createStars(200); // Создаем 100 звезд

    // Генерация падающих звезд
    function createFallingStar() {
        const fallingStarsContainer = document.querySelector('.falling-stars');
        const fallingStar = document.createElement('div');
        fallingStar.className = 'falling-star';
        fallingStar.style.left = '0'; // Начальное положение слева
        fallingStar.style.top = `${Math.random() * 50}vh`; // Случайная вертикальная позиция (от 0 до 50% высоты экрана)
        fallingStar.style.animationDuration = `${Math.random() * 1 + 1}s`; // Случайная длительность падения (от 1 до 2 секунд)
        fallingStarsContainer.appendChild(fallingStar);

        // Удалить падающую звезду после анимации
        fallingStar.addEventListener('animationend', () => {
            fallingStar.remove();
        });
    }

    // Генерировать падающие звезды каждые 2 секунды
    setInterval(createFallingStar, 2000);
});