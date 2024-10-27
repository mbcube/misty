import { FadeIn } from "@/faderIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Ca() {
  return (
    <motion.div className="relative isolate overflow-hidden w-screen ">
      <div
        id="community"
        className="bg-white/60 h-full grid sm:grid-cols-2 grid-cols-1"
      >
        <div className="flex items-center justify-center  py-10 sm:py-20 px-10 sm:px-0">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-left">
              {/* <p className="text-base font-semibold leading-7 text-sky-600">
            Community Access
          </p> */}
              <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-950 sm:text-7xl">
                Exclusive Access!
              </h2>
              <p className="mt-8 text-pretty text-lg text-gray-950 sm:text-3xl">
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
        <div className="flex items-center justify-center my-20">
          <Image
            width={1280}
            height={1280}
            alt=""
            src="/img/misty-billboard.jpeg"
            className=" opacity-90 rounded-full w-[24rem] sm:w-[36rem]"
          />
        </div>
      </div>
    </motion.div>
  );
}
