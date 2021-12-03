import React from "react";
import "./competence.styles.scss";
import { ParallaxLayer } from "@react-spring/parallax";
const Competence = () => {
  return (
    <ParallaxLayer offset={2} speed={8}>
      <div className="competences"></div>;
    </ParallaxLayer>
  );
};

export default Competence;
