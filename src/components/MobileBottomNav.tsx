import React from 'react';
import { Home, Sparkles, BookOpen, PhoneCall } from 'lucide-react';
import { NavSection } from '../types';

interface MobileBottomNavProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeSection, onNavigate }) => {
  const navItems: { id: NavSection; label: string; icon: React.ElementType }[] = [
    { id: 'portada', label: 'Portada', icon: Home },
    { id: 'servicios', label: 'Servicios', icon: Sparkles },
    { id: 'aprende', label: 'Aprende', icon: BookOpen },
    { id: 'contacto', label: 'Contacto', icon: PhoneCall },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-lg border-t border-[#F1E9DA] px-2 py-1 shadow-lg shadow-black/5">
      <nav className="grid grid-cols-4 items-center h-14 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`min-h-[44px] min-w-[44px] flex flex-col items-center justify-center rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'text-[#EA580C] font-bold'
                  : 'text-[#64748B] hover:text-[#0F172A] font-medium'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-transform ${
                  isActive ? 'bg-[#FFF7ED] scale-110' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              </div>
              <span className="text-[11px] leading-tight tracking-tight mt-0.5 whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
