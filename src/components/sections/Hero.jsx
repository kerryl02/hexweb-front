import Section from "./Section"
import Button from "@components/Button"


const Hero = () => {
  return (
    <Section className="flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-w-[1440px]">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:max-w-[1440px] pt-28">
          <p className="">test les gars</p>
            <h1 className="mt-10 font-kallisto text-8xl mas-sm:text-[72] max-sm:leanding-[82] font-bold"> 
              <span className="xl:whitespace-nowrap relative z-10 pr-10">
                c&#39;est les slogan pour
                </span> 
              <br />
              <span className="inline-block mt-3"> convertir un max</span>
            </h1>
          <p className="font-nunito-sans text-slate-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
            dazjodaiajdoajziaodajiazjoizadjiajodadiazjdaoijaoijdaiajzodjaazoidzjadojaijadioajzdozaijdoaijdiozajod
          </p>
          <Button variant="primary" size="">Test Button</Button> 
        </div>
    </Section>
  )
}

export default Hero