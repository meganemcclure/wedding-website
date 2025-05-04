import Image from "next/image";
import accentFern from "@/public/accent-fern.svg";

export default function Home() {
	return (
		<div className="h-full w-full flex p-20 justify-center items-center py-auto gap-16">
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
			<div className="flex flex-col items-center">
				<p
					className={
						"animate-appearslow text-5xl md:text-7xl lg:text-8xl text-primary -mb-4 md:-mb-6 lg:-mb-9"
					}
					style={{ fontFamily: "Italianno, serif" }}
				>{`Save The Date`}</p>
				<h1
					className={"animate-appearslow  text-7xl md:text-8xl lg:text-9xl"}
					style={{ fontFamily: "Instrument Serif, serif" }}
				>{`2026.08.01`}</h1>
				<p
					className={
						"animate-appearslow text-4xl md:text-5xl lg:text-6xl text-primary -mt-2 md:-mt-4 lg:-mt-4"
					}
					style={{ fontFamily: "Italianno, serif" }}
				>{`Sudbury, Ontario`}</p>

				<p
					className={"text-wrap max-w-[450px] text-center pt-10"}
					style={{ fontFamily: "montserrat, sans-serif" }}
				>{`Welcome to Brian and Megan's wedding website. We're so excited to have you join us on our special day! Stay tuned for more details to come.`}</p>
			</div>
		</div>
	);
}
