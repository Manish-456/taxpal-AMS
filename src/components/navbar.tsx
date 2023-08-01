"use client";
import { DollarSignIcon } from 'lucide-react'
import {motion} from 'framer-motion';
import { Montserrat } from 'next/font/google'
import React from 'react'
import MobileNavbar from './mobilenav'
import Link from 'next/link';
import { navVariants } from '@/lib/motion';
export const montserrat = Montserrat({
    weight : ["400", "600", "700" , "800"],
    display : "swap",
    subsets : ["latin"]
    
})

export default function Navbar() {
  return (
        <header className='py-6'>
      <motion.div variants={navVariants} 
      initial={"hidden"}
      whileInView={"show"}
      className="max-w-7xl w-full mx-auto p-4">
        <div className="flex items-center justify-between">

      <div className="flex space-x-12 items-center">
      <div className="flex items-center space-x-2">
            <DollarSignIcon className='border border-gray-300 w-8 h-8 rounded-full bg-sky-500 text-white'/>
            <h3 className={`${montserrat.className} text-xl font-bold`}>Tax<span className='text-sky-500'>Pal</span></h3>
        </div>

        <ul role='list' className="md:flex space-x-8 hidden items-center">
          <li className='hover:bg-slate-400/[0.1] cursor-pointer px-3 py-2 rounded-lg'>
            <Link href={"#features"}>Features</Link>
          </li>
          <li className='hover:bg-slate-400/[0.1] cursor-pointer px-3 py-2 rounded-lg'>
          <Link href={"#testimonials"}>Testimonials</Link>
          </li>
          <li className='hover:bg-slate-400/[0.1] cursor-pointer px-3 py-2 rounded-lg'>
          <Link href={"#pricing"}>Pricing</Link>
          </li>
        </ul>
      </div>
        <div className="flex items-center space-x-4">
            <button className='px-3 py-2 lg:block hidden rounded-xl bg-transparent text-sm  hover:bg-gray-400/[0.2]'>Sign in</button>
            <button className='px-3 py-2 rounded-full lg:block hidden bg-blue-500 text-sm hover:bg-blue-400 font-semibold text-white'>Get started today</button>
            <div className="lg:hidden block">
            <MobileNavbar />
            </div>
        </div>
        </div>

      </motion.div>
    </header>
    )
}
