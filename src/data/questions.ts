export interface ChoiceOption {
  label: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  type: 'choice' | 'text';
  options?: ChoiceOption[];
  correct?: number;
  explanation?: string;
  modelAnswer?: string;
  lesson: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  questionIds: string[];
  passThreshold: number;
  timeLimit?: number;
}

// ── Question Bank ──
// All questions live here. Lessons and exams import from this bank.

export const questionBank: Record<string, QuizQuestion> = {
  // ═══════════════════════════════════════════
  // Lección 1: Electricidad y Ley de Ohm
  // ═══════════════════════════════════════════
  'l01-q1': {
    id: 'l01-q1', lesson: 'l01-electricidad',
    text: 'Tengo una pila de 9 V conectada a una resistencia de 450 Ω. ¿Cuánta corriente circula?',
    type: 'choice',
    options: [
      { label: 'A', text: '0.02 A (20 mA)' },
      { label: 'B', text: '0.05 A (50 mA)' },
      { label: 'C', text: '2 A (2000 mA)' },
      { label: 'D', text: '0.002 A (2 mA)' },
    ],
    correct: 0,
    explanation: 'I = V / R = 9 V / 450 Ω = 0.02 A = 20 mA.',
  },
  'l01-q2': {
    id: 'l01-q2', lesson: 'l01-electricidad',
    text: 'Conecto un LED directamente a una pila de 5 V sin resistencia. ¿Qué ocurre?',
    type: 'choice',
    options: [
      { label: 'A', text: 'No pasa nada porque el LED no conduce' },
      { label: 'B', text: 'El LED se quema porque la corriente es demasiado alta' },
      { label: 'C', text: 'El LED enciende con brillo normal' },
      { label: 'D', text: 'La pila se descarga instantáneamente' },
    ],
    correct: 1,
    explanation: 'LED conduce con ~5 Ω. I ≈ 5 V / 5 Ω = 1 A. Diseñado para ~20 mA. Se quema.',
  },
  'l01-q3': {
    id: 'l01-q3', lesson: 'l01-electricidad',
    text: 'En la analogía hidráulica, ¿qué representa la diferencia de altura entre dos tanques?',
    type: 'choice',
    options: [
      { label: 'A', text: 'La corriente que fluye' },
      { label: 'B', text: 'La resistencia del circuito' },
      { label: 'C', text: 'La tensión o diferencia de potencial' },
      { label: 'D', text: 'La potencia consumida' },
    ],
    correct: 2,
    explanation: 'Diferencia de altura = diferencia de potencial = tensión. Sin diferencia, no hay flujo.',
  },
  'l01-q4': {
    id: 'l01-q4', lesson: 'l01-electricidad',
    text: 'Calcula: resistencia de 1 kΩ, corriente medida de 3 mA. ¿Qué tensión aplica la fuente?',
    type: 'text',
    modelAnswer: 'V = I × R = 0.003 A × 1000 Ω = 3 V. Cuidado: 3 mA = 0.003 A, no 3 A.',
    explanation: 'Error común: 3 × 1000 = 3000 V. Convertir mA a A. Truco: mA × kΩ = V.',
  },
  'l01-q5': {
    id: 'l01-q5', lesson: 'l01-electricidad',
    text: '¿Qué mide la corriente eléctrica?',
    type: 'choice',
    options: [
      { label: 'A', text: 'La fuerza que empuja los electrones' },
      { label: 'B', text: 'La oposición al paso de electrones' },
      { label: 'C', text: 'La cantidad de carga que pasa por un punto por segundo' },
      { label: 'D', text: 'La energía consumida por el circuito' },
    ],
    correct: 2,
    explanation: 'Corriente = carga / tiempo. Mide cuántos electrones pasan por segundo. Unidad: amperio (A).',
  },
  'l01-q6': {
    id: 'l01-q6', lesson: 'l01-electricidad',
    text: '¿Cuál es la unidad de medida de la resistencia eléctrica?',
    type: 'choice',
    options: [
      { label: 'A', text: 'Voltio (V)' },
      { label: 'B', text: 'Amperio (A)' },
      { label: 'C', text: 'Ohmio (Ω)' },
      { label: 'D', text: 'Vatio (W)' },
    ],
    correct: 2,
    explanation: 'La resistencia se mide en ohmios (Ω). 1 Ω = 1 V / 1 A según Ley de Ohm.',
  },
  'l01-q7': {
    id: 'l01-q7', lesson: 'l01-electricidad',
    text: 'Si una fuente de 12 V alimenta un circuito y circulan 2 A, ¿cuál es la resistencia total?',
    type: 'choice',
    options: [
      { label: 'A', text: '24 Ω' },
      { label: 'B', text: '6 Ω' },
      { label: 'C', text: '0.17 Ω' },
      { label: 'D', text: '14 Ω' },
    ],
    correct: 1,
    explanation: 'R = V / I = 12 V / 2 A = 6 Ω.',
  },
  'l01-q8': {
    id: 'l01-q8', lesson: 'l01-electricidad',
    text: 'En un circuito abierto, ¿qué ocurre con la corriente?',
    type: 'choice',
    options: [
      { label: 'A', text: 'Circula muy poca corriente' },
      { label: 'B', text: 'La corriente es exactamente cero' },
      { label: 'C', text: 'Circula corriente pero sin tensión' },
      { label: 'D', text: 'La corriente va hacia atrás' },
    ],
    correct: 1,
    explanation: 'Circuito abierto = camino interrumpido = I = 0. La tensión de la fuente sigue existiendo.',
  },
  'l01-q9': {
    id: 'l01-q9', lesson: 'l01-electricidad',
    text: '¿Cuánto vale 0.5 A expresado en miliamperios?',
    type: 'choice',
    options: [
      { label: 'A', text: '5 mA' },
      { label: 'B', text: '50 mA' },
      { label: 'C', text: '500 mA' },
      { label: 'D', text: '5000 mA' },
    ],
    correct: 2,
    explanation: '1 A = 1000 mA, por tanto 0.5 A = 500 mA.',
  },
  'l01-q10': {
    id: 'l01-q10', lesson: 'l01-electricidad',
    text: 'Un cable sin resistencia conectado directamente entre los bornes de una pila se llama:',
    type: 'choice',
    options: [
      { label: 'A', text: 'Circuito abierto' },
      { label: 'B', text: 'Circuito en serie' },
      { label: 'C', text: 'Cortocircuito' },
      { label: 'D', text: 'Circuito paralelo' },
    ],
    correct: 2,
    explanation: 'Cortocircuito: camino de resistencia ~0 entre bornes. I = V / R ≈ enorme → peligro.',
  },
  'l01-q11': {
    id: 'l01-q11', lesson: 'l01-electricidad',
    text: 'Explica con tus palabras: ¿por qué es peligroso un cortocircuito? Usa la Ley de Ohm en tu razonamiento.',
    type: 'text',
    modelAnswer: 'En un cortocircuito, R ≈ 0. Según Ohm: I = V / R. Al dividir por un número casi cero, la corriente se dispara a valores muy altos. Esta corriente excesiva genera calor y puede derretir cables, dañar la fuente o provocar un incendio.',
    explanation: 'Clave: mencionar Ley de Ohm y que R cercana a 0 produce I enorme.',
  },
  'l01-q12': {
    id: 'l01-q12', lesson: 'l01-electricidad',
    text: '¿Cuál de estas NO es una limitación de la analogía hidráulica?',
    type: 'choice',
    options: [
      { label: 'A', text: 'La energía viaja por el campo electromagnético, no dentro del cable' },
      { label: 'B', text: 'Al abrir un circuito, la corriente se detiene (no se "derrama")' },
      { label: 'C', text: 'A mayor presión, mayor caudal (es correcto en ambas)' },
      { label: 'D', text: 'No existen "moléculas de electricidad"' },
    ],
    correct: 2,
    explanation: 'La opción C describe correctamente la analogía: más presión = más caudal = más tensión = más corriente. Las otras tres son limitaciones reales.',
  },

  // ═══════════════════════════════════════════
  // Lección 2: Circuitos serie y paralelo
  // ═══════════════════════════════════════════
'l02-q1': {
  id: 'l02-q1', lesson: 'l02-circuitos',
  text: 'Dos resistencias de 100 Ω y 200 Ω están en serie. ¿Cuál es la resistencia equivalente?',
  type: 'choice',
  options: [
    { label: 'A', text: '66.7 Ω' },
    { label: 'B', text: '300 Ω' },
    { label: 'C', text: '150 Ω' },
    { label: 'D', text: '200 Ω' },
  ],
  correct: 1,
  explanation: 'En serie: Req = R1 + R2 = 100 + 200 = 300 Ω.',
},
'l02-q2': {
  id: 'l02-q2', lesson: 'l02-circuitos',
  text: 'Dos resistencias de 100 Ω y 200 Ω están en paralelo. ¿Cuál es la resistencia equivalente?',
  type: 'choice',
  options: [
    { label: 'A', text: '300 Ω' },
    { label: 'B', text: '150 Ω' },
    { label: 'C', text: '66.7 Ω' },
    { label: 'D', text: '50 Ω' },
  ],
  correct: 2,
  explanation: 'En paralelo: 1/Req = 1/100 + 1/200 = 0.01 + 0.005 = 0.015 → Req = 1/0.015 = 66.7 Ω. La Req siempre es menor que la menor resistencia en paralelo.',
},
'l02-q3': {
  id: 'l02-q3', lesson: 'l02-circuitos',
  text: 'En un circuito serie con 3 resistencias iguales de 10 Ω y una fuente de 30 V, ¿qué tensión hay en cada resistencia?',
  type: 'choice',
  options: [
    { label: 'A', text: '30 V en cada una' },
    { label: 'B', text: '10 V en cada una' },
    { label: 'C', text: 'Depende de la posición' },
    { label: 'D', text: '15 V en cada una' },
  ],
  correct: 1,
  explanation: 'Req = 30 Ω. I = 30V / 30Ω = 1A. En cada R: V = 1A × 10Ω = 10V. La tensión de la fuente se reparte proporcionalmente.',
},
'l02-q4': {
  id: 'l02-q4', lesson: 'l02-circuitos',
  text: 'Dos resistencias de 1 kΩ en paralelo se conectan a 5 V. ¿Qué corriente total entrega la fuente?',
  type: 'choice',
  options: [
    { label: 'A', text: '5 mA' },
    { label: 'B', text: '2.5 mA' },
    { label: 'C', text: '10 mA' },
    { label: 'D', text: '1 mA' },
  ],
  correct: 2,
  explanation: 'Req = 1/(1/1000 + 1/1000) = 500 Ω. I = 5 / 500 = 0.01 A = 10 mA. Alternativa: cada rama I = 5/1000 = 5 mA, total = 5 + 5 = 10 mA.',
},
'l02-q5': {
  id: 'l02-q5', lesson: 'l02-circuitos',
  text: 'En un circuito paralelo de 3 resistencias, ¿qué magnitud es igual en todas las ramas?',
  type: 'choice',
  options: [
    { label: 'A', text: 'La corriente' },
    { label: 'B', text: 'La resistencia' },
    { label: 'C', text: 'La tensión' },
    { label: 'D', text: 'La potencia' },
  ],
  correct: 2,
  explanation: 'En paralelo, todas las ramas comparten la misma tensión (la de la fuente). La corriente se divide entre las ramas.',
},
'l02-q6': {
  id: 'l02-q6', lesson: 'l02-circuitos',
  text: 'En un circuito serie de 3 resistencias, ¿qué magnitud es igual en todas?',
  type: 'choice',
  options: [
    { label: 'A', text: 'La tensión' },
    { label: 'B', text: 'La resistencia' },
    { label: 'C', text: 'La corriente' },
    { label: 'D', text: 'La potencia' },
  ],
  correct: 2,
  explanation: 'En serie, la misma corriente atraviesa todos los componentes. La tensión se divide entre ellos.',
},
'l02-q7': {
  id: 'l02-q7', lesson: 'l02-circuitos',
  text: 'Calcula la resistencia equivalente: tres resistencias de 30 Ω, 60 Ω y 90 Ω en paralelo.',
  type: 'text',
  modelAnswer: '1/Req = 1/30 + 1/60 + 1/90 = 0.0333 + 0.0167 + 0.0111 = 0.0611. Req = 1/0.0611 ≈ 16.4 Ω. Comprobación: la Req debe ser menor que la menor resistencia (30 Ω). 16.4 < 30 ✓',
  explanation: 'Clave: usar fracciones o decimales con cuidado. Verificar que Req < R más pequeña.',
},
'l02-q8': {
  id: 'l02-q8', lesson: 'l02-circuitos',
  text: 'Un divisor de tensión con R1=2kΩ y R2=1kΩ se alimenta con 9V. ¿Cuál es Vout (tensión en R2)?',
  type: 'choice',
  options: [
    { label: 'A', text: '6 V' },
    { label: 'B', text: '3 V' },
    { label: 'C', text: '4.5 V' },
    { label: 'D', text: '9 V' },
  ],
  correct: 1,
  explanation: 'Vout = Vin × R2/(R1+R2) = 9V × 1kΩ/3kΩ = 9 × 1/3 = 3 V.',
},
'l02-q9': {
  id: 'l02-q9', lesson: 'l02-circuitos',
  text: '¿Qué ocurre con la Req si añades una resistencia en paralelo a otra?',
  type: 'choice',
  options: [
    { label: 'A', text: 'Aumenta' },
    { label: 'B', text: 'Disminuye' },
    { label: 'C', text: 'Se mantiene igual' },
    { label: 'D', text: 'Depende del valor de la nueva resistencia' },
  ],
  correct: 1,
  explanation: 'Añadir cualquier resistencia en paralelo SIEMPRE reduce la Req total. El nuevo camino ofrece otra vía para la corriente.',
},
'l02-q10': {
  id: 'l02-q10', lesson: 'l02-circuitos',
  text: 'Si un LED (2V, 20mA) se conecta a 5V, ¿qué resistencia necesitas en serie?',
  type: 'choice',
  options: [
    { label: 'A', text: '250 Ω' },
    { label: 'B', text: '100 Ω' },
    { label: 'C', text: '150 Ω' },
    { label: 'D', text: '50 Ω' },
  ],
  correct: 2,
  explanation: 'R = (Vfuente - Vled) / I = (5 - 2) / 0.02 = 3 / 0.02 = 150 Ω. Esta es una aplicación práctica del divisor de tensión.',
},

// ═══════════════════════════════════════════
// Lección 3: Potencia y energía eléctrica
// ═══════════════════════════════════════════
'l03-q1': {
  id: 'l03-q1', lesson: 'l03-potencia',
  text: '¿Cuál es la fórmula de la potencia eléctrica?',
  type: 'choice',
  options: [
    { label: 'A', text: 'P = V × I' },
    { label: 'B', text: 'P = V / I' },
    { label: 'C', text: 'P = I / V' },
    { label: 'D', text: 'P = V² × I' },
  ],
  correct: 0,
  explanation: 'P = V × I (vatios = voltios × amperios). Usando Ohm: P = I²R = V²/R.',
},
'l03-q2': {
  id: 'l03-q2', lesson: 'l03-potencia',
  text: 'Una resistencia de 100 Ω tiene 5 V aplicados. ¿Cuánta potencia disipa?',
  type: 'choice',
  options: [
    { label: 'A', text: '0.25 W' },
    { label: 'B', text: '0.5 W' },
    { label: 'C', text: '2.5 W' },
    { label: 'D', text: '5 W' },
  ],
  correct: 0,
  explanation: 'P = V² / R = 5² / 100 = 25/100 = 0.25 W. Una resistencia de 1/4 W estaría al límite.',
},
'l03-q3': {
  id: 'l03-q3', lesson: 'l03-potencia',
  text: 'Un circuito consume 2 A a 12 V durante 3 horas. ¿Cuánta energía consume en kWh?',
  type: 'choice',
  options: [
    { label: 'A', text: '0.072 kWh' },
    { label: 'B', text: '72 kWh' },
    { label: 'C', text: '0.024 kWh' },
    { label: 'D', text: '24 kWh' },
  ],
  correct: 0,
  explanation: 'P = 12V × 2A = 24W. E = P × t = 24W × 3h = 72 Wh = 0.072 kWh.',
},
'l03-q4': {
  id: 'l03-q4', lesson: 'l03-potencia',
  text: '¿Qué es el efecto Joule?',
  type: 'choice',
  options: [
    { label: 'A', text: 'La capacidad de un material para almacenar carga' },
    { label: 'B', text: 'El calentamiento de un conductor al pasar corriente' },
    { label: 'C', text: 'La fuerza entre dos cargas eléctricas' },
    { label: 'D', text: 'La generación de tensión por movimiento' },
  ],
  correct: 1,
  explanation: 'Efecto Joule: calor generado por la corriente al atravesar una resistencia. P_calor = I² × R. Es la base de estufas, secadores, soldadores.',
},
'l03-q5': {
  id: 'l03-q5', lesson: 'l03-potencia',
  text: 'Por una resistencia de 10 Ω circulan 0.5 A. ¿Qué potencia se disipa como calor?',
  type: 'choice',
  options: [
    { label: 'A', text: '5 W' },
    { label: 'B', text: '2.5 W' },
    { label: 'C', text: '0.5 W' },
    { label: 'D', text: '10 W' },
  ],
  correct: 1,
  explanation: 'P = I²R = 0.5² × 10 = 0.25 × 10 = 2.5 W. Necesitarías una resistencia de al menos 3-5 W.',
},
'l03-q6': {
  id: 'l03-q6', lesson: 'l03-potencia',
  text: 'Si duplicas la tensión en una resistencia fija, ¿qué ocurre con la potencia?',
  type: 'choice',
  options: [
    { label: 'A', text: 'Se duplica' },
    { label: 'B', text: 'Se cuadruplica' },
    { label: 'C', text: 'Se reduce a la mitad' },
    { label: 'D', text: 'No cambia' },
  ],
  correct: 1,
  explanation: 'P = V²/R. Si V se duplica: P\' = (2V)²/R = 4V²/R = 4P. La potencia se cuadruplica.',
},
'l03-q7': {
  id: 'l03-q7', lesson: 'l03-potencia',
  text: 'Tienes resistencias de 1/4 W (0.25 W). ¿Cuál es la corriente máxima segura para una de 100 Ω?',
  type: 'text',
  modelAnswer: 'P = I² × R → I = √(P/R) = √(0.25/100) = √0.0025 = 0.05 A = 50 mA. Por encima de 50 mA, la resistencia se sobrecalienta.',
  explanation: 'Despejar I de P = I²R. Es crucial dimensionar las resistencias para que no se quemen.',
},
'l03-q8': {
  id: 'l03-q8', lesson: 'l03-potencia',
  text: '¿En qué unidad se mide la energía eléctrica en la factura de la luz?',
  type: 'choice',
  options: [
    { label: 'A', text: 'Vatios (W)' },
    { label: 'B', text: 'Julios (J)' },
    { label: 'C', text: 'Kilovatios-hora (kWh)' },
    { label: 'D', text: 'Amperios-hora (Ah)' },
  ],
  correct: 2,
  explanation: 'kWh = potencia (kW) × tiempo (h). 1 kWh = 3 600 000 julios. Es una unidad de energía, no de potencia.',
},
'l03-q9': {
  id: 'l03-q9', lesson: 'l03-potencia',
  text: 'Un LED de 2V y 20mA, ¿cuánta potencia consume?',
  type: 'choice',
  options: [
    { label: 'A', text: '40 mW' },
    { label: 'B', text: '10 mW' },
    { label: 'C', text: '100 mW' },
    { label: 'D', text: '0.4 W' },
  ],
  correct: 0,
  explanation: 'P = V × I = 2V × 0.02A = 0.04W = 40 mW. Muy poca potencia, por eso los LED son eficientes.',
},
'l03-q10': {
  id: 'l03-q10', lesson: 'l03-potencia',
  text: 'Una batería de 12V y 7Ah almacena energía. ¿Cuántos kWh son aproximadamente?',
  type: 'choice',
  options: [
    { label: 'A', text: '84 kWh' },
    { label: 'B', text: '0.084 kWh' },
    { label: 'C', text: '8.4 kWh' },
    { label: 'D', text: '0.84 kWh' },
  ],
  correct: 1,
  explanation: 'E = V × Ah = 12V × 7Ah = 84 Wh = 0.084 kWh. Las baterías se especifican en Ah, no en kWh.',
},

// ═══════════════════════════════════════════
// Lección 4: Leyes de Kirchhoff
// ═══════════════════════════════════════════
'l04-q1': {
  id: 'l04-q1', lesson: 'l04-kirchhoff',
  text: 'La Ley de Corrientes de Kirchhoff (KCL) establece que:',
  type: 'choice',
  options: [
    { label: 'A', text: 'La suma de tensiones en una malla es cero' },
    { label: 'B', text: 'V = I × R' },
    { label: 'C', text: 'La suma de corrientes que entran en un nodo es igual a la suma de las que salen' },
    { label: 'D', text: 'La potencia total se conserva' },
  ],
  correct: 2,
  explanation: 'KCL: ΣI_entran = ΣI_salen. La carga no se acumula en un nodo. Esencial para analizar circuitos complejos.',
},
'l04-q2': {
  id: 'l04-q2', lesson: 'l04-kirchhoff',
  text: 'La Ley de Tensiones de Kirchhoff (KVL) establece que:',
  type: 'choice',
  options: [
    { label: 'A', text: 'La suma de corrientes en un nodo es cero' },
    { label: 'B', text: 'La suma algebraica de tensiones en una malla cerrada es cero' },
    { label: 'C', text: 'La tensión es proporcional a la corriente' },
    { label: 'D', text: 'La potencia de entrada es igual a la de salida' },
  ],
  correct: 1,
  explanation: 'KVL: ΣV = 0 alrededor de cualquier lazo cerrado. Lo que "sube" la fuente, lo "bajan" las resistencias.',
},
'l04-q3': {
  id: 'l04-q3', lesson: 'l04-kirchhoff',
  text: 'En un nodo entran 3A y 2A, y salen 1A por una rama. ¿Cuánto sale por la otra rama?',
  type: 'choice',
  options: [
    { label: 'A', text: '5 A' },
    { label: 'B', text: '4 A' },
    { label: 'C', text: '6 A' },
    { label: 'D', text: '0 A' },
  ],
  correct: 1,
  explanation: 'KCL: I_entran = I_salen → 3 + 2 = 1 + x → 5 = 1 + x → x = 4 A.',
},
'l04-q4': {
  id: 'l04-q4', lesson: 'l04-kirchhoff',
  text: 'Un circuito tiene una fuente de 12V y dos resistencias en serie de 4Ω y 8Ω. Según KVL, ¿cuánto vale la tensión en la resistencia de 8Ω?',
  type: 'choice',
  options: [
    { label: 'A', text: '4 V' },
    { label: 'B', text: '6 V' },
    { label: 'C', text: '8 V' },
    { label: 'D', text: '12 V' },
  ],
  correct: 2,
  explanation: 'Req = 12Ω. I = 12/12 = 1A. V_R8 = 1A × 8Ω = 8V. KVL: 12V - 4V - 8V = 0 ✓.',
},
'l04-q5': {
  id: 'l04-q5', lesson: 'l04-kirchhoff',
  text: '¿Para qué sirven las Leyes de Kirchhoff?',
  type: 'choice',
  options: [
    { label: 'A', text: 'Para calcular la potencia de un circuito' },
    { label: 'B', text: 'Para analizar circuitos que no se pueden reducir a serie/paralelo simple' },
    { label: 'C', text: 'Para dimensionar baterías' },
    { label: 'D', text: 'Solo para corriente alterna' },
  ],
  correct: 1,
  explanation: 'Kirchhoff permite analizar circuitos con múltiples fuentes, mallas interconectadas y configuraciones no triviales. Generaliza la Ley de Ohm.',
},
'l04-q6': {
  id: 'l04-q6', lesson: 'l04-kirchhoff',
  text: '¿Cuántas ecuaciones de malla (KVL) necesitas para resolver este circuito: 2 fuentes y 3 resistencias formando 2 mallas?',
  type: 'choice',
  options: [
    { label: 'A', text: '1' },
    { label: 'B', text: '2' },
    { label: 'C', text: '3' },
    { label: 'D', text: '5' },
  ],
  correct: 1,
  explanation: 'Necesitas tantas ecuaciones KVL como mallas independientes. Con 2 mallas: 2 ecuaciones. Combinadas con KCL, resuelves todo.',
},
'l04-q7': {
  id: 'l04-q7', lesson: 'l04-kirchhoff',
  text: 'Explica la Ley de Corrientes de Kirchhoff como si se la contaras a alguien que solo sabe la analogía del agua.',
  type: 'text',
  modelAnswer: 'Imagina una tubería que se divide en dos ramas. El agua que entra por la tubería principal tiene que ser igual a la que sale por las dos ramas juntas. No puede desaparecer agua ni aparecer de la nada en el punto de unión. Igual con la electricidad: los electrones que llegan a un nodo = los que salen.',
  explanation: 'Analogía: caudal de agua en una bifurcación de tuberías.',
},
'l04-q8': {
  id: 'l04-q8', lesson: 'l04-kirchhoff',
  text: 'En una malla con fuente de 9V, R1=2kΩ y R2=1kΩ, ¿cuál es la corriente según KVL?',
  type: 'choice',
  options: [
    { label: 'A', text: '3 mA' },
    { label: 'B', text: '9 mA' },
    { label: 'C', text: '4.5 mA' },
    { label: 'D', text: '1 mA' },
  ],
  correct: 0,
  explanation: 'KVL: 9V - I×2000 - I×1000 = 0 → 9 = I×3000 → I = 9/3000 = 0.003A = 3 mA.',
},
'l04-q9': {
  id: 'l04-q9', lesson: 'l04-kirchhoff',
  text: '¿Qué dice KVL sobre una pila de 9V conectada a un LED (2V) con resistencia en serie?',
  type: 'choice',
  options: [
    { label: 'A', text: '9V = V_LED + V_R (la suma de caídas iguala a la fuente)' },
    { label: 'B', text: 'La corriente es la misma en el LED y la resistencia' },
    { label: 'C', text: '9V = V_LED = V_R' },
    { label: 'D', text: 'La potencia del LED es 9V × I' },
  ],
  correct: 0,
  explanation: 'KVL: Vfuente - Vled - Vresistencia = 0 → 9 - 2 - Vr = 0 → Vr = 7V. De ahí calculas R.',
},
'l04-q10': {
  id: 'l04-q10', lesson: 'l04-kirchhoff',
  text: '¿Son las leyes de Kirchhoff independientes de la Ley de Ohm?',
  type: 'choice',
  options: [
    { label: 'A', text: 'Sí, son leyes completamente distintas sin relación' },
    { label: 'B', text: 'No, Kirchhoff generaliza Ohm para circuitos complejos; se usan juntas' },
    { label: 'C', text: 'Son lo mismo con otro nombre' },
    { label: 'D', text: 'Kirchhoff solo aplica en AC, Ohm en DC' },
  ],
  correct: 1,
  explanation: 'Ohm relaciona V, I, R en un componente. Kirchhoff relaciona corrientes (nodos) y tensiones (mallas) entre componentes. Se complementan: usas ambas para analizar.',
  },
};

