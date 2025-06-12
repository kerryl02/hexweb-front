import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@modules/home/HomePage';
import Services from '@modules/services/Services';
import Tarification from '@modules/tarification/Tarification';
import Références from '@modules/references/Références';
import Contact from '@modules/contact/Contact';
import BlogPage from '@modules/blog/BlogPage';
import CreationSiteWeb from '@modules/services/PagesServices/1/CreationSiteWeb';
import RefonteSiteWeb from '@modules/services/PagesServices/4/RefonteSiteWeb';
import OptimisationSEO from '@modules/services/PagesServices/3/OptimisationSEO';
import MaintenanceSecurite from '@modules/services/PagesServices/2/MaintenanceSecurite';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/creation-site-web" element={<CreationSiteWeb />} />
        <Route path="/services/refonte-site-web" element={<RefonteSiteWeb />} />
        <Route path="/services/optimisation-seo" element={<OptimisationSEO />} />
        <Route path="/services/maintenance-securite" element={<MaintenanceSecurite />} />
        <Route path="/tarification" element={<Tarification />} />
        <Route path="/références" element={<Références />} />
        <Route path="/web-business" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
