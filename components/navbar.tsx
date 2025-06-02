"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Home, Mail, Rocket, User, Wrench } from "lucide-react";

interface NavbarProps {
	currentScreen: string;
	navigateTo: (screen: string) => void;
}

export default function Navbar({ currentScreen, navigateTo }: NavbarProps) {
	const isMobile = useMediaQuery("(max-width: 768px)");

	const navItems = [
		{
			name: "home",
			icon: Home,
			label: "Home",
			gradient: "from-indigo-600 via-blue-700 to-gray-900",
		},
		{
			name: "about",
			icon: User,
			label: "About",
			gradient: "from-green-600 via-emerald-700 to-gray-900",
		},
		{
			name: "experience",
			icon: Briefcase,
			label: "Experience",
			gradient: "from-yellow-600 via-orange-700 to-gray-900",
		},
		{
			name: "projects",
			icon: Rocket,
			label: "Projects",
			gradient: "from-pink-600 via-purple-700 to-gray-900",
		},
		{
			name: "skills",
			icon: Wrench,
			label: "Skills",
			gradient: "from-teal-600 via-cyan-700 to-gray-900",
		},
		{
			name: "contact",
			icon: Mail,
			label: "Contact",
			gradient: "from-red-600 via-pink-700 to-gray-900",
		},
	];

	return (
		<motion.nav
			initial={{ y: 80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
			className={`
				fixed z-50
				w-full
				${
					isMobile
						? "bottom-0 left-0 px-0"
						: "bottom-8 left-1/2 -translate-x-1/2 max-w-md"
				}
				pointer-events-auto
			`}
			role="navigation"
			aria-label="Bottom navigation"
		>
			<div
				className={`
					flex ${
						isMobile
							? "justify-between bg-black/90 border-t border-white/10 rounded-t-3xl py-2 px-2 shadow-2xl"
							: "items-center bg-black/70 rounded-full border border-white/10 shadow-xl p-2 mx-auto"
					}
					backdrop-blur
				`}
			>
				{navItems.map((item) => {
					const Icon = item.icon;
					const isActive = currentScreen === item.name;
					return (
						<motion.button
							key={item.name}
							onClick={() => navigateTo(item.name)}
							type="button"
							aria-label={item.label}
							aria-current={isActive ? "page" : undefined}
							className={`
								group relative flex flex-col items-center justify-center
								${isMobile ? "flex-1 min-w-0 mx-1" : ""}
								${isMobile ? "h-14 w-full" : "h-12 w-12"}
								bg-transparent
								${isActive ? "text-white" : "text-gray-400 hover:text-white"}
								transition-colors
								focus:outline-none
								overflow-visible
								rounded-xl
							`}
							whileHover={isMobile ? { scale: 1.06 } : { scale: 1.12 }}
							whileTap={{ scale: 0.93 }}
						>
							<AnimatePresence>
								{isActive && (
									<motion.div
										layoutId="activeTab"
										className={`absolute ${
											isMobile
												? "left-1/2 -translate-x-1/2 bottom-2 h-8 w-16"
												: "inset-0"
										}  
											${
												!isMobile
													? `bg-gradient-to-r ${item.gradient} rounded-full opacity-80`
													: "bg-white/10 rounded-full"
											}
											${isMobile ? "blur-[2px]" : ""}
										`}
										style={isMobile ? { zIndex: 0 } : {}}
										transition={{ type: "spring", stiffness: 300, damping: 30 }}
									/>
								)}
							</AnimatePresence>
							<span className="relative z-10 flex flex-col items-center w-full">
								<Icon
									className={`${isActive ? "drop-shadow-lg" : ""} ${
										isMobile ? "h-6 w-6" : "h-6 w-6"
									} transition-all`}
								/>
							</span>
							{/* Desktop: show label as animated floating on hover/active */}
							{!isMobile && (
								<AnimatePresence>
									{isActive && (
										<motion.span
											initial={{ opacity: 0, y: 15, scale: 0.96 }}
											animate={{ opacity: 1, y: 0, scale: 1 }}
											exit={{ opacity: 0, y: 10, scale: 0.96 }}
											transition={{
												type: "spring",
												stiffness: 250,
												damping: 18,
											}}
											className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 to-gray-800 rounded px-3 py-1 text-xs text-white font-semibold shadow-lg whitespace-nowrap pointer-events-none"
										>
											{item.label}
										</motion.span>
									)}
								</AnimatePresence>
							)}
							<span className="sr-only">{item.label}</span>
						</motion.button>
					);
				})}
			</div>
		</motion.nav>
	);
}
