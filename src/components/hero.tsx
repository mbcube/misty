"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-32 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        <Image
          width={100}
          height={100}
          alt=""
          src="/img/image.jpg"
          className="h-32 w-auto rounded-full mb-10"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1 className="text-balance text-5xl font-thin tracking-tight text-sky-700 sm:text-7xl">
          Dive into the World of Misty
        </motion.h1>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8">
          Your Aquatic NFT Adventure Awaits!
        </p>
        <motion.div
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
          }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <Link
            target="_blank"
            href="https://x.com/mistyonsui"
            className="text-sm font-semibold leading-6 "
          >
            <svg
              className=" fill-sky-500 hover:fill-sky-600/50 w-16"
              viewBox="0 0 24 24"
            >
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
