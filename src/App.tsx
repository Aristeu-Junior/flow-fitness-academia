import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Modalities } from './components/Modalities';
import { PricingSection } from './components/PricingSection';
import { GymExperience } from './components/GymExperience';
import { ScheduleAndLocation } from './components/ScheduleAndLocation';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConductPolicyModal } from './components/ConductPolicyModal';
import { CareersModal } from './components/CareersModal';

export const App: React.FC = () => {
  const [conductModalOpen, setConductModalOpen] = useState(false);
  const [careersModalOpen, setCareersModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-flow-bg text-flow-light selection:bg-flow-primary selection:text-flow-bg flex flex-col justify-between">
      {/* Navigation Bar */}
      <Navbar
        onOpenConductModal={() => setConductModalOpen(true)}
        onOpenCareersModal={() => setCareersModalOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Modalities & Highlights */}
        <Modalities />

        {/* Pricing Matrix & Calculator */}
        <PricingSection />

        {/* Video Tour & Gallery */}
        <GymExperience />

        {/* Schedule & Location */}
        <ScheduleAndLocation />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenConductModal={() => setConductModalOpen(true)}
        onOpenCareersModal={() => setCareersModalOpen(true)}
      />

      {/* Modals */}
      <ConductPolicyModal
        isOpen={conductModalOpen}
        onClose={() => setConductModalOpen(false)}
      />

      <CareersModal
        isOpen={careersModalOpen}
        onClose={() => setCareersModalOpen(false)}
      />
    </div>
  );
};

export default App;
