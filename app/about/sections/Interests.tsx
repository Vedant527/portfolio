"use client"

import React from "react";
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../../../util/motion';
import { useEffect, useState } from "react";


const Interests = () => {
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
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >

      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-2xl tracking-tight text-zinc-100"
      >
        <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto justify-items-center">
          <div className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:gap-4 md:py-4 lg:pb-4 md:p-4 m-4">
            Topics I am interested in:
            <span className="text-zinc-400 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
              { !isMobile ? 
                (<ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                  <li>Natural Language Processing and Applications of LLMs</li>
                  <li>Computer Vision</li>
                  <li>High Performance Computing</li>
                  <li>Low-Level Programming and Parallelization</li>
                  <li aria-hidden="true">Natural Language Processing and Applications of LLMs</li>
                </ul> )
                :
                (<ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>NLP</li>
                <li>HPC</li>
                <li>Parallelization</li>
                <li>Computer Vision</li>
                <li aria-hidden="true">NLP</li>
              </ul> )
              }
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
    <div id="progress-bar"></div>
  </section>
  );
};

export default Interests;
