import React, { useEffect } from "react";
import gsap from "gsap";
import { ParallaxLayer } from "@react-spring/parallax";
import { ReactComponent as Cross } from "../../assets/icons/cross.svg";
import { ReactComponent as Dna } from "../../assets/icons/dna.svg";
import { ReactComponent as Flag } from "../../assets/icons/flag.svg";
import { ReactComponent as Globe } from "../../assets/icons/globe1.svg";
import { ReactComponent as GlobeTwo } from "../../assets/icons/globe2.svg";
import { ReactComponent as Hash } from "../../assets/icons/hash.svg";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Music } from "../../assets/icons/music.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import "./logo-banner.styles.scss";

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
