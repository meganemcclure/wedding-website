import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import lake from "@/public/lake line drawing 1.svg"

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
        <link href="https://fonts.googleapis.com/css2?family=Italianno&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand&family=Righteous&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased animate-appearfast`}>
        <Navbar />
        <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
            <div className="row-start-2 max-w-xl">
            {children}
            </div>

            <Image className={"row-start-3 w-full h-32"} src={lake} alt={"lake line drawing"}/>
        </main>
        <Footer />
      </body>
    </html>
    </>
  );
}
