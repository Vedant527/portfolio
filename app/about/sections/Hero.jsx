'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../../../util/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          About Me
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex items-center justify-center w-full"
      >
        <img
          src="/vedant_grad.png"
          alt="Vedant"
          className="w-1/2 h-1/2 object-cover rounded-[50px] z-10 relative"
        />
      </motion.div>

      <motion.div
      variants={slideIn('right', 'tween', .2, 1)}
      className="flex items-center justify-center w-full"
      >
        <div className="text-center mt-8">
            <a
              href="/Official Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-blue-800 text-white rounded-full hover:bg-blue-700"
            >
              View Resume
            </a>
          </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
