
export async function POST(req: Request) {
    const { message } = await req.json()

    const response = await fetch('https://api.bycom.by/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.VEDAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: process.env.AIAI_MODEL,
            messages: [
                {role: 'system', content: 'Ты Web - Дизайнер'},
                {role: 'user', content: message}
            ],
        })
    })

    const data = await response.json();
    return Response.json(data.choices[0].message.content)
}