import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import MentalHealthInfo from './sections/MentalHealthInfo';
import About from './sections/About';
import WhatWeOffer from './sections/WhatWeOffer';
import SelfAwarenessQuiz from './sections/SelfAwarenessQuiz';
import Services from './sections/Services';
import DonationSection from './sections/DonationSection';
import BookingFlow from './sections/BookingFlow';
import TrustSection from './sections/TrustSection';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackgroundMusic from './components/BackgroundMusic';
import { services, counselors } from './data/mockData';

function App() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [showBookingFlow, setShowBookingFlow] = useState(false);

  const handleToggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleGetStarted = () => {
    // Scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVoiceSupport = () => {
    setShowBookingFlow(true);
  };

  const handleCloseBooking = () => {
    setShowBookingFlow(false);
  };

  return (
    <div className="min-h-screen bg-lavender-100">
      <Navbar onGetStarted={handleGetStarted} />

      <main>
        <Hero onGetStarted={handleGetStarted} />

        <MentalHealthInfo />

        <About />

        <WhatWeOffer />

        <SelfAwarenessQuiz />

        <Services
          services={services}
          selectedServices={selectedServices}
          onToggleService={handleToggleService}
          onVoiceSupport={handleVoiceSupport}
        />

        <DonationSection />

        <TrustSection />

        <Contact />
      </main>

      <Footer />

      <BackgroundMusic />
      <WhatsAppButton />

      <AnimatePresence>
        {showBookingFlow && (
          <BookingFlow
            services={services}
            selectedServices={selectedServices}
            counselors={counselors}
            onClose={handleCloseBooking}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
