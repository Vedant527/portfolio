'use client';

import Link from 'next/link';

const About = () => (
  <section className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
    <div className="flex flex-col gap-12">

      {/* Experience Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">Experience</h2>
        <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">
          Currently, I am a Software Development Engineer II at AWS in Seattle focused on building systems to ensure our hosts / containers are secure. Previously, I worked on content recommendation and moderation systems in Amazon Personalization.
        </p>
      </div>

      {/* Education Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">Education</h2>
        <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">
          I completed my Masters at Georgia Tech with a dual specialization in Machine Learning and Computing Systems. This involved taking courses like Operating Systems, High Performance Computing, Computer Vision, and Scientific Machine Learning. This unique combination equips me with a multifaceted skill set crucial for developing high-performance systems.
        </p>
      </div>

      {/* Beyond Coding Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">Beyond Coding</h2>
        <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">
          Currently, I am based in Seattle, WA. I enjoy playing basketball and running. Currently trying to get back into guitar and trying to spend more time on side projects.
        </p>

        <div className="mt-2">
          <Link href="/contact" className="text-zinc-400 hover:text-brand-blue underline decoration-brand-blue/30 underline-offset-4 transition-colors hover:shadow-[0_0_10px_rgba(58,134,255,0.4)]">
            Get in Touch
          </Link>
        </div>
      </div>

    </div>
  </section>
);

export default About;
