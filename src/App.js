import Footer from "./components/Footer";
import IntroImg from "./components/IntroImg";
import MyProjects from "./components/MyProjects";
import MyServices from "./components/MyServices";
import ResponsiveAppBar from "./components/NavBar";
import AutoPlay from "./components/SkillSlider";
import WorkedWithCompany from "./components/WorkedWithCompany";
import React from "react";

function App() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="theApp">
      <ResponsiveAppBar handleChange={handleChange} checked={checked} />
      <IntroImg checked={checked} />
      <AutoPlay />
      <WorkedWithCompany />
      <MyProjects />
      <MyServices />
      <div className="b2 text-center">
        <a href="..." className="title h1 hoverEffect">
          Mobile Apps{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </a>
      </div>
      <Footer checked={checked} />
    </div>
  );
}

export default App;
