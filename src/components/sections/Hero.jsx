import Section from "./Section";
import video from "../../assets/video.webm";
import svg from "../../assets/td.png";
import ButtonCta from "../ButtonCta";

const Hero = () => {
  return (
    <div className="relative w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        >
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay for better contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-5"></div>
        <div className="absolute z-50 h-20 top-[80%] left-[43%]"><img className="z-50 object-contain w-full h-full" src={svg} alt="" /></div>
      <Section>
        <div>
          <div className="container z-10 grid grid-cols-4 pb-12 sm:grid-cols-8 lg:grid-cols-12 gap-x-4 gap-y-10 place-self-end lg:py-12">
            <div className="flex flex-col col-span-4 col-start-1 xl:col-span-6 gap-y-10 sm:col-span-6 md:col-span-5">
              <h1 className="text-white tracking-tight text-[2.5rem] font-bold lg:text-5xl xl:text-[3.5rem] font-kallisto leading-[3.5rem]">
                Lancez votre succès en ligne avec un site web.
              </h1>
              <p className="text-lg font-semibold text-gray-50 font-nunito-sans lg:text-xl">
                Créez ou optimisez votre site web pour attirer plus de clients et
                booster vos résultats.
              </p>
            </div>
          </div>
          <div className="container z-10 flex flex-col justify-end sm:flex-row gap-y-8 gap-x-4">
            <div className="flex flex-col items-center justify-end basis-1/2 md:flex-row gap-x-4 gap-y-4">
              <ButtonCta link={"/Tarification"}>
                Choisissez Votre Plan
              </ButtonCta>
              <p className="text-sm leading-5 tracking-tight text-center text-gray-50 md:w-52 sm:text-left font-nunito-sans">
                20% de réduction sur votre premier site web sur mesure !
              </p>
            </div>
          </div>
          
        </div>
      </Section>
    </div>
  );
};

export default Hero;
