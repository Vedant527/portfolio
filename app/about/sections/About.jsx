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
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl"
      >
        <span className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>
    </motion.div>
  </section>
);

export default About;
