import { Button, Container } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const IntroImg = ({ checked }) => {
  return (
    <div className={checked ? "introBox" : " introBox introlight"}>
      <Container className="introBox2">
        <div className="intro">
          <img className="avatar" src="./man.png" height="400px" alt="img" />
          <div className="introLeft">
            <h1 style={{ fontWeight: "bold" }}>
              Hey, I’m Feruz <br /> Full-Stack Developer.
            </h1>
            <br />
            <h5>
              Full Stack Frontend Developer and Content Writing Based on LA. I
              specialize in Bug Fixing, Responsive Web Design, and Visual
              Development.
            </h5>
            <br />
            <Button
              className="viewPrBtn"
              variant="contained"
              color="success"
              endIcon={<ArrowForwardIcon />}
            >
              View Projects
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IntroImg;
