import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Services from './Pages/Services';
import Tarification from './Pages/Tarification';
import Références from './Pages/Références';
import Contact from './Pages/Contact';
import CityPage from './Pages/CityPage';
import BlogPage from './Pages/BlogPage';
import CreationSiteWeb from './Pages/services/CreationSiteWeb';
import RefonteSiteWeb from './Pages/services/RefonteSiteWeb';
import OptimisationSEO from './Pages/services/OptimisationSEO';
import MaintenanceSecurite from './Pages/services/MaintenanceSecurite';


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
        <Route path="/conception-web/:city" element={<CityPage />} />
      </Routes>
    </Router>
  )
}

export default App