// ── Exams ──

export const exams: Exam[] = [
  {
    id: 'fase1',
    title: 'Examen Fase 1: Fundamentos de Electricidad',
    description: 'Evalúa tu comprensión completa de la Fase 1: Ley de Ohm, circuitos serie/paralelo, potencia, energía y leyes de Kirchhoff.',
    questionIds: [
      'l01-q1','l01-q2','l01-q5','l01-q7','l01-q8','l01-q10',
      'l02-q1','l02-q2','l02-q4','l02-q5','l02-q8','l02-q9',
      'l03-q1','l03-q2','l03-q4','l03-q5','l03-q6','l03-q8',
      'l04-q1','l04-q2','l04-q3','l04-q4','l04-q6','l04-q8',
    ],
    passThreshold: 70,
  },
];

// ── Helpers ──

/** Fisher-Yates shuffle (returns new array) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Get questions by IDs, with optional shuffle and limit */
export function getQuestionsByIds(ids: string[], opts?: { shuffle?: boolean; limit?: number }): QuizQuestion[] {
  let questions = ids.map((id) => questionBank[id]).filter(Boolean);
  if (opts?.shuffle) questions = shuffle(questions);
  if (opts?.limit && opts.limit < questions.length) questions = questions.slice(0, opts.limit);
  return questions;
}

/** Get questions by lesson key, shuffled and limited */
export function getQuestionsByLesson(lessonKey: string, limit?: number): QuizQuestion[] {
  const questions = Object.values(questionBank).filter((q) => q.lesson === lessonKey);
  const shuffled = shuffle(questions);
  return limit ? shuffled.slice(0, limit) : shuffled;
}