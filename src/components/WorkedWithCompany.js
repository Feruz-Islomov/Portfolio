import React from "react";

const WorkedWithCompany = ({ checked }) => {
  return (
    <div
      id="projects"
      className={
        checked ? "workedWithCompany" : "workedWithCompany bg-light text-dark"
      }
    >
      <div className="container  h-100 ">
        <div className="row  h-100 position-relative">
          <div className="col-sm-5 m-auto">
            <div>
              <h1>I work with over 279+ happy clients all over the world.</h1>
              <p>
                Suspendisse eget ultricies felis, in lacinia lectus. Morbi
                accumsan dapibus tortor, in fermentum odio malesuada in aliquam
                sed ipsum tristique.
              </p>
            </div>
          </div>
          <div className="col-sm-7 m-auto h-50 ">
            <div className="row">
              <div className="col-4 mb-5">
                <div className="card mb-4  bg-warning h-75 ">
                  <img
                    src=".\companies\amazon.png"
                    className="card-img m-auto"
                    alt="img"
                  />
                </div>
                <div className="card h-75">
                  <img
                    className="card-img m-auto"
                    src=".\companies\dribbble.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-4 mt-5">
                <div className="card mb-4  h-75">
                  <img
                    className="card-img m-auto"
                    src=".\companies\google.png"
                    alt="img"
                  />
                </div>
                <div className="card h-75">
                  <img
                    className="card-img m-auto "
                    src=".\companies\micosoft.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-4 mb-5">
                <div className="card mb-4 h-75">
                  <img
                    className="card-img m-auto"
                    src=".\companies\spotify.png"
                    alt="img"
                  />
                </div>
                <div className="card h-75">
                  <img
                    className="card-img m-auto"
                    src=".\companies\linked.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkedWithCompany;
