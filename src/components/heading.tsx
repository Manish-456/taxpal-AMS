"use client";
import React from 'react'
import { motion } from 'framer-motion';

import { fadeIn } from '@/lib/motion';

type Props = {
    title? : string;
    pClass? : string;
    subtitle? : string;
    hClass? :string;
}

export default function Heading({
    pClass,
    title ,
    subtitle,
    hClass
}: Props) {
  return (
    <motion.div
    variants={fadeIn("up", "tween", 0.2, 1)}
    className={`max-w-7xl mx-auto text-center mb-8`}>
        <h1 className={hClass}>{title}</h1>
        <p className={`${pClass}`}>{subtitle}</p>

    </motion.div>
  )
}