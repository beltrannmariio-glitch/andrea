import { DentalService } from '../types';

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'preventiva',
    number: '01',
    name: 'Odontología Preventiva',
    shortDescription: 'Cuidado proactivo para mantener tus dientes y encías sanos antes de que aparezcan molestias.',
    fullDescription: 'La odontología preventiva es la base de toda sonrisa saludable. Se enfoca en educar, proteger y aplicar tratamientos tempranos como limpiezas profesionales (profilaxis), aplicación de flúor protector y selladores de fosetas y fisuras. Su meta primordial es evitar la aparición de caries y problemas gingivales.',
    iconName: 'ShieldCheck',
    accentColor: 'text-[#0D9488]',
    bgLight: 'bg-[#F0FDFA]',
    borderColor: 'border-[#CCFBF1]',
    benefits: [
      'Eliminación de placa bacteriana y sarro antes de que causen daños',
      'Refuerzo del esmalte dental con flúor tópico',
      'Instrucción personalizada de técnicas de cepillado e higiene en casa'
    ],
    forWhom: 'Bebés, niños, adolescentes, adultos y adultos mayores.',
    friendlyTip: '¡Prevenir siempre es más fácil, cómodo y económico que curar!'
  },
  {
    id: 'infantil',
    number: '02',
    name: 'Odontología Infantil (Odontopediatría)',
    shortDescription: 'Atención cálida, paciente y divertida especializada en la salud bucal de bebés, niños y adolescentes.',
    fullDescription: 'Especialidad dedicada al cuidado de los dientes temporales ("de leche") y el desarrollo de la dentición definitiva. Los odontólogos especializados en niños utilizan técnicas de adaptación psicológica para que la visita al dentista sea una experiencia positiva, sin temores ni traumas.',
    iconName: 'Baby',
    accentColor: 'text-[#EA580C]',
    bgLight: 'bg-[#FFF7ED]',
    borderColor: 'border-[#FFEDD5]',
    benefits: [
      'Monitoreo del crecimiento y erupción dental oportuna',
      'Cuidado preventivo y restaurador adaptado a la anatomía infantil',
      'Guía para padres sobre hábitos de succión y alimentación saludable'
    ],
    forWhom: 'Desde el nacimiento y la erupción del primer diente hasta el término de la adolescencia.',
    friendlyTip: 'Los dientes de leche guardan el espacio para los dientes permanentes, ¡cuidarlos es vital!'
  },
  {
    id: 'restauradora',
    number: '03',
    name: 'Odontología Restauradora',
    shortDescription: 'Recupera la forma, función y estética de los dientes dañados por caries o desgaste.',
    fullDescription: 'Área odontológica orientada a rehabilitar piezas dentales que han sufrido lesiones cariosas, fracturas o desgastes. Utiliza materiales modernos y estéticos como resinas compuestas de alta resistencia que se mimetizan con el color natural del diente, devolviéndole su fuerza masticatoria.',
    iconName: 'Sparkles',
    accentColor: 'text-[#7C3AED]',
    bgLight: 'bg-[#F5F3FF]',
    borderColor: 'border-[#DDD6FE]',
    benefits: [
      'Eliminación de tejido cariado y desinfección de la zona',
      'Restauraciones estéticas del mismo tono de tu esmalte',
      'Recuperación de la anatomía original para masticar con confianza'
    ],
    forWhom: 'Personas que presentan caries, empastes desgastados o pequeñas fracturas en sus dientes.',
    friendlyTip: 'Detectar una caries a tiempo permite repararla con tratamientos conservadores y sencillos.'
  },
  {
    id: 'endodoncia',
    number: '04',
    name: 'Endodoncia',
    shortDescription: 'Tratamiento del interior del diente para aliviar el dolor profundo y salvar piezas naturales.',
    fullDescription: 'La endodoncia trata la pulpa dental (el "nervio" del diente). Cuando una caries profunda, un golpe o una infección alcanza el tejido pulpar provocando inflamación o dolor agudo, el endodoncista retira el tejido infectado, limpia y sella los conductos radiculares, evitando la extracción del diente.',
    iconName: 'Activity',
    accentColor: 'text-[#F97316]',
    bgLight: 'bg-[#FFF7ED]',
    borderColor: 'border-[#FED7AA]',
    benefits: [
      'Alivio definitivo del dolor dental provocado por infecciones internas',
      'Conservación del diente natural en la boca sin necesidad de extraerlo',
      'Detención de la propagación de infecciones hacia el hueso de soporte'
    ],
    forWhom: 'Pacientes con dolor dental persistente al frío/calor, inflamación o caries muy profundas.',
    friendlyTip: 'Salvar tu diente natural siempre es la primera y mejor alternativa para tu mordida.'
  },
  {
    id: 'periodoncia',
    number: '05',
    name: 'Periodoncia',
    shortDescription: 'Cuidado y tratamiento de las encías y los tejidos que sostienen tus dientes firmes.',
    fullDescription: 'Especialidad enfocada en prevenir, diagnosticar y tratar las enfermedades periodontales como la gingivitis (encías inflamadas que sangran) y la periodontitis (infección bacteriana que afecta el hueso de soporte). Mantener encías sanas es fundamental para que los dientes permanezcan firmes toda la vida.',
    iconName: 'HeartPulse',
    accentColor: 'text-[#0D9488]',
    bgLight: 'bg-[#F0FDFA]',
    borderColor: 'border-[#99F6E4]',
    benefits: [
      'Control del sangrado y la inflamación de encías',
      'Tratamiento de raspado y alisado radicular para eliminar bacterias subgingivales',
      'Prevención del aflojamiento o pérdida prematura de piezas dentales'
    ],
    forWhom: 'Personas cuyas encías sangran al cepillarse, con mal aliento persistente o encías retraídas.',
    friendlyTip: 'Las encías sanas son de color rosa pálido, firmes y NO sangran con el cepillado.'
  },
  {
    id: 'cirugia',
    number: '06',
    name: 'Cirugía Bucal',
    shortDescription: 'Procedimientos quirúrgicos seguros para extracciones complejas y salud de los maxilares.',
    fullDescription: 'Disciplina quirúrgica que resuelve patologías de la cavidad bucal. Incluye desde la extracción de muelas del juicio (terceros molares retenidos o impactados), hasta pequeñas intervenciones de tejidos blandos, frenectomías y preparación de los tejidos óseos para futuras prótesis.',
    iconName: 'Scissors',
    accentColor: 'text-[#6D28D9]',
    bgLight: 'bg-[#F5F3FF]',
    borderColor: 'border-[#C4B5FD]',
    benefits: [
      'Extracción segura de muelas del juicio que causan apiñamiento o dolor',
      'Manejo cuidadoso con protocolos de anestesia local y asepsia estricta',
      'Instrucciones precisas de recuperación y cuidados postoperatorios'
    ],
    forWhom: 'Pacientes con muelas impactadas, dientes no restaurables o que requieren procedimientos en tejidos bucales.',
    friendlyTip: 'Seguir con atención los cuidados posteriores asegura una recuperación rápida y sin contratiempos.'
  },
  {
    id: 'ortodoncia',
    number: '07',
    name: 'Ortodoncia',
    shortDescription: 'Alineación de los dientes y corrección de la mordida para una función y estética óptimas.',
    fullDescription: 'Se encarga del diagnóstico y corrección de la posición incorrecta de los dientes y las alteraciones en la mordida o maxilares. Mediante aparatología fija (brackets) o removible, mueve suavemente los dientes hacia una posición armónica que facilita la masticación y el cepillado.',
    iconName: 'Smile',
    accentColor: 'text-[#EA580C]',
    bgLight: 'bg-[#FFF7ED]',
    borderColor: 'border-[#FDBA74]',
    benefits: [
      'Dientes perfectamente alineados y sonrisa estéticamente equilibrada',
      'Mejora notable en la masticación y pronunciación',
      'Facilita la higiene diaria al eliminar áreas de difícil acceso'
    ],
    forWhom: 'Niños, jóvenes y adultos con dientes apiñados, separados o problemas de oclusión.',
    friendlyTip: 'La ortodoncia no es solo belleza: una buena mordida protege la articulación de la mandíbula.'
  },
  {
    id: 'protesis',
    number: '08',
    name: 'Prótesis Dental',
    shortDescription: 'Reemplazo de dientes ausentes para devolver la capacidad de masticar, hablar y sonreír.',
    fullDescription: 'Especialidad dedicada a restaurar la anatomía bucal cuando se han perdido una o varias piezas dentales. Abarca prótesis fijas (coronas, puentes) y prótesis removibles (parciales o totales), diseñadas a medida para devolver estabilidad y bienestar integral al paciente.',
    iconName: 'Layers',
    accentColor: 'text-[#0284C7]',
    bgLight: 'bg-[#F0F9FF]',
    borderColor: 'border-[#BAE6FD]',
    benefits: [
      'Recuperación de la habilidad para masticar alimentos variados',
      'Soporte a los labios y mejillas, rejuveneciendo la expresión facial',
      'Evita que los dientes vecinos se inclinen hacia los espacios vacíos'
    ],
    forWhom: 'Personas que han perdido uno, varios o todos sus dientes naturales.',
    friendlyTip: 'Recuperar tus dientes te permite disfrutar de tu comida favorita y sonreír sin timidez.'
  },
  {
    id: 'integral',
    number: '09',
    name: 'Atención Integral',
    shortDescription: 'Valoración completa y multidisciplinaria adaptada a las necesidades particulares de cada paciente.',
    fullDescription: 'Modelo de atención donde se evalúa al paciente como un todo. Combina el diagnóstico clínico detallado, la elaboración de un plan de tratamiento secuenciado y la coordinación entre distintas áreas odontológicas para resolver problemas desde la prevención hasta la rehabilitación total.',
    iconName: 'Users',
    accentColor: 'text-[#7C3AED]',
    bgLight: 'bg-[#FAF5FF]',
    borderColor: 'border-[#E9D5FF]',
    benefits: [
      'Historia clínica completa y diagnóstico personalizado',
      'Plan de atención coordinado por etapas según prioridades',
      'Acompañamiento continuo con el respaldo académico de la UABC'
    ],
    forWhom: 'Toda persona que busca una revisión global y un plan de salud bucal integral.',
    friendlyTip: 'Una visión integral garantiza que cada tratamiento sume a tu bienestar a largo plazo.'
  }
];
