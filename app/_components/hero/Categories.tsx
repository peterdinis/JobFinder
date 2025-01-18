"use client";

import { motion } from "framer-motion";
import {
	Building2,
	ChartBar,
	Code,
	Globe,
	GraduationCap,
	HeartHandshake,
	Microscope,
	Palette,
} from "lucide-react";
import type { FC } from "react";

const Categories: FC = () => {
	return (
		<div className="py-24 bg-gray-50">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Explore Job Categories
					</h2>
					<p className="text-xl text-gray-600">
						Find opportunities in various industries
					</p>
				</motion.div>

				<div className="grid md:grid-cols-4 gap-8">
					{[
						{ icon: <Code />, title: "Technology", count: "12,345" },
						{ icon: <Building2 />, title: "Business", count: "8,234" },
						{ icon: <Palette />, title: "Design", count: "5,678" },
						{ icon: <ChartBar />, title: "Marketing", count: "4,567" },
						{ icon: <Microscope />, title: "Science", count: "3,456" },
						{ icon: <GraduationCap />, title: "Education", count: "2,345" },
						{ icon: <HeartHandshake />, title: "Healthcare", count: "6,789" },
						{ icon: <Globe />, title: "Remote", count: "9,012" },
					].map((category, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 * index }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
						>
							<div className="flex items-center space-x-4">
								<div className="p-3 bg-blue-50 rounded-lg text-blue-600">
									{category.icon}
								</div>
								<div>
									<h3 className="font-semibold text-gray-900">
										{category.title}
									</h3>
									<p className="text-sm text-gray-500">{category.count} jobs</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Categories;
