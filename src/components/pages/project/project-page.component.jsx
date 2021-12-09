import React, { useEffect } from "react";
import "./project-page.styles.scss";
import gsap from "gsap";
const ProjectPage = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(".transition2", {
      delay: 0.3,
      width: "0%",
      stagger: {
        amount: 0.3,
      },
    });
  });

  return (
    <>
      <div className="curtain transition2" />
      <div className="curtain2 transition2" />
      <div className="curtain3 transition2" />
      <div className="project-page"></div>
    </>
  );
};
export default ProjectPage;
