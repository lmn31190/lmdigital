import React from 'react';
import { Target, Calculator, TrendingUp, ArrowRight } from 'lucide-react';
import { whyFirstData } from '../mock';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  Target,
  Calculator,
  TrendingUp
};

const WhyFirst = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge mb-6 inline-block">{whyFirstData.badge}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              {whyFirstData.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {whyFirstData.points.map((point, index) => {
            const IconComponent = iconMap[point.icon];
            return (
              <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Conclusion */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <p className="text-xl text-slate-800 font-medium">
                {whyFirstData.conclusion}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="btn-primary"
              data-testid="whyfirst-cta-button"
            >
              {whyFirstData.cta}
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

export default WhyFirst;
