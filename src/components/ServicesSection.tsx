import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Baby, 
  Sparkles, 
  Activity, 
  HeartPulse, 
  Scissors, 
  Smile, 
  Layers, 
  Users,
  ArrowRight,
  Info
} from 'lucide-react';
import { DentalService, NavSection } from '../types';
import { DENTAL_SERVICES } from '../data/servicesData';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onNavigateToContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigateToContact }) => {
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Baby': return Baby;
      case 'Sparkles': return Sparkles;
      case 'Activity': return Activity;
      case 'HeartPulse': return HeartPulse;
      case 'Scissors': return Scissors;
      case 'Smile': return Smile;
      case 'Layers': return Layers;
      case 'Users': return Users;
      default: return Sparkles;
    }
  };

  return (
    <section id="servicios" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-[#EA580C] bg-[#FFF7ED] mb-3 border border-[#FFEDD5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Directorio de Servicios Odontológicos</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight text-balance">
            Atención integral para cada etapa de tu vida
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Conoce las 9 especialidades que ofrece la Facultad de Odontología UABC Mexicali. 
            Haz clic en cualquier servicio para conocer en qué consiste de manera clara y sencilla.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DENTAL_SERVICES.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-[#F1E9DA] hover:border-[#FDBA74] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  
                  {/* Top Bar inside card: Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${service.bgLight} ${service.accentColor} flex items-center justify-center border ${service.borderColor} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#94A3B8] bg-[#F8FAFC] px-2.5 py-1 rounded-lg border border-[#F1F5F9]">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Name */}
                  <h3 className="font-display font-extrabold text-xl text-[#0F172A] mb-2 group-hover:text-[#EA580C] transition-colors">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-4 border-t border-[#F1E9DA] flex items-center justify-between text-xs font-bold text-[#EA580C] group-hover:text-[#c2410c]">
                  <span>¿En qué consiste?</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Ver más</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Institutional Note (strictly no invented prices or fake schedules) */}
        <div className="mt-12 p-5 sm:p-6 rounded-3xl bg-[#FFFDF9] border border-[#F1E9DA] flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-display font-bold text-sm text-[#0F172A]">
              Información de Consulta Institucional
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
              Para disponibilidad de turnos, requisitos y valoraciones clínicas de cada especialidad, 
              te invitamos a comunicarte directamente con el personal administrativo de la 
              Facultad de Odontología UABC Mexicali al <strong>686 557 3268</strong>.
            </p>
          </div>
          <button
            onClick={onNavigateToContact}
            className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0D9488] hover:bg-[#0f766e] transition-colors shrink-0 cursor-pointer"
          >
            Ir a Contacto
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onNavigateToContact={onNavigateToContact}
      />
    </section>
  );
};
