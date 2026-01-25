"use client";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
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
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
				<div className="flex flex-col gap-16">

					<div className="flex flex-col gap-6">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
							Contact
						</h2>
						<p className="text-zinc-400 leading-relaxed text-lg">
							Feel free to reach out if you want to collaborate on a project, have a question, or just want to say hi.
						</p>
					</div>

					<div className="h-px w-full bg-zinc-800" />

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						{socials.map((s) => (
							<Link
								key={s.handle}
								href={s.href}
								target="_blank"
								onClick={() => s.address ? handleCopyToClipboard(s.address) : undefined}
								className="group flex items-center gap-4 p-4 border border-zinc-800/50 rounded-lg hover:border-zinc-700 hover:bg-zinc-900/50 transition-all"
							>
								<span className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/50 text-zinc-400 group-hover:text-zinc-200 group-hover:bg-zinc-800 transition-all border border-zinc-700/50">
									{s.icon}
								</span>
								<div className="flex flex-col">
									<span className="text-zinc-200 font-medium group-hover:text-white transition-colors">
										{s.label}
									</span>
									<span className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors font-mono">
										{s.handle}
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
