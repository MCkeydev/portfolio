import react, { useRef, useEffect } from "react";
import gsap from "gsap";
import Banner from "./components/banner/banner.component";
import LogoBanner from "./components/logo-banner/logo-banner.component";
import Decoration from "./components/decoration-banner/decoration-banner.component";
import Project from "./components/project-banner/project.component";
import Competence from "./components/competence_banner/competence.component";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import logo from "./logo.svg";
import "./App.scss";
import "./styles/global.styles.scss";

function App() {
  const parallax = useRef(null);
  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <div className="app">
      <Parallax pages={3} style={{ top: "0", left: "0" }} ref={parallax}>
        <LogoBanner />
        <Banner to={1} handler={scroll} />
        <Decoration />
        <Project />
        <Competence />
      </Parallax>
    </div>
  );
}

export default App;
