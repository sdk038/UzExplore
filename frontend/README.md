# UzCompass — React

Проект работает на React 19 и Vite. Вся разметка хранится в JSX-компонентах;
минимальные HTML-документы для браузера Vite генерирует автоматически.
Существующие URL сохранены.

Структура исходников:

```text
src/
├── components/  # все JSX-файлы, включая точку входа React
├── pages/       # все JS-файлы, включая конфигурацию Vite
└── static/      # CSS-файлы, разделённые по назначению
```

Стили в `static`: `base.css`, `home.css`, `bukhara.css`,
`bukhara-experience.css`, `theme.css`, `media.css`, `hero.css` и `app.css`.

```bash
npm install
npm run dev
```

Проверка production-сборки: `npm run build`.
