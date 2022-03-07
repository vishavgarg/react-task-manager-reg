import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            vLogin
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              

              {!props.loggedIn ? (
                <>
                <li className="nav-item">
                <Link
                  className={`nav-link ${
                    props.active === "home" ? "active" : ""
                  }`}
                  id="home"
                  onClick={(e) => props.click(e.target.id)}
                  aria-current="page"
                  to="/"
                >
                  Register
                </Link>
              </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      props.active === "login" ? "active" : ""
                    }`}
                    to="/Login"
                    id="login"
                    onClick={(e) => props.click(e.target.id)}
                  >
                    Login
                  </Link>
                </li>
                </>
              ) : (
                <>
                <li className="nav-item">
                <Link
                  className={`nav-link ${
                    props.active === "dashboard" ? "active" : ""
                  }`}
                  to="/Dashboard"
                  id="dashboard"
                  onClick={(e) => props.click(e.target.id)}
                >
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    props.active === "account" ? "active" : ""
                  }`}
                  to="/Account"
                  id="account"
                  onClick={(e) => props.click(e.target.id)}
                >
                  My Account
                </Link>
              </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Login"
                    onClick={() => props.loggedInFunc(false)}
                  >
                    Logout
                  </Link>
                </li>
                </>

              )}

              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
