import { Avatar, Stack, Switch } from "@mui/material";
import React from "react";

const ResponsiveAppBar = ({ checked, handleChange }) => {
  return (
    <nav
      className={
        checked
          ? "navbar navbar-expand-lg navbar-dark fixed-top rang mont"
          : "navbar navbar-expand-lg navbar-light fixed-top bg-light mont"
      }
    >
      <div className="container-fluid">
        <Stack className="navbar-nav" direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="./avatar.png"
            sx={{ width: 55, height: 55 }}
          />
          <h3 className="nav-item nav-link active">Feruz</h3>
        </Stack>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav h5 me-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="...">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="...">
                Contact
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="www.google.com"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Link
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <a className="dropdown-item" href="...">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="...">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="...">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="...">
                dark mode
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveAppBar;
