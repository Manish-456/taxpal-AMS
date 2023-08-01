"use client";

import { PricingLists } from '@/lib/pricing'
import { CheckCircle } from 'lucide-react'
import React from 'react'
import { Icons } from './Icons'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function Pricing() {
  return (
    <div id='pricing' className='bg-slate-900 mt-24'>
      <motion.div
       variants={staggerContainer()}
       whileInView={"show"}
       initial={"hidden"}
      className="py-24 max-w-7xl w-full mx-auto">
        <motion.div 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-center max-w-xl mx-auto relative text-white">
            <h1 className='lg:text-4xl relative text-2xl'>
            <Icons.curlyLine className='w-64 left-10 absolute mx-auto h-8 top-8 fill-blue-500' />
                Simple pricing, for everyone.</h1>
            <p className='lg:text-base text-gray-500 mt-6'>It doesn&apos;t matter what size your business is, our software won&apos;t work well for you.</p>
        </motion.div>

        <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="mt-8 flex justify-center  lg:flex-row flex-col lg:space-x-4 space-x-0">
            {
                PricingLists.map(pricing => (
           
                     <div className={`p-8 w-full rounded-xl lg:max-w-sm text-white ${pricing.recommended ? "bg-blue-700 lg:-order-none order-first" : "bg-transparent"}`} key={pricing.id}>
                        <h2 className='text-4xl'>{pricing.price}</h2>
                        <h3 className='my-4  font-semibold'>{pricing.serviceType}</h3>
                         <p className={`text-gray-400 leading-7 ${pricing.recommended ? "text-white" : " "}`}>{pricing.type}</p>
                         <button className={`py-2 my-4 bg-transparent border border-gray-700  rounded-2xl w-full ${pricing.recommended && "bg-white text-black "}`}>
                            Get started
                         </button>
                         <div className='mt-8'>
                           {
                            pricing.services.map((service) => (
                         <div key={service} className='flex items-center mb-4 text-sm '>
                         <CheckCircle className='mr-4 w-5 h-5' />
                         {service}
                         </div>

                            ))
                           }

                         </div>
                     </div>
                
                ))
            }
        </motion.div>
      </motion.div>
    </div>
  )
}
