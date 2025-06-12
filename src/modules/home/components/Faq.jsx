/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* TODO: bien géré le .slice.map psk c'est de la merde */
import React, { useState, useRef } from "react";
import Section from "@layout/Section";
import { faqs } from "@constants";

const AccordionItem = ({
  idx,
  title,
  content,
  activeTab,
  setActiveTab,
  className,
}) => {
  const contentRef = useRef(null);
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
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section>
      <div className="mx-auto tracking-wide">
        <div className="flex items-center">
          <span className="mx-4 text-transparent text-black text-7xl bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text">
            —
          </span>
          <h2 className="text-black flex justify-between text-2xl lg:text-[2rem] font-bold font-kallisto">
            Tout Savoir sur Nos Services de Création, Refonte de Sites Web
          </h2>
        </div>

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
