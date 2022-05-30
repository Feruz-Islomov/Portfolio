import { Avatar, Stack, Switch } from "@mui/material";
import React from "react";

const ResponsiveAppBar = ({ checked, handleChange }) => {
  return (
    <nav
      className={
        checked
          ? "navbar navbar-expand-lg navbar-dark bg-dark"
          : "navbar navbar-expand-lg navbar-light bg-light"
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
