# Electrónica desde Cero

Plataforma interactiva de aprendizaje de electrónica, desde fundamentos hasta IoT.

## 🎯 Qué es

Programa de formación progresiva que cubre electricidad, electrónica analógica/digital, microcontroladores y diseño de PCB. Construido con **Astro 7**, quiz interactivo con feedback instantáneo y evaluación con IA vía OpenRouter.

## 📚 Contenido actual

### Fase 1: Fundamentos de electricidad

| # | Lección | Temas |
|---|---------|-------|
| 1 | Electricidad y Ley de Ohm | Carga, tensión, corriente, resistencia, Ohm, prefijos |
| 2 | Circuitos serie y paralelo | Req, divisor de tensión, circuitos mixtos |
| 3 | Potencia y energía | P=V×I, efecto Joule, kWh, baterías |
| 4 | Leyes de Kirchhoff | KCL, KVL, análisis de mallas |

- **42 preguntas** en banco centralizado
- **Examen Fase 1** con 24 preguntas aleatorias (aprobado: 70%)
- Quiz con opciones aleatorias, reintentos, historial
- Evaluación IA para preguntas de texto (Claude Haiku 5.5)

## 🚀 Desarrollo

```bash
# Requisito: Node >= 22.23.4
nvm use          # si usas nvm (.nvmrc incluido)
npm install
npm run dev      # http://localhost:4321
```

## 🔧 Stack

- [Astro 7](https://astro.build) — SSR mode
- TypeScript
- CSS vanilla (responsive, hamburger menu)
- OpenRouter API — evaluación de respuestas con IA
- localStorage — persistencia de respuestas e historial

## ⚠️ Seguridad

La API key de OpenRouter se configura en `.env` (no se commitea). El endpoint `/api/evaluate` es server-side.

## 📄 Licencia

MIT