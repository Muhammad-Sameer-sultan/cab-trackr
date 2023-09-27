import React from "react";
import cabLogo from "../assets/logo.png";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";

const MainHeader = styled.nav`
  .navbar-collapse {
    width: 75%;
    flex-grow: 0;
  }
  .navbar-brand img {
    width: 12rem;
  }
  .navbar-nav a {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 1.5rem;
    color: ${({ theme }) => theme.colors.black};
  }
  .navbar-nav a:hover{
    color: ${({ theme }) => theme.colors.primaryYellow};
  }

  .dropdown button {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.primaryYellow};
    font-size: 1.3rem;
  }
`;

const Navbar = () => {
  return (
    <MainHeader>
      <nav className=" navbar navbar-expand-lg bg-body-tertiary">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={cabLogo} alt="cab" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/home">
                  Home
                </Link>  
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/passanger">
                  Passanger
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div>
              <div className="d-flex">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BiUserCircle /> Sign in
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/signin">
                        Passangr
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Driver
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Owner
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <GrLanguage /> Language
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Urdu
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </MainHeader>
  );
};

// export default MainHeader;
export default Navbar;
