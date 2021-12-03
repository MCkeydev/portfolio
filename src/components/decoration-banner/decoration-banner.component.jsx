import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import "./decoration-banner.styles.scss";

const Decoration = () => {
  return (
    <ParallaxLayer
      factor={0.5}
      offset={0.5}
      speed={-3}
      style={{ zIndex: "-10" }}
    >
      <div className="decoration-banner"></div>
    </ParallaxLayer>
  );
};

export default Decoration;
