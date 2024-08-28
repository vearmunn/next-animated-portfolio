"use client"

import React from 'react'
import { motion } from 'framer-motion'

const PortofolioDetail = ({ imgUrl, title, descripton, repoUrl }) => {

    return (
        <motion.div
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5 }}
            className='w-full h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col md:flex-row overflow-y-scroll'>
            {/* IMAGE */}
            <div className='w-full md:w-1/2 h-full'>
                <img src={`../${imgUrl}/main_image.png`} alt="" className='w-full h-full object-contain' />
            </div>
            {/* TEXT CONTAINER */}
            <div className='w-full md:w-1/2 h-full flex flex-col justify-center gap-5 mt-10 md:mt-0 md:pl-10 lg:pl-12 xl:pl-14'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>{title}</h1>
                <p className='text-justify text-sm md:text-base'>{descripton}</p>
                <button 
                onClick={()=> window.open(repoUrl)}
                className='w-full px-4 py-3 border-[1px] border-black md:w-fit rounded-full hover:bg-black hover:text-white'>Github Repository</button>
                <div className='mt-3'></div>
            </div>
        </motion.div>
    )
}

export default PortofolioDetail