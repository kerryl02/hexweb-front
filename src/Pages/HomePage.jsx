import Navbar from "@navbar/Navbar";
import Hero from "@sections/Hero";
import Benefits from "@sections/Benefits";
import BlockR from "@sections/BlockR";
/*import Blog from "@sections/Blog";*/
import Footer from "@components/Footer";
import { projects } from "@constants";
import SliderProject from "@sections/SliderProject";
import Faq from "@sections/Faq";
import Services from "@sections/Services";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Hexweb | Boostez Votre Entreprise avec un Site Web
        </title>

        <meta
          name="description"
          content="Envie de booster votre business avec un site web sur mesure ? Découvrez comment Hexweb aide les entrepreneurs à se démarquer en ligne. Offrez-vous des solutions web innovantes et performantes, adaptées à vos besoins. Cliquez pour en savoir plus !"
        />

        <meta
          name="keywords"
          content="création site web, agence web, sites sur mesure, Chanteloup-les-Vignes, entrepreneurs, entreprises, développement web, solutions digitales"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Hexweb | Boostez Votre Entreprise avec un Site Web"
        />
        <meta
          property="og:description"
          content="Vous cherchez à faire évoluer votre entreprise ? Hexweb crée des sites web modernes et sur mesure pour booster votre présence en ligne. Cliquez pour découvrir nos solutions adaptées à vos besoins !"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hexweb.com" />
        <meta
          property="og:image"
          content="https://www.hexweb.com/images/og-image.jpg"
        />
        <meta property="og:locale" content="fr_FR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Développez Votre Entreprise avec un Site Web Performant | Services sur Mesure"
        />
        <meta
          name="twitter:description"
          content="Donnez un coup d'accélérateur à votre business avec un site web performant. Découvrez comment Hexweb aide les entrepreneurs à réussir en ligne. Cliquez ici pour plus d'infos !"
        />
        <meta
          name="twitter:image"
          content="https://www.hexweb.com/images/twitter-card.jpg"
        />
        <meta name="twitter:site" content="@Hexweb" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hexweb",
              "description": "Agence web spécialisée dans la création de sites sur mesure pour entrepreneurs et entreprises cherchant à booster leur présence en ligne.",
              "url": "https://www.hexweb.com",
              "logo": "https://www.hexweb.com/images/logo.png",
              "image": "https://www.hexweb.com/images/og-image.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33 1 23 45 67 89",
                "contactType": "Customer Service",
                "areaServed": "FR",
                "availableLanguage": "fr"
              },
              "sameAs": [
                "https://www.facebook.com/hexweb",
                "https://twitter.com/hexweb",
                "https://www.linkedin.com/company/hexweb"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": "France"
              }
            }
          `}
        </script>

      </Helmet>

      <header>
        <Navbar />
      </header>
      <main>
        <Hero products={projects} />
        <Benefits />
        <BlockR />
        <SliderProject />
        <Services />
        {/*<Blog />*/}
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
