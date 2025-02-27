"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavigationLink } from "@/types/navigation";

export const navigationLinks: NavigationLink[] = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
];

export default function NavigationBar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 pt-4 pb-6 h-auto text-xl font-medium bg-[#1E1E1E] text-[#F0F0F0]">
            <Link href="/" className="h-[8vh] md:h-[12vh]">
                <Image
                    src="/lakewoodlogo.png"
                    alt="Lakewood HVAC"
                    width={266}
                    height={149}
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
                <Link href="/contact">
                    <button className="px-4 py-3 rounded-2xl cursor-pointer bg-[#4F6E4E] text-[#FFFDF5]">
                        Schedule Service
                    </button>
                </Link>
            </nav>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-3">
                <Link href="/contact">
                    <button className="px-3 py-2 rounded-xl bg-[#4F6E4E] text-[#FFFDF5] text-sm">
                        Schedule Service
                    </button>
                </Link>
                <button
                    className="text-white flex items-center justify-center h-[40px]"
                    onClick={() => {
                        setMobileMenuOpen(true);
                    }}
                >
                    <Menu className="h-full w-auto" color="#FFFDF5" />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${
                    isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={closeMenu}
            >
                <div
                    className={`fixed right-0 top-0 h-full w-[70%] bg-[#1E1E1E] text-[#F0F0F0] shadow-lg flex flex-col pl-10 pt-8 transition-transform duration-500 ${
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {navigationLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="mb-5 text-2xl"
                            onClick={closeMenu}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
