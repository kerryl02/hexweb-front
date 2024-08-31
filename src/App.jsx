import Navbar from "@navbar/Navbar"
import Hero from "@sections/Hero"
import References from "@sections/References"
import BlockR from "@sections/BlockR"
import BlockL from "@sections/BlockL"
import Blog from "@sections/Blog"
import Cta from "@sections/Cta"
import Footer from "@components/Footer"
import { projects } from "@constants";


function App() {

  return (
    <>
      <Navbar />
      <Hero products={projects} />
      <References />
      <BlockR />
      <BlockL />
      <Blog />
      <Cta />
      <Footer />
    </>
  )
}

export default App
