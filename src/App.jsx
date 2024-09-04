import Navbar from "@navbar/Navbar"
import Hero from "@sections/Hero"
import References from "@sections/References"
import BlockR from "@sections/BlockR"
import BlockL from "@sections/BlockL"
import Blog from "@sections/Blog"
import Cta from "@sections/Cta"
import Footer from "@components/Footer"
import { projects } from "@constants";
import SliderProject from "./components/sections/SliderProject"
import Faq from "./components/sections/Faq"


function App() {

  return (
    <>
      <Navbar />
      <Hero products={projects} />
      <References />
      <SliderProject />
      <BlockR />
      <BlockL />
      <Blog />
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}

export default App
