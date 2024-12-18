"use client"; // Esto indica que el componente se ejecuta en el lado del cliente (Next.js)

import Image from "next/image";
import { heroIcons } from "@/assets";
import {
  useMotionValue,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });

  const [mouseMove, setMouseMove] = useState(false);

  const [buttonHover, setButtonHover] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = e => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        {/* Sección principal con animaciones */}
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            {/* Imagen */}
            <Image
              className="h-auto w-[400px]"
              src={"/person.png"}
              alt="Person Image"
              width={800}
              height={800}
              priority={true}
            />
          </motion.div>

          {/* Encabezado y descripción */}
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
            Hi! My Name is Ignacio García Godoy &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I'm a System Analyst and a Developer 🖥️
          </p>
        </div>

        {/* Íconos de redes sociales */}
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
        {heroIcons.map(({ icon, url }, i) => (
            <a
              className="rounded-lg hover:bg-sky-900 hover:text-white transition-colors"
              href={url}
              key={i}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Botón "Talk to me" */}
        <a
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-sky-900 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-sky-900 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;
