import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import logo from "../assets/download.jpeg";
import { Link } from "react-router-dom";

// CSS

const logoPic = {
  width: "80px",
  height: "50px",
  borderRadius: "10px",
};

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <div className="navMain container-fluid">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <span>
              <img src={logo} alt="logo" style={logoPic} />
            </span>
            Branded Tile
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#About">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="N"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="N">
                      Marbles
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="N">
                      Tiles
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="N">
                      Sanitaryware
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="N">
                      Fittings
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <Link to="/cart">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                >
                  <i className="bi bi-cart3"></i>

                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount} {/* Show cart count */}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </Link>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
