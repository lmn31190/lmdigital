import React from 'react';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { methodData } from '../mock';
import ScrollReveal from './ScrollReveal';

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    number: 'text-blue-700',
    accent: 'bg-blue-700',
    badge: 'bg-blue-100 text-blue-700'
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    number: 'text-teal-600',
    accent: 'bg-teal-600',
    badge: 'bg-teal-100 text-teal-700'
  },
  slate: {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    number: 'text-slate-500',
    accent: 'bg-slate-500',
    badge: 'bg-slate-100 text-slate-600'
  }
};

const VCRMethod = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="badge mb-6 inline-block">{methodData.badge}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {methodData.title}
            </h2>
            <p className="text-xl text-blue-700 font-semibold mb-4">
              {methodData.subtitle}
            </p>
            <p className="text-lg text-slate-600">
              {methodData.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Phases */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {methodData.phases.map((phase, index) => {
            const colors = colorClasses[phase.color];
            const isOptional = phase.subtitle === "Étape optionnelle";
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                <div className={`relative ${colors.bg} rounded-2xl p-8 h-full border ${colors.border}`}>
                  {/* Step number */}
                  <div className={`text-6xl font-bold ${colors.number} opacity-20 absolute top-4 right-6`}>
                    {phase.number}
                  </div>
                  
                  <div className="relative">
                    <div className={`w-2 h-12 ${colors.accent} rounded-full mb-6`}></div>
                    
                    {isOptional && (
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${colors.badge}`}>
                        Optionnel
                      </span>
                    )}
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {phase.title}
                    </h3>
                    <p className={`text-sm font-semibold ${colors.number} mb-4`}>
                      {phase.subtitle}
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2">
                      {phase.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <Check className={`w-4 h-4 ${colors.number}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connector arrow */}
                  {index < methodData.phases.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-slate-300" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Note */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-xl p-6">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800">
                <span className="font-semibold">Important :</span> {methodData.note}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="btn-primary"
              data-testid="method-cta-button"
            >
              {methodData.cta}
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

export default VCRMethod;
