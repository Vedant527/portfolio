'use client';

const Hero = () => (
  <section className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
    <div className="flex flex-col items-start gap-6">
      <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight">
        About Me
      </h1>

      <p className="text-zinc-300 text-lg leading-relaxed">
        Experienced Software Engineer with a passion for Machine Learning and High-Performance Computing.
      </p>

      <a
        href="/Official Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-zinc-100 underline decoration-zinc-500 underline-offset-4 transition-colors"
      >
        View Resume
      </a>
    </div>
  </section>
);

export default Hero;
