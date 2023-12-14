"use client";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Particles from "../components/particles";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://linkedin.com/in/vedant-bhat",
		label: "LinkedIn",
		handle: "vedant-bhat",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/vedant527",
		label: "Github",
		handle: "vedant527",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:vedant.bhat527@gmail.com",
		address: "vedant.bhat527@gmail.com",
		label: "Mail",
		handle: "vedant.bhat527@gmail",
	}
];



export default function Contact() {
	const handleCopyToClipboard = (email: string) => {
		navigator.clipboard.writeText(email)
		  .catch((error) => {
			console.error('Error copying to clipboard:', error);
		  });
	}
	
	return (
		<div>
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto justify-items-center">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								onClick={() => s.address ? handleCopyToClipboard(s.address) : handleCopyToClipboard(s.href)}
								className={`p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16`}>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-200 via-zinc-400 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-slate-50 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
