"use client"
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const About = () => {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto justify-items-center">
        <Card>
          <div className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-4 mb-4 md:gap-4 md:py-4 lg:pb-4 md:p-4 m-4">
            Topics I am interested in:
            <span className="mt-4 text-zinc-400 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>Low Level Programming and Parallelization</li>
                <li>Natural Language Processing and Applications of LLMs</li>
                <li>High Performance Computing</li>
                <li>Computer Graphics and Computer Vision</li>
                <li aria-hidden="true">Low Level Programming and Parallelization</li>
              </ul>
            </span>
          </div>
        </Card>

        <Card>
          <div className="text-2xl text-zinc-400 md:gap-4 md:py-4 lg:pb-4 md:p-4 m-4 mt-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-4">About Me:</h2>
            <p className="mb-4">
              Hey! My name is Vedant, and I am a Masters Computer Science student with a specialization in ML and Computing Systems.
              I just recently finished my Bachelors in CS at Georgia Tech this past May with a focus on AI and Information Internetworks.
              I am currently working as an SDE I in Amazon's personalization department focusing on how to leverage data to optimize the 
              user experience.
            </p>
            <p className="mb-4">
              My interests are in various parts of ML as well as in low level computing. This is reflected in my coursework, as I have taken
              classes in Computer Vision, NLP, AI, Operating Systems, High Performance Computing, Graduate Algorithms, amongst many others.
              I particularly enjoy working in the intersection of these two worlds aiming to optimize ML algorithms and write high performance
              code by considering memory-level details.
            </p>
            <p>
              Currently, I am based out of Seattle, WA. I enjoy spending time hiking at one of the nearby national parks or trying local 
              food at Pike Place. Feel free to reach out to me if you would like to discuss any topics related to computing or in general.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
