# UzExplore — React

Проект работает на React 19 и Vite. Вся разметка хранится в JSX-компонентах;
минимальные HTML-документы для браузера Vite генерирует автоматически.
Существующие URL сохранены.

Структура исходников:

```text
src/
├── components/  # все JSX-файлы, включая точку входа React
├── pages/       # все JS-файлы, включая конфигурацию Vite
└── static/      # стили
```

```bash
npm install
npm run dev
```

Проверка production-сборки: `npm run build`.
