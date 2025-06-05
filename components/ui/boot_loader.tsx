"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BootLoader({ onComplete }: { onComplete: () => void }) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(timer);
					setTimeout(onComplete, 500);
					return 100;
				}
				return prev + 2;
			});
		}, 50);

		return () => clearInterval(timer);
	}, [onComplete]);

	return (
		<motion.div
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
		>
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="mb-16"
			>
				<svg
					width="80"
					height="80"
					viewBox="0 0 24 24"
					fill="white"
					className="drop-shadow-lg"
				>
					<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
				</svg>
			</motion.div>

			<div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
				<motion.div
					className="h-full bg-white rounded-full"
					initial={{ width: 0 }}
					animate={{ width: `${progress}%` }}
					transition={{ duration: 0.1, ease: "easeOut" }}
				/>
			</div>

			{/* Loading Text */}
			{/* <motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
				className="text-white text-sm mt-8 font-light"
			>
				Sushil Dawadi
			</motion.p> */}
		</motion.div>
	);
}
