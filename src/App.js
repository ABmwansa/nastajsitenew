// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductsAndServices from './pages/ProductsAndServices';
import Projects from './pages/Projects';
import Navbar from './pages/Navbar';
import EngineeringAndSupervision from './pages/EngineeringAndSupervision';
import OurTeam from './pages/OurTeam';

// import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/ProductsAndServices" element={<ProductsAndServices />} />
        <Route path="/EngineeringAndSupervision" element={<EngineeringAndSupervision />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        {/* <Route path="/contact" element={<Contact />} />  */}
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
