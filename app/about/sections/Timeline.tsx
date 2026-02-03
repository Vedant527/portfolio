"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const timelineData = [
    {
        year: "Oct 2025 — Present",
        role: "Software Development Engineer II",
        company: "AWS",
        companyUrl: "https://aws.amazon.com",
        location: "Seattle, WA",
        description: [
            "Designing real-time distributed evaluation engines and leveraging LLMs for automated risk assessment."
        ],
        skills: ["Distributed Systems", "LLMs", "System Design", "Java"]
    },
    {
        year: "Jan 2024 — Sep 2025",
        role: "Software Development Engineer I",
        company: "Amazon Personalization",
        companyUrl: "https://amazon.com",
        location: "Seattle, WA",
        description: [
            "Architected LLM-powered content moderation pipelines and optimized recommendation services for scale.",
        ],
        skills: ["LLMs", "Vector Search", "ML Model Training + Inference", "Python"]
    },
    {
        year: "Aug 2023 — Dec 2024",
        role: "Master of Science in Computer Science",
        company: "Georgia Tech",
        companyUrl: "https://www.gatech.edu",
        location: "Atlanta, GA",
        description: [
            "Specialized in Machine Learning and Computing Systems.",
        ],
        skills: ["Machine Learning", "Operating Systems", "High Performance Computing"]
    },
    {
        year: "Aug 2019 — May 2023",
        role: "Bachelor of Science in Computer Science",
        company: "Georgia Tech",
        companyUrl: "https://www.gatech.edu",
        location: "Atlanta, GA",
        description: [
            "Focused on Artificial Intelligence and Information Internetworks.",
        ],
        skills: ["AI", "Data Structures and Algorithms", "Computer Architecture"]
    },
    {
        year: "May 2022 — Aug 2022",
        role: "Software Development Engineer Intern",
        company: "Amazon",
        companyUrl: "https://amazon.com",
        location: "Seattle, WA",
        description: [
            "Engineered automated serverless workflows for advertising products using AWS CDK and Lambda."
        ],
        skills: ["AWS CDK", "AWS Lambda", "AWS S3", "Java"]
    },
    {
        year: "May 2021 — Dec 2021",
        role: "Software Engineer in Test Intern",
        company: "IBM",
        companyUrl: "https://www.ibm.com",
        location: "RTP, NC",
        description: [
            "Built scalable automated testing frameworks for DataPower Gateway to accelerate CI/CD pipelines."
        ],
        skills: ["Jenkins", "CI/CD", "Java"]
    },
    {
        year: "May 2020 — Aug 2020",
        role: "Software Engineer Intern",
        company: "Fiserv",
        companyUrl: "https://www.fiserv.com",
        location: "Alpharetta, GA",
        description: [
            "Developed simulation platforms to visualize and test debit routing logic."
        ],
        skills: ["JavaFX", "Java"]
    }
];

const interests = [
    "High Throughput LLM Inference",
    "Recommender Systems",
    "Computer Vision",
    "High Performance Computing",
    "Low-Level Programming",
    "Distributed Systems",
];

const TimelineItem = ({ data, isLast }: { data: typeof timelineData[0]; isLast: boolean }) => {
    return (
        <div className="relative flex gap-6 md:gap-12 group">
            {/* Vertical Line */}
            {!isLast && (
                <div className="absolute left-[5.5px] top-3 bottom-[-24px] md:bottom-[-48px] w-px bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-300 md:left-[179px]" />
            )}

            {/* Date / Left Column */}
            <div className="hidden md:block w-40 flex-shrink-0 text-right pt-1">
                <span className="font-mono text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">
                    {data.year}
                </span>
            </div>

            {/* Content */}
            <div className={`flex flex-col gap-2 relative w-full pl-8 md:pl-0 ${isLast ? "pb-0" : "pb-12"}`}>
                {/* Dot on timeline */}
                <div className="absolute left-[1px] md:-left-[33.5px] mt-2 h-2.5 w-2.5 rounded-full border-2 border-zinc-900 bg-zinc-500 group-hover:bg-brand-blue group-hover:scale-125 transition-all duration-300 z-10" />

                {/* Mobile Date */}
                <span className="md:hidden font-mono text-sm text-zinc-500 mb-1">
                    {data.year}
                </span>

                <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
                    {data.role}
                </h3>

                <div className="flex items-center gap-2 text-zinc-400">
                    {data.companyUrl ? (
                        <a href={data.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors flex items-center gap-1 font-medium">
                            {data.company} <ArrowUpRight className="w-4 h-4" />
                        </a>
                    ) : (
                        <span>{data.company}</span>
                    )}
                    {data.location && (
                        <>
                            <span className="text-zinc-600">•</span>
                            <span className="text-sm">{data.location}</span>
                        </>
                    )}
                </div>

                <div className="flex flex-col gap-1 text-zinc-400 mt-1">
                    {data.description.map((item, i) => (
                        <p key={i} className="leading-relaxed">
                            {item}
                        </p>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {data.skills.map((skill) => (
                        <span key={skill} className="text-xs font-mono px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-all">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Timeline = () => {
    return (
        <section className="mx-auto max-w-3xl px-4 sm:px-6">
            <header className="mb-16">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-100 mb-4">
                    About Me
                </h1>
                <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                    Experienced Software Engineer with a passion for <span className="text-zinc-200">Machine Learning</span> and <span className="text-zinc-200">High-Performance Computing</span>.
                </p>
                <div className="mt-6 flex gap-4">
                    <a
                        href="/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-100 text-zinc-900 hover:bg-white hover:scale-105 transition-all font-medium text-sm"
                    >
                        View Resume <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </header>

            <div className="flex flex-col ml-4 md:ml-0">
                {timelineData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        data={item}
                        isLast={index === timelineData.length - 1}
                    />
                ))}

                {/* Interests Section - Styled to fit timeline or just after */}
                <div className="relative flex gap-6 md:gap-12 mt-12">


                    <div className="hidden md:block w-40 flex-shrink-0 text-right pt-2">
                        <span className="font-mono text-sm text-zinc-500">Interests</span>
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                        <h3 className="md:hidden text-xl font-bold text-zinc-100 mt-8">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                            {interests.map((interest) => (
                                <span key={interest} className="text-xs font-mono px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-brand-blue hover:border-brand-blue/30 transition-all">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
