"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="w-full min-h-screen flex flex-col justify-center items-center pt-16">
			<div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col space-y-6"
				>
					<div>
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-4xl md:text-6xl font-bold tracking-tighter font-mono"
						>
							SUSHIL DAWADI
						</motion.h1>
						<motion.h2
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="text-xl md:text-2xl mt-2 text-gray-600 dark:text-gray-400"
						>
							Software Developer
						</motion.h2>
					</div>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="text-lg md:text-xl max-w-md"
					>
						Building exceptional mobile experiences with a passion for clean
						code and intuitive design.
					</motion.p>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="flex flex-wrap gap-4"
					>
						<Button
							className="font-mono bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
							asChild
						>
							<Link href="/Sushil_Dawadi.pdf" target="_blank" download>
								Download Resume
							</Link>
						</Button>
						<Button
							variant="outline"
							className="font-mono border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
							asChild
						>
							<Link href="#contact">Get in Touch</Link>
						</Button>
					</motion.div>
				</motion.div> 
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="relative aspect-square max-w-md mx-auto md:ml-auto rounded-xl overflow-hidden"
				>
					<Image
						src="/software-developer-portrait.png"
						alt="Sushil Dawadi"
						width={400}
						height={400}
						className="object-cover"
						priority
					/>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					delay: 1,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
				}}
				className="absolute bottom-10"
			>
				<Link href="#about" aria-label="Scroll to About section">
					<ArrowDown className="h-8 w-8 text-gray-500 dark:text-gray-400" />
				</Link>
			</motion.div>
		</section>
	);
}
