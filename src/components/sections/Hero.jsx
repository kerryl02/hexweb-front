import Section from "./Section";

const Hero = () => {
  return (
    <Section>
      <div>
        <div className="container z-30 grid grid-cols-4 py-12 sm:grid-cols-8 lg:grid-cols-12 gap-x-4 gap-y-10 place-self-end lg:py-12">
          <div className="flex flex-col col-span-4 col-start-1 xl:col-span-6 gap-y-10 sm:col-span-6 md:col-span-5">
            <h1 className="text-black tracking-tight text-[2.5rem] font-bold lg:text-5xl xl:text-[3.5rem] font-kallisto leading-[3.5rem]">
              Lancez votre succès en ligne avec un site web qui booste votre visibilité.
            </h1>
            <p className="text-lg font-semibold lg:text-xl">
              Créez ou optimisez votre site web pour attirer plus de clients et booster vos résultats.
            </p>
          </div>
        </div>
        <div className="container flex flex-col justify-end sm:flex-row gap-y-8 gap-x-4">
          <div className="flex flex-col items-center justify-end basis-1/2 md:flex-row gap-x-4 gap-y-4">
            <a href="" className=" relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium hover:text-gray-900 rounded-full group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="font-bold text-lg relative px-5 py-2.5 transition-all ease-in duration-75 group-hover:bg-white dark:bg-gray-900 rounded-full bg-opacity-0">
               Choisissez Votre Plan
              </span>
            </a>
            <p className="text-sm leading-5 tracking-tight text-center text-black md:w-52 sm:text-left">20% de réduction sur votre premier site web sur mesure !</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
