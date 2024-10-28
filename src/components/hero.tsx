"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="mx-auto h-screen flex flex-col items-center justify-center min-h-[35rem]">
      <div className="relative w-[40rem] h-[20rem] flex items-center justify-center">
        <motion.div
          className="absolute"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          <Image
            width={1280}
            height={1280}
            alt=""
            src="/img/image.jpg"
            className="h-48 align-middle w-auto rounded-full mb-10"
          />
        </motion.div>
        {isLoaded && (
          <Image
            width={480}
            height={480}
            alt=""
            src="/img/splash.gif"
            className="absolute w-[20rem] h-[20rem] top-[2rem]"
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      ></motion.div>

      <motion.h1 className="text-balance text-5xl font-thin tracking-tight text-sky-700 sm:text-9xl">
        MISTY
      </motion.h1>
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
          className="text-sm font-semibold leading-6 focus:outline-none"
        >
          <motion.svg
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className=" fill-sky-700 hover:fill-sky-700/90 w-32"
            viewBox="0 0 24 24"
          >
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </motion.svg>
        </Link>
      </motion.div>
    </div>
  );
}
