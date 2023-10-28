import { Link } from "react-router-dom";
import logo from "../Images/Giss-Logo.png";
import menuLogo from "../Images/Icons/menu.svg";

function Navbar() {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/Giss-Cleaning-Service-Page/" className="nav__title">
          <img
            src={logo}
            alt="Logo Giss Cleaning Services"
            className="nav__logo"
          />
          <h2 className="nav__title--text">GISS CLEANING SERVICES</h2>
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/Giss-Cleaning-Service-Page/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/Giss-Cleaning-Service-Page/About-Us"
              className="nav__link"
            >
              About Us
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/Giss-Cleaning-Service-Page/Services"
              className="nav__link"
            >
              Services
            </Link>
          </li>
        </ul>

        <a href="#contact" className="nav__button">
            Contact
          </a>
        <img src={menuLogo} alt="Menu" className="nav__menu" />
      </nav>
    </header>
  );
}

export default Navbar;
