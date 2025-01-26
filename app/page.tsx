import Image from "next/image";
import lake from "@/public/lake line drawing 1.svg"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center">
          <p className={"animate-appearslow text-5xl md:text-7xl lg:text-8xl text-primary -mb-4 md:-mb-6 lg:-mb-9"} style={{ fontFamily: 'Italianno, serif' }}>{`Save The Date`}</p>
          <h1 className={"animate-appearslow  text-7xl md:text-8xl lg:text-9xl"} style={{ fontFamily: 'Instrument Serif, serif' }}>{`2026.08.01`}</h1>
          <p className={"text-wrap max-w-[450px] text-center pt-20"} style={{ fontFamily: 'montserrat, sans-serif'}}>{`Welcome to Brian and Megan's wedding website. We're so excited to have you join us on our special day! Stay tuned for more details to come.`}</p>
        </div>

        <Image className={"absolute bottom-0 left-0 w-full h-32"} src={lake} alt={"lake line drawing"}/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  )
}
