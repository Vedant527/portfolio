'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../../../util/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Temp" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
      >
        <span className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Temp</span> Temp
      </motion.p>
    </motion.div>
  </section>
);

export default About;
