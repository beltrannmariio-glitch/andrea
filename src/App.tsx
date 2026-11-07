import React, { useState, useEffect } from 'react';
import { NavSection } from './types';
import { Header } from './components/Header';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { LearningSection } from './components/LearningSection';
import { QuizSection } from './components/QuizSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrushingTimerModal } from './components/BrushingTimerModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('portada');
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);

  // Sync hash with active section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavSection;
      if (['portada', 'servicios', 'aprende', 'contacto'].includes(hash)) {
        setActiveSection(hash);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update active section on scroll observer
  useEffect(() => {
    const sections: NavSection[] = ['portada', 'servicios', 'aprende', 'contacto'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    window.history.pushState(null, '', `#${section}`);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#0F172A] flex flex-col selection:bg-[#F97316]/20 selection:text-[#EA580C]">
      
      {/* Top Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 md:pb-0">
        
        {/* Section A: Portada */}
        <HeroSection
          onNavigate={handleNavigate}
          onOpenTimer={() => setIsTimerModalOpen(true)}
        />

        {/* Section B: Servicios Odontológicos */}
        <ServicesSection
          onNavigateToContact={() => handleNavigate('contacto')}
        />

        {/* Section C: Aprende con Mundo Mastic */}
        <LearningSection
          onOpenTimer={() => setIsTimerModalOpen(true)}
        />

        {/* Interactive Oral Hygiene Quiz */}
        <QuizSection />

        {/* Section D: Contacto UABC Mexicali */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Ergonomic Bottom Navigation Bar */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Brushing Timer Modal */}
      <BrushingTimerModal
        isOpen={isTimerModalOpen}
        onClose={() => setIsTimerModalOpen(false)}
      />

    </div>
  );
}
