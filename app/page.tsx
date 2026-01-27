"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import ShootingStars from "./components/shooting-stars";

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
    <div className="flex flex-col items-center justify-center fixed inset-0 w-screen h-[100dvh] overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
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
      <ShootingStars />

      <div className="relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[50%] bg-brand-blue/20 blur-[100px] pointer-events-none rounded-full animate-pulse opacity-50 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[30%] bg-brand-purple/20 blur-[80px] pointer-events-none rounded-full animate-pulse delay-75 mix-blend-screen" />
        <h1 className="relative py-8 text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 duration-1000 cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Vedant Bhat
        </h1>
      </div>

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