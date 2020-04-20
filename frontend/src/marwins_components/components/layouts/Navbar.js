import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavbarContainer className="sticky-top border ">
      <nav className=" navbar-expand-lg navbar-light NavbarColor ">
        <Link className="navbar-brand text-uppercase IhpLogoLink " to="/">
          <a
            href="/"
            className="IhpLogo ScreenReader_AnchorsMustHaveContent-Fix"
            style={{ width: "196px", height: "34px" }}
          >
            Logo
          </a>
        </Link>
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <Link
              className="nav-link text-uppercase ml-5 IhpTextBlack NavbarHover"
              to="/"
            >
              Bewerben <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link text-uppercase ml-5 IhpTextBlack NavbarHover"
              to="/help"
              x
            >
              FAQ
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link text-uppercase ml-5 IhpTextBlack NavbarHover"
              to="/user"
              x
            >
              Bereits Beworben?
            </Link>
          </li>
        </ul>
      </nav>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.header`
  .NavbarColor {
    background-color: #ffffff;
    position: relative;
    align-items: center;
    padding: .5rem 1rem;

    .NavbarHover:hover {
      color: var(--IhpOrange);
    }
    .NavbarHover:active {
      color: var(--IhpOrange);
    }
    .IhpLogo {
      background-image: url("https://www.interhyp-gruppe.de/interhyp-assets/images/logo-corporate.svg?1397466258");
      background-repeat: no-repeat;
      background-size: contain;
      width: 80%
      max-width: 100%;
      float: left;
      margin: auto;
    }

    .IhpLogoLink {
      float: left;
      margin: auto;

      
    }

    .ScreenReader_AnchorsMustHaveContent-Fix {
      text-indent: 100%;
      white-space: nowrap;
      overflow: hidden;
    }

  }
`;
