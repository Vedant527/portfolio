'use client'

import React, { useEffect } from "react";
import { Navigation } from '../components/nav';
import { About, Hero, Interests } from './sections';
import '../../global.css';
import { Card } from '../components/card'; // Import your Card component
import Link from 'next/link'; // Import Link from Next.js

const AboutMe = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        progressBar.style.width = scrollPercentage + '%';
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="progress-bar"></div>
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto justify-items-center">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 lg:gap-8">
          <Navigation />
          <Hero />
          <About />
          <Interests />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

