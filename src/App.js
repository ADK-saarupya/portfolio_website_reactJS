
import "./App.css"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Qualifications from "./components/Qualifications/Qualifications";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import "./components/Header/header.css"
import "./components/Home/home.css"
import "./components/About/about.css"
import "./components/Qualifications/qualifications.css"
import "./components/Services/services.css"
import "./components/Contact/contact.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/qualification" element={<Qualifications />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
