"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import PricingPlans from "@/components/PricingPlans";
import Contact from "@/components/Contact";
import Navbar from "@/components/NavBar";
import Toggle from "@/components/sub/Toggle";
import Load from "@/components/sub/Load";
import { useState, useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer, Zoom } from "react-toastify";
import LanguageSwitcher from "@/components/sub/LanguageSwitcher";

export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const compsArr = Array.from(compsRef.current.children);
    compsArr.forEach(comp => {
      observer.observe(comp);
    });
  }, []);

  return (
    <>
      <Load />
      <Toggle>
        <Navbar id={id} />
        <LanguageSwitcher />
        <div className="w-min" ref={compsRef}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <PricingPlans />
          <Contact />
        </div>
      </Toggle>
      <Analytics />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Zoom}
      />
    </>
  );
}
