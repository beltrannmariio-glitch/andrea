import React from 'react';
import { X, CheckCircle2, HeartHandshake, PhoneCall, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { DentalService } from '../types';

interface ServiceDetailModalProps {
  service: DentalService | null;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onNavigateToContact
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#F1E9DA] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1E9DA]/50 rounded-full transition-colors cursor-pointer"
          aria-label="Cerrar detalles del servicio"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Number & Category */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-sm font-bold text-[#EA580C] bg-[#FFF7ED] px-3 py-1 rounded-xl border border-[#FFEDD5]">
            Servicio {service.number}
          </span>
          <span className="text-xs font-semibold text-[#64748B]">
            Facultad de Odontología UABC Mexicali
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F172A] mb-3">
          {service.name}
        </h3>

        {/* Friendly Summary */}
        <p className="text-base text-[#475569] leading-relaxed mb-6 font-medium">
          {service.shortDescription}
        </p>

        {/* Detailed Explanation */}
        <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6">
          <h4 className="font-display font-bold text-base text-[#0F172A] mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#EA580C]" />
            <span>¿En qué consiste este servicio?</span>
          </h4>
          <p className="text-sm text-[#334155] leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Benefits List */}
        <div className="mb-6">
          <h4 className="font-display font-bold text-base text-[#0F172A] mb-3">
            Beneficios principales para tu salud
          </h4>
          <div className="space-y-2.5">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-[#334155]">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Who is it for & friendly tip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5]">
            <div className="text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-1">
              ¿A quién está dirigido?
            </div>
            <p className="text-xs sm:text-sm text-[#7C2D12]">
              {service.forWhom}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F0FDFA] border border-[#CCFBF1]">
            <div className="text-xs font-bold text-[#0D9488] uppercase tracking-wider mb-1">
              Consejo de Mastic
            </div>
            <p className="text-xs sm:text-sm text-[#134E4A]">
              {service.friendlyTip}
            </p>
          </div>
        </div>

        {/* Institutional Notice & Contact CTA */}
        <div className="pt-4 border-t border-[#F1E9DA] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#64748B] text-center sm:text-left">
            <span>Para citas, valoraciones o dudas, comunícate al </span>
            <strong className="text-[#0F172A]">686 557 3268</strong>.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onNavigateToContact();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#c2410c] hover:to-[#ea580c] shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <span>Ver medios de contacto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
