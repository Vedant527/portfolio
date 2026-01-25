"use client"

import React from "react";

const Interests = () => {
  const interests = [
    "High Throughput LLM Inference",
    "Recommender Systems",
    "Computer Vision",
    "High Performance Computing",
    "Low-Level Programming and Parallelization",
    "Distributed Systems",
    "Information Retrieval"
  ];

  return (
    <section className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-zinc-100">
          Interests
        </h2>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-brand-dark/50 border border-white/10 rounded-md text-zinc-300 text-sm hover:text-white hover:border-brand-blue/50 hover:shadow-[0_0_10px_rgba(58,134,255,0.3)] transition-all duration-300 backdrop-blur-sm cursor-default"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
