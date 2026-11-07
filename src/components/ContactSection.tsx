import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  MapPin, 
  ArrowUpRight, 
  Send, 
  Building2,
  Navigation
} from 'lucide-react';
import { ClinicsLocations } from './ClinicsLocations';

export const ContactSection: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userQuery, setUserQuery] = useState('');
  const [serviceOfInterest, setServiceOfInterest] = useState('Odontología Preventiva');

  const INSTITUTIONAL_EMAIL = 'andrea.alvarado.villafan@uabc.edu.mx';
  const INSTITUTIONAL_PHONE = '686 557 3268';
  const INSTITUTIONAL_WEB = 'https://odontologia.mxl.uabc.mx/odo3/';
  const INSTITUTIONAL_FB = 'https://www.facebook.com/facultadde.odontologiamexicali/?locale=es_LA';

  const handleSendCustomMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta Mundo Mastic - Interés en ${serviceOfInterest}`);
    const body = encodeURIComponent(
      `Hola, personal de la Facultad de Odontología UABC Mexicali.\n\nMi nombre es ${userName || 'Paciente'}.\nMe comunico a través de la aplicación Mundo Mastic.\n\nServicio de interés: ${serviceOfInterest}\nConsulta o duda:\n${userQuery || 'Deseo solicitar información sobre los servicios odontológicos y valoraciones clínicas.'}\n\nMuchas gracias por su atención.`
    );
    window.location.href = `mailto:${INSTITUTIONAL_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-12 sm:py-16 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-[#EA580C] bg-[#FFF7ED] mb-3 border border-[#FFEDD5]">
            <Building2 className="w-3.5 h-3.5" />
            <span>Atención Comunitaria e Institucional</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight text-balance">
            Contacto & Ubicaciones UABC Mexicali
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Comunícate directamente con la <strong>Facultad de Odontología de la UABC, Campus Mexicali</strong> y conoce la ubicación de nuestras clínicas en la ciudad.
          </p>
        </div>

        {/* 4 Official Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          
          {/* 1. Teléfono */}
          <div className="bg-white rounded-3xl p-6 border border-[#F1E9DA] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Único Teléfono Autorizado
              </div>
              <div className="font-display font-black text-xl text-[#0F172A] mb-2 tabular-nums">
                {INSTITUTIONAL_PHONE}
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed mb-6">
                Línea institucional oficial de atención en Mexicali.
              </p>
            </div>
            <a
              href={`tel:${INSTITUTIONAL_PHONE.replace(/\s+/g, '')}`}
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#c2410c] hover:to-[#ea580c] flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95 text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar ahora</span>
            </a>
          </div>

          {/* 2. Correo electrónico */}
          <div className="bg-white rounded-3xl p-6 border border-[#F1E9DA] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F0FDFA] text-[#0D9488] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Correo Electrónico
              </div>
              <div className="font-sans font-bold text-xs sm:text-sm text-[#0F172A] mb-2 break-all">
                {INSTITUTIONAL_EMAIL}
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed mb-6">
                Escribe directamente a la coordinación de la facultad.
              </p>
            </div>
            <a
              href={`mailto:${INSTITUTIONAL_EMAIL}?subject=Consulta%20Informativa%20-%20Mundo%20Mastic`}
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0D9488] to-[#14B8A6] hover:from-[#0f766e] hover:to-[#0D9488] flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95 text-center"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar correo</span>
            </a>
          </div>

          {/* 3. Página Web Oficial */}
          <div className="bg-white rounded-3xl p-6 border border-[#F1E9DA] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Sitio Web UABC
              </div>
              <div className="font-display font-extrabold text-base text-[#0F172A] mb-2">
                Portal Institucional
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed mb-6">
                Conoce la oferta académica, comunicados y vida universitaria.
              </p>
            </div>
            <a
              href={INSTITUTIONAL_WEB}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:from-[#6d28d9] hover:to-[#7c3aed] flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95 text-center"
            >
              <span>Abrir página oficial</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* 4. Facebook Oficial */}
          <div className="bg-white rounded-3xl p-6 border border-[#F1E9DA] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-4">
                <Facebook className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">
                Red Social Oficial
              </div>
              <div className="font-display font-extrabold text-base text-[#0F172A] mb-2">
                Facebook Oficial
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed mb-6">
                Eventos, brigadas comunitarias y avisos de la comunidad.
              </p>
            </div>
            <a
              href={INSTITUTIONAL_FB}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95 text-center"
            >
              <span>Visitar Facebook</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* 3 Clinic Locations with Google Maps Links & Sub-info */}
        <ClinicsLocations />

        {/* Campus Mexicali Illustration + Direct Email Helper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Campus Mexicali Showcase Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#F1E9DA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[16/9] border border-[#F1E9DA]">
                <img
                  src="/assets/aistudio/images__1__8726f80d.jpg"
                  alt="Fachada oficial de la Clínica Calafia - Facultad de Odontología UABC Mexicali"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#0F172A]/85 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-semibold">
                  UABC · Campus Mexicali
                </div>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-2 bg-[#FFFDF9] px-2.5 py-1.5 rounded-xl border border-[#F1E9DA]">
                  <img
                    src="/assets/aistudio/uabc_escudo_completo.png"
                    alt="Escudo Oficial Completo UABC"
                    className="h-9 w-auto max-w-[36px] object-contain shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="h-7 w-px bg-[#E2E8F0]" />
                  <img
                    src="/assets/aistudio/descarga_2756a433.png"
                    alt="Logo FOM"
                    className="h-8 w-auto object-contain shrink-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0F172A]">
                  Facultad de Odontología UABC
                </h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Ubicada en Mexicali, Baja California. Nuestra facultad cuenta con clínicas 
                odontológicas docentes donde se brinda atención a la comunidad, supervisada 
                en todo momento por profesores especialistas y odontólogos certificados.
              </p>

              <div className="flex items-start gap-2.5 text-xs text-[#64748B] mb-2">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>
                  Av. Zotoluca y Calle Chinampas s/n, Fracc. Calafia, Mexicali, Baja California, México.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1E9DA] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0D9488]">
                ✓ Formación y servicio universitario con calidez
              </span>
              <a
                href="https://maps.app.goo.gl/XsgxhHcmqkcn8Kn47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#EA580C] hover:underline inline-flex items-center gap-1"
              >
                <span>Ver Sede Central en Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Fast Email Composer Helper */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#F1E9DA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-xl bg-[#FFF7ED] text-[#EA580C]">
                  <Send className="w-4 h-4" />
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0F172A]">
                  Redactar Consulta Rápida
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] mb-6">
                Prepara tu mensaje para enviarlo directamente a <strong>{INSTITUTIONAL_EMAIL}</strong> desde tu aplicación de correo preferida.
              </p>

              <form onSubmit={handleSendCustomMail} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1">
                    Tu nombre (opcional)
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Ej. Familia Rodríguez"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1">
                    Servicio o clínica sobre la que deseas consultar
                  </label>
                  <select
                    value={serviceOfInterest}
                    onChange={(e) => setServiceOfInterest(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white transition-all cursor-pointer"
                  >
                    <optgroup label="Clínicas UABC">
                      <option value="Clínica Calafia (Campus Central)">Clínica Calafia (Campus Central)</option>
                      <option value="Clínica Calle 11 (Heroico Colegio Militar)">Clínica Calle 11 (Heroico Colegio Militar)</option>
                      <option value="Clínica Dental Naranjos (Zona Sur)">Clínica Dental Naranjos (Zona Sur)</option>
                    </optgroup>
                    <optgroup label="Especialidades">
                      <option value="Odontología Preventiva">Odontología Preventiva</option>
                      <option value="Odontología Infantil (Odontopediatría)">Odontología Infantil</option>
                      <option value="Odontología Restauradora">Odontología Restauradora</option>
                      <option value="Endodoncia">Endodoncia</option>
                      <option value="Periodoncia">Periodoncia</option>
                      <option value="Cirugía Bucal">Cirugía Bucal</option>
                      <option value="Ortodoncia">Ortodoncia</option>
                      <option value="Prótesis Dental">Prótesis Dental</option>
                      <option value="Atención Integral">Atención Integral</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#334155] mb-1">
                    Tu pregunta o mensaje
                  </label>
                  <textarea
                    rows={3}
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    placeholder="Escribe aquí tu duda sobre la atención, citas o ubicación..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#EA580C] to-[#F97316] hover:from-[#c2410c] hover:to-[#ea580c] shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar mensaje vía Correo Electrónico</span>
                </button>
              </form>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F1E9DA] text-center">
              <span className="text-[11px] text-[#94A3B8]">
                Al pulsar el botón se abrirá tu cliente de correo (Gmail, Outlook o Correo móvil) con los datos cargados.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
