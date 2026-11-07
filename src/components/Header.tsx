import React from 'react';
import { Sparkles, Phone, BookOpen, Layers, Home } from 'lucide-react';
import { NavSection } from '../types';
import { IMAGES } from '../constants/images';

interface HeaderProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#F1E9DA] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark + Official UABC & FOM Logos */}
        <button
          onClick={() => onNavigate('portada')}
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-xl py-1 px-1.5 transition-transform active:scale-95 shrink-0 cursor-pointer"
        >
          {/* Institutional Logos Lockup */}
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-[#F1E9DA] shadow-xs">
            <img
              src={IMAGES.uabcEscudo}
              alt="Escudo Oficial Completo UABC"
              className="h-9 w-auto max-w-[38px] object-contain shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="h-7 w-px bg-[#E2E8F0]" />
            <img
              src={IMAGES.fomLogo}
              alt="Logo Oficial FOM Facultad de Odontología Mexicali"
              className="h-8 w-auto object-contain shrink-0"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-display font-black text-xl tracking-tight text-[#0F172A] flex items-center gap-1.5">
              MUNDO <span className="text-[#EA580C]">MASTIC</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D9488]">
              Facultad de Odontología UABC
            </span>
          </div>
        </button>

        {/* Zone 2: 4 single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold tracking-tight text-[#334155]">
          <button
            onClick={() => onNavigate('portada')}
            className={`cursor-pointer transition-colors whitespace-nowrap shrink-0 hover:text-[#EA580C] py-2 relative ${
              activeSection === 'portada' ? 'text-[#EA580C]' : ''
            }`}
          >
            Portada
            {activeSection === 'portada' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EA580C] rounded-full" />
            )}
          </button>

          <button
            onClick={() => onNavigate('servicios')}
            className={`cursor-pointer transition-colors whitespace-nowrap shrink-0 hover:text-[#EA580C] py-2 relative ${
              activeSection === 'servicios' ? 'text-[#EA580C]' : ''
            }`}
          >
            Servicios
            {activeSection === 'servicios' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EA580C] rounded-full" />
            )}
          </button>

          <button
            onClick={() => onNavigate('aprende')}
            className={`cursor-pointer transition-colors whitespace-nowrap shrink-0 hover:text-[#EA580C] py-2 relative ${
              activeSection === 'aprende' ? 'text-[#EA580C]' : ''
            }`}
          >
            Aprende
            {activeSection === 'aprende' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EA580C] rounded-full" />
            )}
          </button>

          <button
            onClick={() => onNavigate('contacto')}
            className={`cursor-pointer transition-colors whitespace-nowrap shrink-0 hover:text-[#EA580C] py-2 relative ${
              activeSection === 'contacto' ? 'text-[#EA580C]' : ''
            }`}
          >
            Contacto
            {activeSection === 'contacto' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EA580C] rounded-full" />
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="tel:6865573268"
            className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#0f766e] hover:to-[#0D9488] rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap shrink-0"
            title="Llamar a Facultad de Odontología UABC Mexicali: 686 557 3268"
          >
            <Phone className="w-4 h-4" />
            <span>Llamar: 686 557 3268</span>
          </a>
        </div>

      </div>
    </header>
  );
};
