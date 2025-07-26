'use client'
import { useState, useRef, useEffect } from "react";
import Heading from "./sub/Heading";
import { animate, motion } from "framer-motion";
import { ExternalLink, Github, Figma, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import { projectsButton } from "@/assets";
import ProjectCarousel from "./sub/ProjectCarrousel";

const Projects = () => {
  const { t } = useTranslation(); // Usamos el hook para acceder a las traducciones
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const [projectType, setProjectType] = useState("web");
  const prevIndex = useRef(0);
  const buttonsRef = useRef([]);

  const handleClick = () => {
    const prevButton = buttonsRef.current[prevIndex.current];
    const currentButton = buttonsRef.current[index];
    if (!prevButton || !currentButton) return; // <-- FIX: Evitamos error cuando los refs son undefined
    animate(prevButton, { opacity: 0.5, scale: 1 });
    animate(currentButton, { opacity: 1, scale: 1.2 });
  };

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index, handleClick]);

  const filteredButtons = [
    "All",
    ...new Set(
      t("projectsData", { returnObjects: true })
        .filter(p => p.type === projectType)
        .flatMap(p => p.tech)
    ),
  ];

  return (
    <div id="projects" className="min-h-screen py-20">
      <Heading text={t("projectsTitle")} />

      {/* Botón para cambiar el tipo de proyecto */}
      <div className="flex justify-center mb-6">
        <div className="relative rounded-full p-1 flex w-[300px]">
          {["web", "mobile", "design"].map((type) => (
            <button
              key={type}
              onClick={() => { setProjectType(type); setTech("All"); setIndex(0); }}
              className={`relative z-10 flex-1 text-center py-2 rounded-full text-sm font-medium transition-colors ${projectType === type ? "text-white" : "text-gray-400"
                }`}
            >
              {type === "web" ? "Web" : type === "mobile" ? "Mobile" : "Design"}
            </button>
          ))}

          {/* Indicador animado */}
          <motion.div
            layout
            className="absolute top-1 bottom-1 w-[33.3333%] bg-yellow-500 rounded-full"
            animate={{ x: projectType === "web" ? 0 : projectType === "mobile" ? "100%" : "200%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      {/* Botones de tecnologías */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-10 overflow-x-auto">
        {filteredButtons.map((text, i) => (
          <motion.button
            key={i}
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            ref={el => buttonsRef.current[i] = el}
            onClick={() => { setTech(text); setIndex(i); }}
            className="border border-yellow-500 rounded-xl px-4 py-2 text-sm font-light tracking-wider text-gray-400 whitespace-nowrap"
          >
            {text}
          </motion.button>
        ))}
      </div>

      {/* Iconos de cada proyecto */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {t("projectsData", { returnObjects: true })
          .filter(project => project.type === projectType)
          .filter(project => {
            return project.tech.some(item =>
              tech === "All" ? true : item === tech
            );
          })
          .map((project, i) => {
            const cardSize = project.type === "mobile" ? "w-[280px] h-[620px]" : "w-[550px] h-[400px]";

            return (
              <div
                key={i}
                className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${cardSize}`}
              >
                {/* Carrusel */}
                <ProjectCarousel images={project.url} type={project.type} interval={3000} />

                {/* Overlay con info */}
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
                    {project.figmaLink && project.figmaLink.length > 0 && (
                      <div className="flex flex-col sm:flex-row sm:space-x-4">
                        {project.figmaLink.map((figma, index) => (
                          <a
                            key={index}
                            href={figma.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-purple-600 hover:bg-purple-800 text-white py-1 px-3 sm:py-2 sm:px-4 rounded-full flex items-center mb-2 text-xs sm:text-sm"
                          >
                            <Figma className="w-4 h-4 mr-2" />
                            {figma.name}
                          </a>
                        ))}
                      </div>
                    )}
                    {project.download && (
                      <a
                        href={project.download.apk}
                        download
                        className="bg-green-600 hover:bg-green-800 text-white py-1 px-3 sm:py-2 sm:px-4 rounded-full flex items-center mb-2 text-xs sm:text-sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {project.download.name}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
