export interface Experience {
	role: string;
	company: string;
	duration: string;
	responsibilities: string[];
}

export interface Project {
	title: string;
	description: string;
	role: string;
	technologies: string[];
	image?: string;
	github?: string;
	link?: string;
}

export interface Skills {
	categories: {
		name: string;
		skills: string[];
	}[];
}

export interface Contact {
	email: string;
	phone: string;
	linkedin: string;
	github: string;
}
