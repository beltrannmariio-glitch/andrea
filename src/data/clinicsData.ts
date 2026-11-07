import { IMAGES } from '../constants/images';

export interface DentalClinicLocation {
  id: string;
  name: string;
  badge: string;
  zone: string;
  address: string;
  postalCode: string;
  reference: string;
  mapsUrl: string;
  image: string;
  imageAlt: string;
  description: string;
  servicesOffered: string[];
  tagColor: string;
  bgLight: string;
  borderColor: string;
}

export const UABC_CLINICS: DentalClinicLocation[] = [
  {
    id: 'calafia',
    name: 'Clínica Calafia (Campus Central)',
    badge: 'Sede Principal',
    zone: 'Centro Cívico / Fracc. Calafia',
    address: 'Av. Zotoluca y Calle Chinampas s/n, Fracc. Calafia',
    postalCode: 'C.P. 21040',
    reference: 'Junto a la Unidad Mexicali y Centro de Gobierno',
    mapsUrl: 'https://maps.app.goo.gl/XsgxhHcmqkcn8Kn47',
    image: IMAGES.calafiaFachada,
    imageAlt: 'Fachada oficial de la Clínica Calafia de la Facultad de Odontología UABC Mexicali',
    description: 'Sede central de la Facultad de Odontología UABC en Mexicali. Alberga las clínicas docentes integrales de pregrado y posgrado, quirófanos y laboratorios de simulación.',
    servicesOffered: [
      'Atención Integral y Diagnóstico',
      'Odontología Infantil (Odontopediatría)',
      'Ortodoncia y Endodoncia',
      'Periodoncia y Prótesis Dental',
      'Cirugía Bucal y Maxilofacial'
    ],
    tagColor: 'text-[#EA580C]',
    bgLight: 'bg-[#FFF7ED]',
    borderColor: 'border-[#FED7AA]'
  },
  {
    id: 'calle-11',
    name: 'Clínica Calle 11 (Heroico Colegio Militar)',
    badge: 'Zona Poniente',
    zone: 'Colonia Orizaba / Calle 11',
    address: 'Calle Heroico Colegio Militar (Calle 11) s/n, Col. Orizaba',
    postalCode: 'C.P. 21090',
    reference: 'Sobre el corredor de Calle 11, al poniente de la ciudad',
    mapsUrl: 'https://maps.app.goo.gl/NsBcDFJ69YuXrFgo7',
    image: IMAGES.calle11Clinica,
    imageAlt: 'Área de unidades clínicas docentes y sillones odontológicos de Clínica Calle 11 UABC',
    description: 'Importante módulo clínico odontológico de la UABC que brinda atención y prácticas clínicas supervisadas a los habitantes y familias del sector poniente de Mexicali.',
    servicesOffered: [
      'Odontología Preventiva y Profilaxis',
      'Odontología Restauradora (Resinas)',
      'Extracciones Dentales y Cirugía Menor',
      'Revisiones y Limpiezas Dentales',
      'Atención a Niños y Adultos'
    ],
    tagColor: 'text-[#7C3AED]',
    bgLight: 'bg-[#F5F3FF]',
    borderColor: 'border-[#DDD6FE]'
  },
  {
    id: 'naranjos',
    name: 'UABC Clínica Dental Naranjos',
    badge: 'Zona Sur',
    zone: 'Rivera Campestre / Santiago Vidaurri',
    address: 'Blvd. Gral. Santiago Vidaurri #701 (esq. Misión del Ángel)',
    postalCode: 'C.P. 21383',
    reference: 'Zona sur de Mexicali, conectando Rivera Campestre y alrededores',
    mapsUrl: 'https://maps.app.goo.gl/b3YmuJUnshRBjcHD8',
    image: IMAGES.naranjosClinica,
    imageAlt: 'Fachada oficial del edificio de la Universidad Autónoma de Baja California - Clínica Dental Naranjos',
    description: 'Clínica dental de vinculación comunitaria diseñada para acercar servicios de salud bucal universitaria a las colonias del sur de la ciudad con calidez y accesibilidad.',
    servicesOffered: [
      'Salud Bucal Familiar Preventiva',
      'Selladores de Fosetas y Aplicación de Flúor',
      'Tratamiento de Caries y Restauraciones',
      'Orientación y Técnica de Cepillado',
      'Diagnóstico Clínico Oportuno'
    ],
    tagColor: 'text-[#0D9488]',
    bgLight: 'bg-[#F0FDFA]',
    borderColor: 'border-[#99F6E4]'
  }
];
