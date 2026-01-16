import React from 'react';
import { ArrowRight } from 'lucide-react';
import { benchmarksData } from '../mock';
import ScrollReveal from './ScrollReveal';

const Benchmarks = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-xs font-semibold tracking-wider uppercase mb-6">
              {benchmarksData.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {benchmarksData.title}
            </h2>
            <p className="text-lg text-slate-300">
              {benchmarksData.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benchmarksData.stats.map((stat, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-3">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-slate-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-slate-600 mb-3">
                  {stat.detail}
                </div>
                <div className="text-sm text-teal-600 font-medium mb-4">
                  {stat.comparison}
                </div>
                <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-500">
                  {stat.source}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="text-center mb-10">
            <p className="text-slate-400 text-sm max-w-2xl mx-auto italic">
              {benchmarksData.note}
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-lg"
              data-testid="benchmarks-cta-button"
            >
              {benchmarksData.cta}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Benchmarks;
