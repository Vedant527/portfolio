'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../../../util/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} relative z-10 overflow-hidden`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between`}
    >
      <div className="flex-1 flex flex-col items-start z-10 order-2 lg:order-1">
        <motion.h1
          variants={textVariant(0.2)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-left mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500 tracking-tight"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={textVariant(0.4)}
          className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg"
        >
          Experienced Software Engineer with a passion for Machine Learning and High-Performance Computing.
        </motion.p>

        <motion.div
          variants={slideIn('left', 'tween', 0.6, 0.8)}
          className="flex"
        >
          <a
            href="/Official Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-zinc-800 px-8 font-medium text-white transition-all duration-300 hover:bg-zinc-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-zinc-700"
          >
            <span className="mr-2">View Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-1 flex items-center justify-center w-full relative z-10 order-1 lg:order-2"
      >
        <div className="relative w-full max-w-[400px] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[40px] blur-2xl -z-10"></div>
          <img
            src="/vedant_grad.png"
            alt="Vedant"
            className="w-full h-full object-cover rounded-[40px] border border-white/10 shadow-2xl"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
