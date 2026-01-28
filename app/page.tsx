"use client";

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
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center w-screen h-[100dvh] overflow-hidden bg-black">
      {/* Nebula / space gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.12),_transparent_65%)]" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.9)_100%)]" />

      {/* Navigation */}
      <nav className="my-16 animate-fade-in relative z-10">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg duration-500 text-zinc-500 hover:text-brand-blue hover:drop-shadow-[0_0_12px_rgba(58,134,255,0.6)]"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Stars */}
      <Particles
        className="absolute inset-0 animate-fade-in opacity-60 mix-blend-screen"
        quantity={140}
      />
      <ShootingStars />

      {/* Title + glow */}
      <div className="relative z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[180%] h-[40%] bg-brand-blue/25 blur-[140px]
          rounded-full animate-pulse mix-blend-screen pointer-events-none"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[140%] h-[25%] bg-brand-purple/20 blur-[100px]
          rounded-full animate-pulse delay-75 mix-blend-screen pointer-events-none"
        />

        <h1 className="relative py-8 text-4xl sm:text-6xl md:text-9xl font-display whitespace-nowrap
          text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40
          drop-shadow-[0_0_40px_rgba(120,160,255,0.25)]
          animate-title cursor-default"
        >
          Vedant Bhat
        </h1>
      </div>

      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtitle */}
      <div className="my-16 text-center animate-fade-in relative z-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg text-zinc-500">ms in ml @ gt</h2>
          <h2 className="text-lg text-zinc-500">swe @ aws</h2>
        </div>
      </div>
    </div>
  );
}
