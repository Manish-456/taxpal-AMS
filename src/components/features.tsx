"use client";
import React, { useState } from 'react'
import Heading from './heading'
import Image from 'next/image'
import { FeatureLists, imageLists } from '@/lib/features';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export default function Features() {
  const [selectedFeatureId, setSelectedFeatureId] = useState(0);


  return (
    <motion.div
    variants={fadeIn("up", "tween", 0.2, 1)}
    initial={"hidden"}
    whileInView={"show"}
    id='features' className='w-full bg-blue-600 relative overflow-hidden   mt-8'>
        <Image src={'/background.jpg'} width={2245} height={1636} className='absolute z-0 left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]' alt="bg-img" />
        <div className="pt-24 pb-24 relative z-40">
       <Heading
       hClass='text-white text-3xl lg:px-0 px-3 lg:text-5xl mb-3'
       pClass='text-white text-sm lg:text-base lg:px-0 px-3' title='Everything you need to run your books.' subtitle='Well everything you need if you aren’t that picky about minor details like tax compliance.'/>
       <div className="mt-16 max-w-6xl  mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-5">
            <div className="flex space-y-6 mr-4  mt-12 flex-col">

            { 
                FeatureLists.map(feature => (
                    <>
                    <motion.div
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className={`p-4 hover:bg-slate-200/[0.3] cursor-pointer hover:bg-opacity-5  space-y-4 rounded-md   text-gray-50 ${(selectedFeatureId + 1) === (feature.id) ? 'bg-slate-200/[0.3] bg-opacity-5' : ''}`} onClick={() => setSelectedFeatureId(feature.id - 1)} key={feature.id}>
                        <button className='text-xl font-semibold'>{feature.title}</button>
                        <p>{feature.text}</p>
                    </motion.div>
                    </>
                ))
            }
            </div>
        </div>
        <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="col-span-7 lg:-order-none order-first">
            <div className="relative lg:mt-0 lg:w-[67.8125rem]">
                <Image alt='feature-img' src={imageLists[selectedFeatureId]} width={2220} className='rounded-xl' height={2350} />
            </div>
        </motion.div>
      </div>
       </div>
        </div>
    </motion.div>
  )
}
