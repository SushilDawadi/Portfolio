"use client";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { contactData } from "@/lib/data";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
	ArrowRight,
	ChevronDown,
	Download,
	Github,
	Linkedin,
	Mail,
	Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface HomeScreenProps {
	navigateTo: (screen: string) => void;
}

export default function HomeScreen({ navigateTo }: HomeScreenProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const isMobile = useMediaQuery("(max-width: 768px)");
	const [showApps, setShowApps] = useState(false);

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
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

	const iconItem = {
		hidden: { scale: 0, opacity: 0 },
		show: {
			scale: 1,
			opacity: 1,
			transition: { type: "spring", stiffness: 300, damping: 24 },
		},
	};

	// Define app icons with enhanced gradients - all using the same white gradient
	const appIcons = [
		{
			name: "About",
			icon: "👨‍💻",
			screen: "about",
			color: "from-gray-800 to-gray-900",
		},
		{
			name: "Experience",
			icon: "💼",
			screen: "experience",
			color: "from-gray-800 to-gray-900",
		},
		{
			name: "Projects",
			icon: "🚀",
			screen: "projects",
			color: "from-gray-800 to-gray-900",
		},
		{
			name: "Skills",
			icon: "🛠️",
			screen: "skills",
			color: "from-gray-800 to-gray-900",
		},
		{
			name: "Contact",
			icon: "📱",
			screen: "contact",
			color: "from-gray-800 to-gray-900",
		},
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
				{/* Profile Image with Animated Border */}
				<motion.div variants={item} className="flex justify-center mb-6">
					<div className="relative">
						<div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-white/50 to-white/30 opacity-75 animate-pulse"></div>
						<div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
							<Image
								src="/profile-image.png"
								alt="Sushil Dawadi"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</motion.div>
				{/* Name and Title */}
				<motion.div variants={item} className="text-center mb-6">
					<h1 className="text-3xl font-bold font-mono tracking-tight mb-1 text-white hover:text-white">
						SUSHIL DAWADI
					</h1>
					<div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700">
						<span className="text-sm font-medium text-gray-300 hover:text-gray-300">
							Software Developer
						</span>
					</div>
				</motion.div>
				{/* Bio */}
				<motion.p
					variants={item}
					className="text-center text-gray-300 hover:text-gray-300 mb-8"
				>
					Building exceptional mobile experiences with a passion for clean code
					and intuitive design.
				</motion.p>
				{/* Social Icons with Hover Effects */}
				<motion.div
					variants={item}
					className="flex justify-center space-x-4 mb-8"
				>
					{[
						{
							icon: Github,
							href: contactData.github,
							label: "GitHub",
							gradient: "from-gray-800 to-gray-900",
						},
						{
							icon: Linkedin,
							href: contactData.linkedin,
							label: "LinkedIn",
							gradient: "from-gray-800 to-gray-900",
						},
						{
							icon: Mail,
							href: `mailto:${contactData.email}`,
							label: "Email",
							gradient: "from-gray-800 to-gray-900",
						},
						{
							icon: Phone,
							href: `tel:${contactData.phone}`,
							label: "Phone",
							gradient: "from-gray-800 to-gray-900",
						},
					].map((social, index) => {
						const Icon = social.icon;
						return (
							<motion.a
								key={social.label}
								variants={iconItem}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-800 px-2 py-1 rounded-md">
									{social.label}
								</span>
								<Icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
								<span className="sr-only">{social.label}</span>
							</motion.a>
						);
					})}
				</motion.div>
				{/* Resume Button with Animation */}
				<motion.div variants={item} className="mb-8">
					<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
						<Button
							className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-medium border-0"
							asChild
						>
							<Link href="/Sushil_Dawadi.pdf" target="_blank" download>
								<Download className="mr-2 h-4 w-4" /> Download Resume
							</Link>
						</Button>
					</motion.div>
				</motion.div>
				{/* App Icons Section */}
				<motion.div variants={item} className="mb-4">
					<div className="flex justify-between items-center mb-2">
						<h2 className="text-lg font-semibold text-white hover:text-white">
							My Portfolio
						</h2>
						<Button
							variant="ghost"
							size="sm"
							className="text-gray-400 hover:text-white"
							onClick={() => setShowApps(!showApps)}
						>
							<ChevronDown
								className={`h-4 w-4 transition-transform ${
									showApps ? "rotate-180" : ""
								}`}
							/>
						</Button>
					</div>

					<AnimatePresence>
						{showApps && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								className="overflow-hidden"
							>
								<div className="grid grid-cols-4 gap-4 mb-6">
									{appIcons.map((app) => (
										<motion.button
											key={app.name}
											whileHover={{ scale: 1.05, y: -5 }}
											whileTap={{ scale: 0.95 }}
											onClick={() => navigateTo(app.screen)}
											className="flex flex-col items-center"
										>
											<div
												className={`flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br ${app.color} shadow-lg mb-1`}
											>
												<span className="text-2xl">{app.icon}</span>
											</div>
											<span className="text-xs font-medium text-gray-300 hover:text-gray-300">
												{app.name}
											</span>
										</motion.button>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
				Navigation Cards with Enhanced Design
				<motion.div variants={item} className="grid grid-cols-2 gap-4">
					{[
						{
							title: "About",
							icon: "",
							screen: "about",
							gradient: "from-gray-800 to-gray-900",
						},
						{
							title: "Experience",
							icon: "",
							screen: "experience",
							gradient: "from-gray-800 to-gray-900",
						},
						{
							title: "Projects",
							icon: "",
							screen: "projects",
							gradient: "from-gray-800 to-gray-900",
						},
						{
							title: "Skills",
							icon: "",
							screen: "skills",
							gradient: "from-gray-800 to-gray-900",
						},
					].map((item) => (
						<motion.button
							key={item.title}
							whileHover={{ scale: 1.05, y: -5 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => navigateTo(item.screen)}
							className={`relative flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg overflow-hidden group`}
						>
							<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
							<div className="absolute -inset-1 bg-gradient-to-r from-gray-700/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
							<span className="relative text-2xl mb-2 transform group-hover:scale-110 transition-transform">
								{item.icon}
							</span>
							<span className="relative text-sm font-medium text-gray-300 hover:text-gray-300">
								{item.title}
							</span>
						</motion.button>
					))}
				</motion.div>
				Contact Button with Enhanced Design
				<motion.div variants={item} className="mt-6">
					<Button
						variant="outline"
						className="w-full border-gray-700 text-white hover:bg-gray-800 font-medium group relative overflow-hidden"
						onClick={() => navigateTo("contact")}
					>
						<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
						<span className="relative flex items-center">
							Get in Touch{" "}
							<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</span>
					</Button>
				</motion.div>
				{/* Scroll Indicator */}
				<motion.div
					variants={item}
					className="flex justify-center mt-8"
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
				>
					<div className="w-1 h-10 rounded-full bg-gradient-to-b from-gray-800 to-gray-700 relative">
						<div className="absolute top-0 w-1 h-3 rounded-full bg-gray-600 animate-pulse"></div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
