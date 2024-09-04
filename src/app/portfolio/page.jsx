"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const PortfolioPage = () => {
  const projects = [
    {
      title: "Aplikasi Monitoring PKL",
      imgURL: "./monitoring/thumbnail.png",
      repoURL: "https://github.com/vearmunn/app_monitoring_pkl",
      portofolioPath: "/portfolio/monitoring"
    },
    {
      title: "Chat App",
      imgURL: "./chat_app/thumbnail.png",
      repoURL: "https://github.com/vearmunn/chat_app",
      portofolioPath: "/portfolio/chat-app"
    },
    {
      title: "Warble Social Media",
      imgURL: "./warble/thumbnail.png",
      repoURL: "https://github.com/vearmunn/warble_social_media",
      portofolioPath: "/portfolio/warble"
    },
    {
      title: "Quiz Odyssey",
      imgURL: "./quiz_odyssey/thumbnail.png",
      repoURL: "https://github.com/vearmunn/quiz_odyssey",
      portofolioPath: "/portfolio/quiz-odyssey"
    },
    {
      title: "Qemana",
      imgURL: "./qemana/thumbnail.png",
      repoURL: "https://github.com/vearmunn/qemana",
      portofolioPath: "/portfolio/qemana"
    },
    {
      title: "Wordle",
      imgURL: "./wordle/thumbnail.png",
      repoURL: "https://github.com/vearmunn/wordle",
      portofolioPath: "/portfolio/wordle"
    },
  ]


  const portfolioRef = useRef()
  const isPortfolioInView = useInView(portfolioRef)

  return (
    <motion.div
      
      className='w-screen h-full overflow-y-scroll'
    >
      {/* CONTAINER */}
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col items-center w-full h-full'>
        {/* TITLE */}
        <h1 className='text-4xl md:text-5xl font-bold mt-10 mb-14'>
          FEATURED WORKS
        </h1>
        {/* GRID */}
        <motion.div
          initial={{ x: "-300px", opacity:0 }}
          animate={{ x: isPortfolioInView && 0, opacity: isPortfolioInView && 1 }}
          ref={portfolioRef}
          transition={
            {
              delay: 0.5,
              staggerChildren: 0.5
            }}
          className='grid w-full h-full grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-8 lg:gap-10 mb-5'>
          {/* GRID ITEM */}
          {projects.map((project) => (
            <motion.div
              key={project}

              className='border-[1px] border-gray-400 rounded-2xl p-5 flex flex-col items-center gap-6'>
              <img src={project.imgURL} alt="" className='aspect-square object-cover rounded-2xl' />
              <h1 className='text-2xl md:text-3xl font-bold'>{project.title}</h1>
              <div className='flex gap-4'>
                <button
                  onClick={() => window.open(project.repoURL)}
                  className='text-sm md:text-base w-36 py-3 rounded-full border-[1px] border-gray-400 font-bold hover:bg-black hover:text-white'>Github</button>
                <Link href={project.portofolioPath}>
                  <button
                    className='text-sm md:text-base w-36 py-3 rounded-full border-[1px] border-gray-400 font-bold hover:bg-black hover:text-white'>See Details</button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
       
    </motion.div>
  )
}

export default PortfolioPage