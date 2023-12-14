"use client"

import React from "react";
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../../../util/motion';


const Interests = () => {
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
              <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>Low-Level Programming and Parallelization</li>
                <li>Natural Language Processing and Applications of LLMs</li>
                <li>High Performance Computing</li>
                <li>Computer Vision and Real-Time Image Segmentation</li>
                <li aria-hidden="true">Low Level Programming and Parallelization</li>
              </ul>
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
    <div id="progress-bar" style={{ width: '0%' }}></div>
  </section>
  );
};

export default Interests;
