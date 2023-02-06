
import "./App.css"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import "./components/Header/header.css"
import "./components/Home/home.css"
import "./components/About/about.css"
import "./components/Services/services.css"
import "./components/Contact/contact.css"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Header />
      <Routes>


        <Route path="/*" />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>


    </div>
  );
}

export default App;
