import React from 'react';
import { Linkedin, ArrowRight } from 'lucide-react';
import { footerData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-slate-800">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à améliorer vos conversions ?
          </h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Création, refonte ou stratégie Ads — échangeons sur votre projet.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300"
          >
            {footerData.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              LM<span className="text-blue-400">Digital</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {footerData.company.description}
            </p>
            <p className="text-sm text-slate-500">
              {footerData.company.tagline}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-2">
              <a 
                href={`mailto:${footerData.contact.email}`}
                className="text-slate-400 hover:text-blue-400 transition-colors block"
              >
                {footerData.contact.email}
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Informations</h4>
            <div className="space-y-2">
              {footerData.legal.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-slate-400 hover:text-blue-400 transition-colors block"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} LM Digital. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
