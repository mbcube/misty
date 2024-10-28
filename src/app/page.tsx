"use client";

import About from "@/components/about";
import Ca from "@/components/ca";
import Dex from "@/components/dex";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Ca />
      <Dex />
      <About />
    </div>
  );
}
