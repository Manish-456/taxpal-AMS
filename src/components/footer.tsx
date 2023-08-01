"use client";
import { DollarSignIcon } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { Icons } from './Icons'
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export const montserrat = Montserrat({
    weight : ["400", "600", "700" , "800"],
    display : "swap",
    subsets : ["latin"]
    
})

export default function Footer() {
  return (
    <footer className='mt-8 lg:mt-24'>
      <motion.div
      variants={fadeIn('left', "tween", 0.2, 1)}
      initial={"hidden"}
      whileInView={"show"}
      className="max-w-7xl w-full mx-auto p-4">
        <div className="flex  flex-col ">

      <div className="flex flex-col space-y-4  justify-center  items-center">
      <div className="flex items-center space-x-2 ">
            <DollarSignIcon className='border border-gray-300 w-8 h-8 rounded-full bg-sky-500 text-white'/>
            <h3 className={`${montserrat.className} text-xl font-bold`}>Tax<span className='text-sky-500'>Pal</span></h3>
        </div>

        <ul role='list' className="flex space-x-8  items-center">
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
        <div className="flex items-center mt-16 lg:flex-row flex-col-reverse justify-between space-y-4 lg:space-x-4">
             <p className="text-gray-700  lg:mt-0 mt-4 text-sm ">Copyright &copy; 2023 TaxPal. All rights reserved</p>
             <div className='flex items-center gap-x-4'>
         <Link href={'https://twitter.com'}>
            <Icons.twitter />
         </Link>
         <Link href={'https://github.com'}>
            <Icons.github />
         </Link>
             </div>
        </div>
        </div>

      </motion.div>
    </footer>
    )
}
