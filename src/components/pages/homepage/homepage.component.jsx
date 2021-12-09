import react, { useRef, useEffect } from "react";
import gsap from "gsap";
import Banner from "../../banner/banner.component";
import LogoBanner from "../../logo-banner/logo-banner.component";
import Decoration from "../../decoration-banner/decoration-banner.component";
import Project from "../../project-banner/project.component";
import Competence from "../../competence_banner/competence.component";
import "../../../styles/global.styles.scss";
import "./homepage.styles.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  console.log(location);
  const parallax = useRef(null);
  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <>
      <div className="curtain transition1" />
      <div className="curtain2 transition1" />
      <div className="curtain3 transition1" />
      <Parallax
        pages={3}
        style={{ top: "0", left: "0" }}
        ref={parallax}
        className="homepage"
      >
        <LogoBanner />
        <Banner to={1} handler={scroll} />
        <Decoration />
        <Project />
        <Competence />
      </Parallax>
    </>
  );
};
export default HomePage;
