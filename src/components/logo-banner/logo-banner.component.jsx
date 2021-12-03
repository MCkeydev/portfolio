import React, { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ParallaxLayer } from "@react-spring/parallax";
import { ReactComponent as Cross } from "../../assets/space-icons/death-star.svg";
import { ReactComponent as Dna } from "../../assets/space-icons/earth.svg";
import { ReactComponent as Flag } from "../../assets/space-icons/galaxy.svg";
import { ReactComponent as Globe } from "../../assets/space-icons/ISS.svg";
import { ReactComponent as Hash } from "../../assets/space-icons/jupiter.svg";
import { ReactComponent as Heart } from "../../assets/space-icons/satellite.svg";
import { ReactComponent as Moon } from "../../assets/space-icons/saturn.svg";
import { ReactComponent as Music } from "../../assets/space-icons/astronaut.svg";
import { ReactComponent as Plus } from "../../assets/space-icons/t-fighter.svg";
import "./logo-banner.styles.scss";

gsap.registerPlugin(MotionPathPlugin);
const LogoBanner = () => {
  const introTimeline = () => {
    let tl = gsap.timeline({});

    tl.to(
      ".narrow",
      {
        ease: "power0.out",
        y: -80,
        duration: 8,
        repeat: -1,
        yoyo: true,
      },
      0
    ).to(
      ".wide",
      {
        ease: "power0.out",
        y: 60,
        duration: 12,
        repeat: -1,
        yoyo: true,
      },
      0
    );
  };

  useEffect(() => {
    introTimeline();
  }, []);
  return (
    <div>
      <ParallaxLayer speed={9.5}>
        <Cross className="bg-logo2 logo1 wide" />
      </ParallaxLayer>
      <ParallaxLayer speed={3.5}>
        <Dna className="bg-logo2 logo2 wide" />
      </ParallaxLayer>
      <ParallaxLayer speed={3.5}>
        <Flag className="bg-logo logo3 wide" />
      </ParallaxLayer>
      <ParallaxLayer speed={3.5}>
        <Globe className="bg-logo logo4 wide" />
      </ParallaxLayer>
      <ParallaxLayer speed={3.5}></ParallaxLayer>
      <ParallaxLayer speed={3.5}>
        <Hash className="bg-logo2 logo6 narrow" />
      </ParallaxLayer>
      <ParallaxLayer speed={4.5}>
        <Heart className="bg-logo logo7 narrow" />
      </ParallaxLayer>
      <ParallaxLayer speed={1.5}>
        <Moon className="bg-logo logo8 narrow" />
      </ParallaxLayer>
      <ParallaxLayer speed={4}>
        <Music className="bg-logo logo9 narrow" />
      </ParallaxLayer>
      <ParallaxLayer speed={4.5}>
        <Plus className="bg-logo logo10 narrow" />
      </ParallaxLayer>
    </div>
  );
};

export default LogoBanner;
