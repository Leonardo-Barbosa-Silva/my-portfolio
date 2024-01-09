import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, useTexture } from "@react-three/drei";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import javascript from "../img/javascript.png";
import nodejs from "../img/nodejs.png";
import git from "../img/git.png";
import css from "../img/css.png";
import html from "../img/html.png";
import typescript from "../img/typescript.png";
import react from "../img/reactjs.png";
import python from "../img/python.svg";
import redux from "../img/redux.png";
import sass from "../img/sass.svg";
import mongodb from "../img/mongodb.png";
import material from "../img/material.svg";
import express from "../img/express.png";
import next from "../img/next.png";
import tailwind from "../img/tailwind.png";
import docker from "../img/docker.png";
import vuejs from "../img/vuejs.png";
import universe from "../img/universe.jpg";

const imgSkills = [
    javascript,
    nodejs,
    typescript,
    html,
    css,
    git,
    universe,
    vuejs,
    docker,
    tailwind,
    next,
    express,
    material,
    mongodb,
    sass,
    redux,
    python,
    react
]

const Section = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const Ball = ({ icon }) => {
  const [decal] = useTexture([icon]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <mesh castShadow receiveShadow scale={1}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#005588"
          polygonOffset
          polygonOffsetFactor={5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.2]}
          scale={1.3}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );
};

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState("projects");
  const [transformValue, setTransformValue] = useState("transformX(0)");

  const handleMouseMove = (e) => {
    const descriptionElement = e.currentTarget.querySelector(".description");
    descriptionElement.style.visibility = "visible";
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * 70;
    const rotateY = (x / rect.width - 0.5) * -70;
    e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const element = e.currentTarget;
    const descriptionElement = element.querySelector(".description");
    element.style.transform = "rotateX(0deg) rotateY(0deg)";
    element.parentElement.querySelector(".description").style.visibility =
      "hidden";
    descriptionElement.style.visibility = "hidden";
  };

  const clickNav = (slide) => {
    setCurrentSlide(slide);
  };

  const sliderTransform = () => {
    if (currentSlide === "projects") return "translateX(0)";
    if (currentSlide === "skills") return "translateX(-100vw)";
    if (currentSlide === "experiences") return "translateX(-200vw)";
  };

  useEffect(() => {
    setTransformValue(sliderTransform());
  }, [currentSlide]);

  const isNonMobileScreen = window.matchMedia("(min-width: 1000px)").matches;

  return (
    <Section id="me">
      <div className="navigation">
        <nav>
          <ul>
            <li
              className={currentSlide === "projects" ? "active" : ""}
              onClick={() => clickNav("projects")}
            >
              projects
            </li>
            <li
              className={currentSlide === "skills" ? "active" : ""}
              onClick={() => clickNav("skills")}
            >
              skills
            </li>
            <li
              className={currentSlide === "experiences" ? "active" : ""}
              onClick={() => clickNav("experiences")}
            >
              experiences
            </li>
          </ul>
        </nav>
      </div>
      <>
        {isNonMobileScreen && (
          <>
            <div className="slide">
              <div className="slider" style={{ transform: transformValue }}>
                <div className="container projects">
                  <div className="grid-1">
                    <motion.div
                      className="project"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href="https://todreams-frontend.onrender.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img src={universe} alt="" />
                        <div className="description">
                          <h2>Todreams App</h2>
                          <p>
                            An application to save your most important
                            annotations.
                          </p>
                        </div>
                      </a>
                    </motion.div>
                    <motion.div
                      className="project"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href="https://netflix-clone-react-qt36.onrender.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img src={universe} alt="" />
                        <div className="description">
                          <h2>Netflix Clone</h2>
                          <p>
                            The best Netflix Clone frontend made by using React
                            and TheMovieDB API.
                          </p>
                        </div>
                      </a>
                    </motion.div>
                    <motion.div
                      className="project"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href="https://haircut.onrender.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img src={universe} alt="" />
                        <div className="description">
                          <h2>Haircut Website</h2>
                          <p>A great template of Barber Shop website.</p>
                        </div>
                      </a>
                    </motion.div>
                    <motion.div
                      className="project"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href="https://shop-skills-react.onrender.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img src={universe} alt="" />
                        <div className="description">
                          <h2>Shop Skills</h2>
                          <p>
                            A simple project developed by using React, Webpack
                            and Babel manually.
                          </p>
                        </div>
                      </a>
                    </motion.div>
                  </div>
                </div>

                <div className="container skills">
                  {imgSkills.map( imgSkill => (
                      <div className="skill">
                      <Canvas camera={{ fov: 40, position: [0, 0, 5] }}>
                        <OrbitControls enableZoom={false} />
                        <Ball icon={imgSkill} />
                      </Canvas>
                    </div>
                  ))}
                </div>

                <div className="container experience"></div>
              </div>
            </div>
          </>
        )}

        {!isNonMobileScreen && (
          <>
            <div className="slide">
              <div className="slider" style={{ transform: transformValue }}>
                <div className="container projects">
                  <div className="grid-1">
                    <div className="project">
                      <a
                        href="https://todreams-frontend.onrender.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="description">
                          <h2>Todreams App</h2>
                          <p>
                            An application to save your most important
                            annotations.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="project">
                      <a
                        href="https://netflix-clone-react-qt36.onrender.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="description">
                          <h2>Netflix Clone</h2>
                          <p>
                            The best Netflix Clone frontend made by using React
                            and TheMovieDB API.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="project">
                      <a
                        href="https://haircut.onrender.com"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="description">
                          <h2>Haircut Website</h2>
                          <p>A great template of Barber Shop website.</p>
                        </div>
                      </a>
                    </div>
                    <div className="project">
                      <a
                        href="https://shop-skills-react.onrender.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <div className="description">
                          <h2>Shop Skills</h2>
                          <p>
                            A simple project developed by using React, Webpack
                            and Babel manually.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="container skills">
                  {imgSkills.map( imgSkill => (
                    <div className="skill">
                      <img src={imgSkill} alt="" />
                    </div>
                  ))}
                </div>

                <div className="container experience"></div>
              </div>
            </div>
          </>
        )}
      </>
    </Section>
  );
};

export default Skills;
