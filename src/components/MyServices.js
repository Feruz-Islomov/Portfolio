import React from "react";

const MyServices = ({ checked }) => {
  return (
    <div className={checked ? "MyService" : "MyService bg-info"}>
      <h1 className="title">My Services</h1>
      <h5 className=" text-center  text-light">
        Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc <br />
        accumsan gravida risus, ac semper libero mollis ut.
      </h5>
      <div className="">
        <div className="diplaySet ">
          <div className="c">
            <div className="card bg-secondary p-4">
              <img src="./backend.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Back-end Development</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="..." className="hoverEffect">
                  Lets work together
                </a>
              </div>
            </div>
          </div>
          <div className="c">
            <div className="card bg-secondary p-4">
              <img src="./backend2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Front-end Development</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="..." className="hoverEffect">
                  Lets work together
                </a>
              </div>
            </div>
          </div>
          <div className="c">
            <div className="card bg-secondary p-4">
              <img src="./backend3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Content Writing</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="..." className="hoverEffect">
                  Lets work together
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
