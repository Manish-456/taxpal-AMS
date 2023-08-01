"use client";
import React from 'react'
import Link from 'next/link'
import {Play} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/lib/motion';
export default function Hero() {
  return (
    <motion.div
    variants={fadeIn("up", "tween", 0.2, 1)}
    initial={"hidden"}
    whileInView={"show"}
    className='max-w-7xl w-full  mx-auto lg:pt-32 lg:pb-32 pb-14 pt-14'>
      <h1 className="mx-auto w-full sm:max-w-4xl  text-5xl font-display sm:text-7xl font-display font-semibold px-6 text-center lg:text-center lg:px-4 tracking-tighter ">
      Accounting <span className='text-sky-500 relative whitespace-nowrap '>
      <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
       Made simple </span>  for small businesses.
      </h1>
      <motion.p
      variants={textVariant(1)}
      initial={"hidden"}
      whileInView={"show"}
      className='max-w-2xl mx-auto w-full lg:p-0 p-4 tracking-wide text-center mt-8 mb-8'>Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.</motion.p>
      <div className="flex items-center mt-12 space-x-4 justify-center">
        <button className="bg-black hover:bg-black/[0.6] text-white py-2 rounded-full text-sm font-semibold px-3">Get 6 months free</button>
        <button className="text-gray-500 border border-gray-300 hover:border-gray-400 py-2 rounded-full font-light text-sm  px-3">
            <Link href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} className='flex items-center space-x-3'>
                              <Play className='h-3 w-3 fill-sky-50 mr-2'/>
                 Watch Video</Link>
        </button>
      </div>
    </motion.div>
  )
}
