"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";

const CTA: FC = () => {
	return (
		<>
			<div className="bg-blue-600 py-20">
				<div className="container mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto"
					>
						<h2 className="text-4xl font-bold text-white mb-8">
							Ready to Take the Next Step in Your Career?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Join thousands of professionals who have found their dream jobs
							through JobHub
						</p>
						<button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
							Get Started Now
							<ArrowRight className="ml-2 h-5 w-5" />
						</button>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default CTA;
