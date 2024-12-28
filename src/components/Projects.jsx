'use client'
import { useState, useRef, useEffect } from "react";
import Heading from "./sub/Heading";
import { animate, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { projectsButton } from "@/assets";

const Projects = () => {
  const { t } = useTranslation(); // Usamos el hook para acceder a las traducciones
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonsRef = useRef([]);

  const handleClick = () => {
    animate(buttonsRef.current[prevIndex.current], {
      opacity: 0.5,
      scale: 1,
    });
    animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 });
  };

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index, handleClick]);

  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text={t("projectsTitle")} />
      <div className="flex flex-wrap items-center justify-center gap-4 py-10">

        {/* Botones */}
        {projectsButton.map((text, i) => (
          <motion.button
            key={i}
            initial={{
              opacity: i === 0 ? 1 : 0.5,
              scale: i === 0 ? 1.2 : 1,
            }}
            ref={el => buttonsRef.current.push(el)}
            onClick={() => {
              setTech(text);
              setIndex(i);
            }}
            className="border border-yellow-500 rounded-xl px-4 py-2 text-sm font-light tracking-wider text-gray-400"
          >
            {text}
          </motion.button>
        ))}
      </div>

      {/* Iconos de cada proyecto */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {t("projectsData", { returnObjects: true })
          .filter(project => {
            return project.tech.some(item =>
              tech === "All" ? true : item === tech
            );
          })
          .map((project, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 
                         w-[500px] sm:w-[300px]
                         h-[300px] sm:h-[400px]"
            >
              <img
                src={project.url}
                alt={project.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-2 sm:p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm text-center mb-2 sm:mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap justify-center space-x-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-700 hover:bg-sky-900 text-white py-1 px-3 sm:py-2 sm:px-4 rounded-full flex items-center mb-2 text-xs sm:text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("viewProject")}
                    </a>
                  )}
                  {project.gitLink && (
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-800 text-white py-1 px-3 sm:py-2 sm:px-4 rounded-full flex items-center mb-2 text-xs sm:text-sm"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t("viewCode")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
