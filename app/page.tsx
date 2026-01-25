"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact" },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <nav className="my-16 animate-fade-in relative z-10">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg duration-500 text-zinc-400 hover:text-brand-blue hover:drop-shadow-[0_0_10px_rgba(58,134,255,0.5)]"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Particles className="absolute inset-0 animate-fade-in opacity-30" quantity={100} />

      <h1 className="z-10 py-8 text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 duration-1000 cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
        Vedant Bhat
      </h1>

      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="my-16 text-center animate-fade-in">
        {isMobile ? (
          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-zinc-400">
              ms in ml @ gt
            </h2>
            <h2 className="text-lg text-zinc-400">
              swe @ aws
            </h2>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-zinc-400">
              ms in ml @ gt
            </h2>
            <h2 className="text-lg text-zinc-400">
              swe @ aws
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}