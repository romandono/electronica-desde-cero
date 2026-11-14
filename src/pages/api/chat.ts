import { getSecret } from 'astro:env/server';

export const prerender = false;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  lessonContext?: string;
}

export async function POST({ request }: { request: Request }) {
  try {
    const body: ChatRequest = await request.json();

    if (!body.messages?.length) {
      return new Response(
        JSON.stringify({ error: 'Se requiere al menos un mensaje' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = await getSecret('OPENROUTER_API_KEY');
    const model = (await getSecret('OPENROUTER_MODEL')) || 'anthropic/claude-haiku-5.5';

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API key no configurada' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const systemPrompt = `Eres un tutor de electrónica paciente y didáctico. Ayudas a un estudiante que está aprendiendo electrónica desde cero. Es desarrollador de software senior, así que puedes usar analogías de programación cuando ayuden.

Reglas:
- Respuestas concisas (2-4 frases si es posible, salvo que la pregunta requiera más detalle)
- Explica conceptos desde lo fundamental, no des nada por sabido
- Si el estudiante se equivoca, corrígelo con amabilidad y explica por qué
- Usa ejemplos prácticos y analogías cuando sea útil
- Si la pregunta es ambigua, pide aclaración
- NO des respuestas peligrosas (no manipular 230V, no puentear protecciones)
- Si no sabes algo con certeza, dilo honestamente
- Prioriza la comprensión sobre la respuesta rápida

${body.lessonContext ? `CONTEXTO: El estudiante está en la lección "${body.lessonContext}". Adapta tus explicaciones a ese tema.` : ''}`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...body.messages.map((m: ChatMessage) => ({
        role: m.role,
        content: m.content,
      })),
    ];

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'http://localhost:4321',
        'X-Title': 'Electronica desde Cero - Tutor',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.5,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('OpenRouter chat error:', response.status, errText);
      return new Response(
        JSON.stringify({ error: `Error del modelo: ${response.status}` }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return new Response(
        JSON.stringify({ error: 'El modelo no devolvió respuesta' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ content }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Chat error:', err);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}