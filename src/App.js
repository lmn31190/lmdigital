import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import SEOHead from './components/SEOHead';
import Hero from './components/Hero';
import Problems from './components/Problems';
import VCRMethod from './components/VCRMethod';
import Benchmarks from './components/Benchmarks';
import WhyFirst from './components/WhyFirst';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <Hero />
        <Problems />
        <VCRMethod />
        <Benchmarks />
        <WhyFirst />
        <Services />
        <FAQ />
        <ContactForm />
        <Footer />
        <Toaster />
      </div>
    </HelmetProvider>
  );
}

export default App;
