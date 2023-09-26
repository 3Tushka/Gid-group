import images from "./images";

const instagramBlog = [
    {
        image: images.DataForIntsagramOne,
    },

    {
        image: images.DataForIntsagramTwo,
    },

    {
        image: images.DataForIntsagramThree,
    },

    {
        image: images.DataForIntsagramFour,
    },

    {
        image: images.DataForIntsagramFive,
    },

    {
        image: images.DataForIntsagramSix,
    },

    {
        image: images.DataForIntsagramSeven,
    },

    {
        image: images.DataForIntsagramEight,
    }
];

const quizQuestions = [
    {
        questionNumber: "Питання 1",
        question: 'Який розмір вашого проекту?',
        choices: ['від 50 до 80 м2', 'від 80 до 120 м2', 'більше 120 м2'],
    },
    {
        questionNumber: "Питання 2",
        question: 'Який стиль найкраще вам підійде?',
        choices: ['Лофт', 'Скандинавський', 'Мінімаліст'],
        images: [images.QuestionLoft, images.QuestionScandinavian, images.QuestionMinimalist],
    },
    {
        questionNumber: "Питання 3",
        question: 'Коли приблизно плануєте розпочати роботу над проектом?',
        choices: ['Розпочати зараз', 'Через тиждень', 'Через місяць', 'Більше 3-ох місяців'],
    },
];


const squareOptions = [
    {
        value: "small",
        text: "від 50 до 80 м2"
    },
    {
        value: "medium",
        text: "від 80 до 120 м2"
    },
    {
        value: "large",
        text: "більше 120 м2"
    }
];

const projects = [
    {
        projectImage: images.ProjectOne,
        projectName: "Квартира на Академічній",
        projectStyle: "Стиль - Лофт",
        projectSquare: "130 м2"
    },
    {
        projectImage: images.ProjectTwo,
        projectName: "Квартира на Голосіївській",
        projectStyle: "Стиль - Лофт",
        projectSquare: "94 м2"
    },
    {
        projectImage: images.ProjectThree,
        projectName: "Квартира на Академічній",
        projectStyle: "Стиль - Лофт",
        projectSquare: "68 м2"
    },
    {
        projectImage: images.ProjectFour,
        projectName: "Квартира на Липках",
        projectStyle: "Стиль - Скандинавський",
        projectSquare: "94 м2"
    },
    {
        projectImage: images.ProjectFive,
        projectName: "Квартира на Хрещатику",
        projectStyle: "Стиль - Лофт",
        projectSquare: "85 м2"
    },
    {
        projectImage: images.ProjectSix,
        projectName: "Квартира на Золотих Воротах",
        projectStyle: "Стиль - Лофт",
        projectSquare: "108 м2"
    },
]

const team = [
    {
        image: images.TeamOne,
        name: "Олександр Мамай",
        position: "Арт-директор GID",
        text: "20 років в ремонтній компанії"
    },
    {
        image: images.TeamTwo,
        name: "Сергій Геращнеко",
        position: "Дизайнер ",
        text: "20 років в ремонтній компанії"
    },
    {
        image: images.TeamThree,
        name: "Маргарита Тищенко",
        position: "3D-візуалізатор",
        text: "20 років в ремонтній компанії"
    },
    {
        image: images.TeamFour,
        name: "Микола Вернигора",
        position: "Прораб GID",
        text: "20 років в ремонтній компанії"
    },
]

const etapRepair = [
    {
        image: images.EtapOne,
        title: "Чернетка",
        text: "Роботи по демонтажу, штукатурці, стяжці та інше"
    },

    {
        image: images.EtapTwo,
        title: "Інженерні роботи",
        text: "Електротехнічні роботи, опалення, водопостачання та інше"
    },

    {
        image: images.EtapThree,
        title: "Гіпсування",
        text: "Гіпсокартонні роботи, шпаклювання, покриття та інше"
    },

    {
        image: images.EtapFour,
        title: "Чистка",
        text: "Монтаж та декорування покриття"
    },

    {
        image: images.EtapFive,
        title: "Заключний етап",
        text: "Меблювання, декорування та чистка"
    },
]

