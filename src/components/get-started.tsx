"use client";

import React from 'react'
import Heading from './heading'
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export default function GetStarted() {
  return (
    <div className="bg-[url('/background.jpg')] bg-no-repeat bg-fixed h-full w-full mt-24">
        <div className="bg-blue-500/[0.7]">

      <motion.div
      variants={fadeIn("left", "tween", 0.2, 1)}
      initial={"hidden"}
      whileInView={"show"}
      className="py-24 max-w-xl mx-auto ">
       <Heading 
       title='Get started today'
       hClass='lg:text-4xl text-2xl text-slate-50'
       subtitle='It&apos;s time to take control of your books. Buy our software so you can feel like you’re doing something productive.'
       pClass='text-center text-base mt-4 p-2 text-white/[0.8] leading-6'
       />

       <div className="mt-2 flex justify-center">
        <button className='bg-slate-200 font-semibold px-3 hover: py-2 rounded-xl text-sm'>
            Get 6 months free
        </button>
       </div>
        </motion.div>
       </div>
    </div>
  )
}
