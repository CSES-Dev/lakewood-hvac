import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavigationLink } from "@/types/navigation";

export const navigationLinks: NavigationLink[] = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
];

export default function NavigationBar() {
    return (
        <header className="flex justify-between items-center px-6 py-4 w-full h-auto text-xl font-medium bg-[#1E1E1E] text-[#F0F0F0]">
            <Link href="/" className="h-[8vh] md:h-[12vh]">
                <Image
                    src="/logo.png"
                    alt="Lakewood HVAC"
                    width={465}
                    height={137}
                    className="h-full w-auto object-contain"
                />
            </Link>

            {/* Desktop */}
            <nav className="hidden md:flex gap-5 items-center">
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

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-3">
                <Link href="/schedule">
                    <button className="px-3 py-2 rounded-xl bg-[#4F6E4E] text-[#FFFDF5] text-sm">
                        Schedule Service
                    </button>
                </Link>
                <button className="text-white flex items-center justify-center h-[40px]">
                    <Menu className="h-full w-auto" color="#FFFDF5"/>
                </button>
            </div>
        </header>
    );
}
