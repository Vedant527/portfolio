"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${isIntersecting
					? "bg-transparent border-transparent"
					: "bg-brand-dark/80 border-white/10"
					}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/about"
							className="duration-200 text-zinc-400 hover:text-brand-blue drop-shadow-none hover:drop-shadow-[0_0_8px_rgba(58,134,255,0.5)]"
						>
							about
						</Link>
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-brand-blue drop-shadow-none hover:drop-shadow-[0_0_8px_rgba(58,134,255,0.5)]"
						>
							projects
						</Link>

						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-brand-blue drop-shadow-none hover:drop-shadow-[0_0_8px_rgba(58,134,255,0.5)]"
						>
							contact
						</Link>
						<Link
							href="/resume"
							target="_blank"
							rel="noopener noreferrer"
							className="duration-200 text-zinc-400 hover:text-brand-blue drop-shadow-none hover:drop-shadow-[0_0_8px_rgba(58,134,255,0.5)]"
						>
							resume
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-400 hover:text-brand-blue"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
