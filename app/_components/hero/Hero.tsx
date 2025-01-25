"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import type { FC } from "react";

const Hero: FC = () => {
	return (
		<div className="relative overflow-hidden bg-blue-600 dark:bg-blue-950 text-white">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80"
					alt="Modern office interior"
					className="w-full h-full object-cover opacity-10"
				/>
			</div>
			<div className="container mx-auto px-6 py-24">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="relative z-10"
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.1 }}
							className="inline-block bg-blue-500 dark:bg-sky-500 text-white px-4 py-2 rounded-full text-sm mb-6"
						>
							Over 100,000+ jobs available
						</motion.div>
						<h1 className="text-6xl font-bold leading-tight mb-6">
							Your Career Journey <br />
							Starts Here
						</h1>
						<p className="text-xl text-blue-100 mb-8">
							Connect with top companies worldwide and find the job that matches
							your expertise and aspirations.
						</p>
						<div className="bg-white dark:bg-background rounded-full shadow-lg p-2 flex items-center mb-8">
							<Search className="h-6 w-6 text-gray-400 ml-4" />
							<input
								type="text"
								placeholder="Job title, keywords, or company"
								className="w-full px-4 py-3 text-gray-700 bg-transparent dark:text-sky-50 focus:outline-none"
							/>
							<button className="bg-blue-600 dark:bg-sky-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
								Search Jobs
							</button>
						</div>
						<div className="flex items-center space-x-4 text-blue-100">
							<span>Popular:</span>
							{["Remote", "Full-time", "Tech", "Marketing"].map(
								(tag, index) => (
									<span
										key={index}
										className="bg-primary px-3 py-1 rounded-full text-sm"
									>
										{tag}
									</span>
								),
							)}
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 }}
						className="relative hidden md:block"
					>
						<img
							src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
							alt="Modern corporate building"
							className="rounded-lg shadow-2xl"
						/>
						<div className="absolute -bottom-6 -left-6 bg-white dark:bg-background p-4 rounded-lg shadow-lg">
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 bg-green-500 rounded-full"></div>
								<span className="text-gray-600 dark:text-sky-50 font-medium">
									1,234 people hired today
								</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
