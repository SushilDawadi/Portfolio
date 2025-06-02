"use client";

import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import {
	ChevronLeft,
	ChevronRight,
	ExternalLink,
	Github,
	Info,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ProjectsScreen() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [activeProject, setActiveProject] = useState(0);
	const [showInfo, setShowInfo] = useState(false);

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

	const nextProject = () => {
		setActiveProject((prev) =>
			prev === projectsData.length - 1 ? 0 : prev + 1
		);
		setShowInfo(false);
	};

	const prevProject = () => {
		setActiveProject((prev) =>
			prev === 0 ? projectsData.length - 1 : prev - 1
		);
		setShowInfo(false);
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
					PROJECTS
				</motion.h2>

				<motion.div variants={item} className="relative">
					<div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 shadow-lg">
						<Image
							src={
								projectsData[activeProject].image ||
								"/placeholder.svg?height=300&width=400&query=mobile app interface"
							}
							alt={projectsData[activeProject].title}
							fill
							className="object-cover"
						/>

						{/* Overlay with gradient */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

						{/* Project info button */}
						<button
							onClick={() => setShowInfo(!showInfo)}
							className="absolute top-2 right-2 z-10 flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-colors"
						>
							<Info className="h-4 w-4 text-gray-300" />
						</button>

						{/* Project info overlay */}
						<motion.div
							className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-6 text-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: showInfo ? 1 : 0 }}
							transition={{ duration: 0.3 }}
							style={{ pointerEvents: showInfo ? "auto" : "none" }}
						>
							<h3 className="text-xl font-bold mb-2 text-white hover:text-white">
								{projectsData[activeProject].title}
							</h3>
							<p className="text-gray-300 mb-4 hover:text-gray-300">
								{projectsData[activeProject].description}
							</p>
							<div className="flex flex-wrap justify-center gap-2 mb-4">
								{projectsData[activeProject].technologies.map((tech, index) => (
									<Badge
										key={index}
										variant="outline"
										className="bg-gray-800 border-gray-700 text-xs font-mono text-gray-300 hover:text-gray-300"
									>
										{tech}
									</Badge>
								))}
							</div>
							<div className="flex space-x-3">
								<Link
									href={projectsData[activeProject].github || "#"}
									target={
										projectsData[activeProject].github ? "_blank" : undefined
									}
									rel={
										projectsData[activeProject].github
											? "noopener noreferrer"
											: undefined
									}
									className={`flex items-center justify-center h-10 w-10 rounded-full transition-colors ${
										projectsData[activeProject].github
											? "bg-white/20 hover:bg-white/30"
											: "bg-gray-600/20 cursor-not-allowed"
									}`}
									onClick={
										!projectsData[activeProject].github
											? (e) => e.preventDefault()
											: undefined
									}
								>
									<Github
										className={`h-5 w-5 ${
											projectsData[activeProject].github
												? "text-white"
												: "text-gray-500"
										}`}
									/>
									<span className="sr-only">GitHub</span>
								</Link>
								<Link
									href={projectsData[activeProject].link || "#"}
									target={
										projectsData[activeProject].link ? "_blank" : undefined
									}
									rel={
										projectsData[activeProject].link
											? "noopener noreferrer"
											: undefined
									}
									className={`flex items-center justify-center h-10 w-10 rounded-full transition-colors ${
										projectsData[activeProject].link
											? "bg-white/20 hover:bg-white/30"
											: "bg-gray-600/20 cursor-not-allowed"
									}`}
									onClick={
										!projectsData[activeProject].link
											? (e) => e.preventDefault()
											: undefined
									}
								>
									<ExternalLink
										className={`h-5 w-5 ${
											projectsData[activeProject].link
												? "text-white"
												: "text-gray-500"
										}`}
									/>
									<span className="sr-only">Live Demo</span>
								</Link>
							</div>
							<button
								onClick={() => setShowInfo(false)}
								className="absolute bottom-4 text-sm text-white hover:text-gray-300 transition-colors"
							>
								Tap to close
							</button>
						</motion.div>

						<div className="absolute bottom-0 left-0 right-0 p-4">
							<h3 className="text-xl font-bold text-white hover:text-white">
								{projectsData[activeProject].title}
							</h3>
							<p className="text-sm text-gray-300 mt-1 hover:text-gray-300">
								{projectsData[activeProject].role}
							</p>
						</div>

						<div className="absolute top-2 left-2 flex space-x-2">
							<Link
								href={projectsData[activeProject].github || "#"}
								target={
									projectsData[activeProject].github ? "_blank" : undefined
								}
								rel={
									projectsData[activeProject].github
										? "noopener noreferrer"
										: undefined
								}
								className={`flex items-center justify-center h-8 w-8 rounded-full transition-colors ${
									projectsData[activeProject].github
										? "bg-black/50 hover:bg-black/70"
										: "bg-gray-600/30 cursor-not-allowed"
								}`}
								onClick={
									!projectsData[activeProject].github
										? (e) => e.preventDefault()
										: undefined
								}
							>
								<Github
									className={`h-4 w-4 ${
										projectsData[activeProject].github
											? "text-white"
											: "text-gray-500"
									}`}
								/>
								<span className="sr-only">GitHub</span>
							</Link>
							<Link
								href={projectsData[activeProject].link || "#"}
								target={projectsData[activeProject].link ? "_blank" : undefined}
								rel={
									projectsData[activeProject].link
										? "noopener noreferrer"
										: undefined
								}
								className={`flex items-center justify-center h-8 w-8 rounded-full transition-colors ${
									projectsData[activeProject].link
										? "bg-black/50 hover:bg-black/70"
										: "bg-gray-600/30 cursor-not-allowed"
								}`}
								onClick={
									!projectsData[activeProject].link
										? (e) => e.preventDefault()
										: undefined
								}
							>
								<ExternalLink
									className={`h-4 w-4 ${
										projectsData[activeProject].link
											? "text-white"
											: "text-gray-500"
									}`}
								/>
								<span className="sr-only">Live Demo</span>
							</Link>
						</div>

						<button
							onClick={prevProject}
							className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-colors"
						>
							<ChevronLeft className="h-5 w-5 text-gray-300" />
							<span className="sr-only">Previous Project</span>
						</button>

						<button
							onClick={nextProject}
							className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-colors"
						>
							<ChevronRight className="h-5 w-5 text-gray-300" />
							<span className="sr-only">Next Project</span>
						</button>

						{/* Project indicators with animation */}
						<div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2">
							{projectsData.map((_, index) => (
								<button
									key={index}
									onClick={() => {
										setActiveProject(index);
										setShowInfo(false);
									}}
									className="group relative h-2 w-8 rounded-full overflow-hidden bg-white/30"
								>
									<motion.div
										className="absolute inset-0 bg-white rounded-full"
										initial={{ width: index === activeProject ? "100%" : "0%" }}
										animate={{ width: index === activeProject ? "100%" : "0%" }}
										transition={{ duration: 0.3 }}
									/>
									<span className="sr-only">Project {index + 1}</span>
								</button>
							))}
						</div>
					</div>

					<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 mb-4 border border-gray-700 shadow-lg">
						<p className="text-gray-300/90 text-sm hover:text-gray-300/90">
							{projectsData[activeProject].description}
						</p>
					</div>

					<div className="flex flex-wrap gap-2 mb-6">
						{projectsData[activeProject].technologies.map((tech, index) => (
							<Badge
								key={index}
								variant="outline"
								className="bg-gray-800 border-gray-700 text-xs font-mono text-gray-300 hover:text-gray-300"
							>
								{tech}
							</Badge>
						))}
					</div>

					<div className="flex justify-between items-center">
						<span className="text-xs text-white/70 hover:text-white/70">
							{activeProject + 1} of {projectsData.length}
						</span>
						<div className="flex space-x-2">
							<button
								onClick={prevProject}
								className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-colors"
							>
								<ChevronLeft className="h-5 w-5 text-gray-300" />
								<span className="sr-only">Previous</span>
							</button>
							<button
								onClick={nextProject}
								className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-colors"
							>
								<ChevronRight className="h-5 w-5 text-gray-300" />
								<span className="sr-only">Next</span>
							</button>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
