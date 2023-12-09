import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import logo from "../Images/Giss-Logo.png";
import menuLogo from "../Images/Icons/menu.svg";
import { ServicesArray } from "../utils/services";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Divider, List, ListItem, SwipeableDrawer } from "@mui/material";
import ModalQuote from "./ModalQuote";

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
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = "left";

  const menuMobile = (anchor) => (
    <Box
      sx={{
        backgroundColor: "#6B797F",
        height: "100%",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 275,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="submenu-mobile">
        <div className="submenu__giss-mobile">
          <div className="logo__container-mobile">
            <img
              src={logo}
              alt="Logo Giss Cleaning Services"
              className="submenu__logo-mobile"
            />
          </div>
          <h2 className="submenu__title-mobile">GISS CLEANING SERVICES</h2>
        </div>
        <div className="submenu__options-mobile">
          <div className="submenu__nav-mobile">
            <Link
              to="/Giss-Cleaning-Service-Page/"
              className="submenu__links-mobile"
            >
              Home
            </Link>
            <Link
              to="/Giss-Cleaning-Service-Page/About-Us"
              className="submenu__links-mobile"
            >
              About Us
            </Link>
            <Link
              to="/Giss-Cleaning-Service-Page/Services"
              className="submenu__links-mobile"
            >
              Services
            </Link>
          </div>
          <div className="submenu__quote-mobile">
            <p className="quote__text-mobile">
              Curious about the cost? Get your free quote now!
            </p>
            <ModalQuote/>
          </div>
        </div>
      </div>
    </Box>
  );

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
              <li
                className="nav__item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/Giss-Cleaning-Service-Page/Services"
                  className="nav__link"
                >
                  Services
                </Link>
                <ArrowDropDownIcon fontSize="large" />
                {isSubMenuOpen && (
                  <div className="submenu">
                    <ul className="submenu__container">
                      {ServicesArray.map((service) => (
                        <Link
                          to="/Giss-Cleaning-Service-Page/Services"
                          className="submenu__link"
                          key={service}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>

            <a href="#contact" className="nav__button">
              Contact
            </a>
            <img
              src={menuLogo}
              alt="Menu"
              className="nav__menu"
              onClick={toggleDrawer(anchor, true)}
            />
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {menuMobile(anchor)}
            </SwipeableDrawer>
          </nav>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
