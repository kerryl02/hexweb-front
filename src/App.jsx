import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Services from './Pages/Services';
import Tarification from './Pages/Tarification';
import Références from './Pages/Références';
import Contact from './Pages/Contact';
import CityPage from './Pages/CityPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Tarification" element={<Tarification />} />
        <Route path="/Références" element={<Références />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/conception-web/:city" element={<CityPage />} />
      </Routes>
    </Router>
  )
}

export default App
