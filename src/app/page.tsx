"use client";

import About from "@/components/about";
import Dex from "@/components/dex";
import Hero from "@/components/hero";
import { FadeIn } from "@/faderIn";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <motion.div className="relative isolate overflow-hidden w-screen h-[35rem]">
        <Image
          width={3000}
          height={1000}
          alt=""
          src="/img/banner-2x.png"
          className="absolute w-screen h-full  object-cover opacity-20"
        />

        <div
          id="community"
          className="bg-white h-full flex items-center justify-center"
        >
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-base font-semibold leading-7 text-sky-600">
                Community Access
              </p>
              <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-950 sm:text-7xl">
                Exclusive Access with Misty!
              </h2>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-950 sm:text-xl/8">
                Join an elite group of early adopters who receive special perks,
                including access to limited edition drops, insider updates, and
                voting power on key decisions that shape the future of the Misty
                universe.
                {/* This isn’t just about
              owning a digital collectible—it’s about being part of a community
              that thrives on collaboration and creativity. Join us to unlock a
              world of possibilities where you can contribute to the evolution
              of your favorite aquatic companions! */}
              </p>
            </div>
          </FadeIn>
        </div>
      </motion.div>
      <About />
      <Dex />
    </div>
  );
}
