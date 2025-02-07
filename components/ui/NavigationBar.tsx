import Image from "next/image";
import Link from "next/link";
import { NavigationLink } from "@/types/navigation";

const navigationLinks: NavigationLink[] = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
];

export default function NavigationBar() {
    return (
        <header className="flex gap-10 justify-between items-center px-9 py-5 w-full h-auto text-2xl font-medium bg-[#1E1E1E] text-[#F0F0F0]">
            <div className="h-[15vh]">
                <Image
                    src="/logo.png"
                    alt="Lakewood HVAC"
                    width={465}
                    height={137}
                    className="h-full w-auto object-contain"
                />
            </div>
            <nav className="flex gap-5 items-center">
                {navigationLinks.map((item) => (
                    <Link key={item.label} href={item.href} className="cursor-pointer">
                        {item.label}
                    </Link>
                ))}
                <Link href="/schedule">
                    <button className="px-4 py-3 rounded-2xl cursor-pointer bg-[#4F6E4E] text-[#FFFDF5]">
                        Schedule Service
                    </button>
                </Link>
            </nav>
        </header>
    );
}
