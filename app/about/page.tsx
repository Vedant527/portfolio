'use client'

import React from "react";
import { Navigation } from '../components/nav';
import { Timeline } from './sections';
import '../../global.css';

const AboutMe = () => {
  return (
    <div>
      <Navigation />

      <div className="container mx-auto min-h-screen px-4 pt-32 pb-16">
        <Timeline />
      </div>
    </div>
  );
};

export default AboutMe;

