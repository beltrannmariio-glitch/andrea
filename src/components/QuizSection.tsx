import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Lightbulb, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/learningData';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
    setIsAnswerSubmitted(true);

    if (idx === currentQ.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FFFDF9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Card */}
        <div className="bg-gradient-to-br from-white via-[#FFFDF9] to-[#FFF7ED]/50 rounded-3xl lg:rounded-[36px] p-6 sm:p-10 border border-[#F1E9DA] shadow-xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#EA580C] bg-[#FFF7ED] border border-[#FFEDD5] mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Cuestionario Interactivo</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F172A]">
              ¿Qué tanto sabes sobre tu salud bucal?
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Responde estas 5 preguntas para poner a prueba tus hábitos de higiene oral.
            </p>
          </div>

          {!isFinished ? (
            <div>
              {/* Progress Bar & Counter */}
              <div className="flex items-center justify-between text-xs font-bold text-[#64748B] mb-2">
                <span>Pregunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}</span>
                <span className="font-mono text-[#EA580C]">Aciertos: {score}</span>
              </div>
              <div className="w-full h-2.5 bg-[#F1E9DA] rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-gradient-to-r from-[#EA580C] to-[#F97316] rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#F1E9DA] mb-6">
                <p className="font-display font-bold text-lg sm:text-xl text-[#0F172A] leading-snug">
                  {currentQ.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, idx) => {
                  let buttonStyle = 'bg-white border-[#E2E8F0] text-[#334155] hover:border-[#EA580C]/50 hover:bg-[#FFF7ED]/30';

                  if (isAnswerSubmitted) {
                    if (idx === currentQ.correctAnswerIndex) {
                      buttonStyle = 'bg-[#F0FDFA] border-[#0D9488] text-[#0F766E] font-bold shadow-sm';
                    } else if (idx === selectedOption) {
                      buttonStyle = 'bg-[#FEF2F2] border-[#EF4444] text-[#B91C1C]';
                    } else {
                      buttonStyle = 'bg-[#F8FAFC] border-[#E2E8F0] text-[#94A3B8] opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full p-4 rounded-2xl border text-left font-medium text-sm sm:text-base transition-all flex items-center justify-between gap-3 cursor-pointer ${buttonStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 border border-current">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {isAnswerSubmitted && idx === currentQ.correctAnswerIndex && (
                        <CheckCircle2 className="w-5 h-5 text-[#0D9488] shrink-0" />
                      )}
                      {isAnswerSubmitted && idx === selectedOption && idx !== currentQ.correctAnswerIndex && (
                        <XCircle className="w-5 h-5 text-[#EF4444] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Feedback Explanation */}
              {isAnswerSubmitted && (
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1 text-[#0F172A]">
                    <Lightbulb className="w-4 h-4 text-[#EA580C]" />
                    <span>Explicación Odontológica</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  <p className="text-xs font-semibold text-[#0D9488] mt-2">
                    💡 Tip Mastic: {currentQ.tip}
                  </p>
                </div>
              )}

              {/* Next Question Button */}
              {isAnswerSubmitted && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#c2410c] hover:to-[#ea580c] shadow-md flex items-center gap-2 cursor-pointer transition-transform active:scale-95"
                  >
                    <span>
                      {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Results & Educational Messages Screen */
            <div className="text-center py-4 space-y-6 animate-fadeIn">
              
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#EA580C] to-[#F97316] text-white mx-auto flex items-center justify-center shadow-lg shadow-[#F97316]/30">
                <Award className="w-10 h-10" />
              </div>

              <div>
                <h4 className="font-display font-black text-2xl sm:text-3xl text-[#0F172A]">
                  {score === 5 && '¡Puntuación Perfecta! 🏆'}
                  {score >= 3 && score < 5 && '¡Muy Buen Desempeño! 🌟'}
                  {score < 3 && '¡Buen Intento, Sigue Aprendiendo! 🌱'}
                </h4>
                <p className="text-base sm:text-lg font-bold text-[#EA580C] mt-1">
                  Obtuviste {score} de 5 respuestas correctas
                </p>
                <p className="text-sm text-[#475569] mt-2 max-w-md mx-auto">
                  {score === 5 && '¡Eres todo un experto en salud bucal! Tu sonrisa está en las mejores manos.'}
                  {score >= 3 && score < 5 && 'Tienes sólidos conocimientos sobre cuidado dental. Aplica estos hábitos todos los días.'}
                  {score < 3 && 'La salud bucal se aprende día a día. Repasa los consejos de Mundo Mastic y vuélvelo a intentar.'}
                </p>
              </div>

              {/* 5 Educational Key Takeaways */}
              <div className="text-left bg-white rounded-2xl p-5 border border-[#F1E9DA] max-w-xl mx-auto space-y-3">
                <div className="font-display font-bold text-sm text-[#0F172A] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#EA580C]" />
                  <span>Mensajes Educativos Clave de la UABC Mexicali:</span>
                </div>
                <div className="space-y-2 text-xs text-[#475569]">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span><strong>Tiempo:</strong> Cepíllate al menos 2 minutos, dedicando 30 segundos a cada cuadrante.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span><strong>Frecuencia:</strong> Mínimo 3 veces al día; la noche es obligatoria para proteger el esmalte.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span><strong>Complemento:</strong> El hilo dental limpia el 40% que el cepillo jamás alcanza.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span><strong>Renovación:</strong> Cambia tu cepillo cada 3 meses o al notar cerdas abiertas.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span><strong>Visita Profesional:</strong> Acude cada 6 meses a revisión preventiva en la Facultad.</span>
                  </div>
                </div>
              </div>

              {/* Restart Button */}
              <div className="pt-2">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#0f766e] hover:to-[#0D9488] shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Realizar el Cuestionario de Nuevo</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
