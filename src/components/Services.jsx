import React from 'react';
import { PenTool, RefreshCw, Rocket, BarChart2, Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../mock';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  PenTool,
  RefreshCw,
  Rocket,
  BarChart2
};

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge mb-6 inline-block">{servicesData.badge}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              {servicesData.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-blue-700" />
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-teal-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="btn-primary"
              data-testid="services-cta-button"
            >
              {servicesData.cta}
              <span className="arrow">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
