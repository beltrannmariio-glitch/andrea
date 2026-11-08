import React from 'react';
import { Sparkles, Phone, Mail, Globe, Facebook, Heart } from 'lucide-react';
import { NavSection } from '../types';
import { IMAGES } from '../constants/images';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0F172A] text-white pt-14 pb-20 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            {/* Institutional Logos in Footer */}
            <div className="flex items-center gap-2.5 bg-white/10 px-3 py-1.5 rounded-2xl w-fit border border-white/10">
              <img
                src={IMAGES.uabcEscudo}
                alt="Escudo Oficial Completo UABC"
                className="h-10 w-auto max-w-[40px] object-contain rounded bg-white p-0.5 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="h-7 w-px bg-white/20" />
              <img
                src={IMAGES.fomLogo}
                alt="Logo FOM Facultad de Odontología Mexicali"
                className="h-10 w-auto object-contain rounded bg-white p-0.5 shrink-0"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#EA580C] to-[#F97316] flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-display font-black text-xl tracking-tight text-white flex items-center gap-1.5">
                  MUNDO <span className="text-[#F97316]">MASTIC</span>
                </span>
                <span className="block text-[11px] font-semibold text-[#CBD5E1]">
                  Facultad de Odontología · UABC Mexicali
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Revista digital interactiva orientada a la difusión y promoción de la salud bucodental en las familias bajacalifornianas, acercando los servicios odontológicos universitarios con un lenguaje cercano y accesible.
            </p>

            <div className="text-xs font-serif italic text-amber-300/90">
              «Por la realización plena del ser» — Lema UABC
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('portada')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Portada Principal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  9 Especialidades Clínicas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('aprende')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Guías de Higiene & Cuestionario
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  3 Clínicas en Mexicali
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contacto UABC Mexicali
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Datos Institucionales
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                <span className="text-slate-200 font-bold tabular-nums">686 557 3268</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0D9488] shrink-0" />
                <a
                  href="mailto:alexis.marquez31@uabc.edu.mx"
                  className="text-slate-200 hover:underline break-all"
                >
                  alexis.marquez31@uabc.edu.mx
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#7C3AED] shrink-0" />
                <a
                  href="https://odontologia.mxl.uabc.mx/odo3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  odontologia.mxl.uabc.mx
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a
                  href="https://www.facebook.com/facultadde.odontologiamexicali/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Facultad de Odontología Mexicali
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} MUNDO MASTIC · Facultad de Odontología UABC Campus Mexicali.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Diseñado con pasión por la salud bucal en Baja California</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
