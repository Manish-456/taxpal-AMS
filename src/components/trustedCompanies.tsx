"use client";

import React from 'react'
import { Icons } from './Icons'
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export default function TrustedCompanies() {
  return (
    <motion.div
    variants={fadeIn("down", "tween", 0.2, 1)}
    initial={"hidden"}
    whileInView={"show"}
    className='max-w-7xl my-16 mx-auto w-full'>
        <h3 className='mb-8 font-semibold text-center'>Trusted by these six companies so far </h3>
        <div className="flex space-x-0 lg:px-0 px-4 lg:space-y-0 space-y-6 lg:space-x-12 items-center lg:flex-nowrap flex-wrap  justify-between">
      <Icons.transistor/>
      <Icons.tuple/>
      <Icons.staticmic />
      <Icons.statickit/>
    <Icons.miragle />
      <Icons.laravel />

        </div>
    </motion.div>
  )
}
