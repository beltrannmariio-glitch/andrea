import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Clock, Heart, Award, Shield, CheckCircle } from 'lucide-react';
import { NavSection } from '../types';
import { IMAGES } from '../constants/images';

interface HeroSectionProps {
  onNavigate: (section: NavSection) => void;
  onOpenTimer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenTimer }) => {
  return (
    <section id="portada" className="pt-6 pb-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FFF8EF] to-[#FEF3C7]/40 rounded-3xl lg:rounded-[36px] border border-[#FDE68A]/60 shadow-xl shadow-amber-900/5 p-6 sm:p-10 lg:p-12 mb-12">
          
          {/* Subtle Decorative Shapes */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headlines, Intro, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Institutional Official Brand Kicker with Logos */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-2xl border border-[#F1E9DA] shadow-xs">
                  <img
                    src={IMAGES.uabcEscudo}
                    alt="Escudo Oficial Completo Universidad Autónoma de Baja California"
                    className="h-12 w-auto max-w-[48px] object-contain shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="h-9 w-px bg-[#E2E8F0]" />
                  <img
                    src={IMAGES.fomLogo}
                    alt="Logo FOM Facultad de Odontología Mexicali"
                    className="h-10 w-auto object-contain shrink-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0F172A] tracking-tight">
                    Universidad Autónoma de Baja California
                  </span>
                  <span className="text-[11px] font-semibold text-[#0D9488]">
                    Facultad de Odontología · Campus Mexicali
                  </span>
                </div>
              </div>

              {/* Main Slogan & Title */}
              <div className="space-y-2">
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.08] text-balance">
                  Una sonrisa saludable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#7C3AED]">comienza aquí.</span>
                </h1>
                <p className="font-display font-extrabold text-xl sm:text-2xl text-[#7C3AED]">
                  Bienvenido a MUNDO MASTIC
                </p>
              </div>

              {/* Brief Introduction to Facultad de Odontología UABC Mexicali */}
              <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl font-normal">
                Tu revista interactiva y guía digital para conocer los servicios clínicos
                y formativos de la <strong>Facultad de Odontología de la UABC en Mexicali</strong>. 
                Descubre cómo nuestros docentes y estudiantes cuidan la sonrisa de tu familia
                con profesionalismo, calidez y rigor académico.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('servicios')}
                  className="px-6 py-3.5 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#c2410c] hover:to-[#ea580c] shadow-lg shadow-[#F97316]/30 flex items-center gap-2.5 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Conoce nuestros servicios</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('aprende')}
                  className="px-6 py-3.5 rounded-2xl font-bold text-base text-[#0F172A] bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm flex items-center gap-2.5 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <BookOpen className="w-5 h-5 text-[#7C3AED]" />
                  <span>Explora el mundo dental</span>
                </button>
              </div>

              {/* Quick highlight feature: Brushing timer trigger */}
              <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-[#475569]">
                <button
                  onClick={onOpenTimer}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0FDFA] hover:bg-[#CCFBF1] text-[#0D9488] font-bold border border-[#99F6E4] transition-colors cursor-pointer group"
                >
                  <Clock className="w-4 h-4 text-[#0D9488] group-hover:rotate-45 transition-transform" />
                  <span>Probar Temporizador de Cepillado 2 min</span>
                </button>
                <span className="hidden sm:inline text-[#64748B]">¡Divertido para toda la familia!</span>
              </div>

            </div>

            {/* Right Column: Cartoon Tooth Mascot Illustration */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                
                {/* Speech Bubble */}
                <div className="absolute -top-3 left-4 sm:-left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#F1E9DA] text-xs sm:text-sm font-bold text-[#0F172A] flex items-center gap-2 animate-float-gentle">
                  <span className="text-xl">👋</span>
                  <span>¡Hola! Soy Mastic, tu amigo dental</span>
                </div>

                {/* Hero Mascot Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#FFF7ED] to-[#FED7AA]/30 aspect-square">
                  <img
                    src={IMAGES.masticHero}
                    alt="Mascota Mastic, un alegre diente 3D con cepillo dental y pasta sonriendo amigablemente"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
                </div>

                {/* Mascot bottom tag */}
                <div className="mt-3 text-center">
                  <span className="inline-block text-xs font-semibold text-[#64748B] bg-white/80 px-3 py-1 rounded-full border border-[#E2E8F0]">
                    Mascota Oficial de la Revista Mundo Mastic
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Invitation Cards Grid (Tarjetas visuales que invitan a conocer la aplicación) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: 9 Especialidades */}
          <div
            onClick={() => onNavigate('servicios')}
            className="group p-6 rounded-3xl bg-white hover:bg-[#FFF7ED] border border-[#F1E9DA] hover:border-[#FDBA74] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-lg text-[#0F172A] mb-1">
                9 Especialidades
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Desde odontología infantil y preventiva hasta ortodoncia y endodoncia completa.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-bold text-[#EA580C] gap-1 group-hover:gap-2 transition-all">
              <span>Explorar servicios</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Técnicas de Higiene */}
          <div
            onClick={() => onNavigate('aprende')}
            className="group p-6 rounded-3xl bg-white hover:bg-[#F5F3FF] border border-[#F1E9DA] hover:border-[#DDD6FE] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] text-[#7C3AED] group-hover:bg-[#7C3AED] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-lg text-[#0F172A] mb-1">
                Guías de Higiene
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Aprende la técnica de 45°, el uso del hilo dental y alimentos que cuidan tu esmalte.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-bold text-[#7C3AED] gap-1 group-hover:gap-2 transition-all">
              <span>Aprender ahora</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Cuestionario de Salud */}
          <div
            onClick={() => onNavigate('aprende')}
            className="group p-6 rounded-3xl bg-white hover:bg-[#F0FDFA] border border-[#F1E9DA] hover:border-[#99F6E4] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDFA] text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-lg text-[#0F172A] mb-1">
                Trivia Mastic
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                5 preguntas interactivas para evaluar tus hábitos y ganar la insignia de sonrisa brillante.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-bold text-[#0D9488] gap-1 group-hover:gap-2 transition-all">
              <span>Hacer test</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: UABC Mexicali */}
          <div
            onClick={() => onNavigate('contacto')}
            className="group p-6 rounded-3xl bg-white hover:bg-[#FFFBEB] border border-[#F1E9DA] hover:border-[#FDE68A] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFFBEB] text-[#D97706] group-hover:bg-[#D97706] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-lg text-[#0F172A] mb-1">
                3 Clínicas & Ubicaciones
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Calafia, Calle 11 y Naranjos con enlaces directos a Google Maps y datos oficiales.
              </p>
            </div>
            <div className="pt-4 flex items-center text-xs font-bold text-[#D97706] gap-1 group-hover:gap-2 transition-all">
              <span>Ver clínicas en mapa</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
