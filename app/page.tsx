import Image from "next/image";
import lake from "@/public/lake line drawing 1.svg"

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <p className={"animate-appearslow text-5xl md:text-7xl lg:text-8xl text-primary -mb-4 md:-mb-6 lg:-mb-9"} style={{ fontFamily: 'Italianno, serif' }}>{`Save The Date`}</p>
      <h1 className={"animate-appearslow  text-7xl md:text-8xl lg:text-9xl"}>{`2026.08.01`}</h1>
      <p className={"text-wrap max-w-[450px] text-center pt-20"}>{`Welcome to Brian and Megan's wedding website. We're so excited to have you join us on our special day! Stay tuned for more details to come.`}</p>
    </div>
  )
}
