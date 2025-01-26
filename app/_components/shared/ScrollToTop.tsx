"use client";

import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { type FC, useEffect, useState } from "react";

const ScrollToTop: FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			onClick={scrollToTop}
			className={cn(
				"fixed bottom-6 right-6 p-3 bg-gray-800 text-white rounded-full shadow-lg transition-opacity duration-300",
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
			)}
		>
			<ArrowUp className="w-6 h-6" />
		</button>
	);
};

export default ScrollToTop;
