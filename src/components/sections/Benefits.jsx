/* eslint-disable react/no-unescaped-entities */
import Section from "./Section";
import { benefit1, benefit2, benefit3 } from "@assets/image";

export const Benefits = () => {
  return (
    <div className=" bg-gradient-to-br from-cyan-100 to-blue-100">
    <Section>
      <div>
        <div className="flex flex-col justify-center">
          <h2 className="text-black text-2xl lg:text-[2rem] font-bold font-kallisto text-center">
            Découvrez Comment Notre Site Web Peut Transformer Votre Business !
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-12 sm:grid-cols-6">
          {/* Card des bénéfit*/}
          <div className="flex flex-col col-span-3 p-4 rounded-none shadow-2xl bg-[#f5f5f5] sm:col-span-2 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="w-28 lg:w-36">
                <img src={benefit1} alt="" />
              </div>
            </div>
            <h3 className="mt-2 text-xl font-bold text-center lg:text-2xl">Trafic Qualifié</h3>
            <p className="pt-6 text-lg text-center font-nunito-sans">
              <span className="font-semibold">Votre site peine à attirer des visiteurs ?</span> Grâce à notre optimisation ciblée, vous capterez un afflux de visiteurs qualifiés, prêts à interagir avec votre contenu et à s'engager avec votre marque.
            </p>
          </div>
          <div className="flex flex-col col-span-3 p-4 bg-[#f5f5f5] rounded-none shadow-2xl sm:col-span-2 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="w-28 lg:w-36 ">
                <img src={benefit2} alt="" />
              </div>
            </div>
            <h3 className="mt-2 text-xl font-bold text-center lg:text-2xl" >Conversion Optimale</h3>
            <p className="pt-6 text-lg text-center font-nunito-sans">
              <span className="font-semibold">Trop de visiteurs quittent votre site sans agir ?</span> Notre design axé sur la performance est conçu pour captiver vos visiteurs, les guider efficacement et les convertir en clients fidèles.
            </p>
          </div>
          <div className="flex flex-col col-span-3 p-4 bg-[#f5f5f5] rounded-none shadow-2xl sm:col-span-2 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="w-28 lg:w-36">
                <img src={benefit3} alt="" />
              </div>
            </div>
            <h3 className="mt-2 text-xl font-bold text-center lg:text-2xl">Profits Mesurables</h3>
            <p className="pt-6 text-lg text-center font-nunito-sans">
            <span className="font-bold">Vous avez du mal à voir un retour sur investissement ?</span> Maximisez vos profits avec des résultats mesurables et exceptionnels, prouvant l’efficacité de chaque action entreprise sur votre site.
            </p>
          </div>
        </div>
      </div>
    </Section>
    </div>
  );
};

export default Benefits;
