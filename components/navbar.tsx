"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Home, Mail, Rocket, User, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
	currentScreen: string;
	navigateTo: (screen: string) => void;
	loaderShowing?: boolean;
}

/**
 * The Navbar will:
 * - Not render at all if loaderShowing is true (default: false)
 * - Not render at all on first paint, only after mount (prevents double render/animation bug)
 * - Be less wide on desktop (width fits icon buttons; no max-w-md)
 * - On mobile, vertical navbar at side (left: 0, top: 50%, transform: -translate-y-1/2), with gap from screen edge
 * - On mobile, navbar is smaller (narrower, smaller icons, less padding) and will not overlap/hide mobile frame
 * - On mobile, will NOT show drop-shadow when selected
 * - Otherwise, keep all interactions and visuals the same
 */
export default function Navbar({
	currentScreen,
	navigateTo,
	loaderShowing = false,
}: NavbarProps) {
	const isMobile = useMediaQuery("(max-width: 768px)");

	// --- Fix for "showing two from starting": ---
	// Prevent rendering until after first client mount, so animation only happens once
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted || loaderShowing) return null;
	// --------------------------------------------

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
			initial={isMobile ? { x: -80, opacity: 0 } : { y: 80, opacity: 0 }}
			animate={isMobile ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }}
			transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
			className={`
				fixed z-50
				${
					isMobile
						? "top-1/2 left-2 -translate-y-1/2 w-auto"
						: "w-fit left-1/2 -translate-x-1/2 bottom-8"
				}
				pointer-events-auto
			`}
			style={
				isMobile
					? { minWidth: "unset", maxWidth: "unset" }
					: { minWidth: undefined, maxWidth: "max-content" }
			}
			role="navigation"
			aria-label="Side navigation"
		>
			<div
				className={`
					flex
					${
						isMobile
							? "flex-col items-center bg-black/90 border-l border-white/10 rounded-l-2xl py-1 px-1 gap-1"
							: "items-center bg-black/70 rounded-full border border-white/10 shadow-xl p-1 gap-1 mx-auto"
					}
					backdrop-blur
				`}
				style={
					!isMobile
						? { width: "fit-content", maxWidth: "max-content" }
						: undefined
				}
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
								${isMobile ? "flex-none min-h-0 my-0.5 h-9 w-9" : "h-10 w-10 mx-0.5"}
								bg-transparent
								${isActive ? "text-white" : "text-gray-400 hover:text-white"}
								transition-colors
								focus:outline-none
								overflow-visible
								rounded-xl
							`}
							whileHover={isMobile ? { scale: 1.08 } : { scale: 1.12 }}
							whileTap={{ scale: 0.93 }}
						>
							<AnimatePresence>
								{isActive && (
									<motion.div
										layoutId="activeTab"
										className={`absolute ${
											isMobile
												? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8"
												: "inset-0"
										}  
											${
												!isMobile
													? `bg-gradient-to-r ${item.gradient} rounded-full opacity-80`
													: "bg-white/10 rounded-full"
											}
											${isMobile ? "blur-[1.5px]" : ""}
										`}
										style={isMobile ? { zIndex: 0 } : {}}
										transition={{ type: "spring", stiffness: 300, damping: 30 }}
									/>
								)}
							</AnimatePresence>
							<span className="relative z-10 flex flex-col items-center w-full">
								<Icon
									className={`${
										!isMobile && isActive ? "drop-shadow-lg" : ""
									} ${isMobile ? "h-4 w-4" : "h-5 w-5"} transition-all`}
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
