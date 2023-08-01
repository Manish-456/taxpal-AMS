"use client";
import React from 'react'
import Heading from './heading'
import { testimonialLists } from '@/lib/testimonials'
import { Icons } from './Icons'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motion'

export default function Testimonials() {
  return (
    <div id='testimonials' className='mt-16 max-w-7xl mx-auto'>
      <motion.div
      variants={staggerContainer()}
      whileInView={"show"}
      initial={"hidden"}
      className="py-16 lg:px-0 px-4">
        <Heading
        title='Loved by businesses worldwide.'
        subtitle='Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.'
        hClass='text-3xl lg:text-4xl mb-4'
        pClass='px-3 text-gray-700 text-center max-w-xl mx-auto'
        />

        <div className="flex gap-6 items-start flex-wrap">
            {
                testimonialLists.map(testimonial => (
                    <>
                    <motion.div
                    variants={fadeIn("left", "tween", 0.2, 1)}
                    className="relative px-4 rounded-xl border border-gray-500/[0.2] shadow-md mr-4 z-40 max-w-full lg:max-w-sm py-4">
                        <Icons.quotes className='absolute z-0 top-3 left-2 fill-gray-600/[0.1] ' />
                        <blockquote>
                            <q className='text-[15px] lg:text-[17px] leading-7'>{testimonial.quotes}</q>
                        </blockquote>
                        <div className="h-[1px] mt-8 w-full bg-gray-200"></div>
                        <div className="flex justify-between items-center">
                            <div className='py-4 px-3'>
                                <div className='font-semibold '>{testimonial.username}</div>
                                <p className='text-gray-600 mt-2 text-sm'>{testimonial.position}</p>
                            </div>
                            <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 relative">
                                <Image
                                 src={testimonial.image}
                                fill
                                priority
                                referrerPolicy='no-referrer' 
                                className='object-center rounded-full'
                                alt={"users profile"} />

                            </div>
                        </div>
                    </motion.div>
                    </>
                ))
            }
        </div>
      </motion.div>
    </div>
  )
}
