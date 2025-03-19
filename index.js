// Функция для переключения темы (светлая/тёмная)
function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('themeButton');

    if (!themeButton) {
        console.error('Кнопка с ID "themeButton" не найдена!');
        return;
    }

    const isDarkMode = body.classList.contains('dark-mode');
    body.classList.toggle('dark-mode');
    themeButton.textContent = isDarkMode ? themeButton.dataset.lightText : themeButton.dataset.darkText;

    // Создаём эффект анимации
    const animationOverlay = document.createElement('div');
    animationOverlay.className = 'animation-overlay';
    animationOverlay.style.backgroundColor = isDarkMode ? '#f4f4f4' : '#0a0a0a';
    body.appendChild(animationOverlay);

    // Удаляем анимационный слой после завершения
    animationOverlay.addEventListener('animationend', () => {
        body.removeChild(animationOverlay);
    });
}

// Функция для создания эффекта "печати" текста
function typeText(element, text, delay = 50) {
    element.textContent = ""; // Очищаем текущий текст
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(typingInterval); // Останавливаем анимацию, когда текст напечатан
        }
    }, delay);
}

// Функция для перевода текста с анимацией
function translatePageWithAnimation(language) {
    const translations = {
        ru: {
            themeButtonDark: "Светлая Тема",
            themeButtonLight: "Тёмная Тема",
            welcomeTitle: "Добро пожаловать в будущее",
            welcomeDescription: "Сможете ли вы изменить судьбу андроидов?",
            learnMore: "Узнать больше",
            aboutTitle: "Об игре",
            aboutDescription: "Detroit: Become Human — это приключенческая игра от Quantic Dream, исследующая будущее, где андроиды становятся разумными.",
            highlightsTitle: "Основные моменты",
            screenshotsTitle: "Скриншоты",
            screenshots: ["Скриншот 1", "Скриншот 2", "Скриншот 3", "Скриншот 4"],
            videosTitle: "Видео",
            quizTitle: "Какой герой Detroit: Become Human вам нравится?",
            quizOptions: ["Кэра", "Маркус", "Коннор"],
            downloadButton: "Скачать DETROIT: Become Human Сейчас",
            systemRequirements: {
                title: "Системные требования",
                overview: "Detroit: Become Human, новейшая и самая амбициозная игра от Quantic Dream, наконец-то выходит на ПК!",
                featuresTitle: "Ключевые особенности",
                features: [
                    "Захватывающий сюжет: узнайте мир, где моральные дилеммы превращают андроидов в революционеров.",
                    "Ваши выборы важны: формируйте судьбу трёх главных героев и всего города Детройт.",
                    "Бесчисленные концовки: переигрывайте снова и снова, открывая уникальные исходы.",
                    "Полная оптимизация: наслаждайтесь потрясающей графикой 4K и плавным геймплеем в 60 FPS."
                ],
                specificationsTitle: "Характеристики",
                minimum: {
                    os: "Windows 10 (64 bit)",
                    processor: "Intel Core i5-2300 @ 2.8 GHz или Ryzen 3 1200 @ 3.1GHz",
                    memory: "8GB RAM",
                    video: "Nvidia GeForce GTX 780 или AMD HD 7950 (требуется Vulkan 1.1)",
                    videoRam: "3GB или больше",
                    hardDrive: "55 GB"
                },
                recommended: {
                    os: "Windows 11 (64 bit)",
                    processor: "Intel i5-6600 @ 3.3 GHz или Ryzen 3 1300 X @ 3.4 GHz",
                    memory: "12GB RAM",
                    video: "Nvidia GeForce GTX 1060 или AMD Radeon RX 580 (требуется Vulkan 1.1)",
                    videoRam: "4GB или больше",
                    hardDrive: "55 GB"
                }
            }
        },
        en: {
            themeButtonDark: "Light Theme",
            themeButtonLight: "Dark Theme",
            welcomeTitle: "Welcome to the Future",
            welcomeDescription: "Can you change the fate of androids?",
            learnMore: "Learn More",
            aboutTitle: "About the Game",
            aboutDescription: "Detroit: Become Human is an adventure game by Quantic Dream, exploring a future where androids become sentient.",
            highlightsTitle: "HIGHLIGHTS",
            screenshotsTitle: "Screenshots",
            screenshots: ["Screenshot 1", "Screenshot 2", "Screenshot 3", "Screenshot 4"],
            videosTitle: "Videos",
            quizTitle: "Which Detroit: Become Human character do you like?",
            quizOptions: ["Kara", "Markus", "Connor"],
            downloadButton: "Download DETROIT: Become Human Now",
            systemRequirements: {
                title: "System Requirements",
                overview: "Detroit: Become Human, the latest and most ambitious video game production from Quantic Dream, is finally coming to PC!",
                featuresTitle: "Key Features",
                features: [
                    "Gripping Narrative: Discover a world where moral dilemmas turn android slaves into revolutionaries.",
                    "Your Choices Matter: Shape the fate of the three main characters and the entire city of Detroit.",
                    "Countless Endings: Replay again and again to discover unique outcomes.",
                    "Fully Optimized for PC: Experience stunning graphics, 4K resolution, and smooth 60 fps gameplay."
                ],
                specificationsTitle: "Specifications",
                minimum: {
                    os: "Windows 10 (64 bit)",
                    processor: "Intel Core i5-2300 @ 2.8 GHz or Ryzen 3 1200 @ 3.1GHz",
                    memory: "8GB RAM",
                    video: "Nvidia GeForce GTX 780 or AMD HD 7950 (Vulkan 1.1 required)",
                    videoRam: "3GB or more",
                    hardDrive: "55 GB"
                },
                recommended: {
                    os: "Windows 11 (64 bit)",
                    processor: "Intel i5-6600 @ 3.3 GHz or Ryzen 3 1300 X @ 3.4 GHz",
                    memory: "12GB RAM",
                    video: "Nvidia GeForce GTX 1060 or AMD Radeon RX 580 (Vulkan 1.1 required)",
                    videoRam: "4GB or more",
                    hardDrive: "55 GB"
                }
            }
        },
        fr: {
            themeButtonDark: "Thème clair",
            themeButtonLight: "Thème sombre",
            welcomeTitle: "Bienvenue dans le futur",
            welcomeDescription: "Pouvez-vous changer le destin des androïdes ?",
            learnMore: "En savoir plus",
            aboutTitle: "À propos du jeu",
            aboutDescription: "Detroit : Devenir Humain est un jeu d’aventure de Quantic Dream, explorant un futur où les androïdes deviennent conscients.",
            highlightsTitle: "Moments forts",
            screenshotsTitle: "Captures d'écran",
            screenshots: ["Capture 1", "Capture 2", "Capture 3", "Capture 4"],
            videosTitle: "Vidéos",
            quizTitle: "Quel personnage de Detroit : Devenir Humain préférez-vous ?",
            quizOptions: ["Kara", "Markus", "Connor"],
            downloadButton: "Télécharger DETROIT : Devenir Humain maintenant",
            systemRequirements: {
                title: "Configuration requise",
                overview: "Detroit : Devenir Humain est la dernière et la plus ambitieuse production vidéoludique de Quantic Dream, enfin disponible sur PC !",
                featuresTitle: "Caractéristiques principales",
                features: [
                    "Narration captivante : découvrez un monde où des dilemmes moraux transforment les androïdes en révolutionnaires.",
                    "Vos choix comptent : influencez le destin des trois personnages principaux et de toute la ville de Détroit.",
                    "Fin infinie : rejouez encore et encore pour découvrir des fins uniques.",
                    "Optimisé pour PC : profitez de graphismes époustouflants en 4K et d'un gameplay fluide en 60 fps."
                ],
                specificationsTitle: "Spécifications",
                minimum: {
                    os: "Windows 10 (64 bit)",
                    processor: "Intel Core i5-2300 @ 2.8 GHz ou Ryzen 3 1200 @ 3.1GHz",
                    memory: "8GB RAM",
                    video: "Nvidia GeForce GTX 780 ou AMD HD 7950 (Vulkan 1.1 requis)",
                    videoRam: "3GB ou plus",
                    hardDrive: "55 GB"
                },
                recommended: {
                    os: "Windows 11 (64 bit)",
                    processor: "Intel i5-6600 @ 3.3 GHz ou Ryzen 3 1300 X @ 3.4 GHz",
                    memory: "12GB RAM",
                    video: "Nvidia GeForce GTX 1060 ou AMD Radeon RX 580 (Vulkan 1.1 requis)",
                    videoRam: "4GB ou plus",
                    hardDrive: "55 GB"
                },
            }
        },
        uk: {
            themeButtonDark: "Світла тема",
            themeButtonLight: "Темна тема",
            welcomeTitle: "Ласкаво просимо у майбутнє",
            welcomeDescription: "Чи можете ви змінити долю андроїдів?",
            learnMore: "Дізнатися більше",
            aboutTitle: "Про гру",
            aboutDescription: "Detroit: Стати Людиною — це пригодницька гра від Quantic Dream, яка досліджує майбутнє, де андроїди стають свідомими.",
            highlightsTitle: "Основні моменти",
            screenshotsTitle: "Скріншоти",
            screenshots: ["Скріншот 1", "Скріншот 2", "Скріншот 3", "Скріншот 4"],
            videosTitle: "Відео",
            quizTitle: "Який герой Detroit: Стати Людиною вам подобається?",
            quizOptions: ["Кара", "Марк", "Коннор"],
            downloadButton: "Завантажити DETROIT: Стати Людиною зараз",
            systemRequirements: {
                title: "Системні вимоги",
                overview: "Detroit: Стати Людиною — найновіша і найамбіційніша гра від Quantic Dream, нарешті виходить на ПК!",
                featuresTitle: "Ключові особливості",
                features: [
                    "Захопливий сюжет: відкрийте світ, де моральні дилеми можуть перетворити андроїдів на революціонерів.",
                    "Ваші вибори важливі: впливайте на долю трьох головних персонажів та міста Детройт.",
                    "Безліч фіналів: грайте знову і знову, щоб побачити унікальні результати.",
                    "Повна оптимізація: насолоджуйтеся приголомшливою графікою в 4K та плавним геймплеєм у 60 fps."
                ],
                specificationsTitle: "Характеристики",
                minimum: {
                    os: "Windows 10 (64 bit)",
                    processor: "Intel Core i5-2300 @ 2.8 GHz або Ryzen 3 1200 @ 3.1GHz",
                    memory: "8GB RAM",
                    video: "Nvidia GeForce GTX 780 або AMD HD 7950 (потрібно Vulkan 1.1)",
                    videoRam: "3GB або більше",
                    hardDrive: "55 GB"
                },
                recommended: {
                    os: "Windows 11 (64 bit)",
                    processor: "Intel i5-6600 @ 3.3 GHz або Ryzen 3 1300 X @ 3.4 GHz",
                    memory: "12GB RAM",
                    video: "Nvidia GeForce GTX 1060 або AMD Radeon RX 580 (потрібно Vulkan 1.1)",
                    videoRam: "4GB або більше",
                    hardDrive: "55 GB"
                }
            }
        },
        de: {
            themeButtonDark: "Helles Thema",
            themeButtonLight: "Dunkles Thema",
            welcomeTitle: "Willkommen in der Zukunft",
            welcomeDescription: "Können Sie das Schicksal der Androiden ändern?",
            learnMore: "Mehr erfahren",
            aboutTitle: "Über das Spiel",
            aboutDescription: "Detroit: Mensch Werden ist ein Abenteuerspiel von Quantic Dream, das eine Zukunft erforscht, in der Androiden bewusst werden.",
            highlightsTitle: "Höhepunkte",
            screenshotsTitle: "Bildschirmfotos",
            screenshots: ["Bildschirmfoto 1", "Bildschirmfoto 2", "Bildschirmfoto 3", "Bildschirmfoto 4"],
            videosTitle: "Videos",
            quizTitle: "Welcher Charakter aus Detroit: Mensch Werden gefällt Ihnen?",
            quizOptions: ["Kara", "Markus", "Connor"],
            downloadButton: "DETROIT: Mensch Werden jetzt herunterladen",
            systemRequirements: {
                title: "Systemanforderungen",
                overview: "Detroit: Mensch Werden, die neueste und ehrgeizigste Videospielproduktion von Quantic Dream, kommt endlich auf den PC!",
                featuresTitle: "Schlüsselfunktionen",
                features: [
                    "Fesselnde Erzählung: Entdecken Sie eine Welt, in der moralische Dilemmata Androiden in Revolutionäre verwandeln.",
                    "Ihre Entscheidungen zählen: Beeinflussen Sie das Schicksal der drei Hauptcharaktere und der gesamten Stadt Detroit.",
                    "Unzählige Enden: Spielen Sie immer wieder, um einzigartige Ergebnisse zu entdecken.",
                    "Vollständig optimiert: Erleben Sie atemberaubende Grafik in 4K und flüssiges Gameplay bei 60 fps."
                ],
                specificationsTitle: "Technische Spezifikationen",
                minimum: {
                    os: "Windows 10 (64 bit)",
                    processor: "Intel Core i5-2300 @ 2.8 GHz oder Ryzen 3 1200 @ 3.1GHz",
                    memory: "8GB RAM",
                    video: "Nvidia GeForce GTX 780 oder AMD HD 7950 (Vulkan 1.1 erforderlich)",
                    videoRam: "3GB oder mehr",
                    hardDrive: "55 GB"
                },
                recommended: {
                    os: "Windows 11 (64 bit)",
                    processor: "Intel i5-6600 @ 3.3 GHz oder Ryzen 3 1300 X @ 3.4 GHz",
                    memory: "12GB RAM",
                    video: "Nvidia GeForce GTX 1060 oder AMD Radeon RX 580 (Vulkan 1.1 erforderlich)",
                    videoRam: "4GB oder mehr",
                    hardDrive: "55 GB"
                }
            }
        },
        ko: {
            themeButtonDark: "밝은 테마",
            themeButtonLight: "어두운 테마",
            welcomeTitle: "미래에 오신 것을 환영합니다",
            welcomeDescription: "안드로이드의 운명을 바꿀 수 있습니까?",
            learnMore: "더 알아보기",
            aboutTitle: "게임 정보",
            aboutDescription: "디트로이트: 비컴 휴먼은 퀀틱 드림의 어드벤처 게임으로, 안드로이드가 자각하게 되는 미래를 탐구합니다.",
            highlightsTitle: "하이라이트",
            screenshotsTitle: "스크린샷",
            screenshots: ["스크린샷 1", "스크린샷 2", "스크린샷 3", "스크린샷 4"],
            videosTitle: "비디오",
            quizTitle: "디트로이트: 비컴 휴먼 캐릭터 중 누구를 선호하십니까?",
            quizOptions: ["카라", "마커스", "코너"],
            downloadButton: "디트로이트: 비컴 휴먼 지금 다운로드",
            systemRequirements: {
                title: "시스템 요구사항",
                overview: "디트로이트: 비컴 휴먼은 퀀틱 드림의 최신작이자 가장 야심찬 비디오 게임으로, 드디어 PC에서 만날 수 있습니다!",
                featuresTitle: "주요 기능",
                features: [
                    "몰입감 있는 서사: 도덕적 딜레마가 안드로이드 노예를 혁명가로 변화시키는 세계를 발견하세요.",
                    "당신의 선택이 중요합니다: 세 명의 주요 캐릭터와 디트로이트 도시 전체의 운명을 결정하세요.",
                    "무한한 엔딩: 독특한 결과를 발견하기 위해 여러 번 재플레이하세요.",
                    "완전 최적화: 놀라운 4K 그래픽과 부드러운 60fps 게임플레이를 경험하세요."
                ],
                specificationsTitle: "기술 사양",
                minimum: {
                    os: "Windows 10 (64 bit)",
                    processor: "Intel Core i5-2300 @ 2.8 GHz 또는 Ryzen 3 1200 @ 3.1GHz",
                    memory: "8GB RAM",
                    video: "Nvidia GeForce GTX 780 또는 AMD HD 7950 (Vulkan 1.1 필수)",
                    videoRam: "3GB 이상",
                    hardDrive: "55 GB"
                },
                recommended: {
                    os: "Windows 11 (64 bit)",
                    processor: "Intel i5-6600 @ 3.3 GHz 또는 Ryzen 3 1300 X @ 3.4 GHz",
                    memory: "12GB RAM",
                    video: "Nvidia GeForce GTX 1060 또는 AMD Radeon RX 580 (Vulkan 1.1 필수)",
                    videoRam: "4GB 이상",
                    hardDrive: "55 GB"
                }
            }
        }
    };

    const translation = translations[language] || translations['en'];

    // Элементы для обновления текста
    const themeButton = document.getElementById('themeButton');
    const welcomeTitle = document.querySelector('#content h1');
    const welcomeDescription = document.querySelector('#content p');
    const learnMoreButton = document.querySelector('#content .btn');
    const aboutTitle = document.querySelector('#about h2');
    const aboutDescription = document.querySelector('#about p');
    const highlightsTitle = document.querySelector('.highlights h2');
    const screenshotsTitle = document.querySelector('#screenshots h2');
    const screenshots = document.querySelectorAll('#screenshots .gallery img');
    const videosTitle = document.querySelector('#videos h2');
    const downloadButton = document.querySelector('.btn[href*="store"]');

    // Применяем эффект "печати" текста
    typeText(welcomeTitle, translation.welcomeTitle);
    typeText(welcomeDescription, translation.welcomeDescription);
    typeText(learnMoreButton, translation.learnMore, 80);
    typeText(aboutTitle, translation.aboutTitle, 70);
    typeText(aboutDescription, translation.aboutDescription, 60);
    typeText(highlightsTitle, translation.highlightsTitle);
    typeText(screenshotsTitle, translation.screenshotsTitle);
    typeText(videosTitle, translation.videosTitle);
    typeText(downloadButton, translation.downloadButton);

    // Обновляем текст кнопки "Сменить тему"
    if (themeButton) {
        themeButton.dataset.darkText = translation.themeButtonDark;
        themeButton.dataset.lightText = translation.themeButtonLight;
        themeButton.textContent = document.body.classList.contains('dark-mode')
            ? translation.themeButtonLight
            : translation.themeButtonDark;
    }

    // Обновляем подписи для скриншотов
    if (screenshots.length === translation.screenshots.length) {
        screenshots.forEach((img, index) => {
            img.setAttribute('alt', translation.screenshots[index]);
        });
    }
}

