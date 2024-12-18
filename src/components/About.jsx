'use client'

import Heading from "./sub/Heading"
import Image from "next/image"
import { AboutText, downloadIcon, arrowLeftIcon } from "@/assets"

const About = () => {
  return (
    <div id="about" className="min-h-screen px-96 flex flex-col items-center justify-center">
      <Heading text={'About Me'}/>
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          className="w-[400px] lg:w-[600px] md:hidden" 
          src={'/aboutMe.png'} 
          alt="About Me Image" 
          width={800} 
          height={800}
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden">{arrowLeftIcon}</span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">{AboutText}</p>
          <a href="/CVIgnacioGarciaGodoy.pdf" download="" className="w-max flex items-center gap-x-2 mt-6 rounded-full border-gray-300 bg-sky-900 px-3 py-2 font-light text-white hover:bg-sky-900 transition-colors">
            <span>Download CV</span>
            <span>{downloadIcon}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About