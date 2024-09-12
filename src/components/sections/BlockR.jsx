import Section from "./Section";
import teamImg from "@assets/team.jpg";
import ButtonCta from "@components/ButtonCta";

const BlockR = () => {
  return (
    <Section>
      <div className="pb-8">
        <h2 className=" pb-4 text-black text-2xl lg:text-[2rem] font-bold font-kallisto">
          Création & Refonte de Sites Web – Performances Digitales Garanties
        </h2>
        <p className="text-xl font-medium font-kallisto">
          Conception Web | Refonte de Sites | Optimisation SEO | Stratégie
          Digitale
        </p>
      </div>
      <div className="flex justify-between">
        <div className="w-full">
          <div>
            <p className="text-lg font-nunito-sans">
              <strong>
                Améliorez votre visibilité en ligne avec nos services de
                création et refonte de sites web.
              </strong>
              De la conception à l’optimisation SEO, nous créons des sites
              performants conçus pour augmenter vos conversions et vous
              positionner en tête sur Google. Contactez-nous pour transformer
              votre site en un levier de croissance !
            </p>
            <br />
            <p className="text-lg font-nunito-sans">
              <strong>
                Agence web en France, nous accompagnons PME, startups et
                e-commerces
              </strong>{" "}
              dans leurs projets digitaux. Que vous souhaitiez une
              <strong>création sur-mesure</strong> ou une{" "}
              <stron>refonte optimisée,</stron> nous développons des solutions
              web adaptées à vos besoins spécifiques.
            </p>
            <br />
            <p className="text-lg font-nunito-sans">
              <strong>Experts en SEO, UX/UI et design responsive,</strong> nous
              créons des sites web modernes, performants et évolutifs. Grâce aux
              meilleures pratiques en webmarketing, nous vous aidons à{" "}
              <strong>attirer, engager et convertir</strong> vos visiteurs en
              clients.
            </p>
            <br />
            <p className="text-lg font-nunito-sans">
              Découvrez comment <strong>Hexweb</strong> peut accélérer votre
              croissance digitale avec des solutions performantes et sur mesure
              adaptées à vos objectifs.
            </p>
          </div>
          <div className="pt-4">
            <ButtonCta link="#Contact">Payer 1m</ButtonCta>
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
