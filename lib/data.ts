import type { Contact, Experience, Project } from "./types";

export const experienceData: Experience[] = [
	{
		role: "Flutter Developer",
		company: "BlackTech Pvt. Ltd",
		duration: "December 2024 - Present",
		responsibilities: [
			"Developed a full-fledged restaurant management system (RestroX) with seamless API integration.",
			"Enhanced UI/UX for better user experience.",
			"Built a Nepali calendar app (Simple Patro) with localized features.",
			"Integrated custom date calculations and event notifications.",
		],
	},
	{
		role: "Flutter Developer",
		company: "Skybase Innovation",
		duration: "September 2024 - November 2024",
		responsibilities: [
			"Integrated socket communication for real-time messaging in Blinkr App (Social Media App).",
			"Successfully deployed the app with optimized backend communication.",
			"Worked on Trip Haru (Trip Sharing App) with real-time messaging capabilities.",
			"Integrated socket communication for real-time messaging.",
		],
	},
	{
		role: "Flutter Developer",
		company: "Aarambha IT Research Center Pvt.Ltd.",
		duration: "June 2024 - August 2024",
		responsibilities: [
			"Integrated RESTful APIs into the attendance system (Aarambha HRM App) and created a user-friendly design.",
			"Completed all the necessary setup for the app, from development to final preparations.",
			"Managed the deployment process to the App Store and Google Play Store.",
		],
	},
	{
		role: "Flutter Intern",
		company: "Everest Technologies",
		duration: "April 2024 - June 2024",
		responsibilities: [
			"Implemented features such as user management, restaurant details, roles and permissions for Restropoint App.",
			"Added functionality for password changes, KOT print, customer management, and transaction handling.",
			"Integrated location-based functionality using Flutter Maps.",
			"Successfully transformed a 40-page Figma design into a functional Flutter UI.",
		],
	},
];

export const projectsData: Project[] = [
	{
		title: "RestroX",
		description:
			"A comprehensive restaurant management system with user management, order processing, and inventory tracking.",
		role: "Flutter Developer",
		technologies: ["Flutter", "Dart", "RESTful API", "Firebase"],
		image: "/restrox.png",
		link: "https://play.google.com/store/search?q=restrox&c=apps&hl=en",
	},
	{
		title: "Simple Patro App",
		description:
			"A Nepali calendar application with localized features, event management, and custom date calculations.",
		role: "Flutter Developer",
		technologies: ["Flutter", "Dart", "Local Storage", "Custom Widgets"],
		image: "/simplepatro.png",
		link: "https://play.google.com/store/search?q=simple%20patro&c=apps&hl=en",
	},
	{
		title: "CV Maker",
		description:
			"An application that allows users to create professional CVs with customizable templates and export options.",
		role: "Flutter Developer",
		technologies: ["Flutter", "Dart", "PDF Generation", "Local Storage"],
		image: "/cvmaker.png",
		link: "https://play.google.com/store/apps/details?id=com.aarambhait.CVMaker&hl=en",
	},
	{
		title: "Trip Haru",
		description:
			"A trip sharing platform that allows users to plan, share, and join trips with real-time updates.",
		role: "Flutter Developer",
		technologies: ["Flutter", "Dart", "Socket.io", "Google Maps API"],
		image: "/tripharu.png",

		link: "https://play.google.com/store/apps/details?id=com.tripharu.android&hl=en",
	},
	{
		title: "RestroPoint",
		description:
			"A comprehensive restaurant management application designed to streamline daily operations, including table reservations, menu management, order processing, billing, and inventory tracking.",
		role: "Flutter Intern",
		technologies: ["Flutter", "Dart", "GetX", "REST API"],
		image: "/restropoint.png",

		link: "https://play.google.com/store/apps/details?id=com.techeverest.restropoint&hl=en",
	},
	{
		title: "CV Maker",
		description:
			"An application that allows users to create professional CVs with customizable templates and export options.",
		role: "Flutter Intern",
		technologies: ["Flutter", "Dart", "PDF Generation", "Local Storage"],
		image: "/cvmakereverest.png",
		link: "https://play.google.com/store/apps/details?id=com.techeverest.cvmaker&hl=en",
	},

	{
		title: "Arthasetu",
		description:
			"Business and finance management app with inventory management, finance tracking, and communication features.",
		role: "Full Stack Developer",
		technologies: ["Flutter", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
		image: "/arthasetu.png",
		//github: "https://github.com/sushildawadi/arthasetu",
	},
];

export const skillsData = {
	categories: [
		{
			name: "Languages & Frameworks",
			skills: ["Dart", "Flutter", "Node.js", "TypeScript"],
		},
		{
			name: "State Management & Architecture",
			skills: ["BLoC", "GetX", "Clean Architecture", "MVC Pattern"],
		},
		{
			name: "Backend & Database",
			skills: ["RESTful APIs", "Prisma", "MongoDB", "PostgreSQL", "Socket.IO"],
		},
		{
			name: "Tools & Technologies",
			skills: ["Firebase", "Hive", "Git", "GitHub", "Jira", "Figma"],
		},
	],
};

export const contactData: Contact = {
	email: "sushildawadi14@gmail.com",
	phone: "+977 9825157838",
	linkedin: "https://www.linkedin.com/in/sushil-dawadi-071a21259/",
	github: "https://github.com/sushildawadi",
};
