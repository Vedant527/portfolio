"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the window width is less than a certain threshold (e.g., 768px)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check on mount
    handleResize();

    // Add event listener to check on window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative pb-16 flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg duration-500 text-slate-300 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Vedant Bhat
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        {isMobile ? (
          <>
            <h2 className="text-lg text-slate-300">
              MS in ML & Computing @ Georgia Tech
            </h2>
            <h2 className="text-lg text-slate-300">
              Software Dev Engineer
            </h2>
          </>
        ) : (
          <>
            <h2 className="text-lg text-slate-300">
              Masters student specializing in Machine Learning and Computing Systems @ Georgia Tech
            </h2>
            <h2 className="text-lg text-slate-300">
              Software Development Engineer
            </h2>
          </>
        )}
      </div>
    </div>
  );
}