"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "About", href: "about" },
  { name: "Community", href: "community" },
  { name: "Dex", href: "dex" },
];

export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <header className="text-gray-700">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8"
      >
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setTimeout(() => scrolltoHash(item.href), 250);
              }}
              className="text-sm font-semibold leading-6 "
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
