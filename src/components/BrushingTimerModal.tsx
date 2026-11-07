import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, X, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BrushingTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrushingTimerModal: React.FC<BrushingTimerModalProps> = ({ isOpen, onClose }) => {
  const TOTAL_SECONDS = 120; // 2 minutes
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      setIsActive(false);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsLeft]);

  if (!isOpen) return null;

  const secondsElapsed = TOTAL_SECONDS - secondsLeft;
  const progressPercent = ((secondsElapsed) / TOTAL_SECONDS) * 100;

  // Determine current quadrant (30s each)
  let currentZone = 'Superior Derecho';
  let zoneAdvice = 'Limpia suavemente de encía a diente con movimientos de barrido.';
  let zoneColor = 'text-[#EA580C] bg-[#FFF7ED] border-[#FFEDD5]';

  if (secondsElapsed >= 90) {
    currentZone = 'Inferior Derecho';
    zoneAdvice = '¡Último esfuerzo! Pasa por la cara masticatoria y la lengua.';
    zoneColor = 'text-[#0D9488] bg-[#F0FDFA] border-[#CCFBF1]';
  } else if (secondsElapsed >= 60) {
    currentZone = 'Inferior Izquierdo';
    zoneAdvice = 'Cepilla de abajo hacia arriba cuidando tus encías.';
    zoneColor = 'text-[#7C3AED] bg-[#F5F3FF] border-[#DDD6FE]';
  } else if (secondsElapsed >= 30) {
    currentZone = 'Superior Izquierdo';
    zoneAdvice = 'Mantén el cepillo en ángulo de 45° con suavidad.';
    zoneColor = 'text-[#2563EB] bg-[#EFF6FF] border-[#DBEAFE]';
  }

  const minutes = Math.floor(secondsLeft / 60);
  const remainingSeconds = secondsLeft % 60;
  const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

  const handleReset = () => {
    setIsActive(false);
    setSecondsLeft(TOTAL_SECONDS);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#F1E9DA]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1E9DA]/50 rounded-full transition-colors cursor-pointer"
          aria-label="Cerrar temporizador"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#EA580C] bg-[#FFF7ED] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Reto de 2 Minutos Mastic</span>
          </div>
          <h3 className="font-display text-2xl font-black text-[#0F172A]">
            Temporizador Dental
          </h3>
          <p className="text-xs text-[#64748B] mt-1">
            2 minutos recomendados por odontólogos UABC para una limpieza completa
          </p>
        </div>

        {/* Timer Circle */}
        <div className="relative w-44 h-44 mx-auto mb-6 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="88"
              cy="88"
              r="76"
              className="stroke-[#F1E9DA]"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="88"
              cy="88"
              r="76"
              className="stroke-[#F97316] transition-all duration-500 ease-linear"
              strokeWidth="10"
              strokeDasharray={477}
              strokeDashoffset={477 - (477 * progressPercent) / 100}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display font-black text-4xl text-[#0F172A] tabular-nums tracking-tight">
              {formattedTime}
            </span>
            <span className="text-xs font-semibold text-[#64748B]">
              {secondsLeft === 0 ? '¡Completado!' : 'restantes'}
            </span>
          </div>
        </div>

        {/* Quadrant Indicator */}
        <div className={`p-4 rounded-2xl border mb-6 text-center transition-all ${zoneColor}`}>
          <div className="text-xs font-bold uppercase tracking-wider mb-1">
            Zona Actual (30 seg por cuadrante)
          </div>
          <div className="font-display font-black text-lg">
            {secondsLeft === 0 ? '¡Limpieza Finalizada!' : currentZone}
          </div>
          <p className="text-xs mt-1 opacity-90">
            {secondsLeft === 0
              ? '¡Excelente trabajo! Tus dientes están listos para brillar.'
              : zoneAdvice}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleReset}
            className="p-3.5 rounded-2xl bg-[#F8FAFC] text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E8F0] transition-transform active:scale-95 cursor-pointer"
            title="Reiniciar temporizador"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          {secondsLeft > 0 ? (
            <button
              onClick={() => setIsActive(!isActive)}
              className="flex-1 py-3.5 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#c2410c] hover:to-[#ea580c] shadow-md shadow-[#F97316]/25 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer text-base"
            >
              {isActive ? (
                <>
                  <Pause className="w-5 h-5" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-white" />
                  <span>{secondsElapsed > 0 ? 'Continuar' : 'Comenzar Cepillado'}</span>
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="flex-1 py-3.5 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-[#0D9488] to-[#14B8A6] shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer text-base"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Cepillar de Nuevo</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
