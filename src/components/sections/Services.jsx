import Section from "./Section";

const Services = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Image de fond avec opacité */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/font.webp')] bg-cover bg-bottom opacity-10"
        style={{
          borderRadius: "80% 20% 80% 20% / 0% 100% 0% 100%",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 opacity-20"
        style={{
          borderRadius: "80% 20% 80% 20% / 0% 100% 0% 100%",
        }}
      ></div>

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
              <div className="flex flex-col col-span-3 p-4 rounded-none shadow-2xl bg-[#f5f5f5] sm:col-span-2 md:rounded-2xl md:p-8">
                <div className="flex justify-center">
                  <div className="w-28 lg:w-36">
                    <img src="" alt="" />
                  </div>
                </div>
                <h3>Titre 1</h3>
                <p className="pt-6 text-lg text-center font-nunito-sans">
                  Attirez un afflux de visiteurs qualifiés grâce à une
                  optimisation ciblée de votre site.
                </p>
              </div>
              <div className="flex flex-col col-span-3 p-4 bg-[#f5f5f5] rounded-none shadow-2xl sm:col-span-2 md:rounded-2xl md:p-8">
                <div className="flex justify-center">
                  <div className="w-28 lg:w-36 ">
                    <img src="" alt="" />
                  </div>
                </div>
                <h3>Titre 1</h3>
                <p className="pt-6 text-lg text-center font-nunito-sans">
                  Convertissez les visiteurs en clients loyaux avec un design
                  axé sur la performance.
                </p>
              </div>
              <div className="h-full flex flex-col col-span-3 p-4 bg-[#f5f5f5] rounded-none shadow-2xl sm:col-span-2 md:rounded-2xl md:p-8">
                <div className="flex justify-center">
                  <div className="w-28 lg:w-36">
                    <img src="" alt="" />
                  </div>
                </div>
                <h3>Titre 1</h3>
                <p className="pt-6 text-lg text-center font-nunito-sans">
                  Maximisez vos profits avec des résultats mesurables et
                  exceptionnels.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Services;
