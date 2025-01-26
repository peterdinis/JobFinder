import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "./_components/shared/Navigation";
import ScrollToTop from "./_components/shared/ScrollToTop";
import QueryProvider from "./_components/shared/providers/QueryProvider";
import { ThemeProvider } from "./_components/shared/providers/theme-provider";

export const metadata: Metadata = {
	title: "Job Finder",
	description: "Find your dream job right now :)",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<QueryProvider>
						<Navigation />
						{children}
						<ScrollToTop />
						<Toaster />
					</QueryProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
