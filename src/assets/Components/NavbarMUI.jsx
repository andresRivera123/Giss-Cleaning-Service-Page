import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import logo from "../Images/Giss-Logo.png";
import menuLogo from "../Images/Icons/menu.svg";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const backgroundColor = "var(--color-gray)";

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{ height: "12vh", width: "100%", bgcolor: backgroundColor }}
        >
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
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}