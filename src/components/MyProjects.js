import React from "react";

const MyProjects = ({ checked }) => {
  return (
    <div
      className={checked ? "projectContainer" : "projectContainer bg-secondary"}
    >
      <h1>My Projects</h1>
      <div className="grid image-grid">
        <div className="grid-block">
          <div className="tile">
            <a
              className="tile-link"
              href="https://gallery-upload-single-multiple.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="tile-img tile-img1"
                src="./projects/p8.png"
                alt="img"
              />
            </a>
          </div>
        </div>

        <div className="grid-block">
          <div className="tile">
            <a className="tile-link" href="...">
              {/* <img className="tile-img tile-img2" src="..." alt="img" /> */}
            </a>
          </div>
        </div>

        <div className="grid-block">
          <div className="tile">
            <a
              className="tile-link"
              href="https://menucoffee.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="tile-img tile-img3"
                src="./projects/p2.png"
                alt="img"
              />
            </a>
          </div>
        </div>

        <div className="grid-block">
          <div className="tile">
            <a
              className="tile-link"
              href="https://menupizza.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="tile-img tile-img4"
                src="./projects/p3.png"
                alt="img"
              />
            </a>
          </div>
        </div>

        <div className="grid-block">
          <div className="tile">
            <a className="tile-link" href="...">
              <img
                className="tile-img tile-img5"
                src="./projects/p1.png"
                alt="img"
              />
            </a>
          </div>
        </div>

        <div className="grid-block">
          <div className="tile">
            <a
              className="tile-link"
              href="https://cafetizim.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="tile-img tile-img6"
                src="./projects/p4.png"
                alt="img"
              />
            </a>
          </div>
        </div>

        <div className="grid-block">
          <div className="tile">
            <a
              className="tile-link"
              href="https://cafetizim.herokuapp.com/admin/charts"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="tile-img tile-img7"
                src="./projects/p6.png"
                alt="img"
              />
            </a>
          </div>
        </div>

        <div className="grid-block">
          <div className="tile">
            <a
              className="tile-link"
              href="https://cafetizim.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="tile-img tile-img8"
                src="./projects/p5.png"
                alt="img"
              />
            </a>
          </div>
        </div>

        <div className="grid-block">
          <div className="tile">
            <a className="tile-link" href="...">
              {/* <img className="tile-img tile-img9" src="..." alt="img" /> */}
            </a>
          </div>
        </div>

        <div className="grid-block">
          <div className="tile">
            <a className="tile-link" href="...">
              {/* <img className="tile-img tile-img10" src="..." alt="img" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
