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
        $MISTY on $SUI
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, rotateY: 90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        className="mt-10 flex items-center justify-center gap-x-16"
      >
        <Link
          target="_blank"
          href="https://x.com/mistyonsui"
          className="text-sm font-semibold leading-6 focus:outline-none"
        >
          {/* <motion.svg
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className=" fill-sky-700 hover:fill-sky-700/90 w-32"
            viewBox="0 0 24 24"
          >
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </motion.svg> */}

          <motion.svg
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            viewBox="0 0 448 512"
            className=" fill-gray-950/85 hover:fill-gray-900  w-16 sm:w-24 "
          >
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
          </motion.svg>
        </Link>

        <Link
          target="_blank"
          href="https://t.me/MISTYonsu1"
          className="text-sm font-semibold leading-6 focus:outline-none"
        >
          <motion.svg
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            viewBox="0 0 496 512"
            className=" fill-gray-950/85 hover:fill-gray-900 w-16 sm:w-24 "
          >
            <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
          </motion.svg>
          {/* <svg className=" w-32 fill-white" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
            />
          </svg> */}
        </Link>
      </motion.div>
    </div>
  );
}
