/* eslint-disable react/no-unescaped-entities */
import { benefit1, benefit2, font1, font2, font3 } from "../../assets/image";
import Section from "@layout/Section";

export const Benefits = () => {
  return (
    <Section>
      <div>
        <div className="flex flex-col justify-center">
          <h2 className="text-black text-2xl lg:text-[2rem] font-bold font-kallisto text-center">
           Nos Services Web Pour Accélérer Votre Croissance !
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-4 pt-12 sm:grid-cols-6 lg:grid-cols-5">
          {/* Card des bénéfit*/}
          <div className="flex flex-col col-span-4 p-4 rounded-none bg-[#f5f5f5] sm:col-span-2 lg:col-span-1 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="flex justify-center w-28 lg:w-36">
                <img src={benefit1} alt="" />
              </div>
            </div>
            <h3 className="mt-2 text-xl font-bold text-center lg:text-2xl">Sites Sur-Mesure</h3>
          </div>
          <div className="flex flex-col col-span-2 p-4 bg-[#f5f5f5] rounded-none sm:col-span-2 lg:col-span-1 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="w-28 lg:w-36">
                <img src={benefit2} className="bg-no-repeat bg-center bg-cover" alt="" />
              </div>
            </div>
            <h3 className="mt-2 text-xl font-bold text-center lg:text-2xl" >Rénovation Web</h3>
          </div>
          <div className="flex flex-col col-span-2 p-4 bg-[#f5f5f5] rounded-none  sm:col-span-2 lg:col-span-1 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="w-28 lg:w-36">
                <img src={font2} alt="" />
              </div>
            </div>
            <h3 className="mt-2 text-xl font-bold text-center lg:text-2xl">SEO Optimisé</h3>
          </div>
          <div className="flex flex-col col-span-2 p-4 rounded-none  bg-[#f5f5f5] sm:col-span-3 lg:col-span-1 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="flex justify-center w-28 lg:w-36">
                <img src={font3} alt="" />
              </div>
            </div>
            <h3 className="mt-2 text-xl font-bold text-center lg:text-2xl">Maintenance</h3>
          </div>
          <div className="flex flex-col col-span-2 p-4 rounded-none bg-[#f5f5f5] sm:col-span-3 lg:col-span-1 md:rounded-2xl md:p-8">
            <div className="flex justify-center">
              <div className="flex justify-center w-28 lg:w-36">
                <img src={font1} alt="" />
              </div>
            </div>
            <h3 className="mt-2 text-xl font-bold text-center lg:text-2xl">Sécurité Web</h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
