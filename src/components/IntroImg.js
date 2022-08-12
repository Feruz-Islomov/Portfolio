import { Button, Container } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const IntroImg = ({ checked }) => {
  return (
    <div id="top" className={checked ? "introBox" : " introBox introlight"}>
      <Container className="introBox2">
        <div className={checked ? "intro" : " intro introbg"}>
          <img className="avatar" src="./man2.png" height="400px" alt="img" />
          <div className="introLeft">
            <h1 style={{ fontWeight: "bold" }}>
              Hey, I’m Feruz <br /> Full-Stack Developer.
            </h1>
            <br />
            <h5>
              Full Stack Frontend and Backend Developer. I specialize in{" "}
              <b>MERN, Next.js</b> tech along with solid knowledge of{" "}
              <b>Data-Structure and Algorithm</b>. I create Responsive and
              Real-time web apps.
            </h5>
            <br />
            <Button
              className="viewPrBtn"
              variant="contained"
              color="success"
              endIcon={<ArrowForwardIcon />}
            >
              <a href="#projects" className="text-decoration-none text-white">
                View Projects
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IntroImg;
