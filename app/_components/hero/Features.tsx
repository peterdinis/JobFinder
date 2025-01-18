"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, Users } from "lucide-react";
import type { FC } from "react";

const Features: FC = () => {
	return (
		<>
			<div className="bg-white py-24">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Why Choose JobHub
						</h2>
						<p className="text-xl text-gray-600">
							We connect talented professionals with amazing opportunities
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-12">
						{[
							{
								icon: <Search className="h-12 w-12 text-blue-600" />,
								title: "Smart Job Matching",
								description:
									"Our AI-powered system matches you with the perfect opportunities based on your skills and preferences.",
							},
							{
								icon: <Users className="h-12 w-12 text-blue-600" />,
								title: "Top Companies",
								description:
									"Connect with leading companies and startups that are looking for talent like you.",
							},
							{
								icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
								title: "Career Growth",
								description:
									"Access resources and tools to help you grow in your career and achieve your goals.",
							},
						].map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 * index }}
								viewport={{ once: true }}
								className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
							>
								<div className="flex justify-center mb-6">{feature.icon}</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{feature.title}
								</h3>
								<p className="text-gray-600">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
