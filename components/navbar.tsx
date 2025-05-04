// import Link from "next/link";
import logo from "@/public/logo1.svg";
import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button"
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import { Menu } from "lucide-react";

export default function Navbar() {
	return (
		<nav className="sticky top-0 w-full flex flex-row justify-end lg:justify-center gap-12 p-6 pb-10 bg-gradient-to-b from-background from-60% to-transparent">
			<Image
				className="absolute top-2 left-2 h-14"
				src={logo}
				alt={"M&B logo"}
			/>
			<div className="h-8"></div>
			{/* <Link
				className={"text-2xl font-instrument-serif hidden lg:block"}
				href={"./wedding-website"}
			>
				Home
			</Link>
			<Link
				className={"text-2xl font-instrument-serif hidden lg:block"}
				href={"./wedding-website"}
			>
				Wedding Party
			</Link>
			<Link
				className={"text-2xl font-instrument-serif hidden lg:block"}
				href={"./wedding-website"}
			>
				Gifts
			</Link>
			<Link
				className={"text-2xl font-instrument-serif hidden lg:block"}
				href={"./wedding-website"}
			>
				FAQ
			</Link> */}
			{/* <Sheet>
            <SheetTrigger>
              <Menu className="lg:hidden h-8 w-8 text-primary"/>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="hidden">
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="h-full w-full text-center flex flex-col justify-center align-center gap-10">
                <Link className={"text-2xl font-instrument-serif"} href={"./"}>Home</Link>
                <Link className={"text-2xl font-instrument-serif"} href={"./"}>Wedding Party</Link>
                <Link className={"text-2xl font-instrument-serif"} href={"./"}>Gifts</Link>
                <Link className={"text-2xl font-instrument-serif"} href={"./"}>FAQ</Link>
              </div>
            </SheetContent>
          </Sheet> */}
		</nav>
	);
}
