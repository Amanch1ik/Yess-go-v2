# Инструкция по деплою на Netlify

## Способ 1: Через Drag & Drop (Самый простой)

### Шаги:

1. **Соберите проект локально:**
   ```bash
   cd yessgo-web
   npm install
   npm run build
   ```

2. **Зайдите на Netlify:**
   - Откройте https://netlify.com
   - Войдите или зарегистрируйтесь

3. **Загрузите папку:**
   - Перетащите папку `dist` в область "Drop your site folder here"
   - Или нажмите "Browse to upload" и выберите папку `dist`

4. **Готово!**
   - Netlify автоматически развернет сайт
   - Вы получите URL вида: `https://random-name-123456.netlify.app`
   - Можно изменить на свой: Site settings → Change site name

## Способ 2: Через GitHub (Рекомендуется)

### Шаги:

1. **Создайте репозиторий на GitHub:**
   ```bash
   cd yessgo-web
   git init
   git add .
   git commit -m "Initial commit: YessGo PWA"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/yessgo-web.git
   git push -u origin main
   ```

2. **Подключите к Netlify:**
   - Зайдите на https://netlify.com
   - Нажмите "Add new site" → "Import an existing project"
   - Выберите "GitHub"
   - Авторизуйте Netlify в GitHub
   - Выберите репозиторий `yessgo-web`

3. **Настройки сборки:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - (Netlify автоматически определит из `netlify.toml`)

4. **Deploy:**
   - Нажмите "Deploy site"
   - Подождите 1-2 минуты

5. **Готово!**
   - Сайт будет доступен по URL
   - Каждый push в main будет автоматически деплоиться

## Способ 3: Через Netlify CLI

### Установка CLI:
```bash
npm install -g netlify-cli
```

### Первый деплой:
```bash
cd yessgo-web
npm run build
netlify login
netlify deploy --prod
```

При первом запуске:
- Выберите "Create & configure a new site"
- Выберите team
- Введите site name (или пропустите для автогенерации)
- Publish directory: `dist`

### Последующие деплои:
```bash
npm run build
netlify deploy --prod
```

## После деплоя

### Настройка кастомного домена

1. В Netlify: Site settings → Domain management
2. Добавьте свой домен
3. Настройте DNS согласно инструкциям

### HTTPS

- Автоматически включен от Netlify
- Сертификат Let's Encrypt обновляется автоматически

### Проверка PWA

1. Откройте сайт на телефоне
2. **iPhone (Safari):**
   - Нажмите кнопку "Поделиться"
   - Выберите "На экран Домой"
   - Нажмите "Добавить"

3. **Android (Chrome):**
   - Появится баннер "Установить приложение"
   - Или: Меню → "Установить приложение"

## URL для тестирования

После деплоя получите URL, например:
- https://yessgo-demo.netlify.app
- https://your-custom-name.netlify.app

## Проблемы и решения

### Ошибка при сборке
```bash
# Очистите кеш и пересоберите
rm -rf node_modules dist
npm install
npm run build
```

### PWA не устанавливается
- Проверьте, что сайт открыт по HTTPS
- Проверьте manifest.json доступен
- Откройте DevTools → Application → Manifest

### Страницы не работают при прямом доступе
- Netlify.toml уже настроен с правильными редиректами
- Все роуты будут работать корректно

## Полезные команды

```bash
# Локальный предпросмотр production сборки
npm run build
npm run preview

# Проверка размера бандла
npm run build -- --mode production

# Анализ бандла
npm install -g source-map-explorer
npm run build
source-map-explorer dist/assets/*.js
```

## Переменные окружения (если нужны)

В Netlify: Site settings → Environment variables

Добавьте:
- `VITE_API_URL` - URL вашего API
- `VITE_SUPABASE_URL` - если используете Supabase
- И т.д.

После добавления переменных:
- Site settings → Build & deploy → Trigger deploy

## Мониторинг

Netlify автоматически предоставляет:
- Analytics (платно)
- Deploy previews для PR
- Логи сборки
- Edge Functions (если нужны)

---

## Быстрый старт

**Самый быстрый способ:**

```bash
cd yessgo-web
npm install
npm run build
```

Затем перетащите папку `dist` на https://app.netlify.com/drop

**Готово! 🚀**

URL будет вида: https://random-name.netlify.app

Можно сразу открыть на телефоне и установить как приложение!
