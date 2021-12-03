import react, { useRef, useEffect } from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import gsap from "gsap";
import "./banner.styles.scss";
import { ParallaxLayer } from "@react-spring/parallax";
const Banner = ({ to, handler }) => {
  const exitFade = (entries, _) => {
    if (entries[0].isIntersecting) return;
    gsap.to(".need", {
      opacity: 0,
      duration: 1,
    });
  };

  useEffect(() => {
    let tl = gsap.timeline({});
    tl.to("body", { css: { visibility: "visible" } }, 0)
      .to(
        ".main-div",
        {
          width: "100vw",
        },
        0
      )
      .from(
        ".title",
        {
          ease: "power4.out",
          y: 100,
          opacity: 0,
          duration: 1,
          skewY: 7,
          stagger: {
            amount: 0.3,
          },
        },
        0.75
      )
      .from(
        ".separation-line",
        {
          width: 0,
          opacity: 0,
          duration: 0.5,
        },
        2.75
      )
      .to(
        ".accent",
        {
          ease: "power2",
          opacity: 1,
          duration: 2,
        },
        1.5
      );

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const exitObserver = new IntersectionObserver(exitFade, options);
    exitObserver.observe(document.querySelector(".main-div"));
    return () => {
      exitObserver.disconnect();
    };
  });
  return (
    <ParallaxLayer offset={0} speed={5.5} onClick={() => handler(to)}>
      <div className="main-div">
        <div className="name-title ">
          <span className="title">Matthieu Courréjou</span>
        </div>
        <hr className="separation-line"></hr>
        <div className="title-description">
          <span className="title">
            Front-End Web <span className="accent">developper</span>
          </span>
        </div>
        <div className="need">
          <span>You need to scroll down !</span>
          <ArrowDown className="arrow-down" />
        </div>
      </div>
    </ParallaxLayer>
  );
};
export default Banner;
