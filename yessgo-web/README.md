# YessGo Web App - PWA

Progressive Web App версия приложения YessGo для установки на iOS и Android.

## Особенности

- 📱 Progressive Web App (PWA)
- 🎨 Мобильный дизайн
- 🚀 Быстрая загрузка
- 💾 Работает офлайн
- 🏠 Устанавливается на домашний экран
- 🔄 Автоматические обновления

## Установка на iPhone

1. Откройте сайт в Safari
2. Нажмите кнопку "Поделиться" (квадрат со стрелкой вверх)
3. Выберите "На экран Домой"
4. Нажмите "Добавить"

Приложение появится на домашнем экране как обычное приложение!

## Установка на Android

1. Откройте сайт в Chrome
2. Нажмите меню (три точки)
3. Выберите "Установить приложение" или "Добавить на главный экран"

## Локальная разработка

```bash
npm install
npm run dev
```

Приложение будет доступно по адресу http://localhost:5173

## Сборка для продакшна

```bash
npm run build
```

Результат будет в папке `dist/`

## Деплой на Netlify

### Через Git

1. Создайте репозиторий на GitHub
2. Залейте код в репозиторий
3. Зайдите на netlify.com
4. Нажмите "New site from Git"
5. Выберите ваш репозиторий
6. Netlify автоматически определит настройки из `netlify.toml`

### Через Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Через Drag & Drop

1. Выполните `npm run build`
2. Зайдите на netlify.com
3. Перетащите папку `dist` в область деплоя

## Функционал

### Реализовано

- ✅ Авторизация (демо-режим)
- ✅ Главная страница с балансом
- ✅ Stories (истории)
- ✅ Список партнеров
- ✅ QR-сканер (UI)
- ✅ Уведомления (UI)
- ✅ Меню настроек
- ✅ Нижняя навигация
- ✅ PWA функционал
- ✅ Офлайн поддержка

### Планируется

- 🔲 Интеграция с backend API
- 🔲 Реальный QR-сканер
- 🔲 Push-уведомления
- 🔲 История транзакций
- 🔲 Карта партнеров

## Технологии

- React 19
- Vite 7
- PWA (vite-plugin-pwa)
- CSS3 (Mobile-First)
- LocalStorage

## Структура проекта

```
yessgo-web/
├── public/
│   ├── manifest.json
│   └── pwa-*.png
├── src/
│   ├── components/
│   │   └── BottomNav.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── PartnersPage.jsx
│   │   ├── QRPage.jsx
│   │   ├── NotificationsPage.jsx
│   │   ├── MorePage.jsx
│   │   └── LoginPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── netlify.toml
├── vite.config.js
└── package.json
```

## Размер приложения

- Gzip: ~50KB
- Загрузка: < 1 секунда
- Time to Interactive: < 2 секунды

## Поддержка браузеров

- iOS Safari 15+
- Android Chrome 90+
- Desktop Chrome 90+
- Desktop Safari 15+
- Desktop Firefox 90+

## Лицензия

Demo Version

---

© 2025 YessGo. Все права защищены.
