import { getPrompt } from "@/lib/agents";

export async function POST(req: Request) {
  const { message, agent } = await req.json();

  const response = await fetch('https://text.pollinations.ai/openai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'openai',
      stream: true,
      messages: [
        { role: 'system', content: getPrompt(agent)},
        { role: 'user', content: message }
      ],
    }),
  });

  return new Response(response.body, {
    headers: { 'Content-Type': 'text/event-stream' },
  })
}