const feedbackData = [
    {
        image: images.FeedbackAvatar,
        avatarName: "Ірина Фаріон",
        avatarDesc: "Власниця квартири в ЖК `Олімпійський` ",
        avatarText: "Ремонт квартири під ключ, с обраним стилем - Лофт",
        feedbackContent: "Як прийнято читати, стрімкі витіснити традиційне виробництво, нанотехнології можуть бути своєчасно перевірені. Противоположна точка зору розуміє, що стрімкі витісняти традиційне виробництво, нанотехнології, поза залежністю від їх рівня, повинні бути функціонально рознесені на незалежні елементи...",
        feedbackImage: images.FeedbackImage,
    },

    {
        image: images.FeedbackAvatar,
        avatarName: "Ірина Фаріон",
        avatarDesc: "Власниця квартири в ЖК `Олімпійський` ",
        avatarText: "Ремонт квартири під ключ, с обраним стилем - Лофт",
        feedbackContent: "Як прийнято читати, стрімкі витіснити традиційне виробництво, нанотехнології можуть бути своєчасно перевірені. Противоположна точка зору розуміє, що стрімкі витісняти традиційне виробництво, нанотехнології, поза залежністю від їх рівня, повинні бути функціонально рознесені на незалежні елементи...",
        feedbackImage: images.FeedbackImage,
    },

    {
        image: images.FeedbackAvatar,
        avatarName: "Ірина Фаріон",
        avatarDesc: "Власниця квартири в ЖК `Олімпійський` ",
        avatarText: "Ремонт квартири під ключ, с обраним стилем - Лофт",
        feedbackContent: "Як прийнято читати, стрімкі витіснити традиційне виробництво, нанотехнології можуть бути своєчасно перевірені. Противоположна точка зору розуміє, що стрімкі витісняти традиційне виробництво, нанотехнології, поза залежністю від їх рівня, повинні бути функціонально рознесені на незалежні елементи...",
        feedbackImage: images.FeedbackImage,
    },

    {
        image: images.FeedbackAvatar,
        avatarName: "Ірина Фаріон",
        avatarDesc: "Власниця квартири в ЖК `Олімпійський` ",
        avatarText: "Ремонт квартири під ключ, с обраним стилем - Лофт",
        feedbackContent: "Як прийнято читати, стрімкі витіснити традиційне виробництво, нанотехнології можуть бути своєчасно перевірені. Противоположна точка зору розуміє, що стрімкі витісняти традиційне виробництво, нанотехнології, поза залежністю від їх рівня, повинні бути функціонально рознесені на незалежні елементи...",
        feedbackImage: images.FeedbackImage,
    },

    {
        image: images.FeedbackAvatar,
        avatarName: "Ірина Фаріон",
        avatarDesc: "Власниця квартири в ЖК `Олімпійський` ",
        avatarText: "Ремонт квартири під ключ, с обраним стилем - Лофт",
        feedbackContent: "Як прийнято читати, стрімкі витіснити традиційне виробництво, нанотехнології можуть бути своєчасно перевірені. Противоположна точка зору розуміє, що стрімкі витісняти традиційне виробництво, нанотехнології, поза залежністю від їх рівня, повинні бути функціонально рознесені на незалежні елементи...",
        feedbackImage: images.FeedbackImage,
    },

    {
        image: images.FeedbackAvatar,
        avatarName: "Ірина Фаріон",
        avatarDesc: "Власниця квартири в ЖК `Олімпійський` ",
        avatarText: "Ремонт квартири під ключ, с обраним стилем - Лофт",
        feedbackContent: "Як прийнято читати, стрімкі витіснити традиційне виробництво, нанотехнології можуть бути своєчасно перевірені. Противоположна точка зору розуміє, що стрімкі витісняти традиційне виробництво, нанотехнології, поза залежністю від їх рівня, повинні бути функціонально рознесені на незалежні елементи...",
        feedbackImage: images.FeedbackImage,
    },
]

