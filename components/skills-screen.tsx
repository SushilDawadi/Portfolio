"use client";

import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsScreen() {
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

	// Update category gradients
	const categoryGradients = [
		"from-gray-800 to-gray-900",
		"from-gray-800 to-gray-900",
		"from-gray-800 to-gray-900",
		"from-gray-800 to-gray-900",
	];

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
					SKILLS
				</motion.h2>

				{skillsData.categories.map((category, categoryIndex) => (
					<motion.div key={categoryIndex} variants={item} className="mb-8">
						<h3 className="text-lg font-bold mb-4 flex items-center text-white hover:text-white">
							<div
								className={`h-3 w-3 rounded-full bg-gradient-to-r ${
									categoryGradients[categoryIndex % categoryGradients.length]
								} mr-2`}
							></div>
							{category.name}
						</h3>
						{/* Update skill category boxes */}
						<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 shadow-lg">
							<div className="flex flex-wrap gap-2">
								{category.skills.map((skill, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.3, delay: index * 0.05 }}
										whileHover={{ scale: 1.05, y: -2 }}
									>
										<Badge
											className={`bg-gradient-to-r ${
												categoryGradients[
													categoryIndex % categoryGradients.length
												]
											} hover:from-gray-700 hover:to-gray-800 text-gray-300 hover:text-gray-300 border-0 px-3 py-1 shadow-md`}
										>
											{skill}
										</Badge>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				))}

				{/* <motion.div variants={item} className="mt-8">
					<h3 className="text-lg font-bold mb-4 flex items-center text-white hover:text-white">
						<div className="h-3 w-3 rounded-full bg-gradient-to-r from-white/20 to-white/10 mr-2"></div>
						Skill Levels
					</h3>

					<div className="space-y-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 shadow-lg">
						{[
							{
								name: "Flutter & Dart",
								level: 90,
								color: "from-gray-700 to-gray-800",
							},
							{
								name: "UI/UX Design",
								level: 85,
								color: "from-gray-700 to-gray-800",
							},
							{
								name: "State Management",
								level: 88,
								color: "from-gray-700 to-gray-800",
							},
							{
								name: "API Integration",
								level: 92,
								color: "from-gray-700 to-gray-800",
							},
							{
								name: "Firebase",
								level: 80,
								color: "from-gray-700 to-gray-800",
							},
						].map((skill, index) => (
							<div key={index} className="space-y-2">
								<div className="flex justify-between">
									<span className="text-sm font-medium text-gray-300 hover:text-gray-300">
										{skill.name}
									</span>
									<span className="text-sm text-gray-400 hover:text-gray-400">
										{skill.level}%
									</span>
								</div>
								<div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: `${skill.level}%` }}
										transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
										className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
									>
										<div className="absolute inset-0 bg-gray-600/20 opacity-0 animate-pulse"></div>
									</motion.div>
								</div>
							</div>
						))}
					</div>
				</motion.div> */}
			</motion.div>
		</div>
	);
}
