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
          <p className="text-center">description courte sdfqhfjisfhqkfhjqsk fqhk fqsjhqkjsf hkfj qhfjkssfqjkh fqsjkh fqs</p>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-12 sm:grid-cols-6">
          {/* Card des bénéfit*/}
          <div className="flex flex-col col-span-3 p-4 rounded-none shadow-2xl bg-[#f5f5f5] sm:col-span-2 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="w-28 lg:w-36">
                <img src={benefit1} alt="" />
              </div>
            </div>
            <h3>titre 1 sqddqdqdsqdqq </h3>
            <p className="pt-6 text-lg text-center font-nunito-sans">
              Attirez un afflux de visiteurs qualifiés grâce à une optimisation
              ciblée de votre site.
            </p>
          </div>
          <div className="flex flex-col col-span-3 p-4 bg-[#f5f5f5] rounded-none shadow-2xl sm:col-span-2 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="w-28 lg:w-36 ">
                <img src={benefit2} alt="" />
              </div>
            </div>
            <h3>titre 1 sqddqdqdsqdqq </h3>
            <p className="pt-6 text-lg text-center font-nunito-sans">
              Convertissez les visiteurs en clients loyaux avec un design axé
              sur la performance.
            </p>
          </div>
          <div className="flex flex-col col-span-3 p-4 bg-[#f5f5f5] rounded-none shadow-2xl sm:col-span-2 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="w-28 lg:w-36">
                <img src={benefit3} alt="" />
              </div>
            </div>
            <h3>titre 1 sqddqdqdsqdqq </h3>
            <p className="pt-6 text-lg text-center font-nunito-sans">
              Maximisez vos profits avec des résultats mesurables et
              exceptionnels.
            </p>
          </div>
        </div>
      </div>
    </Section>
    </div>
  );
};

export default Benefits;
