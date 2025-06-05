"use client";

import "@/app/globals.css";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import BootLoader from "@/components/ui/boot_loader";
import { AnimatePresence } from "framer-motion";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import type React from "react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-mono",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isLoading, setIsLoading] = useState(true);
	const [showContent, setShowContent] = useState(false);

	const handleBootComplete = () => {
		setIsLoading(false);
		setTimeout(() => setShowContent(true), 300);
	};

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<title>Sushil Dawadi | Flutter Developer</title>
				<meta
					name="description"
					content="Flutter Developer with a Passion for Building Mobile Experiences"
				/>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
			</head>
			<body
				className={`${inter.variable} ${ibmPlexMono.variable} font-sans bg-white dark:bg-black text-black dark:text-white`}
			>
				<AnimatePresence mode="wait">
					{isLoading && <BootLoader onComplete={handleBootComplete} />}
				</AnimatePresence>

				{showContent && (
					<ThemeProvider attribute="class" defaultTheme="dark">
						<Navbar />
						{children}
					</ThemeProvider>
				)}
			</body>
		</html>
	);
}
