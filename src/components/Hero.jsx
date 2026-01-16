import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { heroData } from '../mock';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen bg-white pt-8 md:pt-16 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-slate-50 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex justify-between items-center mb-12 md:mb-20">
            <div className="text-2xl font-bold text-slate-900">
              LM<span className="text-blue-700">Digital</span>
            </div>
            <button
              onClick={scrollToContact}
              className="hidden md:flex items-center gap-2 text-slate-600 hover:text-blue-700 transition-colors"
            >
              <span>Création, refonte ou Ads ?</span>
              <span className="flex items-center gap-2 text-blue-700 font-semibold">
                Échangeons
                <span className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </span>
            </button>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <ScrollReveal animation="fade-up">
              <span className="badge" data-testid="hero-badge">
                {heroData.badge}
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                {heroData.title.line1}
                <br />
                {heroData.title.line2}
                <br />
                <span className="text-blue-700">{heroData.title.highlight}</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl text-slate-500 font-semibold mt-2">
                  {heroData.subtitle}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                {heroData.description}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="space-y-4">
                {heroData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-teal-600" />
                    </div>
                    <p className="text-slate-700">
                      <span className="font-semibold">{benefit.text}</span>{' '}
                      <span className="text-slate-500">{benefit.highlight}</span>
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={scrollToContact}
                  className="btn-primary"
                  data-testid="hero-cta-button"
                >
                  {heroData.cta}
                  <span className="arrow">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-3">{heroData.ctaSubtext}</p>
            </ScrollReveal>
          </div>

          {/* Right Visual */}
          <ScrollReveal animation="slide-right" delay={200}>
            <div className="relative">
              {/* Main visual card */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl">
                {/* Browser mockup */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  {/* Browser bar */}
                  <div className="bg-slate-100 px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-3 py-1 text-xs text-slate-400 ml-4">
                      votre-site.fr
                    </div>
                  </div>
                  
                  {/* Website preview */}
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                      <div className="h-8 bg-slate-800 rounded w-2/3"></div>
                      <div className="h-3 bg-slate-100 rounded w-full"></div>
                      <div className="h-3 bg-slate-100 rounded w-4/5"></div>
                      <div className="flex gap-3 pt-2">
                        <div className="h-10 bg-blue-700 rounded-full w-32"></div>
                        <div className="h-10 border-2 border-slate-200 rounded-full w-28"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-teal-600 rotate-[-45deg]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Taux de conversion</div>
                      <div className="text-lg font-bold text-slate-900">+156%</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -left-4 bg-white rounded-xl px-4 py-2 shadow-lg">
                  <div className="text-xs font-semibold text-blue-700">Site optimisé</div>
                  <div className="text-lg font-bold text-slate-900">Conversion ✓</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-slate-100 rounded-xl -z-10"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
