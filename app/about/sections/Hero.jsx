'use client';

const Hero = () => (
  <section className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
    <div className="flex flex-col items-start gap-6">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
        About Me
      </h1>

      <p className="text-zinc-300 text-lg leading-relaxed">
        Experienced Software Engineer with a passion for Machine Learning and High-Performance Computing.
      </p>

      <a
        href="/Official Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-brand-blue underline decoration-brand-blue/30 underline-offset-4 transition-colors hover:shadow-[0_0_10px_rgba(58,134,255,0.4)]"
      >
        View Resume
      </a>
    </div>
  </section>
);

export default Hero;
