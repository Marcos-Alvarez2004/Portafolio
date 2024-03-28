// FOOTER
import Footer from "./components/Footer";
// NAVBAR
import Navbar from "./components/Navbar";
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES
import Proyectos from "./components/Pages/Proyectos";
import SobreMi from "./components/Pages/SobreMi";
import Contacto from "./components/Pages/Contacto";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* GENERAL */}
          <Route path="/" element={<Proyectos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