// Основной обработчик событий
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    const themeButton = document.getElementById('themeButton');

    // Устанавливаем язык по умолчанию (английский)
    const defaultLanguage = 'en';
    languageSelect.value = defaultLanguage; // Синхронизируем значение выпадающего списка
    translatePageWithAnimation(defaultLanguage);

    // Обработка смены языка
    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        translatePageWithAnimation(selectedLanguage);
    });

    // Обработка переключения темы
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    } else {
        console.error('Кнопка с ID "themeButton" не найдена!');
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
type = "application/ld+json" >
{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Detroit: Become Human",
    "description": "Detroit: Become Human - приключенческая игра.",
    "url": "https://Detroit_Become_Human"
}

document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".highlight", { duration: 1.5, y: 50, opacity: 0, stagger: 0.3 });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".section", {
    scrollTrigger: ".section",
    duration: 1,
    opacity: 0,
    y: 50
});

gsap.to(".button", { scale: 1.2, ease: "bounce", repeat: -1, yoyo: true });

document.getElementById('submitQuiz').addEventListener('click', () => {
    const selectedHero = document.querySelector('input[name="hero"]:checked');
    const result = document.getElementById('quizResult');

    if (selectedHero) {
        result.textContent = `Вы выбрали героя: ${selectedHero.value}`;
    } else {
        result.textContent = "Пожалуйста, выберите героя!";
    }
});

gsap.to(".progress-bar", { width: "100%", duration: 3 });

