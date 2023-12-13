'use client'

import { Navigation } from '../components/nav'
import { About, Hero } from './sections';

const AboutMe = () => (
  <div className="container flex items-center justify-center min-h-screen px-4 mx-auto justify-items-center">
    <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 lg:gap-16">
      <Navigation />
      <Hero />
      <div className="relative">
        <About />
      </div>
    </div>
  </div>
);

export default AboutMe;
