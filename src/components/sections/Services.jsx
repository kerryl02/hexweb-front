/* eslint-disable react/no-unescaped-entities */
/* TODO: Exporter la list de service dans /constant*/
import Section from "./Section";
import ButtonCta from "../ButtonCta";

const Services = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Contenu principal */}
      <div className="relative z-10">
        <Section>
          <div>
            <div className="flex items-center">
              <span className="mx-4 text-transparent text-black text-7xl bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text">
                —
              </span>
              <h2 className="text-black text-2xl lg:text-[2rem] font-bold font-kallisto">
                Nos Services sur Mesure pour Votre Succès
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-12 sm:grid-cols-6">
              {/* Card des bénéfit*/}
              <div className="border border-solid border-gray-200 flex flex-col justify-between col-span-3 p-4 rounded-none bg-[#f5f5f5] sm:col-span-2 md:rounded-2xl md:p-8">
                <div>
                  <div className="flex">
                    <h3 className="px-4 pb-1 font-semibold bg-gray-200 rounded-xl">
                      Pack Start-Up
                    </h3>
                  </div>
                  <p className="pt-6 text-lg text-center font-nunito-sans">
                    Un site web simple et professionnel pour démarrer
                    rapidement. Idéal pour les petites entreprises et
                    entrepreneurs.
                  </p>
                  <div className="pt-12">
                    <p className="text-sm uppercase">
                      à partir de{" "}
                      <span className="px-2 text-4xl font-bold">1500€</span>
                    </p>
                  </div>
                  <div className="my-6 border-b border-gray-300 border-solid"></div>
                </div>
                <div className="flex flex-col items-center gap-4 text-lg font-bold font-nunito-sans sm:items-start">
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Jusqu'à 5
                    pages
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Design
                    responsive
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Optimisation
                    SEO basique
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Formulaire de
                    contact simple
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>
                    fonctionality 1 dsqdqdfshqjfqsjhfkqshfkjhq
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>
                    fonctionality 1 dsqdqdfshqjfqsjhfkqshfkjhq
                  </p>
                </div>

                <div>
                  <div>
                    <div className="my-6 border-b border-gray-300 border-solid"></div>
                  </div>
                  <ButtonCta
                    className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 text-black hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-opacity-20 dark:focus:ring-cyan-800"
                    classNameB="w-full text-center font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#f5f5f5] dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0 font-nunito-sans"
                  >
                    Prendre un rendez-vous
                  </ButtonCta>
                </div>
              </div>

              <div className=" border border-solid border-gray-200 flex flex-col justify-between col-span-3 p-4 bg-[#f5f5f5] rounded-none sm:col-span-2 md:rounded-2xl md:p-8 bg-gradient-to-b from-zinc-200 via-gray-200 to-[#f5f5f5]">
                <div className="flex justify-center">
                  <div className="w-28 lg:w-36 ">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="flex">
                  <h3 className="px-4 pb-1 font-semibold bg-cyan-100 rounded-xl">
                    Pack Business
                  </h3>
                </div>
                <p className="pt-6 text-lg text-center font-nunito-sans">
                  Un site sur-mesure pour les entreprises en croissance, avec
                  des outils marketing et une optimisation avancée.
                </p>
                <div className="pt-12">
                  <p className="text-sm uppercase">
                    à partir de{" "}
                    <span className="px-2 text-4xl font-bold">4000€</span>
                  </p>
                </div>
                <div className="my-6 border-b border-gray-300 border-solid"></div>
                <div className="flex flex-col items-center gap-4 text-lg font-bold font-nunito-sans sm:items-start">
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Jusqu'à 10
                    pages personnalisées
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Design
                    responsive
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Optimisation
                    SEO avancée
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Intégration
                    d'outils marketing (CRM, newsletter)
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Maintenance
                    incluse 6 mois
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>fonctionality
                    1 dsqdqdfshqjfqsjhfkqshfkjhq
                  </p>
                </div>
                <div className="my-6 border-b border-gray-300 border-solid"></div>
                <ButtonCta
                  className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 text-black hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-opacity-20 dark:focus:ring-cyan-800"
                  classNameB="w-full text-center font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#f5f5f5] dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0 font-nunito-sans"
                >
                  Prendre un rendez-vous
                </ButtonCta>
              </div>
              <div className="border border-solid border-gray-200 h-full flex flex-col justify-between col-span-3 p-4 bg-[#f5f5f5] rounded-none sm:col-span-2 md:rounded-2xl md:p-8 bg-gradient-to-b from-cyan-100 via-blue-100 to-[#f5f5f5]">
                <div className="flex justify-center">
                  <div className="w-28 lg:w-36">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="flex">
                  <h3 className="px-4 pb-1 font-semibold bg-white rounded-xl ">
                    Pack Entreprise
                  </h3>
                </div>
                <p className="pt-6 text-lg text-center font-nunito-sans">
                  Une solution complète pour les grandes entreprises, avec
                  plateforme e-commerce, gestion de contenu et suivi de
                  performance.
                </p>
                <div className="pt-12">
                  <p className="text-sm uppercase">
                    à partir de{" "}
                    <span className="px-2 text-4xl font-bold">8000€</span>
                  </p>
                </div>
                <div className="my-6 border-b border-gray-300 border-solid"></div>
                <div className="flex flex-col items-center gap-4 text-lg font-bold font-nunito-sans sm:items-start">
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Site
                    e-commerce ou SaaS complet
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Design
                    responsive
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Intégration de
                    paiements en ligne
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Gestion de
                    contenu personnalisée
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Maintenance 1
                    an
                  </p>
                  <p className="flex items-center gap-1">
                    <ion-icon name="checkmark-outline"></ion-icon>Suivi de
                    performance
                  </p>
                </div>
                <div className="my-6 border-b border-gray-300 border-solid"></div>
                <ButtonCta
                  className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-opacity-20 dark:focus:ring-cyan-800"
                  classNameB="font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0 font-nunito-sans"
                >
                  Nous contacter
                </ButtonCta>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Services;
