"use client";

import React from "react";
import Heading from "./heading";
import { suggestionLists } from "@/lib/suggestion";
import { Icons } from "./Icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function Suggestions() {
  return (
    <motion.div
    variants={fadeIn("up", "tween", 0.2, 1)}
    initial={"hidden"}
    whileInView={"show"}
    className="mt-24 max-w-7xl  mx-auto ">
      <Heading
        title="Simplify everyday business tasks."
        hClass="text-3xl"
        subtitle="Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead."
        pClass="text-center max-w-2xl mt-4 mx-auto"
      />

      <div className="flex items-center  lg:flex-row flex-col justify-center">
        {suggestionLists.map((suggestion) => {
          const Icon = Icons[suggestion.icon];
          return (
            <>
              <motion.div
                className="p-4 flex flex-col relative space-y-4"
                key={suggestion.title}
              >
                <Icon className="bg-blue-500 h-9 w-9  rounded-xl" />
                <h3 className="text-blue-500 font-semibold text-sm">
                  {suggestion.title}
                </h3>
                <p className="text-semibold ">{suggestion.subtitle}</p>
                <p className="text-sm text-gray-400 ">{suggestion.text}</p>
                <div className="bg-gray-200/[0.2] relative rounded-2xl w-full ">
                  <div className="h-auto hover:scale-125   w-72 mx-auto aspect-square ">
                    <Image
                      alt={suggestion.title}
                      className="object-contain"
                      src={suggestion.image}
                      fill
                      priority
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            </>
          );
        })}
      </div>
    </motion.div>
  );
}
