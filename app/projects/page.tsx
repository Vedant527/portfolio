import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Article } from "./article";
import "../../global.css";

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = allProjects.reduce((acc, project) => {
    acc[project.slug] = 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "collective-algos")!;
  const top2 = allProjects.find((project) => project.slug === "kvmnet")!;
  const top3 = allProjects.find((project) => project.slug === "solar-flare")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-5xl">
        <div className="flex flex-col gap-16">

          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400 leading-relaxed text-lg">
              Here are some of my favorite projects I've worked on over the last few years. A handful are internship projects.
            </p>
          </div>

          <div className="w-full h-px bg-zinc-800" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <Link href={`/projects/${featured.slug}`} className="group block">
                <article className="relative w-full p-8 border border-zinc-800 bg-zinc-900/50 rounded-lg hover:border-zinc-700 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      {featured.date ? (
                        <time dateTime={new Date(featured.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(featured.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {featured.description}
                  </p>
                  <div className="mt-8 text-zinc-400 group-hover:text-zinc-200 underline decoration-zinc-600 underline-offset-4 transition-colors">
                    Read more &rarr;
                  </div>
                </article>
              </Link>
            </div>

            {[top2, top3, ...sorted].map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
                <article className="h-full p-6 border border-zinc-800 bg-zinc-900/50 rounded-lg hover:border-zinc-700 transition-colors flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {project.date ? (
                        <time dateTime={new Date(project.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: "medium",
                          }).format(new Date(project.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-zinc-100 group-hover:text-white font-display mb-2 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-zinc-400 line-clamp-3 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                    {project.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
