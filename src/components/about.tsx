import { FadeIn } from "@/faderIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.div className="relative isolate overflow-hidden w-screen ">
      <div
        id="community"
        className="bg-white/60 h-full grid grid-cols-1 sm:grid-cols-2 "
      >
        <div className="flex items-center justify-center py-10 sm:py-20 px-10 sm:px-0">
          <Image
            width={1280}
            height={1280}
            alt=""
            src="/img/misty-portal.jpeg"
            className=" opacity-90 rounded-full w-[24rem] sm:w-[36rem] "
          />
        </div>
        <div className="flex items-center justify-center p-10 sm:p-0 ">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-left">
              <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-950 sm:text-7xl">
                Warp In
              </h2>
              <p className="mt-8 text-pretty text-lg text-gray-950 sm:text-3xl">
                Join an elite group of early adopters who receive special perks,
                including access to limited edition drops, insider updates, and
                voting power on key decisions that shape the future of the Misty
                universe.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </motion.div>
  );
}
