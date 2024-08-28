"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './navLink'
import { motion } from 'framer-motion'

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
]

const topVariant = {
    closed: {
        rotate: 0
    },
    opened: {
        rotate: 45,
        backgroundColor: "rgb(255,255,255)"
    }
}

const centerVariant = {
    closed: {
        opacity: 1
    },
    opened: {
        opacity: 0,
         backgroundColor: "rgb(255,255,255)"
    }
}

const bottomVariant = {
    closed: {
        rotate: 0
    },
    opened: {
        rotate: -45,
        backgroundColor: "rgb(255,255,255)"
    }
}

function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
            {/* LOGO */}
            <div className="h">
                <span className='font-bold'>Firman Handi Pratama</span>
            </div>
            <div className='hidden md:flex gap-5'>
                {links.map((link) => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                <button onClick={() => setOpen(((prev) => !prev))} className='w-10 h-8 flex flex-col justify-between z-50 relative'>
                    <motion.div variants={topVariant} animate={open ? "opened" : "closed"} className={`w-10 h-1 bg-black rounded origin-left`}></motion.div>
                    <motion.div variants={centerVariant} animate={open ? "opened" : "closed"} className={`w-10 h-1 bg-black rounded`}></motion.div>
                    <motion.div variants={bottomVariant} animate={open ? "opened" : "closed"} className={`w-10 h-1 bg-black rounded origin-left`}></motion.div>
                </button>
                {/* MENU LIST */}
                {open && (
                    <div className='absolute h-screen w-screen bg-black text-white flex flex-col top-0 left-0 items-center justify-center gap-8 text-4xl z-40'>
                        {links.map((link => (
                            <Link href={link.url} key={link.title}>
                                {link.title}
                            </Link>
                        )))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar