"use client";
import React, { useState } from 'react';
import NavigationItem from './NavigationItem';
import { Menu, X } from "lucide-react";

interface NavItem {
  text: string;
  isButton?: boolean;
}

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { text: 'Services' },
    { text: 'About' },
    { text: 'Contact Us' },
    { text: 'Schedule Service', isButton: true },
  ];

  return (
    <nav className="fixed top-0 w-[95%] bg-background z-50 flex justify-between items-center px-2 py-2 text-xl font-medium text-zinc-100 max-md:px-5">
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e80b0080a9489802657734fe69ed3ed2f065f118ff98f232e98154e334df791?placeholderIfAbsent=true&apiKey=f5607ce988f94a3b92b5ccdda1152f16"
          alt="Company logo"
          className="object-contain self-stretch my-auto aspect-[1.79] max-w-[75px] md:max-w-[134.25px]"
        />

      {/* Hamburger menu for small screens */}
      <button
        className="md:hidden text-zinc-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Desktop Navigation */}
      <div className={`md:flex flex-wrap gap-5 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full ${isOpen ? "block" : "hidden"}`}>
        {navItems.map((item, index) => (
          <NavigationItem key={index} text={item.text} isButton={item.isButton} />
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;