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
              className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-md text-zinc-300 text-sm hover:text-zinc-100 transition-colors"
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
