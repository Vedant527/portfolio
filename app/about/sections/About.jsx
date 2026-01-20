'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { Card } from '../../components/card';
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
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <div className="flex justify-center mb-4">
        <TypingText title="My Journey" textStyles="text-center" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="h-full">
          <Card>
            <div className="p-8 flex flex-col h-full">
              <h3 className="text-xl font-bold text-zinc-100 mb-4">Experience</h3>
              <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                Currently,I am a Software Development Engineer II at AWS in Seattle, building a system that scans hosts and containers for vulnerabilities using contextual signals and LLMs to generate insights and continuously reevaluate threats. Previously, as an SDE I at Amazon, I architected LLM-powered content moderation pipelines processing 13M+ items annually and contributed to core recommendation services.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn('left', 'tween', 0.4, 1)} className="h-full">
          <Card>
            <div className="p-8 flex flex-col h-full">
              <h3 className="text-xl font-bold text-zinc-100 mb-4">Education</h3>
              <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                I completed my Masters at Georgia Tech with a dual specialization in
                Machine Learning and Computing Systems. This involved taking courses like Operating Systems, High Performance Computing, Computer Vision, and Scientific
                Machine Learning. This unique combination equips me with a multifaceted skill set crucial for developing high-performance systems.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 0.6, 1)} className="md:col-span-2">
          <Card>
            <div className="p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-zinc-100 mb-4">Beyond Coding</h3>
                <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                  Currently, I am based in Seattle, WA. I enjoy playing basketball and running. Currently trying to get back into guitar and trying to spend more time on side projects.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-zinc-900 bg-zinc-100 hover:bg-zinc-200 transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default About;
