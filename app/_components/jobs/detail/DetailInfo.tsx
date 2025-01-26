"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
	ArrowLeft,
	Briefcase,
	Building2,
	Clock,
	DollarSign,
	Globe2,
	MapPin,
} from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import ApplyToJob from "./ApplyToJob";

const jobData = {
	id: "1",
	title: "Senior Frontend Developer",
	company: "TechCorp Solutions",
	location: "San Francisco, CA",
	type: "Full-time",
	salary: "$120,000 - $160,000",
	experience: "5+ years",
	posted: "2 days ago",
	description: `We are looking for a Senior Frontend Developer to join our team and help build the next generation of our web applications.

Key Responsibilities:
• Lead frontend development initiatives and mentor junior developers
• Architect and implement scalable frontend solutions
• Collaborate with designers and backend developers
• Optimize application performance and user experience

Requirements:
• 5+ years of experience with React.js and modern frontend technologies
• Strong understanding of TypeScript and state management
• Experience with responsive design and cross-browser compatibility
• Excellent problem-solving and communication skills`,
	benefits: [
		"Competitive salary",
		"Health, dental, and vision insurance",
		"401(k) matching",
		"Flexible work hours",
		"Remote work options",
		"Professional development budget",
	],
	skills: ["React", "TypeScript", "Next.js", "CSS", "Git", "REST APIs"],
};

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const DetailInfo: FC = () => {
	return (
		<div className="min-h-screen ">
			<div className="max-w-4xl mx-auto p-6">
				{/* Back Button */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3 }}
					className="mb-6"
				>
					<Link href="/jobs">
						<Button
							variant="ghost"
							className="gap-2 hover:translate-x-[-4px] transition-transform"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to Jobs
						</Button>
					</Link>
				</motion.div>

				{/* Main Content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
						{/* Header Section */}
						<motion.div
							className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6"
							{...fadeIn}
						>
							<div>
								<h1 className="text-3xl font-bold text-gray-900 dark:text-sky-50 mb-2">
									{jobData.title}
								</h1>
								<div className="flex items-center gap-2 text-gray-600 dark:text-sky-100 mb-4">
									<Building2 className="h-4 w-4" />
									<span className="font-medium">{jobData.company}</span>
									<span>•</span>
									<MapPin className="h-4 w-4" />
									<span>{jobData.location}</span>
								</div>
								<motion.div
									className="flex flex-wrap gap-2"
									variants={stagger}
									initial="initial"
									animate="animate"
								>
									{[
										{
											icon: <Briefcase className="h-3 w-3" />,
											text: jobData.type,
										},
										{
											icon: <DollarSign className="h-3 w-3" />,
											text: jobData.salary,
										},
										{
											icon: <Clock className="h-3 w-3" />,
											text: jobData.posted,
										},
										{
											icon: <Globe2 className="h-3 w-3" />,
											text: jobData.experience,
										},
									].map((item, index) => (
										<motion.div key={index} variants={fadeIn}>
											<Badge
												variant="secondary"
												className="gap-1 hover:bg-secondary/80 transition-colors"
											>
												{item.icon}
												{item.text}
											</Badge>
										</motion.div>
									))}
								</motion.div>
							</div>
							<Button
								className="w-full md:w-auto bg-primary hover:bg-primary/90 transition-colors duration-300"
								size="lg"
							>
								Apply Now
							</Button>
						</motion.div>

						<Separator className="my-8" />

						{/* Description */}
						<motion.div
							className="mb-8 space-y-2"
							{...fadeIn}
							transition={{ delay: 0.2 }}
						>
							<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-sky-50">
								Job Description
							</h2>
							<div className="prose max-w-none text-gray-700 dark:text-sky-100 whitespace-pre-line leading-relaxed">
								{jobData.description}
							</div>
						</motion.div>

						{/* Skills */}
						<motion.div
							className="mb-8"
							{...fadeIn}
							transition={{ delay: 0.3 }}
						>
							<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-sky-50">
								Required Skills
							</h2>
							<motion.div
								className="flex flex-wrap gap-2"
								variants={stagger}
								initial="initial"
								animate="animate"
							>
								{jobData.skills.map((skill) => (
									<motion.div key={skill} variants={fadeIn}>
										<Badge
											variant="outline"
											className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
										>
											{skill}
										</Badge>
									</motion.div>
								))}
							</motion.div>
						</motion.div>

						{/* Benefits */}
						<motion.div
							className="mb-8"
							{...fadeIn}
							transition={{ delay: 0.4 }}
						>
							<h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-sky-50">
								Benefits
							</h2>
							<motion.ul
								className="grid grid-cols-1 md:grid-cols-2 gap-4"
								variants={stagger}
								initial="initial"
								animate="animate"
							>
								{jobData.benefits.map((benefit) => (
									<motion.li
										key={benefit}
										variants={fadeIn}
										className="flex items-center gap-3 text-gray-700 dark:text-sky-100 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
									>
										<div className="h-2 w-2 bg-primary rounded-full" />
										{benefit}
									</motion.li>
								))}
							</motion.ul>
						</motion.div>

						<ApplyToJob />
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default DetailInfo;
