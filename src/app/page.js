// Use client se utiliza para indicar que el archivo o componente debe ser renderizado en el cliente (navegador) 
// en lugar de hacerlo en el servidor.
'use client'
import Hero from "@/components/Hero"
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  
  const [id, setId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if(intersecting){
            setId(entry.target.id);
          }
        })
      },
      { threshold: 0.3 }
    );

    const compsArray = Array.from(compsRef.current.children);
    compsArray.forEach((comp) => {
      observer.observe(comp);
    })
  }, [])

  return(
    <>
      <NavBar id={id} />
      <div ref={compsRef}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  ); 
}
