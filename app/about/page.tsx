'use client'

import React from "react";
import { Navigation } from '../components/nav';
import { About, Hero, Interests } from './sections';
import '../../global.css';

const AboutMe = () => {
  return (
    <div>
      <Navigation />

      <div className="container mx-auto min-h-screen px-4 pt-32 pb-16">
        <div className="flex flex-col gap-8 md:gap-12">
          <Hero />
          <About />
          <Interests />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

