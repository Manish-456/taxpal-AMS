"use client";
import { faqLists } from '@/lib/faq'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export default function FAQ() {
  return (
    <div className="bg-[url('/background-faq.jpg')] bg-fixed bg-center w-full h-full">
      <motion.div
      variants={fadeIn("up", "spring", 0.2, 1)}
      whileInView={"show"}
      initial={"hidden"}
      className="py-24 px-4 mx-auto max-w-7xl w-full">
        <div className='text-3xl lg:text-4xl'>Frequently asked questions</div>
        <p className='max-w-xl mt-4 text-base lg:text-[17px] text-gray-700'>If you can&apos;t find what you&apos;re looking for, email our support team and if you&apos;re lucky someone will get back to you.</p>

        <div className="grid xl:grid-cols-3 mt-8 lg:grid-cols-2 grid-cols-1 ">
          {
            faqLists.map(faq => (
              <>
              <div key={faq.question} className='mt-4 sm:mt-8 mr-2 p-4' >
                <div className='font-thin mb-4 text-xl '>{faq.question}</div>
                <div className="h-[1px] w-full bg-gray-700/[0.3] my-4"></div>
                <p className='text-[15px] tracking-wide text-gray-700'>{faq.answer}</p>
                <div className="h-[1px] w-full bg-gray-700/[0.3] my-4"></div>
              </div>
              </>
            ))
          }
        </div>
      </motion.div>
    </div>
  )
}
