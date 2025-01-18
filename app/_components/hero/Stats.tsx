"use client";

import { motion } from "framer-motion";
import type { FC } from "react";

const Stats: FC = () => {
	return (
		<div className="py-16 bg-white">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="grid grid-cols-2 md:grid-cols-4 gap-8"
				>
					{[
						{ number: "2M+", label: "Active Users" },
						{ number: "100K+", label: "Job Listings" },
						{ number: "50K+", label: "Companies" },
						{ number: "98%", label: "Success Rate" },
					].map((stat, index) => (
						<div key={index} className="text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">
								{stat.number}
							</div>
							<div className="text-gray-600">{stat.label}</div>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Stats;
