export type NavSection = 'portada' | 'servicios' | 'aprende' | 'contacto';

export interface DentalService {
  id: string;
  number: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  accentColor: string; // Tailwind color class or hex
  bgLight: string;
  borderColor: string;
  benefits: string[];
  forWhom: string;
  friendlyTip: string;
}

export interface EducationalTopic {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string[];
  keyAdvice: string;
  icon: string;
  image?: string;
  tips: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  tip: string;
}
