import Section from "./Section"
import teamImg from "@assets/team.jpg"

const BlockL = () => {
  return (
    <Section>
          <div className="pb-8">
            <h2 className=" pb-4 text-black text-2xl lg:text-[2rem] font-bold font-kallisto">Création & Refonte de Sites Web – Performances Digitales Garanties</h2>
            <p className="text-xl font-medium font-kallisto">Conception Web | Refonte de Sites | Optimisation SEO | Stratégie Digitale</p>
          </div>
      <div className="flex justify-between">
        <div className="w-1/3 h-[300px]">
          <img className="object-cover w-full h-full" src={teamImg} alt="" />
        </div>
        <div className="w-7/12">
          <div >
            <p className="text-lg font-nunito-sans">
              Transformez votre présence en ligne avec notre expertise en création et refonte de sites web.
              Nous vous accompagnons à chaque étape : de la conception stratégique à la mise en ligne, 
              en passant par l’optimisation SEO et la refonte complète de votre site existant. 
              Chaque projet est pensé pour maximiser vos conversions et améliorer votre visibilité.
            </p><br />
            <p className="text-lg font-nunito-sans">
              Basée en France, notre agence collabore avec des entreprises 
              (PME, startups, commerces en ligne, etc.) pour les aider à concrétiser leurs ambitions digitales. 
              Que vous soyez à la recherche d’une création sur-mesure ou d’une refonte optimisée, 
              nous développons des solutions web adaptées à vos besoins spécifiques.
            </p><br />
            <p className="text-lg font-nunito-sans">
              Forts de notre expertise en référencement naturel (SEO), expérience utilisateur (UX/UI) et design responsive, 
              nous créons des sites web modernes, performants et évolutifs. 
              Nous intégrons également les meilleures pratiques en webmarketing pour vous permettre d’attirer, 
              engager et convertir vos visiteurs en clients.
            </p><br />
            <p className="text-lg font-nunito-sans">Découvrez comment <strong>Hexweb</strong> peut propulser votre croissance digitale avec des solutions performantes et adaptées à vos objectifs.</p>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default BlockL