"use client";

import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.1 });

	return (
		<section
			id="skills"
			className="w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-950"
		>
			<div className="container mx-auto px-4 md:px-6">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5 }}
					className="max-w-4xl mx-auto"
				>
					<h2 className="text-3xl font-bold tracking-tighter font-mono mb-12">
						SKILLS
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div>
							<h3 className="text-xl font-bold font-mono mb-6">
								Languages & Tools
							</h3>
							<div className="flex flex-wrap gap-3">
								{skillsData.technical.map((skill, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 10 }}
										animate={
											isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
										}
										transition={{ duration: 0.3, delay: index * 0.05 }}
									>
										<Badge
											variant="secondary"
											className="px-4 py-2 text-sm font-mono hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
										>
											{skill}
										</Badge>
									</motion.div>
								))}
							</div>
						</div>
						<div>
							<h3 className="text-xl font-bold font-mono mb-6">Soft Skills</h3>
							<div className="flex flex-wrap gap-3">
								{skillsData.soft.map((skill, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 10 }}
										animate={
											isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
										}
										transition={{ duration: 0.3, delay: index * 0.05 }}
									>
										<Badge
											variant="outline"
											className="px-4 py-2 text-sm font-mono border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
										>
											{skill}
										</Badge>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
