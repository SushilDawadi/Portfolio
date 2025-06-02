"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ContactScreen() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formState),
			});

			if (res.ok) {
				setIsSubmitted(true);
				setFormState({ name: "", email: "", message: "" });
				setTimeout(() => setIsSubmitted(false), 5000);
			} else {
				setError(
					"There was an error sending your message. Please try again later."
				);
			}
		} catch (err) {
			setError(
				"There was an error sending your message. Please try again later."
			);
		}

		setIsSubmitting(false);
	};

	// ... [rest of your UI code unchanged, see below]

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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

	return (
		<div className="h-full w-full bg-gradient-to-b from-gray-900 to-black text-white overflow-y-auto">
			<motion.div
				ref={ref}
				variants={container}
				initial="hidden"
				animate="show"
				className="flex flex-col pt-20 pb-20 px-6"
			>
				<motion.h2
					variants={item}
					className="text-2xl font-bold font-mono tracking-tight mb-6 text-white"
				>
					CONTACT
				</motion.h2>

				<motion.div variants={item} className="mb-8">
					<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 space-y-4 border border-gray-700 shadow-lg">
						{[
							{
								icon: Mail,
								label: "Email",
								value: contactData.email,
								href: `mailto:${contactData.email}`,
								color: "text-gray-300",
							},
							{
								icon: Phone,
								label: "Phone",
								value: contactData.phone,
								href: `tel:${contactData.phone}`,
								color: "text-gray-300",
							},
							{
								icon: Linkedin,
								label: "LinkedIn",
								value: "linkedin.com/in/sushildawadi",
								href: contactData.linkedin,
								color: "text-gray-300",
							},
							{
								icon: Github,
								label: "GitHub",
								value: "github.com/sushildawadi",
								href: contactData.github,
								color: "text-gray-300",
							},
						].map((contact, index) => {
							const Icon = contact.icon;
							return (
								<motion.div
									key={contact.label}
									className="flex items-center space-x-3 group"
									whileHover={{ x: 5 }}
								>
									<div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-gray-600 group-hover:to-gray-700 transition-colors">
										<Icon
											className={`h-5 w-5 ${contact.color} transition-colors`}
										/>
									</div>
									<div>
										<p className="text-xs text-gray-500 hover:text-gray-500">
											{contact.label}
										</p>
										<Link
											href={contact.href}
											target={
												contact.label === "LinkedIn" ||
												contact.label === "GitHub"
													? "_blank"
													: undefined
											}
											rel={
												contact.label === "LinkedIn" ||
												contact.label === "GitHub"
													? "noopener noreferrer"
													: undefined
											}
											className="text-sm text-gray-300 hover:text-gray-300 transition-colors group-hover:underline"
										>
											{contact.value}
										</Link>
									</div>
								</motion.div>
							);
						})}
					</div>
				</motion.div>

				<motion.div variants={item}>
					<h3 className="text-lg font-bold mb-4 flex items-center text-white hover:text-white">
						<div className="h-3 w-3 rounded-full bg-gradient-to-r from-white/20 to-white/10 mr-2"></div>
						Send a Message
					</h3>
					{isSubmitted ? (
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 flex flex-col items-center justify-center text-center border border-gray-700 shadow-lg"
						>
							<div className="h-20 w-20 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center mb-4">
								<CheckCircle className="h-10 w-10 text-gray-300" />
							</div>
							<h4 className="text-xl font-bold mb-2 text-gray-300 hover:text-gray-300">
								Message Sent!
							</h4>
							<p className="text-gray-400 hover:text-gray-400">
								Thank you for reaching out. I'll get back to you as soon as
								possible.
							</p>
						</motion.div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="space-y-2">
								<label
									htmlFor="name"
									className="text-sm font-medium flex items-center"
								>
									<div className="h-2 w-2 rounded-full bg-white mr-2"></div>
									Name
								</label>
								<Input
									id="name"
									name="name"
									value={formState.name}
									onChange={handleChange}
									required
									className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-gray-300 hover:text-gray-300 placeholder:text-gray-600 focus:border-gray-500 transition-all duration-300 focus:ring-2 focus:ring-gray-700/20"
									placeholder="Your name"
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="email"
									className="text-sm font-medium flex items-center"
								>
									<div className="h-2 w-2 rounded-full bg-white mr-2"></div>
									Email
								</label>
								<Input
									id="email"
									name="email"
									type="email"
									value={formState.email}
									onChange={handleChange}
									required
									className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-gray-300 hover:text-gray-300 placeholder:text-gray-600 focus:border-gray-500 transition-all duration-300 focus:ring-2 focus:ring-gray-700/20"
									placeholder="your.email@example.com"
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="message"
									className="text-sm font-medium flex items-center"
								>
									<div className="h-2 w-2 rounded-full bg-white mr-2"></div>
									Message
								</label>
								<Textarea
									id="message"
									name="message"
									value={formState.message}
									onChange={handleChange}
									required
									className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 text-gray-300 hover:text-gray-300 placeholder:text-gray-600 focus:border-gray-500 transition-all duration-300 focus:ring-2 focus:ring-gray-700/20 min-h-[120px]"
									placeholder="Your message..."
								/>
							</div>

							<Button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-gray-300 relative overflow-hidden group"
							>
								<span className="absolute inset-0 w-0 bg-gray-700/30 transition-all duration-300 group-hover:w-full"></span>
								<span className="relative flex items-center justify-center">
									{isSubmitting ? (
										<div className="flex items-center">
											<div className="h-4 w-4 rounded-full border-2 border-gray-300 border-t-transparent animate-spin mr-2"></div>
											Sending...
										</div>
									) : (
										<>
											Send Message{" "}
											<Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</>
									)}
								</span>
							</Button>
							{error && <p className="text-red-400 text-sm mt-2">{error}</p>}
						</form>
					)}
				</motion.div>
			</motion.div>
		</div>
	);
}
