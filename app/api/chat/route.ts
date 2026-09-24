import { getPrompt } from "@/lib/agents";

export async function POST(req: Request) {
  const { message, agent } = await req.json();

  const response = await fetch('https://text.pollinations.ai/openai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'openai',
      messages: [
        { role: 'system', content: getPrompt(agent)},
        { role: 'user', content: message }
      ],
    }),
  });

  const data = await response.json();

  if (!data.choices?.[0]?.message?.content) {
    return Response.json({ error: data }, { status: 500 });
  }

  return Response.json({ reply: data.choices[0].message.content });
}