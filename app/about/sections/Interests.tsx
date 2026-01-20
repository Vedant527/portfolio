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
          <div className="container flex flex-col items-center justify-center px-4 mx-auto justify-items-center py-20">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-8 text-center">
              Topics I am interested in
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {[
                "Natural Language Processing",
                "Large Language Models",
                "Computer Vision",
                "High Performance Computing",
                "Low-Level Programming",
                "Parallelization",
                "Distributed Systems",
                "Information Retrieval"
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full text-zinc-300 text-sm md:text-base hover:bg-zinc-700/50 hover:text-white transition-all cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div id="progress-bar"></div>
    </section>
  );
};

export default Interests;
