/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState, useRef } from "react";
import Section from "./Section";

const AccordionItem = ({
  idx,
  title,
  content,
  activeTab,
  setActiveTab,
  className,
}) => {
  const contentRef = useRef(null);

  // Handler for toggling the accordion
  const handleClick = () => {
    setActiveTab(activeTab === idx ? 0 : idx);
  };

  return (
    <div className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl">
      <div
        onClick={handleClick}
        className="w-full p-4 text-left cursor-pointer"
      >
        <div
          className={
            className
              ? `${className} flex items-center`
              : `flex items-center justify-between`
          }
        >
          <h3 className="tracking-wide">{title}</h3>
          <span
            className={`transition-transform duration-500 transform fill-current ${
              activeTab === idx ? "-rotate-180" : ""
            }`}
          >
            <svg
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </div>
      </div>
      <div
        style={
          activeTab === idx
            ? { maxHeight: contentRef.current?.scrollHeight + "px" }
            : { maxHeight: "0px" }
        }
        className="relative overflow-hidden transition-all duration-700 max-h-0"
        ref={contentRef}
      >
        <div className="px-6 pb-4 text-gray-600">{content}</div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0); // Tracks which tab is open

  const faqs = [
    {
      id: 1,
      title:
        "Pourquoi choisir Hexweb pour la création ou la refonte de votre site web ?",
      content:
        "Hexweb se distingue par son expertise en SEO, UX/UI, et développement web sur mesure. Nous créons des sites modernes, performants et adaptés à vos objectifs, tout en vous accompagnant de la conception à la mise en ligne. Nos solutions sont conçues pour maximiser votre visibilité en ligne et augmenter vos conversions grâce à une stratégie digitale complète.",
    },
    {
      id: 2,
      title: "Comment puis-je suivre l'avancement de mon projet ?",
      content:
        "Nous fournissons un suivi régulier à chaque étape du projet, avec des rapports clairs et des points de contact réguliers pour vous tenir informé de l'avancement.",
    },
    {
      id: 3,
      title: "Offrez-vous des services de maintenance après la mise en ligne ?",
      content:
        "Oui, nous proposons des services de maintenance et de mises à jour régulières pour garantir la sécurité, la performance, et l'actualisation de votre site.",
    },
    {
      id: 4,
      title:
        "Comment puis-je obtenir un devis pour la création ou la refonte de mon site web ?",
      content:
        "Vous pouvez nous contacter via notre formulaire en ligne ou nous appeler directement. Nous vous fournirons un devis personnalisé basé sur vos besoins et objectifs.",
    },
    {
      id: 5,
      title: "Pourquoi devrais-je envisager une refonte de mon site web ?",
      content:
        "Une refonte de site web est souvent nécessaire si votre site est obsolète, peu performant, ou mal adapté aux mobiles. La refonte permet d'améliorer l'esthétique, la vitesse de chargement, l'expérience utilisateur (UX), et le référencement (SEO), augmentant ainsi vos chances de convertir des visiteurs en clients.",
    },
    {
      id: 6,
      title: "Combien coûte la création ou la refonte d'un site web ?",
      content:
        "Le coût dépend de la complexité du projet, des fonctionnalités souhaitées, et de la taille du site. Après une analyse de vos besoins, nous fournissons un devis détaillé et transparent. Nos services sont personnalisés pour correspondre à votre budget tout en garantissant un excellent rapport qualité/prix.",
    },
    {
      id: 7,
      title: "Quels services proposez-vous pour la création de sites web ?",
      content:
        "Nous offrons des services complets de création de sites web, incluant le design personnalisé, le développement responsive, l'intégration de fonctionnalités avancées, et l'optimisation SEO pour améliorer votre visibilité en ligne.",
    },
    {
      id: 8,
      title: "Quelle est la durée moyenne pour créer un site web ?",
      content:
        "Le délai de création varie selon la taille et la complexité du projet. En général, un site web standard peut être développé en 4 à 8 semaines, incluant la phase de conception, de développement, et de tests. Pour les projets plus complexes comme les sites e-commerce, cela peut prendre un peu plus de temps.",
    },
    {
      id: 9,
      title:
        "Quelles technologies utilisez-vous pour le développement de sites web ?",
      content:
        "Le délai de création varie selon la taille et la complexité du projet. En général, un site web standard peut être développé en 4 à 8 semaines, incluant la phase de conception, de développement, et de tests. Pour les projets plus complexes comme les sites e-commerce, cela peut prendre un peu plus de temps.",
    },
  ];

  return (
    <Section>
      <div className="mx-auto tracking-wide">
        {/* Title */}
        <div className="flex items-center">
          <span className="mx-4 text-transparent text-black text-7xl bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text">
            —
          </span>
          <h2 className="text-black flex justify-between text-2xl lg:text-[2rem] font-bold font-kallisto">
            Tout Savoir sur Nos Services de Création, Refonte de Sites Web
          </h2>
        </div>

        {/* Accordion */}
        <div className="grid gap-3 pt-12 text-lg leading-6 text-gray-800 md:gap-8 md:grid-cols-6">
          <div className="col-span-6 space-y-6">
            {faqs.slice(0, 1).map((faq) => (
              <AccordionItem
                key={faq.id}
                idx={faq.id}
                title={faq.title}
                content={faq.content}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                className="justify-between gap-2 md:justify-center"
              />
            ))}
          </div>

          <div className="col-span-6 space-y-3 md:col-span-3">
            {faqs.slice(1, 5).map((faq) => (
              <AccordionItem
                key={faq.id}
                idx={faq.id}
                title={faq.title}
                content={faq.content}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>

          <div className="col-span-6 space-y-3 md:col-span-3">
            {faqs.slice(5).map((faq) => (
              <AccordionItem
                key={faq.id}
                idx={faq.id}
                title={faq.title}
                content={faq.content}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
