"use client";

import { Dialog } from '@headlessui/react'
import { AlignRight, X } from 'lucide-react';
import Link from 'next/link';
import {motion} from 'framer-motion';

import React, { useState } from 'react'
import { fadeIn } from '@/lib/motion';

interface MobileNavbarProps {

}

export default function MobileNavbar({} : MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {setIsOpen(true)}
  function onClose() {setIsOpen(false)};
  return (
    <>
     <div onClick={onOpen} className='px-4  rounded-lg py-2  cursor-pointer'>
     <AlignRight size={28} />
        </div>
    <Dialog as={motion.div} 
          variants={fadeIn("right", "tween", 0.2 , 1)}
          initial={"hidden"}
          whileInView={"show"}
    onClose={onClose} className={'absolute shadow-xl h-full  p-4   backdrop-blur-sm bg-opacity-40  top-2 max-w-xl w-full  z-[9999] lg:hidden'} open={isOpen}>
         
      <Dialog.Panel className={"relative p-2 rounded-xl w-full max-w-xl bg-white   flex flex-col "}>  <h1 className='dark:text-slate-400 p-2 tracking-tight text-sm font-mono'>Navigation</h1>
      <motion.ul 

      role='list' className="flex flex-col ">
          <li className='hover:bg-slate-400/[0.1] cursor-pointer px-3 py-2 rounded-lg'>
            <Link href={"#features"}>Features</Link>
          </li>
          <li className='hover:bg-slate-400/[0.1] cursor-pointer px-3 py-2 rounded-lg'>
          <Link href={"#testimonials"}>Testimonials</Link>
            </li>
          <li className='hover:bg-slate-400/[0.1] cursor-pointer px-3 py-2 rounded-lg'>
          <Link href={"#pricing"}>Pricing</Link>
          </li>

          <li>
            <div className="h-[1px] mt-4 w-full bg-gray-300" />
            <div className="flex justify-between items-center mt-4">
            <button className='px-3 py-2  rounded-xl bg-transparent text-sm  hover:bg-gray-400/[0.2]'>Sign in</button>
            <button className='px-3 py-2 rounded-full bg-blue-500 text-sm hover:bg-blue-400 font-semibold text-white'>Get started today</button>

            </div>

          </li>
        </motion.ul>

       <div className="absolute  rounded-full cursor-pointer p-2 right-2 top-2 hover:text-gray-300" onClick={onClose}>

        <X />
       </div>

      </Dialog.Panel>
    </Dialog>
        </>
  )
}