import Section from "./Section"
import Button from "@components/Button"


const Hero = () => {
  return (
    <Section className="flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-w-[1440px]">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:max-w-[1440px] pt-28">
          <p>test les gars</p>
            <h1> 
              <span>c&#39;est les slogan de zinzin</span> 
              <br />
              <span>pour convertir un max</span>
            </h1>
          <p></p>
          <Button variant="primary" size="">Test Button</Button> 
        </div>
    </Section>
  )
}

export default Hero