import Image from "next/image";
import accentFern from "@/public/accent-fern.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="h-full w-full flex p-6 justify-center items-center py-auto gap-16">
			<div className="absolute top-0 bottom-0 -left-20 right-0 overflow-hidden -z-10 pointer-events-none">
				<Image
					src={accentFern}
					alt="decorative fern"
					className="opacity-[.34] rotate-45 w-[90vw] md:w-[68vw] max-w-[1000px]"
				/>
			</div>
			<div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden -z-10 pointer-events-none">
				<Image
					src={accentFern}
					alt="decorative fern"
					className="absolute -bottom-32 -right-10 -scale-x-100 opacity-[.34] w-[90vw] md:w-[68vw] max-w-[1000px]"
				/>
			</div>
			<div className="flex flex-col items-center gap-8">
				<div className="flex flex-col items-center">
					<p
						className={
							"animate-appearslow text-5xl md:text-7xl lg:text-8xl text-primary -mb-4 md:-mb-6 lg:-mb-9"
						}
						style={{ fontFamily: "Italianno, serif" }}
					>{`Brian & Megan`}</p>
					<h1 className={"animate-appearslow text-7xl md:text-8xl lg:text-9xl"}>
						{`2026.08.01`}
					</h1>
				</div>

				<div className="flex flex-col items-center gap-0 lg:gap-2">
					<p
						className={
							"animate-appearslow text-4xl md:text-5xl lg:text-6xl text-primary -mt-2 md:-mt-4 lg:-mt-4"
						}
						style={{ fontFamily: "Italianno, serif" }}
					>{`1431 South Lane Road`}</p>
					<p
						className={
							"animate-appearslow text-4xl md:text-5xl lg:text-6xl text-primary -mt-2 md:-mt-4 lg:-mt-4"
						}
						style={{ fontFamily: "Italianno, serif" }}
					>{`Sudbury, Ontario`}</p>
					<p
						className={
							"animate-appearslow text-4xl md:text-5xl lg:text-6xl text-primary -mt-2 md:-mt-4 lg:-mt-4"
						}
						style={{ fontFamily: "Italianno, serif" }}
					>{`3:00PM`}</p>
				</div>

				<div className="animate-appearslow p-4 md:p-8 rounded-md bg-primary flex flex-col gap-2 drop-shadow-lg">
					<Button
						asChild
						className="text-4xl p-8 bg-background text-foreground hover:bg-background/90"
						style={{ fontFamily: "Instrument Serif, serif" }}
					>
						<Link
							href={
								"https://docs.google.com/forms/d/e/1FAIpQLSdHADA0ZNQ7iYOdtiXYMpfszNEpKxafLDaIPWwCEFnXOh9_7g/viewform?usp=header"
							}
						>
							RSVP
						</Link>
					</Button>
					<p
						className={
							"text-wrap max-w-[450px] text-center text-background font-semibold"
						}
						style={{ fontFamily: "montserrat, sans-serif" }}
					>{`Please complete the RSVP form once per guest.`}</p>
				</div>
			</div>
		</div>
	);
}
