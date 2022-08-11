import { Avatar, Stack, Switch } from "@mui/material";
import React from "react";

const ResponsiveAppBar = ({ checked, handleChange }) => {
  return (
    <nav
      className={
        checked
          ? "navbar navbar-expand-md navbar-dark fixed-top rang mont"
          : "navbar navbar-expand-md navbar-light fixed-top bg-light mont"
      }
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          Firuz
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsCurtain"
          aria-controls="navbarsCurtain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarsCurtain"
        >
          <ul className="navbar-nav h5">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#top">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#skills">
                tech-Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveAppBar;
