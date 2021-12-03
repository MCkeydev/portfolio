import { ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect } from "react";
import gsap from "gsap";
import "./project.styles.scss";

const Project = () => {
  const entryAnimation = (entries, _) => {
    if (!entries[0].isIntersecting) return;
    let tl = gsap.timeline({});
    tl.to(".project", {
      x: 0,
      duration: 1,
      stagger: {
        amount: 1,
      },
    });
  };

  useEffect(() => {
    // Intersection observer API
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    //Intersection Observer
    const projectObserver = new IntersectionObserver(entryAnimation, options);
    projectObserver.observe(document.querySelector(".projects"));
    //Removes IO when component unmounts
    return () => {
      projectObserver.disconnect();
    };
  });
  return (
    <ParallaxLayer offset={1} speed={-3} style={{ zIndex: "-11" }}>
      <div className="projects">
        <h1 className="project-title">Projets</h1>
        <hr className="project-border"></hr>
        <div className="grid-container">
          <div className="project right">
            <div className="image-container">
              <img
                className="project-image"
                src="/images/github.png"
                alt="galeria-project"
              ></img>
            </div>
            <div className="project-information">
              <h2>Github Profile search tool</h2>
              <hr />
              <p>
                {" "}
                This App lets you search for any Github user, and returns
                usefull information. (using the GitHub API). Dark mode toggle
                included.
                <br />- Built with vanillaJS, HTML5 and SASS.{" "}
              </p>
            </div>
          </div>
          <div className="project left">
            <div className="image-container">
              <img
                className="project-image"
                src="/images/galeria.png"
                alt="galeria-project"
              ></img>
            </div>
            <div className="project-information">
              <h2>Galeria App</h2>
              <hr />
              <p>
                {" "}
                This App is an online, interactive art Galery. It lets you see
                many paintings in a slideshow. It comes with trivia for each
                piece. It is fully responsive. <br />- Built with React JS,
                React Router, Framer-Motion, HTML5 and SASS.{" "}
              </p>
            </div>
          </div>
          <div className="project right">
            <div className="image-container">
              <img
                className="project-image"
                src="/images/github.png"
                alt="galeria-project"
              ></img>
            </div>
            <div className="project-information">
              <h2>Github Profile search tool</h2>
              <hr />
              <p>
                {" "}
                This App lets you search for any Github user, and returns
                usefull information. (using the GitHub API) <br />- Built with
                vanillaJS, HTML5 and SASS.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};
export default Project;
