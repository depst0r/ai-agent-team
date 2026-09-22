export async function GET() {
    const response = await fetch('https://api.bycom.by/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VEDAI_API_KEY}`,
    },
    body: JSON.stringify({
        model: process.env.AIAI_MODEL,
        messages: [
        { role: 'user', content: 'Привет' }
        ],
    }),
    });

    const data = await response.json();
    return Response.json(data);
}