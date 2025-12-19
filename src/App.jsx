import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from './pages/About.jsx'
import Research from './pages/Research.jsx'
import Secrets from './pages/Secrets.jsx'
import Projects from "./pages/Projects.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div>
      <div className="header-bar">
        <header className="header-title">
          <Link to="/">Emily Ho</Link>
        </header>
       <nav className="header-nav">
        <Link to="/Research">Research</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/About" element={<About />}>About Me</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      </div>

      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}