const infoRepair = [
    {
        title: "24/7",
        content: "Ваш менеджер завжди на зв'язку"
    },
    {
        title: "Нагляд",
        content: "На будівництві ведеться цілодобовий нагляд"
    },
    {
        title: "7 років",
        content: "Гарантії на всі роботи"
    },
    {
        title: "Документація",
        content: "Підготуємо та затвердимо проектну документацію"
    },
]

const infoDesign = [
    {
        title: "25 проектів",
        content: "Зробили за минулий рік. Всі унікальні"
    },
    {
        title: "37 років",
        content: "Загальний досвід спеціалістів нашої студії у сфері дизайну"
    },
    {
        title: "30 млн.грн",
        content: "Сума, збережена клієнтами при закупівлі меблів"
    },
    {
        title: "Нескінченне",
        content: "Задоволення від можливостів взяти все під свій контроль"
    },
]

const resultData = [
    {
        image: images.HouseSvg,
        text: "Повністю готовий ремонт `під ключ` (з урахуванням всіх термінів і бюджету)"
    },
    {
        image: images.sandClockSvg,
        text: "Збережені час та нерви"
    },
    {
        image: images.awardSvg,
        text: "Гарантія на ремонт 6 років"
    },
    {
        image: images.likeSvg,
        text: "Рекомендації друзів"
    },
]

const workPlanDesign = [
    {
        image: images.workPlanDesignItemOne,
        title: "Обрати стиль",
        content: "Переносим затверджений дизайн інтер'єру на папері. В результаті ви отримуєте комплект дизайнерських документів: будівельні креслення, фотореалістичні візуалізації, і необхідні специфікації."
    },

    {
        image: images.workPlanDesignItemTwo,
        title: "Обрати колір",
        content: "Переносим затверджений дизайн інтер'єру на папері. В результаті ви отримуєте комплект дизайнерських документів: будівельні креслення, фотореалістичні візуалізації, і необхідні специфікації."
    },

    {
        image: images.workPlanDesignItemThree,
        title: "Планувальні рішення",
        content: "Переносим затверджений дизайн інтер'єру на папері. В результаті ви отримуєте комплект дизайнерських документів: будівельні креслення, фотореалістичні візуалізації, і необхідні специфікації."
    },

    {
        image: images.workPlanDesignItemFour,
        title: "Бюждет",
        content: "Переносим затверджений дизайн інтер'єру на папері. В результаті ви отримуєте комплект дизайнерських документів: будівельні креслення, фотореалістичні візуалізації, і необхідні специфікації."
    },

    {
        image: images.workPlanDesignItemFive,
        title: "Матеріали та предмети",
        content: "Переносим затверджений дизайн інтер'єру на папері. В результаті ви отримуєте комплект дизайнерських документів: будівельні креслення, фотореалістичні візуалізації, і необхідні специфікації."
    },

    {
        image: images.workPlanDesignItemSix,
        title: "Візуалізація",
        content: "Переносим затверджений дизайн інтер'єру на папері. В результаті ви отримуєте комплект дизайнерських документів: будівельні креслення, фотореалістичні візуалізації, і необхідні специфікації."
    },

    {
        image: images.workPlanDesignItemSeven,
        title: "Креслення та проекти",
        content: "Переносим затверджений дизайн інтер'єру на папері. В результаті ви отримуєте комплект дизайнерських документів: будівельні креслення, фотореалістичні візуалізації, і необхідні специфікації."
    },
]

const resultDesign = [
    {
        image: images.resultDesignOne,
        text: "Функціональність"
    },

    {
        image: images.resultDesignTwo,
        text: "Естетику"
    },
    {
        image: images.resultDesignThree,
        text: "Якісний ремонт"
    },
    {
        image: images.resultDesignFour,
        text: "Унікальні умови"
    },
]
export default { projects, instagramBlog, quizQuestions, squareOptions, team, etapRepair, feedbackData, infoRepair, infoDesign, resultData, workPlanDesign, resultDesign };