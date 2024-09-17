import Navbar from "@navbar/Navbar";
import Hero from "@sections/Hero";
import Benefits from "@sections/Benefits";
import BlockR from "@sections/BlockR";
/*import Blog from "@sections/Blog";*/
import Form from "@sections/Form";
import Footer from "@components/Footer";
import { projects } from "@constants";
import SliderProject from "@sections/SliderProject";
import Faq from "@sections/Faq";
import Services from "@sections/Services";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero products={projects} />
      <Benefits />
      <BlockR />
      <SliderProject />
      <Services />
      {/*<Blog />*/}
      <Faq />
      <Form />
      <Footer />
    </>
  );
}

export default HomePage;
