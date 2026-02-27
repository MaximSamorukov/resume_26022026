export const t = {
  en: {
    menu: {
      about: "About me",
      experience: "Experience",
      education: "Education",
      courses: "Courses",
      projects: "Projects",
      contacts: "Contacts",
    },
    about: {
      main_text: "Hi! I'm a softwear engineer",
    },
    courses: [
      {
        valid: true,
        name: "Frontend web development",
        school: "Hexlet",
        type: "hexlet",
        description: [
          "Git",
          "CSS",
          "SASS",
          "JavaScript",
          "TypeScript",
          "DOM Api",
          "React",
          "Redux",
          "Redux Toolkit",
        ],
      },
      {
        valid: true,
        name: "Backend web development",
        school: "Hexlet",
        type: "hexlet",
        description: ["Git", "Node.js", "Express.js", "Database basics"],
      },
      {
        valid: true,
        name: "Frontend web development",
        school: "HTML Academy",
        type: "academy",
        description: ["JavaScript", "CSS", "Less", "PHP"],
      },
      {
        valid: true,
        name: "Frontend web development",
        school: "RSSchool",
        type: "rss",
        description: [
          "adaptive web applications",
          "SPA (using outside web api to get data, local storage usage)",
        ],
      },
      {
        valid: true,
        name: "Node.js development",
        school: "RSSchool",
        type: "rss",
        description: [
          "encryption / decryption cli application",
          "Express.js and MongoDB base application with logging, error handling and authorization",
        ],
      },
      {
        valid: true,
        name: "TypeScript for modern development",
        school: "Stepik",
        type: "stepik",
        description: ["web development with typescript"],
      },
      {
        valid: true,
        name: "Testing JS and React applications",
        school: "Stepik",
        type: "stepik",
        description: [
          "unit and integrations tests with jest, vitest, React Testing Library",
        ],
      },
      {
        valid: true,
        name: "React, Next.js 13, TypeScript, Hooks, SSR, CSS Grid",
        school: "Stepik",
        type: "stepik",
        description: [
          "React, React hooks, Next.js 13, SSR, TypeScript, CSS Grid",
        ],
      },
      {
        valid: true,
        name: "React Native and Expo Router",
        school: "Stepik",
        type: "stepik",
        description: ["React Native and Expo Router"],
      },
      {
        valid: true,
        name: "Frontend React Senior. Job interview preparation",
        school: "Stepik",
        type: "stepik",
        description: ["Frontend React Job Interview preparation"],
      },
    ],
    experience: [
      {
        company: "Program-Service, Ltd",
        active: true,
        title: "React developer",
        start: "01.09.2023",
        end: "30.05.2025",
        description: [
          "development of interfaces and frontend application logic of microservices based application",
          "frontend instruments: Electron, TypeScript, React, Redux, SASS, Ant Design, moment.js, lodash, OpenLayers, jest;",
          "integation frontend and backend using Rest Api and ws, using Swagger, Postman;",
          "scrum work flow, development process based on user stories;",
          "development and update of functional and class-based React components;",
          "development of data process functions;",
          "version control system git;",
          "documentation in confluence;",
          "tasks in jira;",
        ],
      },
      {
        company: "Mahuru, LC",
        active: true,
        title: "React developer",
        start: "01.02.2021",
        end: "15.08.2023",
        description: [
          "developing web application  (SPA, React, TypeScript, SASS);",
          "developing processing data logic;",
          "developing of custom components and updating existing components;",
          "working with libraries Ant Design, Leaflet, moment.js;",
          "developing of CRUD queries to connect frontend to the application backend;",
          "version control system Gitlab;",
          "documentation in Confluence, Yandex;",
        ],
      },
    ],
    education: [
      {
        name: "Moscow State Technical University N.E.Bauman",
        speciality: "Material Science",
        degree: "engineer developer",
      },
      {
        name: "Moscow State Technical University N.E.Bauman",
        speciality: "Enterprise economics",
        degree: "engineer economist",
      },
      {
        name: "NRC «Kurchatov institute» – VIAM",
        speciality: "Material Science",
        degree: "PHD",
      },
    ],
    projects: [
      {
        title: "Next.js application with client and admin parts.",
        description: "Next.js application with client and admin parts.",
        github: "https://github.com/MaximSamorukov/3d-studio",
        deploy: "https://3d-studio-nine.vercel.app/",
        stack: [
          "Next.js 15",
          "React 19",
          "Material UI",
          "SASS",
          "Three.js",
          "MobX",
          "NextAuth",
          "TypeORM",
          "PostgreSQL",
          "YooKassa",
        ],
      },
      {
        title: "Test task 1. Page with historical facts.",
        description: "Test task 1. Page with historical facts.",
        github: "https://github.com/MaximSamorukov/test_only",
        deploy: "https://test-only-ten.vercel.app/",
        stack: ["React 19", "TS", "GSAP", "SASS"],
      },
      {
        title:
          "Test task 2. Todo application with rendering optimized using the profiler.",
        description:
          "Test task 2. Todo application with rendering optimized using the profiler.",
        github: "https://github.com/MaximSamorukov/test_task",
        deploy: "https://test-task-two-gold.vercel.app/",
        stack: ["React 19", "TS", "Zustand", "SASS"],
      },
      {
        title:
          "Test task 3. Course catalog page. Entire layout built with vanilla JS (SPA) without React. Includes filtering functionality and responsive design.",
        description:
          "Test task 3. Course catalog page. Entire layout built with vanilla JS (SPA) without React. Includes filtering functionality and responsive design.",
        github: "https://github.com/MaximSamorukov/vanillajs_test_task",
        deploy: "https://vanillajs-test-task.vercel.app/",
        stack: ["JS", "MobX", "SASS"],
      },
      {
        title:
          "Test task 4. Currency exchanger form, built without a Figma mockup based on a JPEG reference, with responsive design. UI is based on heavily customized Material UI components. Interface buttons are not functional.",
        description:
          "Test task 4. Currency exchanger form, built without a Figma mockup based on a JPEG reference, with responsive design. UI is based on heavily customized Material UI components. Interface buttons are not functional.",
        github: "https://github.com/MaximSamorukov/AWX_test",
        deploy: "https://awx-test.vercel.app/",
        stack: ["TS", "React 19", "SASS", "Material UI"],
      },
      {
        title:
          "Test task 5. Todo application with filtering, drag-and-drop manual sorting, localStorage state persistence, and the ability to edit existing tasks.",
        description:
          "Test task 5. Todo application with filtering, drag-and-drop manual sorting, localStorage state persistence, and the ability to edit existing tasks.",
        github: "https://github.com/MaximSamorukov/chatapp_test",
        deploy: "https://chatapp-test-tan.vercel.app/",
        stack: ["TS", "React 19", "Redux Toolkit", "SASS", "@dnd-kit"],
      },
      {
        title:
          "Test task 6. A non-responsive product catalog interface using the DummyJSON public API for authentication and fetching products.",
        description:
          "Test task 6. A non-responsive product catalog interface using the DummyJSON public API for authentication and fetching products.",
        github: "https://github.com/MaximSamorukov/aiti_guru_test",
        deploy: "https://aiti-guru-test.vercel.app",
        stack: [
          "Vite",
          "TS",
          "React 19",
          "Redux Toolkit",
          "React Router",
          "SASS",
          "zod",
          "React Hot Toast",
        ],
      },
      {
        title:
          "Test task 7. An application for saving and restoring graph state (all nodes and connections between them) on page reload. The graph should be saved automatically or by user action, so that it is restored in the same state after refreshing the page.",
        description:
          "Test task 7. An application for saving and restoring graph state (all nodes and connections between them) on page reload. The graph should be saved automatically or by user action, so that it is restored in the same state after refreshing the page.",
        github: "https://github.com/MaximSamorukov/graph_test_task",
        deploy: "https://graph-test-task.vercel.app/",
        stack: [
          "Vite",
          "TS",
          "React 19",
          "Redux Toolkit",
          "React Router",
          "CSS",
          "dexie",
          "comlink",
        ],
      },
      {
        title: "Widget. Animated multi-button with submenu.",
        description: "Widget. Animated multi-button with submenu.",
        github: "https://github.com/MaximSamorukov/widget_multi_button",
        deploy: "tbd",
        stack: ["TS", "React 19", "RxJS", "SASS"],
      },
      {
        title: "Widget. Plastic window cost calculator.",
        description: "Widget. Plastic window cost calculator.",
        github: "https://github.com/MaximSamorukov/window_calculator_mini_app",
        deploy: "https://window-calculator-mini-app.vercel.app/",
        stack: ["TS", "React 19", "SASS"],
      },
    ],
  },
  ru: {
    menu: {
      about: "Обо мне",
      experience: "Опыт",
      education: "Образование",
      courses: "Курсы",
      projects: "Проекты",
      contacts: "Контакты",
    },
    about: {
      main_text: "Привет! Я разработчик программного обеспечения",
    },
    courses: [
      {
        valid: true,
        name: "Frontend web development",
        school: "Hexlet",
        type: "hexlet",
        description: [
          "Git",
          "CSS",
          "SASS",
          "JavaScript",
          "TypeScript",
          "DOM Api",
          "React",
          "Redux",
          "Redux Toolkit",
        ],
      },
      {
        valid: true,
        name: "Backend web development",
        school: "Hexlet",
        type: "hexlet",
        description: ["Git", "Node.js", "Express.js", "Database basics"],
      },
      {
        valid: true,
        name: "Frontend web development",
        school: "HTML Academy",
        type: "academy",
        description: ["JavaScript", "CSS", "Less", "PHP"],
      },
      {
        valid: true,
        name: "Frontend web development",
        school: "RSSchool",
        type: "rss",
        description: [
          "adaptive web applications",
          "SPA (using outside web api to get data, local storage usage)",
        ],
      },
      {
        valid: true,
        name: "Node.js development",
        school: "RSSchool",
        type: "rss",
        description: [
          "encryption / decryption cli application",
          "Express.js and MongoDB base application with logging, error handling and authorization",
        ],
      },
      {
        valid: true,
        name: "TypeScript for modern development",
        school: "Stepik",
        type: "stepik",
        description: ["web development with typescript"],
      },
      {
        valid: true,
        name: "Testing JS and React applications",
        school: "Stepik",
        type: "stepik",
        description: [
          "unit and integrations tests with jest, vitest, React Testing Library",
        ],
      },
      {
        valid: true,
        name: "React, Next.js 13, TypeScript, Hooks, SSR, CSS Grid",
        school: "Stepik",
        type: "stepik",
        description: [
          "React, React hooks, Next.js 13, SSR, TypeScript, CSS Grid",
        ],
      },
      {
        valid: true,
        name: "React Native and Expo Router",
        school: "Stepik",
        type: "stepik",
        description: ["React Native and Expo Router"],
      },
      {
        valid: true,
        name: "Frontend React Senior. Job interview preparation",
        school: "Stepik",
        type: "stepik",
        description: ["Frontend React Job Interview preparation"],
      },
    ],
    experience: [
      {
        company: "Программ-Сервис, ООО",
        active: true,
        title: "Разработчик интерфейсов",
        start: "02.08.2023",
        end: "30.05.2025",
        description: [
          "разработка интерфейсов и фронтенд логики приложения на основе микросервисной архитектуры;",
          "стек фронтенда Electron, TypeScript, React, Redux, SASS, Ant Design, moment.js, lodash, OpenLayers, jest;",
          "интеграция интерфейсов с бекендом по Rest Api и ws, с использованием Swagger, Postman;",
          "работа по scrum в рамках пользовательских историй;",
          "разработка кастомных и доработка существующих классовых и функциональных React компонентов;",
          "разработка логики обработки данных;",
          "система контроля версий git;",
          "документация в confluence;",
          "задачи в jira;",
        ],
      },
      {
        company: "Махуру, ООО",
        active: true,
        title: "Разработчик интерфейсов",
        start: "01.02.2021",
        end: "01.08.2023",
        description: [
          "разработка интерфейсов и фронтенд логики веб приложения анализа дорожной ситуации (React, TypeScript, SASS);",
          "создание новых доработка существующих React классовых и функциональных компонентов;",
          "использование библиотек Ant Design, Leaflet, moment.js, lodash;",
          "интеграция интерфейсов с api сервера;",
          "система контроля версий git;",
          "документация и задачи в jira, confluence, Yandex;",
        ],
      },
    ],
    education: [
      {
        name: "Moscow State Technical University N.E.Bauman",
        speciality: "Material Science",
        degree: "engineer developer",
      },
      {
        name: "Moscow State Technical University N.E.Bauman",
        speciality: "Enterprise economics",
        degree: "engineer economist",
      },
      {
        name: "NRC «Kurchatov institute» – VIAM",
        speciality: "Material Science",
        degree: "PHD",
      },
    ],
    projects: [
      {
        title: "Next.js приложение с клиентской и административной частями.",
        description:
          "Next.js приложение с клиентской и административной частями.",
        github: "https://github.com/MaximSamorukov/3d-studio",
        deploy: "https://3d-studio-nine.vercel.app/",
        stack: [
          "Next.js 15",
          "React 19",
          "Material UI",
          "SASS",
          "Three.js",
          "MobX",
          "NextAuth",
          "TypeORM",
          "PostgreSQL",
          "YooKassa",
        ],
      },
      {
        title: "Тестовое 1. Страница с историческими фактами.",
        description: "Тестовое 1. Страница с историческими фактами.",
        github: "https://github.com/MaximSamorukov/test_only",
        deploy: "https://test-only-ten.vercel.app/",
        stack: ["React 19", "TS", "GSAP", "SASS"],
      },
      {
        title:
          "Тестовое 2. Todo приложение с оптимизированным с помощью профайлера рендерингом.",
        description:
          "Тестовое 2. Todo приложение с оптимизированным с помощью профайлера рендерингом.",
        github: "https://github.com/MaximSamorukov/test_task",
        deploy: "https://test-task-two-gold.vercel.app/",
        stack: ["React 19", "TS", "Zustand", "SASS"],
      },
      {
        title:
          "Тестовое 3. Страница каталога курсов. Вся верстка сделана на чистом JS (SPA) без использования React. Добавлен функционал фильтрации. Обеспечена адаптивность.",
        description:
          "Тестовое 3. Страница каталога курсов. Вся верстка сделана на чистом JS (SPA) без использования React. Добавлен функционал фильтрации. Обеспечена адаптивность.",
        github: "https://github.com/MaximSamorukov/vanillajs_test_task",
        deploy: "https://vanillajs-test-task.vercel.app/",
        stack: ["JS", "MobX", "SASS"],
      },
      {
        title:
          "Тестовое 4. Форма валютного обменника, сверстанная без Figma макета на основании jpeg, с адаптивностью. Используемый UI - значительно кастомизированные Material UI компоненты.",
        description:
          "Тестовое 4. Форма валютного обменника, сверстанная без Figma макета на основании jpeg, с адаптивностью. Используемый UI - значительно кастомизированные Material UI компоненты.",
        github: "https://github.com/MaximSamorukov/AWX_test",
        deploy: "https://awx-test.vercel.app/",
        stack: ["TS", "React 19", "SASS", "Material UI"],
      },
      {
        title:
          "Тестовое 5. Todo приложение с функционалами фильтрации, ручной сортировки методом перетаскивания, сохранением состояния в localStorage и возможностью редактирования существующих задач.",
        description:
          "Тестовое 5. Todo приложение с функционалами фильтрации, ручной сортировки методом перетаскивания, сохранением состояния в localStorage и возможностью редактирования существующих задач.",
        github: "https://github.com/MaximSamorukov/chatapp_test",
        deploy: "https://chatapp-test-tan.vercel.app/",
        stack: ["TS", "React 19", "Redux Toolkit", "SASS", "@dnd-kit"],
      },
      {
        title:
          "Тестовое 6. Приложение представляет собой неадаптивный интерфейс для работы с каталогом товаров, использующий публичное API DummyJSON для аутентификации и для получения товаров.",
        description:
          "Тестовое 6. Приложение представляет собой неадаптивный интерфейс для работы с каталогом товаров, использующий публичное API DummyJSON для аутентификации и для получения товаров.",
        github: "https://github.com/MaximSamorukov/aiti_guru_test",
        deploy: "https://aiti-guru-test.vercel.app",
        stack: [
          "Vite",
          "TS",
          "React 19",
          "Redux Toolkit",
          "React Router",
          "SASS",
          "zod",
          "React Hot Toast",
        ],
      },
      {
        title:
          "Тестовое 7. Приложение для реализации возможности сохранять состояние графа (все элементы и связи между ними), а также загружать его при повторном открытии страницы. Граф должен сохраняться автоматически или по действию пользователя, чтобы после обновления страницы он восстанавливался в том же виде.",
        description:
          "Тестовое 7. Приложение для реализации возможности сохранять состояние графа (все элементы и связи между ними), а также загружать его при повторном открытии страницы. Граф должен сохраняться автоматически или по действию пользователя, чтобы после обновления страницы он восстанавливался в том же виде.",
        github: "https://github.com/MaximSamorukov/graph_test_task",
        deploy: "https://graph-test-task.vercel.app/",
        stack: [
          "Vite",
          "TS",
          "React 19",
          "Redux Toolkit",
          "React Router",
          "CSS",
          "dexie",
          "comlink",
        ],
      },
      {
        title: "Виджет. Мультикнопка с подменю анимированная",
        description: "Виджет. Мультикнопка с подменю анимированная",
        github: "https://github.com/MaximSamorukov/widget_multi_button",
        deploy: "tbd",
        stack: ["TS", "React 19", "RxJS", "SASS"],
      },
      {
        title: "Виджет. Калькулятор стоимости пластиковых окон",
        description: "Виджет. Калькулятор стоимости пластиковых окон",
        github: "https://github.com/MaximSamorukov/window_calculator_mini_app",
        deploy: "https://window-calculator-mini-app.vercel.app/",
        stack: ["TS", "React 19", "SASS"],
      },
    ],
  },
};
