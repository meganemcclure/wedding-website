import Link from "next/link";
import logo from "@/public/logo1.svg"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="absolute w-full flex flex-row justify-end lg:justify-center gap-12 p-8 border-b border-primary">
          <Image className="absolute top-4 left-4 h-16" src={logo} alt={"M&B logo"}/>

          <Link className={"text-2xl font-instrument-serif hidden lg:block hover:underline"} href={"/"}>Home</Link>
          <Link className={"text-2xl font-instrument-serif hidden lg:block hover:underline"} href={"/wedding-party"}>Wedding Party</Link>
          <Link className={"text-2xl font-instrument-serif hidden lg:block hover:underline"} href={"/accommodations"}>Travel & Accommodations</Link>
          <Link className={"text-2xl font-instrument-serif hidden lg:block hover:underline"} href={"/gifts"}>Gifts</Link>
          <Link className={"text-2xl font-instrument-serif hidden lg:block hover:underline"} href={"/faq"}>FAQ</Link>

          <Sheet>
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
                <SheetClose asChild><Link className={"text-2xl font-instrument-serif hover:underline"} href={"/"}>Home</Link></SheetClose>
                <SheetClose asChild><Link className={"text-2xl font-instrument-serif hover:underline"} href={"/wedding-party"}>Wedding Party</Link></SheetClose>
                <SheetClose asChild><Link className={"text-2xl font-instrument-serif hover:underline"} href={"/accommodations"}>Travel & Accommodations</Link></SheetClose>
                <SheetClose asChild><Link className={"text-2xl font-instrument-serif hover:underline"} href={"/gifts"}>Gifts</Link></SheetClose>
                <SheetClose asChild><Link className={"text-2xl font-instrument-serif hover:underline"} href={"/faq"}>FAQ</Link></SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
    )
}