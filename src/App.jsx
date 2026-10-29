import "./App.css";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import About from './pages/About.jsx'
import Research from './pages/Research.jsx'
import Secrets from './pages/Secrets.jsx'
import Projects from "./pages/Projects.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="header-bar">
        <header className="header-title">
          <Link to="/">Emily Ho</Link>
        </header>
       <nav className="header-nav">
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
        <div
          className={`header-nav-links${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          <Link to="/Research" onClick={() => setMenuOpen(false)}>Research</Link>
          <Link to="/Projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>About Me</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </nav>
      </div>

      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
