"use client";

import AboutScreen from "@/components/about-screen";
import ContactScreen from "@/components/contact-screen";
import ExperienceScreen from "@/components/experience-screen";
import HomeScreen from "@/components/home-screen";
import IPhoneFrame from "@/components/iphone-frame";
import Navbar from "@/components/navbar";
import ProjectsScreen from "@/components/projects-screen";
import SkillsScreen from "@/components/skills-screen";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Home() {
	const [currentScreen, setCurrentScreen] = useState("home");
	const [previousScreen, setPreviousScreen] = useState<string | null>(null);
	const [direction, setDirection] = useState(0);

	const navigateTo = (screen: string) => {
		setPreviousScreen(currentScreen);

		// Determine direction for animation
		const screens = [
			"home",
			"about",
			"experience",
			"projects",
			"skills",
			"contact",
		];
		const currentIndex = screens.indexOf(currentScreen);
		const nextIndex = screens.indexOf(screen);
		setDirection(nextIndex > currentIndex ? 1 : -1);

		setCurrentScreen(screen);
	};

	const goBack = () => {
		if (previousScreen) {
			setDirection(-1);
			setCurrentScreen(previousScreen);
			setPreviousScreen(null);
		} else {
			setDirection(-1);
			setCurrentScreen("home");
		}
	};

	const renderScreen = () => {
		switch (currentScreen) {
			case "home":
				return <HomeScreen navigateTo={navigateTo} />;
			case "about":
				return <AboutScreen />;
			case "experience":
				return <ExperienceScreen />;
			case "projects":
				return <ProjectsScreen />;
			case "skills":
				return <SkillsScreen />;
			case "contact":
				return <ContactScreen />;
			default:
				return <HomeScreen navigateTo={navigateTo} />;
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4 relative overflow-hidden">
			{/* Animated background elements: Hidden on small screens for better performance and clarity */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
				{/* Floating code elements */}
				<div className="absolute top-[10%] left-[5%] text-gray-700 opacity-20 text-4xl animate-float-slow">
					{"{"}
				</div>
				<div className="absolute top-[30%] right-[15%] text-gray-700 opacity-20 text-5xl animate-float-medium">
					{"</>"}
				</div>
				<div className="absolute bottom-[20%] left-[20%] text-gray-700 opacity-20 text-6xl animate-float-fast">
					{"()"}
				</div>
				<div className="absolute top-[60%] right-[10%] text-gray-700 opacity-20 text-4xl animate-float-slow">
					{"[]"}
				</div>

				{/* Animated circles */}
				<div className="absolute top-[15%] right-[25%] h-32 w-32 rounded-full bg-gray-800 opacity-20 animate-pulse-slow"></div>
				<div className="absolute bottom-[25%] right-[30%] h-48 w-48 rounded-full bg-gray-700 opacity-10 animate-pulse-medium"></div>
				<div className="absolute top-[45%] left-[15%] h-64 w-64 rounded-full bg-gray-800 opacity-10 animate-pulse-fast"></div>

				{/* Mobile app wireframe elements */}
				<div className="absolute top-[5%] left-[40%] w-16 h-6 rounded-md border border-gray-700 opacity-20"></div>
				<div className="absolute top-[8%] left-[40%] w-12 h-12 rounded-md border border-gray-700 opacity-20"></div>
				<div className="absolute top-[15%] left-[40%] w-16 h-2 rounded-md bg-gray-700 opacity-20"></div>
				<div className="absolute top-[18%] left-[40%] w-10 h-2 rounded-md bg-gray-700 opacity-20"></div>

				{/* Flutter logo hint */}
				<div className="absolute bottom-[10%] left-[10%] opacity-10">
					<div className="relative w-24 h-24">
						<div className="absolute inset-0 bg-gray-600 transform rotate-45"></div>
						<div className="absolute inset-0 bg-gray-700 transform rotate-[135deg]"></div>
					</div>
				</div>
			</div>

			<div className="fixed top-4 left-4 z-50">
				{currentScreen !== "home" && (
					<Button
						variant="ghost"
						size="icon"
						onClick={goBack}
						className="rounded-full bg-black/20 text-white hover:bg-black/40"
					>
						<ArrowLeft className="h-5 w-5" />
						<span className="sr-only">Back</span>
					</Button>
				)}
			</div>

			{/* Responsive IPhoneFrame: Centered with max-w-xs on small screens, original on md+ */}
			<div className="w-full flex justify-center items-center">
				<div className="w-full max-w-xs md:max-w-[380px]">
					<IPhoneFrame>
						<AnimatePresence mode="wait" initial={false}>
							<motion.div
								key={currentScreen}
								initial={{
									x: direction * 300,
									opacity: 0,
								}}
								animate={{
									x: 0,
									opacity: 1,
								}}
								exit={{
									x: direction * -300,
									opacity: 0,
								}}
								transition={{
									type: "spring",
									stiffness: 300,
									damping: 30,
								}}
								className="h-full w-full overflow-y-auto"
							>
								{renderScreen()}
							</motion.div>
						</AnimatePresence>
					</IPhoneFrame>
				</div>
			</div>

			<Navbar currentScreen={currentScreen} navigateTo={navigateTo} />
		</main>
	);
}
