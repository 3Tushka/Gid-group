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

export default { projects, instagramBlog, quizQuestions, squareOptions, team };