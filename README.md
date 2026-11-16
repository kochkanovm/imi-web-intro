# imi-web-intro

Учебный проект: получение данных через Fetch API и вывод списком.

## API
https://jsonplaceholder.typicode.com/users — открытый API без ключа.

## Запуск
1. Откройте папку проекта в VS Code.
2. Правый клик по `index.html` → **Open with Live Server**.
   Либо в терминале: `python -m http.server 8000`, затем откройте http://localhost:8000.

## Функциональность
- Состояние загрузки «Загрузка…».
- Проверка `response.ok` для HTTP-ошибок.
- Обработка сетевых ошибок с понятным сообщением.