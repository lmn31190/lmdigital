import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  const siteUrl = process.env.REACT_APP_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://lmdigital.net');
  const siteName = 'LM Digital';
  const title = 'LM Digital - Création de Sites Web & Stratégie Digitale pour TPE/PME';
  const description = 'Création et refonte de sites web optimisés pour la conversion. Sites professionnels pour TPE/PME qui transforment vos visiteurs en clients. Stratégie Ads en option.';
  const keywords = 'création site web, refonte site internet, site web TPE PME, agence web, site vitrine, landing page, optimisation conversion, stratégie digitale, webdesign, site professionnel';
  const ogImage = `${siteUrl}/og-image.jpg`;
  const author = 'LM Digital';

  // Schema.org JSON-LD - Organisation
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LM Digital",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@lmdigital.fr",
      "availableLanguage": ["French"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/lmdigital"
    ]
  };

  // Schema.org JSON-LD - Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Création de Sites Web et Stratégie Digitale",
    "provider": {
      "@type": "Organization",
      "name": "LM Digital"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Web & Digital",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Création de site web",
            "description": "Site vitrine professionnel optimisé pour la conversion"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Refonte de site web",
            "description": "Modernisation et optimisation de votre site existant"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing pages",
            "description": "Pages de conversion dédiées pour vos campagnes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Stratégie Ads",
            "description": "Campagnes Google Ads et Meta Ads"
          }
        }
      ]
    }
  };

  // Schema.org JSON-LD - FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte la création d'un site web ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le budget dépend de la complexité du projet. Pour un site vitrine TPE/PME, comptez généralement entre 2 000€ et 8 000€. Un devis précis est fourni après le diagnostic initial."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps pour créer un site ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un site vitrine prend généralement 4 à 8 semaines entre le brief initial et la mise en ligne, incluant conception, validation, développement et tests."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi ne pas commencer directement par les Ads ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les Ads génèrent du trafic, mais c'est votre site qui convertit. Envoyer des visiteurs payants sur un site qui ne convertit pas, c'est gaspiller votre budget. Un site optimisé d'abord, les Ads ensuite = meilleur ROI."
        }
      },
      {
        "@type": "Question",
        "name": "Que comprend le diagnostic gratuit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un appel de 20 minutes pour analyser votre site actuel ou votre projet, comprendre vos objectifs, et identifier les axes d'amélioration prioritaires. Sans engagement."
        }
      }
    ]
  };

  // Schema.org JSON-LD - WebSite
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#1E3A5F" />

      {/* Geo Tags */}
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="France" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
