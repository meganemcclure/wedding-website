import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import backgroundFern from "@/public/background-ferns.svg";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Brian and Megan's Wedding Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang="en">
				<head>
					<link
						href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					{/* <link rel="preconnect" href="https://fonts.googleapis.com"> */}
					{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
					<link
						href="https://fonts.googleapis.com/css2?family=Italianno&family=Quicksand&family=Righteous&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Italianno&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand&family=Righteous&display=swap"
						rel="stylesheet"
					></link>
				</head>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased animate-appearfast relative min-h-screen`}
				>
					<div
						style={{ backgroundImage: `url(${backgroundFern.src})` }}
						className="absolute inset-0 bg-cover bg-center opacity-[.08] pointer-events-none -z-10"
					/>
					<Navbar />
					<main className="absolute top-0 h-full w-full">{children}</main>
				</body>
			</html>
		</>
	);
}
