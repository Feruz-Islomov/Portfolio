import { Avatar, Stack } from "@mui/material";
import React from "react";

const Footer = ({ checked }) => {
  return (
    <div id="contact" className={checked ? "footer" : "footer text-dark light"}>
      <div className="container h-100">
        <div className="row">
          <div className="col-sm-5  mt-5">
            {/* m-auto */}
            <Stack direction="row" spacing={3}>
              <Avatar
                alt="Remy Sharp"
                src="./avatar.png"
                sx={{ width: 56, height: 56 }}
              />
              <h1 className={checked ? "text-white mt-1" : "text-dark mt-1"}>
                Feruz Islomov
              </h1>
            </Stack>
            <h5
              className={
                checked ? "text-white mont mt-3" : "text-dark mont mt-3"
              }
            >
              For further information, I invite you to get in touch: <br />{" "}
            </h5>
          </div>
          <div className="col-sm-7  h-100">
            <div
              className={
                checked
                  ? "text-white h-100 footerContent "
                  : "text-dark h-100 footerContent "
              }
            >
              <div className="">
                {/* <p>Home</p>
                <p>About</p>
                <p>Resume</p>
                <p>Article</p> */}
              </div>
              <div className="lsize">
                <i className="fa fa-phone  mt-4"> </i> +996 53 0867492 <br />
                <i className="fa fa-telegram mt-4"></i> +998 93 3488522 <br />
                <i className="fa fa-whatsapp mt-4"></i> +998 93 3488522 <br />
                <a
                  className="cursor-pointer text-decoration-none"
                  href="https://www.linkedin.com/in/feruz-islomov-js-developer/"
                >
                  Linked <i className="fa fa-linkedin mt-4"> </i>
                </a>
              </div>
              <div className="">
                {/* <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Telegram</p> */}
              </div>
            </div>
          </div>
        </div>
        <hr className="text-muted" />
        <div className="row text-center text-muted">
          <p>All content © 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
