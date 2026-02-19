import Image from "next/image";
import accentFern from "@/public/accent-fern.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="h-screen w-full flex justify-center items-center gap-16">
			<div className="animate-appearfast absolute top-0 bottom-0 -left-20 right-0 overflow-hidden -z-10 pointer-events-none">
				<Image
					src={accentFern}
					alt="decorative fern"
					className="opacity-[.34] rotate-45 w-[90vw] md:w-[68vw] max-w-[1000px]"
				/>
			</div>
			<div className="animate-appearfast absolute top-0 bottom-0 left-0 right-0 overflow-hidden -z-10 pointer-events-none">
				<Image
					src={accentFern}
					alt="decorative fern"
					className="absolute -bottom-32 -right-10 -scale-x-100 opacity-[.34] w-[90vw] md:w-[68vw] max-w-[1000px]"
				/>
			</div>
			<div className="animate-appearslow max-w-3xl flex flex-col items-center gap-8 bg-background p-4 md:p-10 lg:p-12 rounded-lg drop-shadow-2xl">
				<div className="flex flex-col items-center">
					<p
						className={
							"text-5xl md:text-7xl lg:text-8xl text-primary -mb-4 md:-mb-6 lg:-mb-9"
						}
						style={{ fontFamily: "Italianno, serif" }}
					>{`Brian & Megan`}</p>
					<h1 className={"text-7xl md:text-8xl lg:text-9xl"}>{`2026.08.01`}</h1>
					<p
						className={
							"text-4xl md:text-5xl lg:text-6xl text-primary -mt-2 md:-mt-4 lg:-mt-4"
						}
						style={{ fontFamily: "Italianno, serif" }}
					>{`Sudbury, Ontario`}</p>
				</div>

				<div className="w-fit flex flex-col gap-2">
					<Button
						asChild
						className="w-full text-2xl lg:text-4xl p-6 lg:p-8"
						style={{ fontFamily: "Instrument Serif, serif" }}
					>
						<Link
							href={
								"https://docs.google.com/forms/d/e/1FAIpQLSdHADA0ZNQ7iYOdtiXYMpfszNEpKxafLDaIPWwCEFnXOh9_7g/viewform?usp=header"
							}
							target="_blank"
						>
							RSVP
						</Link>
					</Button>
					<p
						className={"text-wrap text-center font-semibold"}
						style={{ fontFamily: "montserrat, sans-serif" }}
					>{`Please complete the RSVP form once per guest.`}</p>
				</div>
			</div>
		</div>
	);
}
