import Image from 'next/image'; // Import the Next.js Image component
import React from 'react';
import { ContactInfoItem } from './types';

const contactInfo: ContactInfoItem[] = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/828bc351a955636ed16ff6dc6965ac03eb50026e2a512ff9d2f2d22db07e4398?placeholderIfAbsent=true&apiKey=f5607ce988f94a3b92b5ccdda1152f16",
    text: "562-633-6412",
    alt: "Phone icon"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fd1296e6a02732afd0355c9adafa61ebe04e9b04045d75e7cfba0df436a626e?placeholderIfAbsent=true&apiKey=f5607ce988f94a3b92b5ccdda1152f16",
    text: "lakewooodhvac90712@gmail.com",
    alt: "Email icon"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5bbd6eed5368d19f7ef8560ae8a01c18dd18e4aac7f989330719b1dae8c42ff?placeholderIfAbsent=true&apiKey=f5607ce988f94a3b92b5ccdda1152f16",
    text: "Monday-Saturdays: 8AM-8PM",
    alt: "Clock icon"
  }
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col grow shrink items-start self-stretch my-auto text-2xl leading-none min-w-[240px] w-[373px] max-md:max-w-full">
      {contactInfo.map((item, index) => (
        <div key={index} className="flex gap-8 items-center mt-5 first:mt-0">
          <Image
            src={item.icon}
            alt={item.alt}
            width={34} // Set explicit width
            height={34} // Set explicit height
            className="object-contain aspect-square" // You can keep your styles
          />
          <div className="self-stretch my-auto">{item.text}</div>
        </div>
      ))}
    </div>
  );
}
