import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Activity, 
  Apple, 
  Calendar, 
  Baby, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Lightbulb,
  ThumbsUp,
  AlertTriangle,
  Play
} from 'lucide-react';
import { EDUCATIONAL_TOPICS } from '../data/learningData';

interface LearningSectionProps {
  onOpenTimer: () => void;
}

export const LearningSection: React.FC<LearningSectionProps> = ({ onOpenTimer }) => {
  const [activeTab, setActiveTab] = useState<'tecnica' | 'frecuencia' | 'hilo' | 'nutricion' | 'dentista' | 'ninos'>('tecnica');
  const [foodFilter, setFoodFilter] = useState<'amigos' | 'moderar'>('amigos');

  return (
    <section id="aprende" className="py-12 sm:py-16 bg-gradient-to-b from-transparent via-[#FFF7ED]/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-[#7C3AED] bg-[#F5F3FF] mb-3 border border-[#DDD6FE]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Educación Bucal Interactiva</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight text-balance">
            Aprende con MUNDO MASTIC
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Consejos prácticos, entretenidos y avalados por odontólogos para mantener
            dientes fuertes y sonrisas sanas en toda la familia.
          </p>
        </div>

        {/* Feature 1: Visual Brushing Guide Spotlight */}
        <div className="bg-white rounded-3xl lg:rounded-[32px] p-6 sm:p-10 border border-[#F1E9DA] shadow-lg mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Mascot Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-md border-4 border-white aspect-[4/3]">
                <img
                  src="/src/assets/images/mastic_brushing_guide_1794083839816.jpg"
                  alt="Mascota Mastic enseñando la técnica divertida de cepillado con burbujas de pasta"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-[#0F172A]/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  Técnica recomendada: 2 minutos
                </div>
              </div>
            </div>

            {/* Guide Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-wider">
                <span>Paso a Paso</span>
                <span>·</span>
                <span>Salud Bucal UABC</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F172A]">
                1. ¿Cómo cepillarse correctamente?
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                El cepillado correcto no depende de la fuerza, sino de la técnica.
                Un cepillado agresivo puede desgastar el esmalte y retraer las encías.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5]">
                  <div className="text-xs font-bold text-[#EA580C] mb-1">Ángulo de 45°</div>
                  <p className="text-xs text-[#7C2D12]">
                    Apunta las cerdas hacia la unión entre encía y diente para remover la placa oculta.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
                  <div className="text-xs font-bold text-[#0D9488] mb-1">Movimiento de Barrido</div>
                  <p className="text-xs text-[#134E4A]">
                    Dientes superiores hacia abajo, inferiores hacia arriba. ¡Nunca en forma horizontal brusca!
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE]">
                  <div className="text-xs font-bold text-[#7C3AED] mb-1">Caras Masticatorias</div>
                  <p className="text-xs text-[#5B21B6]">
                    Cepilla las muelas con suaves movimientos circulares para limpiar sus surcos.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE]">
                  <div className="text-xs font-bold text-[#2563EB] mb-1">Limpieza de la Lengua</div>
                  <p className="text-xs text-[#1E40AF]">
                    Cepilla suavemente la lengua de atrás hacia adelante para eliminar bacterias y el mal aliento.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenTimer}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#c2410c] hover:to-[#ea580c] shadow-sm transition-transform active:scale-95 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Iniciar Temporizador de 2 Minutos</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Feature 2: 4 Educational Pillars Grid (Frecuencia, Hilo Dental, Visita al Dentista, Cuidados de los Niños) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* 2. ¿Cuántas veces al día debemos cepillarnos? */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#F1E9DA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#0F172A] mb-3">
                2. ¿Cuántas veces al día debemos cepillarnos?
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                La recomendación básica es <strong>mínimo 3 veces al día</strong>, después de cada comida principal.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#334155] mb-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                  <span><strong>El de la noche es sagrado:</strong> Durante el sueño producimos menos saliva protectora, permitiendo que las bacterias ataquen el esmalte si quedan residuos.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                  <span><strong>Tras consumir ácidos o cítricos:</strong> Espera de 20 a 30 minutos para que la saliva neutralice el pH antes de frotar con el cepillo.</span>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#FFF7ED] text-xs font-semibold text-[#C2410C]">
              💡 Regla de oro: ¡Jamás te vayas a la cama con los dientes sin cepillar!
            </div>
          </div>

          {/* 3. ¿Por qué es importante utilizar hilo dental? */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#F1E9DA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDFA] text-[#0D9488] flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#0F172A] mb-3">
                3. ¿Por qué es importante utilizar hilo dental?
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                El cepillo dental solo logra limpiar aproximadamente el <strong>60%</strong> de las superficies de tus dientes. El hilo dental se encarga del 40% restante.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#334155] mb-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong>Llega entre diente y diente:</strong> Donde las cerdas del cepillo no pueden entrar físicamente.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <span><strong>Previene la gingivitis:</strong> Remueve bacterias antes de que formen sarro endurecido y provoquen inflamación o sangrado de encías.</span>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#F0FDFA] text-xs font-semibold text-[#0F766E]">
              💡 Deslízalo suavemente formando una "C" alrededor del diente sin cortar la encía.
            </div>
          </div>

          {/* 5. ¿Por qué debemos visitar al dentista? */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#F1E9DA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#0F172A] mb-3">
                5. ¿Por qué debemos visitar al dentista?
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                No esperes a sentir dolor para agendar una cita. Las caries y la enfermedad periodontal suelen iniciar sin síntomas aparentes.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#334155] mb-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span><strong>Detección temprana:</strong> Un diagnóstico a tiempo evita tratamientos complicados, pérdidas dentales e incomodidades.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span><strong>Limpiezas profesionales periódicas:</strong> El cálculo o sarro acumulado solo puede ser retirado con instrumental odontológico profesional.</span>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#F5F3FF] text-xs font-semibold text-[#5B21B6]">
              💡 La visita periódica cada 6 meses mantiene tu sonrisa protegida.
            </div>
          </div>

          {/* 6. Cuidados de los dientes de los niños */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#F1E9DA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center mb-4">
                <Baby className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-[#0F172A] mb-3">
                6. Cuidados de los dientes de los niños
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Los dientes temporales ("de leche") cumplen funciones cruciales: masticar, fonética y guiar la salida de los dientes definitivos.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-[#334155] mb-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span><strong>Desde el primer diente:</strong> Limpiar con gasa húmeda en lactantes y comenzar cepillo suave en cuanto erupciona la primera pieza.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span><strong>Evitar biberón dulce nocturno:</strong> La leche o jugo en el biberón antes de dormir genera la destructiva "caries de la primera infancia".</span>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#FFFBEB] text-xs font-semibold text-[#B45309]">
              💡 Los padres deben supervisar el cepillado hasta los 7-8 años de edad.
            </div>
          </div>

        </div>

        {/* Feature 3: Interactive Food Guide (4. ¿Qué alimentos favorecen la salud bucal?) */}
        <div className="bg-white rounded-3xl lg:rounded-[32px] p-6 sm:p-10 border border-[#F1E9DA] shadow-md mb-8">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0D9488] uppercase tracking-wider mb-1">
              <span>Nutrición & Esmalte</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F172A]">
              4. ¿Qué alimentos favorecen la salud bucal?
            </h3>
            <p className="text-sm sm:text-base text-[#475569] mt-2">
              Lo que comes influye directamente en el equilibrio bacteriano de tu boca. 
              Explora qué alimentos fortalecen tu sonrisa y cuáles es mejor consumir con moderación.
            </p>
          </div>

          {/* Interactive Toggle for Foods */}
          <div className="flex items-center gap-2 p-1.5 bg-[#F1E9DA]/50 rounded-2xl w-fit mb-6">
            <button
              onClick={() => setFoodFilter('amigos')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                foodFilter === 'amigos'
                  ? 'bg-white text-[#0D9488] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Alimentos Amigos del Diente</span>
            </button>
            <button
              onClick={() => setFoodFilter('moderar')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                foodFilter === 'moderar'
                  ? 'bg-white text-[#EA580C] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Consumir con Moderación</span>
            </button>
          </div>

          {/* Filtered Content */}
          {foodFilter === 'amigos' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
                <div className="text-2xl mb-2">🍏</div>
                <div className="font-display font-bold text-sm text-[#0D9488] mb-1">Manzanas y Apio</div>
                <p className="text-xs text-[#134E4A]">
                  Frutas y verduras crujientes que estimulan la saliva y barren naturalmente residuos superficiales.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
                <div className="text-2xl mb-2">🧀</div>
                <div className="font-display font-bold text-sm text-[#0D9488] mb-1">Queso y Lácteos</div>
                <p className="text-xs text-[#134E4A]">
                  Ricos en calcio y fósforo que remineralizan el esmalte y neutralizan los ácidos de la placa.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
                <div className="text-2xl mb-2">💧</div>
                <div className="font-display font-bold text-sm text-[#0D9488] mb-1">Agua Natural</div>
                <p className="text-xs text-[#134E4A]">
                  El mejor hidratante. Enjuaga restos alimenticios y mantiene el flujo salival óptimo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
                <div className="text-2xl mb-2">🥬</div>
                <div className="font-display font-bold text-sm text-[#0D9488] mb-1">Verduras de Hoja Verde</div>
                <p className="text-xs text-[#134E4A]">
                  Aportan ácido fólico y vitaminas esenciales para mantener encías firmes y saludables.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5]">
                <div className="text-2xl mb-2">🍬</div>
                <div className="font-display font-bold text-sm text-[#EA580C] mb-1">Dulces Pegajosos</div>
                <p className="text-xs text-[#7C2D12]">
                  Golosinas y chiclosos que quedan adheridos a los surcos dentales durante horas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5]">
                <div className="text-2xl mb-2">🥤</div>
                <div className="font-display font-bold text-sm text-[#EA580C] mb-1">Refrescos y Bebidas Ácidas</div>
                <p className="text-xs text-[#7C2D12]">
                  Contienen azúcares simples y ácidos que desmineralizan rápidamente la capa de esmalte.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5]">
                <div className="text-2xl mb-2">🧃</div>
                <div className="font-display font-bold text-sm text-[#EA580C] mb-1">Jugos Industriales</div>
                <p className="text-xs text-[#7C2D12]">
                  Elevada concentración de azúcar que alimenta a las bacterias que forman caries.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5]">
                <div className="text-2xl mb-2">🍪</div>
                <div className="font-display font-bold text-sm text-[#EA580C] mb-1">Carbohidratos Refinados</div>
                <p className="text-xs text-[#7C2D12]">
                  Galletas y panes dulces que se transforman rápidamente en azúcares en la boca.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
