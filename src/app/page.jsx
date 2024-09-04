"use client"

import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col md:flex-row md:items-center">

      {/* IMAGE CONTAINER */}
      <div className="h-1/2 md:h-3/4 md:w-1/2 relative z-0 ">
        <Image src="/me.png" alt="" fill className="object-contain rounded-xl" />
      </div>

      {/* TEXT CONTAINER */}
      <div className="h-1/2 md:h-full md:w-1/2 flex flex-col justify-center items-center gap-4 md:gap-8 p-4 sm:pr-8 md:pr-12 lg:pr-20 xl:pr-48">
        {/* TITLE */}
        <p className="text-lg md:text-2xl font-semibold text-gray-500">Hello, I'm</p>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center">Firman Handi Pratama</h1>
        {/* DESC */}
        <p className="text-xl lg:text-3xl xl:text-4xl text-gray-600 font-bold ">Mobile Developer</p>
        {/* BUTTONS */}
        <div className="flex gap-3 text-sm sm:text-base md:text-lg mt-5">
          <Link href="/portfolio" className="bg-black text-white p-3 px-5 rounded-full">View My Works</Link>
          <Link href="/contact" className="p-3 px-5 border-[1px] border-black rounded-full">Contact Me</Link>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
