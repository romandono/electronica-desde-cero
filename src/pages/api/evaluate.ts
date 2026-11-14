import { getSecret } from 'astro:env/server';

export const prerender = false;

interface EvaluateRequest {
  question: string;
  studentAnswer: string;
  modelAnswer: string;
}

export async function POST({ request }: { request: Request }) {
  try {
    const body: EvaluateRequest = await request.json();

    if (!body.question || !body.studentAnswer || !body.modelAnswer) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos: question, studentAnswer, modelAnswer' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = await getSecret('OPENROUTER_API_KEY');
    const model = (await getSecret('OPENROUTER_MODEL')) || 'anthropic/claude-haiku-5.5';

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API key no configurada en el servidor' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const prompt = `Eres un tutor de electrónica. Evalúa esta respuesta de un estudiante principiante.

PREGUNTA: ${body.question}

RESPUESTA ESPERADA: ${body.modelAnswer}

RESPUESTA DEL ESTUDIANTE: ${body.studentAnswer}

Devuelve SOLO este JSON (sin markdown):
{
  "verdict": "correct" | "partial" | "incorrect",
  "feedback": "1-3 frases en español. Sé alentador. Si hay error, explica qué falló.",
  "highlights": ["1-2 puntos breves"]
}`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'http://localhost:4321',
        'X-Title': 'Electrónica desde Cero',
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'user', content: prompt },
        ],
        temperature: 0.3,
        max_tokens: 600,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('OpenRouter error:', response.status, errText);
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

    let parsed;
    try {
      let clean = content.trim();
      if (clean.startsWith('```')) {
        clean = clean.replace(/^```(?:json)?\s*\n?/, '').replace(/\n?```\s*$/, '');
      }
      parsed = JSON.parse(clean);
    } catch {
      parsed = {
        verdict: 'partial',
        feedback: content,
        highlights: [],
      };
    }

    return new Response(
      JSON.stringify({
        verdict: parsed.verdict || 'partial',
        feedback: parsed.feedback || content,
        highlights: parsed.highlights || [],
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Evaluate error:', err);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}