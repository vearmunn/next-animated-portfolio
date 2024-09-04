
"use client"
import { motion } from 'framer-motion'
import React from 'react'

const ContactPage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
      className='h-full w-screen flex m-auto p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'
    >
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <p className='md:text-2xl text-gray-600 font-semibold mb-2'>Get in Touch</p>
        <h1 className='text-4xl md:text-6xl font-bold mb-10'>Contact Me</h1>
        {/* CONTACT LIST */}
        <div className='p-5 border-[1px] border-black flex flex-col md:flex-row rounded-2xl gap-8'>
          {/* EMAIL */}
          <div className='flex items-center gap-2'>
            <img src="./email.png" alt=""  className='w-10 h-10'/>
            <p>firmanhandipratama1@gmail.com</p>
          </div>
          {/* LINKEDIN */}
          <button 
           onClick={()=> window.open("https://www.linkedin.com/in/firman-pratama-718a57118/")}
          className='flex items-center gap-2'>
            <img src="./linkedin.png" alt=""  className='w-10 h-10'/>
            <p className='hover:underline'>LinkedIn</p>
          </button>
          {/* WHATSAPP */}
          <div className='flex items-center gap-2'>
            <img src="./whatsapp.png" alt=""  className='w-10 h-10'/>
            <p className=''>0853-1481-8635</p>
          </div>
          
        </div>
      </div>
    </motion.div>
  )
}

export default ContactPage