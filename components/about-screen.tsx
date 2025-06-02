"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function AboutScreen() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 300, damping: 24 },
		},
	};

	return (
		<div className="h-full w-full bg-gradient-to-b from-gray-900 to-black text-white overflow-y-auto">
			<motion.div
				ref={ref}
				variants={container}
				initial="hidden"
				animate="show"
				className="flex flex-col pt-20 pb-20 px-6"
			>
				<motion.h2
					variants={item}
					className="text-2xl font-bold font-mono tracking-tight mb-6 text-white"
				>
					ABOUT ME
				</motion.h2>

				<motion.div
					variants={item}
					className="relative w-full h-48 mb-6 rounded-xl overflow-hidden"
				>
					<Image
						src="/sushil_dawadi.jpg"
						alt="Sushil Dawadi"
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
						<span className="text-lg font-medium">Software Developer</span>
					</div>
				</motion.div>

				<motion.div variants={item} className="space-y-4 text-gray-300">
					<p>
						I'm a motivated Flutter Developer with a strong background in mobile
						application development. My journey in software development has been
						driven by a passion for creating intuitive, efficient, and visually
						appealing mobile experiences.
					</p>

					<div className="flex items-center space-x-2 py-2">
						<div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
						<span className="text-gray-300 text-sm">MY APPROACH</span>
						<div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
					</div>

					<p>
						With experience across multiple projects and companies, I've
						developed expertise in Flutter, Dart, and various state management
						solutions like BLoC and GetX. I enjoy the challenge of transforming
						complex requirements into elegant, user-friendly applications.
					</p>

					<div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700">
						<p className="italic text-gray-300">
							"My approach combines technical excellence with a keen eye for
							design, ensuring that the applications I build not only function
							flawlessly but also provide an exceptional user experience."
						</p>
					</div>

					<p>
						I'm constantly learning and adapting to new technologies to stay at
						the forefront of mobile development. My goal is to create
						applications that not only meet but exceed client expectations,
						delivering value through intuitive interfaces and robust
						functionality.
					</p>
				</motion.div>

				<motion.div variants={item} className="mt-8">
					<h3 className="text-lg font-bold mb-4 text-white">Education</h3>
					<div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700">
						<div className="flex justify-between items-start mb-2">
							<div>
								<h4 className="font-medium text-gray-300 hover:text-gray-300">
									Bachelor of Information Technology
								</h4>
								<p className="text-sm text-gray-400">
									Informatics College Pokhara
								</p>
							</div>
							<span className="text-sm text-gray-400">2022 - 2025</span>
						</div>
					</div>
				</motion.div>

				<motion.div variants={item} className="mt-8">
					<h3 className="text-lg font-bold mb-4 text-white">Certifications</h3>
					<div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700">
						<h4 className="font-medium text-gray-300 hover:text-gray-300">
							Flutter Essential Training
						</h4>
						<p className="text-sm text-gray-400">
							Build for Multiple Platforms, LinkedIn Learning
						</p>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
