# 🤖 AI Agent Team

Мультиагентный чат: три ИИ-агента с разными ролями — дизайнер, разработчик и тестировщик.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Что это

Чат, где ты выбираешь агента — и он отвечает **в своей роли**:

| Агент | Роль |
|-------|------|
| 🎨 **Дизайнер** | Предлагает структуру страниц, стиль, цвета. Не пишет код |
| 💻 **Разработчик** | Пишет код на JS/TS, объясняет решения |
| 🧪 **Тестировщик** | Проверяет код, ищет баги и слабые места |

Ответы приходят **в реальном времени** (стриминг), рендерятся как Markdown, блоки кода — с кнопкой «Копировать».

---

## 🛠 Стек

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** — типизация
- **Tailwind CSS** — стили
- **react-markdown** — рендер ответов
- **Pollinations API** — бесплатный LLM, без ключей

---

## 🚀 Быстрый старт

```bash
git clone https://github.com/depst0r/ai-agent-team.git
cd ai-agent-team
npm install
npm run dev

ai-agent-team/
│
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts     # 🧠 API-эндпоинт: принимает запрос,
│   │                        #    выбирает агента, стримит ответ
│   ├── page.tsx             # 💬 UI чата: форма, стейты, отправка
│   ├── layout.tsx           # Корневой лэйаут
│   └── globals.css          # Глобальные стили (шрифт, сбросы)
│
├── components/
│   ├── AgentSelect.tsx      # 🎭 Выпадающий список агентов
│   └── CodeBlock.tsx        # 📋 Блок кода с кнопкой «Копировать»
│
├── lib/
│   └── agents/
│       ├── index.ts         # 🔀 Функция getPrompt(agent)
│       ├── designer.ts      # 🎨 Промпт дизайнера
│       ├── developer.ts     # 💻 Промпт разработчика
│       ├── tester.ts        # 🧪 Промпт тестировщика
│       └── default.ts       # ⚠️  Fallback для неизвестного агента
│
└── README.md
