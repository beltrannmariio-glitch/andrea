import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ArrowUpRight, Sparkles, Building, Phone } from 'lucide-react';
import { UABC_CLINICS, DentalClinicLocation } from '../data/clinicsData';

export const ClinicsLocations: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const handleCopyAddress = (clinic: DentalClinicLocation) => {
    const fullText = `${clinic.name} - ${clinic.address}, ${clinic.postalCode}, Mexicali, B.C.`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(clinic.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const filteredClinics = activeTab === 'all' 
    ? UABC_CLINICS 
    : UABC_CLINICS.filter(c => c.id === activeTab);

  return (
    <div className="mb-14">
      {/* Title & Context */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#0D9488] bg-[#F0FDFA] border border-[#CCFBF1] mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Red de Atención Odontológica UABC</span>
        </div>
        <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F172A]">
          Nuestras 3 Clínicas Dentales en Mexicali
        </h3>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1.5 leading-relaxed">
          La Facultad de Odontología cuenta con tres ubicaciones estratégicas para atender a familias de distintas zonas de Mexicali. Haz clic en cualquier clínica para abrir su ubicación en Google Maps.
        </p>
      </div>

      {/* Filter Tabs for Quick Focus */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'bg-[#0F172A] text-white shadow-sm'
              : 'bg-white text-[#64748B] border border-[#F1E9DA] hover:text-[#0F172A]'
          }`}
        >
          Todas las Clínicas (3)
        </button>

        {UABC_CLINICS.map((clinic) => (
          <button
            key={clinic.id}
            onClick={() => setActiveTab(clinic.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === clinic.id
                ? 'bg-[#EA580C] text-white shadow-sm'
                : 'bg-white text-[#64748B] border border-[#F1E9DA] hover:text-[#0F172A]'
            }`}
          >
            {clinic.badge}: {clinic.name.split('(')[0].replace('UABC Clínica Dental', 'Clínica')}
          </button>
        ))}
      </div>

      {/* Clinics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredClinics.map((clinic) => (
          <div
            key={clinic.id}
            className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#F1E9DA] hover:border-[#FDBA74] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Clinic Real Photo Banner */}
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[16/10] bg-[#F1E9DA] border border-[#F1E9DA]">
                <img
                  src={clinic.image}
                  alt={clinic.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md bg-white/90 ${clinic.tagColor} shadow-sm border border-white/60`}>
                    {clinic.badge}
                  </span>
                </div>
                <div className="absolute bottom-2.5 right-2.5">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#0F172A]/80 text-white backdrop-blur-sm">
                    {clinic.zone.split('/')[0]}
                  </span>
                </div>
              </div>

              {/* Clinic Name */}
              <h4 className="font-display font-extrabold text-xl text-[#0F172A] mb-2 leading-snug group-hover:text-[#EA580C] transition-colors">
                {clinic.name}
              </h4>

              {/* Description / Subinfo */}
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                {clinic.description}
              </p>

              {/* Detailed Address Card */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 mb-4">
                <div className="flex items-start gap-2 text-xs text-[#1E293B]">
                  <Building className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#0F172A]">Dirección:</strong>
                    <span>{clinic.address}</span>
                    <span className="block text-[#64748B] text-[11px]">{clinic.postalCode}, Mexicali, B.C.</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#64748B] pl-6 border-t border-[#E2E8F0] pt-2">
                  <span className="font-semibold text-[#334155]">Referencia:</span> {clinic.reference}
                </div>
              </div>

              {/* Services Offered at this Clinic */}
              <div className="mb-6">
                <div className="text-xs font-bold text-[#0F172A] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Servicios y áreas destacadas:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {clinic.servicesOffered.map((svc, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-[#475569] bg-[#FFFDF9] px-2.5 py-1 rounded-lg border border-[#F1E9DA]"
                    >
                      • {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons for this location */}
            <div className="pt-4 border-t border-[#F1E9DA] space-y-2.5">
              
              {/* Primary Google Maps Navigation Link */}
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#c2410c] hover:to-[#ea580c] shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-95 text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir en Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Secondary Copy Address Button */}
              <button
                type="button"
                onClick={() => handleCopyAddress(clinic)}
                className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold text-[#475569] bg-[#F1E9DA]/40 hover:bg-[#F1E9DA]/70 border border-[#F1E9DA] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copiedId === clinic.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span className="text-[#0D9488] font-bold">¡Dirección copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar dirección para GPS</span>
                  </>
                )}
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
