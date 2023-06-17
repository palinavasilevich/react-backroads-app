import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
import { socialLinks } from "../data";
import { useState } from "react";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" onClick={toggleNavbar}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks
          parentClass={`nav-links ${isNavbarOpen ? "show-links" : ""}`}
          itemClass="nav-link"
        />

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <SocialLink key={link.id} link={link} linkClass="nav-icon" />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
