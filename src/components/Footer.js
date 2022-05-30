import { Avatar, Stack } from "@mui/material";
import React from "react";

const Footer = ({ checked }) => {
  return (
    <div className={checked ? "footer" : "footer light"}>
      <div className="container h-100">
        <div className="row  h-75">
          <div className="col-sm-5  m-auto">
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="./avatar.png"
                sx={{ width: 56, height: 56 }}
              />
              <h1 className="text-white mt-1">Feruz Islomov</h1>
            </Stack>
            <p className="text-muted mt-3">
              4517 Ave. Manchester, Kentucky 39495, Los Angeles, California, USA
            </p>
          </div>
          <div className="col-sm-7 h-100">
            <div className="text-muted h-100 footerContent">
              <div className="">
                <p>Home</p>
                <p>About</p>
                <p>Resume</p>
                <p>Article</p>
              </div>
              <div className="">
                <p>Service</p>
                <p>Projects</p>
                <p>Pricing Plan</p>
                <p>Contact</p>
              </div>
              <div className="">
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Telegram</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-white" />
        <div className="row text-center text-muted">
          <p>
            All content © 2006-Current Jamel Eusebio and respective copyright
            holders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
