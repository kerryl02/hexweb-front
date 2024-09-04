// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import Section from './Section';

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ idx, title, content, activeTab, setActiveTab }) => {
  const contentRef = useRef(null);

  // Handler for toggling the accordion
  const handleClick = () => {
    setActiveTab(activeTab === idx ? 0 : idx);
  };

  return (
    <div className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl">
      <div onClick={handleClick} className="w-full p-4 text-left cursor-pointer">
        <div className="flex items-center justify-between">
          <span className="tracking-wide">{title}</span>
          <span
            className={`transition-transform duration-500 transform fill-current ${
              activeTab === idx ? '-rotate-180' : ''
            }`}
          >
            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </div>
      </div>
      <div
        style={
          activeTab === idx
            ? { maxHeight: contentRef.current?.scrollHeight + 'px' }
            : { maxHeight: '0px' }
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
    { id: 1, title: 'What is x-data?', content: 'Declare a new Alpine component and its data for a block of HTML' },
    { id: 2, title: 'What is x-bind?', content: 'Dynamically set HTML attributes on an element.' },
    { id: 3, title: 'What is $store?', content: 'Access a global store registered using Alpine.store(...)' },
    { id: 4, title: 'What is x-on?', content: 'Listen for browser events on an element' },
  ];

  return (
    <Section>

        <div className="mx-auto tracking-wide">
        {/* Title */}
        <div className="flex justify-center text-2xl lg:text-[2rem] font-bold font-kallisto">Frequently Asked Questions</div>

        {/* Accordion */}
        <div className="grid gap-3 pt-12 text-lg leading-6 text-gray-800 md:gap-8 md:grid-cols-2">
            <div className="space-y-3">
            {faqs.slice(0, 2).map((faq) => (
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

            <div className="space-y-3">
            {faqs.slice(2).map((faq) => (
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
