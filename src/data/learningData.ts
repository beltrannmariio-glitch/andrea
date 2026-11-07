import { EducationalTopic, QuizQuestion } from '../types';

export const EDUCATIONAL_TOPICS: EducationalTopic[] = [
  {
    id: 'como-cepillarse',
    title: '¿Cómo cepillarse correctamente?',
    category: 'Técnica de Higiene',
    summary: 'La técnica importa tanto como la frecuencia. Aprende el método de barrido suave en 4 sencillos pasos.',
    content: [
      'Coloca las cerdas del cepillo formando un ángulo de 45 grados respecto a la línea de la encía.',
      'Realiza movimientos suaves de barrido: los dientes superiores se cepillan hacia abajo y los inferiores hacia arriba (de encía a diente).',
      'Cepilla las caras masticatorias (muelas) con movimientos circulares o de vaivén suave.',
      'No olvides cepillar con delicadeza la superficie de la lengua de atrás hacia adelante para remover bacterias y refrescar el aliento.'
    ],
    keyAdvice: 'Dedica al menos 2 minutos completos a cada sesión de cepillado sin ejercer excesiva fuerza para no lastimar las encías.',
    icon: 'Sparkles',
    tips: [
      'Usa un cepillo de cerdas suaves o medias',
      'No presiones fuerte: el secreto es la técnica, no la fuerza',
      'Cambia tu cepillo cada 3 meses'
    ]
  },
  {
    id: 'cuantas-veces',
    title: '¿Cuántas veces al día debemos cepillarnos?',
    category: 'Frecuencia Diaria',
    summary: 'La regla de oro: después de cada comida principal y, sin falta, antes de ir a dormir.',
    content: [
      'Lo ideal es cepillarse un mínimo de 3 veces al día: por la mañana después del desayuno, después de comer y antes de acostarse.',
      'El cepillado de la noche es el más importante del día: mientras dormimos producimos menos saliva (nuestra defensa natural), permitiendo que las bacterias ataquen el esmalte si quedan restos de comida.',
      'Si consumes alimentos o bebidas muy ácidas (como cítricos o refrescos), espera unos 20-30 minutos antes de cepillarte para que el esmalte recupere su dureza y no se desgaste.'
    ],
    keyAdvice: '¡Nunca te vayas a la cama sin cepillarte! Es la oportunidad dorada de las bacterias para causar caries.',
    icon: 'Clock',
    tips: [
      'Mínimo 3 veces al día',
      'La noche es innegociable',
      'Espera 20 min tras comer cítricos'
    ]
  },
  {
    id: 'hilo-dental',
    title: '¿Por qué es importante utilizar hilo dental?',
    category: 'Limpieza Interdental',
    summary: 'El cepillo solo limpia el 60% de tus dientes. El hilo dental se encarga del 40% restante donde no entran las cerdas.',
    content: [
      'Las cerdas del cepillo dental no pueden penetrar entre los espacios estrechos que separan a un diente de otro.',
      'El hilo dental remueve la placa bacteriana y los diminutos restos de comida alojados debajo de la línea gingival y entre las piezas dentales.',
      'Su uso diario previene las temidas "caries interproximales" (entre dientes) y evita que las encías se inflamen o sangren (gingivitis).'
    ],
    keyAdvice: 'Usa unos 40 cm de hilo dental enrollado en tus dedos medios, deslizándolo suavemente en forma de "C" rodeando cada diente.',
    icon: 'Activity',
    tips: [
      'Úsalo al menos 1 vez al día (preferentemente por la noche)',
      'Deslízalo con cuidado, sin movimientos bruscos que corten la encía',
      'Existen pasadores de hilo si usas ortodoncia'
    ]
  },
  {
    id: 'alimentos-saludables',
    title: '¿Qué alimentos favorecen la salud bucal?',
    category: 'Nutrición Dental',
    summary: 'Tus dientes se nutren desde adentro. Descubre qué platillos son amigos de tu sonrisa y cuáles debes moderar.',
    content: [
      'Alimentos amigos: Frutas y verduras crocantes como manzanas, zanahorias y apio estimulan la producción de saliva y limpian suavemente los dientes.',
      'Lácteos y quesos: Aportan calcio y fósforo que remineralizan el esmalte y neutralizan los ácidos bacterianos.',
      'Agua potable: Mantiene la boca hidratada, enjuaga residuos y combate la sequedad bucal.',
      'Alimentos a moderar: Dulces pegajosos, golosinas, bebidas azucaradas, jugos industriales y refrescos con alto contenido de ácido.'
    ],
    keyAdvice: 'Si comes un postre o dulce, procura hacerlo junto con la comida principal y no como picoteo constante durante horas.',
    icon: 'Apple',
    tips: [
      'Manzanas y zanahorias crujientes',
      'Quesos y yogur natural rico en calcio',
      'Beber suficiente agua durante el día'
    ]
  },
  {
    id: 'visita-dentista',
    title: '¿Por qué debemos visitar al dentista?',
    category: 'Prevención Profesional',
    summary: 'No esperes a tener dolor para agendar una cita. La prevención y revisión oportuna salvan tu sonrisa.',
    content: [
      'Muchas enfermedades bucodentales, como las caries en fase inicial o la gingivitis, son completamente silenciosas y no duelen al principio.',
      'La revisión profesional periódica (cada 6 meses) permite detectar problemas mucho antes de que requieran tratamientos complejos o dolorosos.',
      'Las limpiezas profesionales remueven el cálculo o sarro endurecido que ningún cepillo de casa puede quitar.',
      'El dentista también evalúa tejidos blandos, encías, lengua y articulaciones para garantizar tu salud integral.'
    ],
    keyAdvice: 'Una visita de rutina cada seis meses es la mejor inversión para conservar tus dientes sanos y fuertes toda la vida.',
    icon: 'Calendar',
    tips: [
      'Acude a revisión cada 6 meses',
      'El sarro solo lo retira el profesional',
      'Atender a tiempo evita tratamientos invasivos'
    ]
  },
  {
    id: 'cuidados-ninos',
    title: 'Cuidados de los dientes de los niños',
    category: 'Odontopediatría Familiar',
    summary: 'Construir sonrisas felices desde la infancia: pautas clave para que los pequeños crezcan sin caries.',
    content: [
      'Desde recién nacidos: Limpiar suavemente las encías del bebé con una gasa húmeda o dedal de silicona después de alimentarlo.',
      'Primer diente: Iniciar el cepillado en cuanto brota la primera pieza dental usando un cepillo infantil suave y una cantidad de pasta del tamaño de un grano de arroz.',
      'Evitar el "síndrome del biberón": No acostar al bebé con biberones que contengan leche, fórmulas azucaradas o jugos, ya que provocan caries severas y rápidas.',
      'Supervisión activa: Los niños no tienen la destreza motriz fina completa para cepillarse solos hasta los 7 u 8 años. Los padres deben repasar o acompañar el cepillado.'
    ],
    keyAdvice: 'Haz del cepillado un momento de juego y complicidad con canciones o temporizadores divertidos en familia.',
    icon: 'Baby',
    tips: [
      'Gasa húmeda para bebés sin dientes',
      'Pasta dental infantil con flúor en cantidad adecuada',
      'Acompañar y supervisar hasta los 8 años'
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Cuánto tiempo debe durar un cepillado dental adecuado para limpiar todas las zonas de la boca?',
    options: [
      '30 segundos rápidamente',
      'Al menos 2 minutos completos',
      '5 minutos con cepillo muy duro'
    ],
    correctAnswerIndex: 1,
    explanation: 'Dos minutos es el tiempo recomendado internacionalmente por odontólogos para asegurar que limpiamos meticulosamente cada cuadrante bucal (30 segundos por zona).',
    tip: '¡Divide tu boca en 4 partes y dedica 30 segundos a cada una!'
  },
  {
    id: 2,
    question: '¿Con qué frecuencia se recomienda cambiar el cepillo de dientes convencional?',
    options: [
      'Cada 3 meses o antes si las cerdas se abren',
      'Una vez cada 2 años',
      'Únicamente cuando se rompa el mango'
    ],
    correctAnswerIndex: 0,
    explanation: 'Con el uso continuo las cerdas se desgastan, pierden eficacia para remover placa e incluso acumulan bacterias. Se debe renovar cada 3 meses o tras recuperarse de una infección bucal/respiratoria.',
    tip: 'Si las cerdas de tu cepillo lucen abiertas como abanico, cámbialo de inmediato.'
  },
  {
    id: 3,
    question: '¿Por qué el cepillado antes de dormir es considerado el más importante de toda la jornada?',
    options: [
      'Porque de noche la saliva disminuye y las bacterias proliferan si quedan restos de comida',
      'Porque los dientes necesitan descansar limpios para blanquearse solos',
      'No tiene importancia especial, da igual saltárselo'
    ],
    correctAnswerIndex: 0,
    explanation: 'Durante el sueño el flujo salival se reduce drásticamente. Al haber menos saliva protectora, las bacterias metabolizan rápidamente los azúcares residuales produciendo ácidos que desmineralizan el esmalte.',
    tip: '¡Cepillarse antes de dormir es el mejor escudo nocturno para tus dientes!'
  },
  {
    id: 4,
    question: '¿El uso diario de hilo dental sustituye la necesidad de cepillarse los dientes?',
    options: [
      'Sí, con pasar hilo dental es suficiente',
      'No, son aliados complementarios: el hilo limpia el 40% donde no entra el cepillo',
      'Solo debe usarse en personas mayores con prótesis'
    ],
    correctAnswerIndex: 1,
    explanation: 'El cepillo limpia las superficies frontal, trasera y masticatoria, mientras que el hilo dental limpia las zonas de contacto entre diente y diente. ¡Juntos forman el equipo perfecto de higiene!',
    tip: 'Usa hilo dental al menos una vez al día para evitar caries invisibles entre los dientes.'
  },
  {
    id: 5,
    question: '¿Cuál es la función principal del flúor en la pasta dental?',
    options: [
      'Darle un color llamativo y aroma a la crema dental',
      'Remineralizar y fortalecer el esmalte dental contra los ataques ácidos',
      'Eliminar por completo la necesidad de visitar al odontólogo'
    ],
    correctAnswerIndex: 1,
    explanation: 'El flúor se incorpora a la estructura mineral del esmalte dental, volviéndolo significativamente más resistente a los ácidos que generan las bacterias que causan la caries.',
    tip: 'Verifica que tu pasta dental contenga la concentración de flúor recomendada para tu edad.'
  }
];
