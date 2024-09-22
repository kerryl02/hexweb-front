/**TODO: Fix les bug des responsive et revoir le design */

import Section from "./Section";
import teamImg from "@assets/team.jpg";
import ButtonCta from "@components/ButtonCta";

const BlockR = () => {
  return (
    <Section>
      <div className="pb-8">
        <div className="flex items-center">
          <span className="mx-4 text-transparent text-black text-7xl bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text">—</span>
          <h2 className="text-black text-2xl lg:text-[2rem] font-bold font-kallisto">
            Création & Refonte de Sites Web – Performances Digitales Garanties
          </h2>
        </div>
        <p className="pt-12 text-xl font-medium font-kallisto">
          Conception Web | Refonte de Sites | Optimisation SEO | Stratégie
          Digitale
        </p>
      </div>
      <div className="flex justify-between">
        <div className="w-full">
          <div className="flex flex-col justify-between h-full">
            <p className="text-xl font-nunito-sans">
              <strong>Améliorez votre visibilité en ligne</strong> avec nos
              services de création et refonte de sites web. Nous proposons :
            </p>
            <ul className="text-xl list-disc list-inside font-nunito-sans">
              <li>Conception web moderne</li>
              <li>Optimisation SEO pour un meilleur classement sur Google</li>
              <li>Sites web performants pour augmenter vos conversions</li>
            </ul>
            <p className="mt-4 text-xl font-nunito-sans">
              Contactez-nous pour transformer votre site en un{" "}
              <strong>levier de croissance !</strong>
            </p>

            <p className="mt-4 text-xl font-nunito-sans">
              <strong>Agence web en France</strong>, nous accompagnons PME,
              startups et e-commerces dans leurs projets digitaux. Que vous
              cherchiez une<strong> création sur-mesure </strong>
              ou une <strong>refonte optimisée</strong>, nous développons des
              solutions adaptées à vos besoins spécifiques.
            </p>

            <p className="mt-4 text-xl font-nunito-sans">
              <strong>Experts en SEO, UX/UI et design responsive</strong>, nous
              créons des sites web modernes, performants et évolutifs. Grâce aux
              meilleures pratiques en webmarketing, nous vous aidons à
              <strong> attirer, engager et convertir</strong> vos visiteurs en
              clients.
            </p>

            <p className="mt-4 text-xl font-nunito-sans">
              Découvrez comment <strong>Hexweb</strong> peut accélérer votre
              croissance digitale avec des solutions sur mesure adaptées à vos
              objectifs.
            </p>

            <div className="flex gap-4 pt-4">
              <ButtonCta
                className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 text-black hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-opacity-20 dark:focus:ring-cyan-800"
                classNameB="font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#f5f5f5] dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0 font-nunito-sans"
              >
                Prendre un rendez-vous
              </ButtonCta>
              <ButtonCta
                className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 focus:ring-opacity-20 dark:focus:ring-cyan-800"
                classNameB="font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0 font-nunito-sans"
              >
                Nous contacter
              </ButtonCta>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[300px]">
          <img className="object-cover w-full h-full" src={teamImg} alt="" />
        </div>
      </div>
    </Section>
  );
};

export default BlockR;
