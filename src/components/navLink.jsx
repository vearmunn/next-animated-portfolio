"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({ link }) => {
    const pathNane = usePathname();

    return (
        <Link href={link.url} className={`rounded p-1 ${pathNane === link.url && "bg-black text-white"}`}>
            {link.title}
        </Link>
    )
}

export default NavLink