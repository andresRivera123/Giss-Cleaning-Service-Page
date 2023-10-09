import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="Navbar">
      <nav className="nav container">
        <div className="nav__logo">
          <img
            src="./images/Giss-Logo.png"
            alt="Logo page"
            className="nav__img"
          />
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/About-Us" className="nav__">
              About Us
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/Services" className="nav__">
              Services
            </Link>
          </li>
        </ul>
        <button>Quote</button>
      </nav>
    </header>
  );
}

export default Navbar;
