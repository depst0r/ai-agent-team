import { json } from "stream/consumers";

export async function POST(request: Request) {
    const { message }  = await request.json();

    const requestBody = {
        contents : [
            {
                parts: [{text: message}],
            },
        ],
    };

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        }
    );

    const data = await response.json();
    console.log('Полный ответ от Gemini:', JSON.stringify(data, null, 2));

    const reply = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({reply}), 
    {
        headers: { 'Content-Type': 'application/json' },
    }
)

};