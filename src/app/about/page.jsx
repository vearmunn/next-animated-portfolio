"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useInView } from 'framer-motion'
import Brain from '@/components/brain';

const AboutPage = () => {
  const skills = ["Flutter", "Dart", "Rest API", "GetX", "BLOC", "Firebase", "Supabase", "Github", "JavaScript", "ReactJS", "NextJS", "HTML", "CSS", "TailwindCSS", "Python", "MySQL"];

  const containerRef = useRef()
  const skillRef = useRef()
  const experienceRef = useRef()
  const educationRef = useRef()
  const certificateRef = useRef()

  const { scrollYProgress } = useScroll({ container: containerRef })
  const isSkillInView = useInView(skillRef)
  const isExperienceInView = useInView(experienceRef)
  const isEducationnView = useInView(educationRef)
  const isCertificateView = useInView(certificateRef)
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
      className='h-full'

    >
      {/* CONTAINER */}
      <div className=' h-full overflow-x-hidden overflow-scroll lg:flex ' ref={containerRef} >
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-1/2 '>
          {/* BIOGRAPHY CONTAINER */}
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl md:text-3xl font-bold'>About Me</h1>
            <p className='text-sm md:text-base'> Hello, My name is Firman Handi Pratama, I am a dedicated and passionate software developer with a background in coding since high school and hands-on experience in Flutter development since 2021. My expertise extends to integrating third-party services, managing state efficiently, and optimizing app performance for a seamless user experience. Ready to utilize my skills and passion to further your company. Willing and motivated to learn new things.</p>
            
            <div className='flex gap-5'>
              <button 
              onClick={()=> window.open("https://www.linkedin.com/in/firman-pratama-718a57118/")}
              className='flex items-center gap-2 hover:underline'>
                <img src="./linkedin.png" alt="" className='w-10 h-10' />
                LinkedIn
              </button>
              <button
              onClick={()=> window.open("https://github.com/vearmunn")}
              className='flex items-center gap-2 hover:underline'>
                <img src="./github.png" alt="" className='w-10 h-10' />
                Github
              </button>
            </div>
            <div className='w-6 h-6'>
              <motion.img animate={{ y: 10 }}
                transition={{ repeatType: 'reverse', repeat: Infinity, duration: 1 }}
                src="./arrow.png" alt="" className='mt-3 md:mt-10' />
            </div>

          </div>
          {/* SKILL CONTAINER */}
          <div className='flex flex-col gap-4'>
            <motion.h1
              ref={skillRef}
              initial={{ x: "-300px" }}
              animate={{ x: isSkillInView && 0 }}
              className='text-xl font-bold md:text-3xl'>SKILLS</motion.h1>
            <motion.div
              ref={skillRef}
              initial={{ x: "-300px" }}
              animate={{ x: isSkillInView && 0 }}
              className='flex flex-wrap gap-3'>
              {skills.map((skill) => (
                <div key={skill} className='p-2 bg-black text-white rounded-md text-sm  md:text-base hover:bg-white hover:text-black'>{skill}</div>
              ))}
            </motion.div>
            <div className='w-6 h-6'>
              <motion.img animate={{ y: 10 }}
                transition={{ repeatType: 'reverse', repeat: Infinity, duration: 1 }}
                src="./arrow.png" alt="" className='mt-3 md:mt-10' />
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className='flex flex-col'>
            <motion.h1
              ref={experienceRef}
              initial={{ x: "-300px" }}
              animate={{ x: isExperienceInView && 0 }}
              className='text-xl font-bold md:text-3xl mb-4'>EXPERIENCE</motion.h1>
            <motion.div
              ref={experienceRef}
              initial={{ x: "-300px" }}
              animate={{ x: isExperienceInView && 0 }}
              className='border-[1px] border-gray-500 rounded-2xl p-4 flex flex-col mb-5'>
              <h1 className='text-xl font-bold'>Sopeus</h1>
              <h2 className=''>Mobile Developer - Freelance</h2>
              <p className='text-gray-600'>Jun 2024 - Sept 2024</p>
              <ul className='mt-5'>
                <li>Job Description:</li>
                <li>- Developed an educational app for tablet device where school students are able to learn through digital books and videos.</li>
                <li>- Implemented responsive and interactive UI components</li>
                <li>- Utilized BLOC state management</li>
                <li>- integrated RESTful API</li>
              </ul>
            </motion.div>
            <motion.div
              ref={experienceRef}
              initial={{ x: "-300px" }}
              animate={{ x: isExperienceInView && 0 }}
              className='border-[1px] border-gray-500 rounded-2xl p-4 flex flex-col mb-5'>
              <h1 className='text-xl font-bold'>PadiUMKM App</h1>
              <h2 className=''>Mobile Developer - Freelance</h2>
              <p className='text-gray-600'>Apr 2021 - Jun 2021</p>
              <ul className='mt-5'>
                <li>Job Description:</li>
                <li>Developed the user interface (UI) for the application, focusing on creating visually appealing and user-friendly layouts. Worked closely with the design team to translate wireframes and prototypes into high-quality, interactive UI components.</li>
              </ul>
            </motion.div>
            <div className='w-6 h-6'>
              <motion.img animate={{ y: 10 }}
                transition={{ repeatType: 'reverse', repeat: Infinity, duration: 1 }}
                src="./arrow.png" alt="" className='mt-3 md:mt-10' />
            </div>
          </div>
          {/* CERTIFICATE */}
          <div className='flex flex-col'>
            <motion.h1
              ref={certificateRef}
              initial={{ x: "-300px" }}
              animate={{ x: isCertificateView && 0 }}
              className='text-xl font-bold md:text-3xl mb-4'>CERTIFICATES</motion.h1>
            <motion.div
              ref={certificateRef}
              initial={{ x: "-300px" }}
              animate={{ x: isCertificateView && 0 }}
              className='flex flex-col mb-5'>
              <div className='w-full grid grid-cols-2  border-b-[1px] border-gray-500 mb-3'>
                <h1 className='font-bold text-xl'>Course</h1>
                <h1 className='font-bold text-xl'>Lessons</h1>
              </div>
              <div className='w-full grid grid-cols-2 border-b-[1px] border-gray-500 mb-3'>
                <p onClick={() => window.open("https://www.dicoding.com/certificates/NVP7O83YVPR0")}
                  className='mr-5 text-blue-600 underline hover:cursor-pointer'>Belajar Fundamental Aplikasi Flutter</p>
                <p>Fundamental Flutter, Widget, State Management, Mendapatkan Data dari Internet, Penyimpanan Lokal, Firebase</p>
              </div>
              <div className='w-full grid grid-cols-2 border-b-[1px] border-gray-500 mb-3'>
                <p onClick={() => window.open("https://www.dicoding.com/certificates/EYX460JWJPDL")}
                  className='mr-5 text-blue-600 underline hover:cursor-pointer'>Belajar Pengembangan Aplikasi Flutter Intermediate</p>
                <p>Advanced Navigation, Media, Advanced Widget, Maps & Location, Flutter Desktop</p>
              </div>
              <div className='w-full grid grid-cols-2 border-b-[1px] border-gray-500 mb-3'>
                <p onClick={() => window.open("https://drive.google.com/file/d/17CPHlvVjRnJTInEnB8RmKV6F2ReFyQ9H/view?usp=sharing")}
                  className='mr-5 text-blue-600 underline hover:cursor-pointer'>Data Analysis: Fullstack Intensive Bootcamp</p>
                <p>Basic Statistic, SQL Basic, SQL For Data Analysis, Data Analysis with Python, Introduction to Problem Solving, Data Visualization</p>
              </div>
            </motion.div>

            <div className='w-6 h-6'>
              <motion.img animate={{ y: 10 }}
                transition={{ repeatType: 'reverse', repeat: Infinity, duration: 1 }}
                src="./arrow.png" alt="" className='mt-3 md:mt-10' />
            </div>
          </div>
          {/* EDUCATION */}
          <div className='flex flex-col'>
            <motion.h1
              ref={educationRef}
              initial={{ x: "-300px" }}
              animate={{ x: isEducationnView && 0 }}
              className='text-xl font-bold md:text-3xl mb-4'>EDUCATION</motion.h1>
            <motion.div
              ref={educationRef}
              initial={{ x: "-300px" }}
              animate={{ x: isEducationnView && 0 }}
              className='border-[1px] border-gray-500 rounded-2xl p-4 flex flex-col mb-5'>
              <h1 className='text-xl font-bold'>STMIK Dharma Negara (S1)</h1>
              <h2 className=''>Informatika IT</h2>
              <p className='text-gray-600'>2019 - 2024</p>
            </motion.div>
            <motion.div
              ref={educationRef}
              initial={{ x: "-300px" }}
              animate={{ x: isEducationnView && 0 }}
              className='border-[1px] border-gray-500 rounded-2xl p-4 flex flex-col'>
              <h1 className='text-xl font-bold'>SMK Wikrama Bogor</h1>
              <h2 className=''>Rekayasa Perangkat Lunak</h2>
              <p className='text-gray-600'>2015 - 2018</p>
            </motion.div>
            {/* <div className='w-6 h-6'>
              <motion.img animate={{ y: 10 }}
                transition={{ repeatType: 'reverse', repeat: Infinity, duration: 1 }}
                src="./arrow.png" alt="" className='mt-3 md:mt-10' />
            </div> */}
            <div className='mt-16'></div>
          </div>

        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block sticky top-0 md:w-1/2 xl:1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage