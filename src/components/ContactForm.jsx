import React, { useEffect } from 'react';
import { Calendar, Check, ArrowRight } from 'lucide-react';
import { ctaData, calendlyConfig } from '../mock';
import ScrollReveal from './ScrollReveal';

const ContactForm = () => {
  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="relative py-20 md:py-28 px-4 md:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <ScrollReveal animation="slide-left">
            <div className="lg:sticky lg:top-8">
              <span className="badge mb-6 inline-block">{ctaData.badge}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {ctaData.title}
              </h2>
              <p className="text-xl text-blue-700 font-semibold mb-6">
                {ctaData.subtitle}
              </p>
              <p className="text-lg text-slate-600 mb-8">
                {ctaData.description}
              </p>

              <div className="space-y-4 mb-8">
                {ctaData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Trust indicator */}
              <div className="bg-white rounded-xl p-6 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Réservation directe</div>
                    <div className="text-sm text-slate-500">{ctaData.ctaSubtext}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Calendly Widget */}
          <ScrollReveal animation="slide-right" delay={200}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="p-4 bg-slate-900 text-white">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{ctaData.cta}</span>
                </div>
              </div>
              
              {/* Calendly Inline Widget */}
              <div 
                className="calendly-inline-widget" 
                data-url={calendlyConfig.url}
                style={{ minWidth: '320px', height: '650px' }}
              ></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
