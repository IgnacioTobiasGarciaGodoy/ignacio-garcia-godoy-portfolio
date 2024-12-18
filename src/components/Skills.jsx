"use client";

import Heading from "./sub/Heading";
import Image from "next/image";
import { skillsData } from "@/assets";
import { delay, motion } from "framer-motion";

const Skills = () => {

  const variants = {
    visible: (i) => ({
      opacity: 1,
      y:0,
      transition: {
        delay: .3 + i * .07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  }

  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96">
      <Heading text={"Skills"} />
      <p>Programming languages ​​or tools that I have used and am actively learning and improving</p>
      <div className="w-full flex flex-wrap justify-start gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((item, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{scale: 1.1}}
            viewport={{margin: "20px", once: true}}
            key={i}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 w-40 h-16 lg:w-32 lg:h-16"
          >
            <Image
              className="h-auto w-[40px]"
              src={item.icon}
              alt="Skills Image"
              width={100}
              height={100}
            />
            <p className="text-sm text-gray-600">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
