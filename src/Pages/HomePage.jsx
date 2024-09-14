import Navbar from "@navbar/Navbar";
import Hero from "@sections/Hero";
import References from "@sections/References";
import BlockR from "@sections/BlockR";
/*import Blog from "@sections/Blog";*/
import Form from "@sections/Form";
import Footer from "@components/Footer";
import { projects } from "@constants";
import SliderProject from "@components/sections/SliderProject";
import Faq from "@components/sections/Faq";
import Services from "@components/sections/Services";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero products={projects} />
      <References />
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
