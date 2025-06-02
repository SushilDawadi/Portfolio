import "@/app/globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-mono",
});

export const metadata = {
	title: "Sushil Dawadi | Flutter Developer",
	description:
		"Flutter Developer with a Passion for Building Mobile Experiences",
	generator: "v0.dev",
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${ibmPlexMono.variable} font-sans bg-white dark:bg-black text-black dark:text-white`}
			>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
