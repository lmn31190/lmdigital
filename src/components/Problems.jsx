import React from 'react';
import { Monitor, Smartphone, Clock, MousePointer, ArrowRight } from 'lucide-react';
import { problemsData } from '../mock';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  Monitor,
  Smartphone,
  Clock,
  MousePointer
};

const Problems = () => {
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
            <span className="badge mb-6 inline-block">{problemsData.badge}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {problemsData.title}
            </h2>
            <p className="text-lg text-slate-600">
              {problemsData.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problemsData.challenges.map((challenge, index) => {
            const IconComponent = iconMap[challenge.icon];
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {challenge.text}
                      </p>
                    </div>
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
              className="btn-secondary"
              data-testid="problems-cta-button"
            >
              {problemsData.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Problems;
