export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await fetch('https://text.pollinations.ai/openai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'openai',
      messages: [
        { role: 'system', content: 'Ты Web-дизайнер. Отвечай кратко.' },
        { role: 'user', content: message }
      ],
    }),
  });

  const data = await response.json();
  return Response.json({ reply: data.choices[0].message.content });
}

// PS C:\Users\depstor\OneDrive\Desktop> curl.exe "http://localhost:3000/api/chat" -H "Content-Type: application/json" -d "@body.json"
// {"reply":"**Структура лендинга крипто‑проекта**\n\n| # | Раздел | Ключевой фокус | Короткие подпункты |\n|---|--------|----------------|-------------------|\n| 1 | **Hero** | Убедить сразу | Заголовок, краткое миссия‑промо, CTA‑кнопки «Купить токен», «Вступить в Discord» |\n| 2 | **Кратко о проекте** | Что, почему, как это работает | 3‑4 строки, визуальный акцент |\n| 3 | **Уникальные возможности / Фичи** | «Чем мы отличаемся» | Графический список, иконки + подзаголовки |\n| 4 | **Tokenomics** | Экономика токена | Таблица распределения, инфляция, уценка блоков |\n| 5 | **Roadmap** | Дорожная карта | Временные метки, слайдер/таймлайн |\n| 6 | **Команда** | Кто за проектом | Фото, биография, роли |\n| 7 | **Партнёры & Интеграции** | Как экосистема растет | Logos + короткие описания |\n| 8 | **Кому будет полезно** | Целевая аудитория | Сегменты с короткими кейсами |\n| 9 | **Блог / Новости** | Последние обновления | RSS‑фид/ссылка на Medium |\n| 10 | **FAQ** | Ответы на чёткие вопросы | Accordion‑меню |\n| 11 | **CTA – Присоединиться** | Завершающий призыв | Подписка, чек‑ин на соц‑сети |\n| 12 | **Footer** | Юридическая информация, контакты, соц‑сети |\n\n> Линейная, одностраничная, адаптивная, с быстрым вращающимся “токен‑калькулятором” под 1‑минутное видео‑гибкое."}
// PS C:\Users\depstor\OneDrive\Desktop>