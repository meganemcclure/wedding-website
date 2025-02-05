import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-primary p-8 flex flex-col gap-4 justify-center items-center">
            <h2 className="text-2xl">Questions?</h2>
            <p>Contact <Link href="mailto:meganemcclure@gmail.com">meganemcclure@gmail.com</Link></p>
        </footer>
    )
}