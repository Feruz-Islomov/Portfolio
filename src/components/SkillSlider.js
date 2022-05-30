import React from "react";
import Slider from "react-slick";

const SwipeToSlide = ({ checked }) => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div
      className={checked ? "skillContainer" : "skillContainer light text-dark"}
    >
      <h1 style={{ textAlign: "center" }}>Technical Skills</h1>
      <Slider {...settings}>
        <div>
          <img className="skill" src="./skills/1.png" alt="img" />
        </div>
        <div>
          <img className="skill" src="./skills/2.png" alt="img" />
        </div>
        <div>
          <img className="skill" src="./skills/3.png" alt="img" />
        </div>
        <div>
          <img className="skill" src="./skills/4.png" alt="img" />
        </div>
        <div>
          <img className="skill" src="./skills/5.png" alt="img" />
        </div>
        <div>
          <img className="skill" src="./skills/6.png" alt="img" />
        </div>
        <div>
          <img className="skill" src="./skills/7.png" alt="img" />
        </div>
        <div>
          <img className="skill" src="./skills/8.png" alt="img" />
        </div>
        <div>
          <img className="skill" src="./skills/10.png" alt="img" />
        </div>
        <div>
          <img className="skill" src="./skills/11.png" alt="img" />
        </div>
        <div>
          <img className="skill" src="./skills/13.png" alt="img" />
        </div>
      </Slider>
    </div>
  );
};

export default SwipeToSlide;
