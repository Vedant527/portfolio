'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../../../util/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="Who I Am" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-2xl tracking-tight text-zinc-100 mb-4"
      >
        <span> 
          My name is Vedant Bhat, and I am an aspiring Software Engineer interested in machine 
          learning and low-level, high performance Software Development. Currently, I am interested in various NLP topics including information retrieval and 
          differential privacy. I am continuously honing my skills in programming languages such as Java, C++, and Python, and actively seeking opportunities to contribute to 
          projects that align with my interests. My goal is to leverage my passion for machine learning and low-level software development to create innovative solutions 
          that solve complex problems. <br/><br/>
        </span>
        <span> 
          I am currently working towards my Masters at Georgia Tech with a dual specialization in 
          Machine Learning and Computing Systems. This involves taking courses like Advanced Operating Systems, High Performance Computing, Computer Vision, and Scientific 
          Machine Learning, amongst others. This unique combination of knowledge equips me with a multifaceted skill set that is crucial for developing high-performance machine 
          learning systems. In terms of work experience, I have spent the past three summers working various SWE internships at Amazon, IBM, and Fiserv. Check out my LinkedIn for more details on those. <br/><br/>
        </span>
        <span> Currently, I am based in Atlanta, GA. I enjoy playing basketball at Georgia Tech's Campus Rec Center, and I love trying new food (which has been especially enjoyable
          since Atlanta just received a Michelin Guide). Feel free to reach out via email or LinkedIn if you are looking to discuss a project, job, or just want to chat. 
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About;
