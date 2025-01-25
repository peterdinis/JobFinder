import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/shared/Navigation";
import QueryProvider from "./_components/shared/providers/QueryProvider";
import { ThemeProvider } from "./_components/shared/providers/theme-provider";
import ScrollToTop from "./_components/shared/ScrollToTop";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
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
					</QueryProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
