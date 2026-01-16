import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { faqData } from '../mock';
import ScrollReveal from './ScrollReveal';

const FAQ = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="badge mb-6 inline-block">{faqData.badge}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              {faqData.title}
            </h2>
          </div>
        </ScrollReveal>

        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqData.questions.map((item, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 75}>
              <AccordionItem
                value={`item-${index}`}
                className="bg-slate-50 border border-slate-100 rounded-xl px-6 data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-blue-700 transition-colors py-6 [&[data-state=open]]:text-blue-700">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={300}>
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="btn-primary"
              data-testid="faq-cta-button"
            >
              {faqData.cta}
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

export default FAQ;
