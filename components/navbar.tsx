"use client";

// import Link from "next/link";
import logo from "@/public/logo1.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const pages = [
	{
		name: "Home",
		href: "/",
	},
	// {
	// 	name: "Wedding Party",
	// 	href: "/wedding-party",
	// },
	// {
	// 	name: "Travel & Transportation",
	// 	href: "./wedding-website/travel",
	// },
	{
		name: "FAQ",
		href: "/faq",
	},
];

export default function Navbar() {
	return (
		<nav
			className="z-50 sticky top-0 w-full flex flex-row justify-end lg:justify-center gap-12 p-6 pb-10 bg-gradient-to-b from-background from-60% to-transparent"
			style={{ fontFamily: "Instrument Serif, serif" }}
		>
			<Image
				className="absolute top-2 left-2 h-14"
				src={logo}
				alt={"M&B logo"}
			/>
			<div className="h-8"></div>
			{pages.map((page, index) => (
				<Link
					key={index}
					className={"text-2xl font-instrument-serif hidden lg:block"}
					href={page.href}
				>
					{page.name}
				</Link>
			))}
			<Sheet>
				<SheetTrigger>
					<Menu className="lg:hidden h-8 w-8 text-primary" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader className="hidden">
						<SheetTitle />
					</SheetHeader>
					<div
						className="h-full w-full text-center flex flex-col justify-center align-center gap-10"
						style={{ fontFamily: "Instrument Serif, serif" }}
					>
						{pages.map((page, index) => (
							<Link
								key={index}
								className={"text-2xl font-instrument-serif"}
								href={page.href}
							>
								{page.name}
							</Link>
						))}
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
}
