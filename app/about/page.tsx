'use client'

import React, { useEffect } from "react";
import { Navigation } from '../components/nav';
import { About, Hero, Interests } from './sections';
import '../../global.css'; // Import the CSS file for the progress bar

const AboutMe = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      
      // Check if progressBar is not null before trying to access its properties
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
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto justify-items-center">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 lg:gap-8">
          <Navigation />
          <Hero />
          <About />
          <Interests />
        </div>
      </div>
      {/* No need for an additional div, the progress bar is styled via the imported CSS */}
      <div id="progress-bar"></div>
    </div>
  );
};

export default AboutMe;

