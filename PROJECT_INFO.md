# YessGo iOS Demo - Информация о проекте

## Статус: Готово ✅

Создана полнофункциональная демо-версия iOS приложения YessGo с использованием SwiftUI.

## Что создано

### 1. Xcode проект (YessGoDemo/)
- Полноценный Xcode проект, готовый к запуску
- 15 Swift файлов
- Структурированная архитектура MVVM
- Assets и конфигурация

### 2. Реализованные функции

#### Авторизация
- Форма входа с email/пароль
- Демо-режим (быстрый вход)
- Управление сессией

#### Главная страница
- Отображение баланса YessCoin
- Stories (Instagram-подобные)
  - Автоматическое переключение
  - Прогресс-бар
  - Навигация вперед/назад
- Баннеры партнеров
- Список партнеров

#### Навигация
- Табы: Главная, Партнеры, QR, Уведомления, Еще
- Плавные переходы
- Нижняя навигационная панель

#### Дизайн
- Фирменные цвета (#0F6B53, #DAA520)
- Анимации и переходы
- Адаптивная верстка
- Современный UI

### 3. Архитектура

```
MVVM + Combine
├── Views (SwiftUI)
├── ViewModels (@Published)
├── Models (Codable)
└── Services (Singleton)
```

### 4. Технологии
- SwiftUI
- Combine
- MVVM Pattern
- Codable Protocol
- UserDefaults
- Swift 5.7+

## Файловая структура

```
YessGoDemo/
├── YessGoDemo.xcodeproj          # Xcode проект
├── YessGoDemo/
│   ├── YessGoFrontApp.swift      # Entry point
│   ├── ContentView.swift         # Root view
│   ├── Views/
│   │   ├── MainPageView.swift
│   │   └── Components/
│   │       └── BottomNavBar.swift
│   ├── ViewModels/
│   │   └── MainPageViewModel.swift
│   ├── Models/
│   │   ├── UserDto.swift
│   │   ├── PartnerDto.swift
│   │   ├── StoryModel.swift
│   │   ├── BannerModel.swift
│   │   ├── CategoryModel.swift
│   │   └── PartnerLogoModel.swift
│   ├── Services/
│   │   ├── AuthService.swift
│   │   ├── BalanceStore.swift
│   │   ├── AccountStore.swift
│   │   └── AppClient.swift
│   └── Assets.xcassets/
└── README.md
```

## Git репозиторий

### Информация
- Branch: main
- Commits: 2
- Total files: 237

### История коммитов
1. iOS Demo version for YessGo app (7fc42c7)
   - Полная реализация
   - MVVM + Combine
   - Stories, навигация, авторизация

2. Add quick start guide (d493ce9)
   - Инструкция по запуску
   - Документация

## Как запустить

### Быстрый старт
1. Откройте `YessGoDemo.xcodeproj` в Xcode
2. Выберите симулятор iPhone
3. Нажмите Run (⌘+R)
4. Нажмите "Войти как демо"

### Детали в файлах
- QUICKSTART.md - краткая инструкция
- YessGoDemo/README.md - полная документация
- YessGoFront-Swift/README.md - архитектура

## Демо данные

### Встроенные данные
- Баланс: 1250.50 YessCoin
- 5 Stories с разным контентом
- 3 Баннера
- 11+ Партнеров
- Категории товаров

### Демо аккаунт
- Email: demo@yessgo.com
- Password: demo123
- Или используйте кнопку "Войти как демо"

## Готово к разработке

### API интеграция
Все модели готовы для подключения к backend:
- Codable протокол
- HTTP клиент с Combine
- Централизованное управление токенами

### Endpoints (заготовки)
```swift
POST /api/auth/login
POST /api/auth/register
GET /api/partners
GET /api/user/profile
GET /api/user/balance
```

## Следующие шаги

### Для запуска
1. Откройте проект в Xcode
2. Запустите на симуляторе
3. Войдите через демо-режим

### Для разработки
1. Изучите README.md файлы
2. Ознакомьтесь с архитектурой
3. Подключите реальный API

### Дополнительные функции
- QR-сканер
- Карта партнеров
- Push-уведомления
- История транзакций
- Поиск и фильтры

## Требования

- macOS (любая версия с Xcode)
- Xcode 15.0+
- iOS Simulator или устройство с iOS 15.0+

## Поддержка

Все файлы документированы и готовы к использованию.

---

**Статус проекта:** Готов к запуску и демонстрации ✅

**Дата создания:** 30 октября 2025

**Версия:** 1.0 Demo
