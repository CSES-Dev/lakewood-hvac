import Image from 'next/image'; // Import the Next.js Image component
import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-800">
      <nav className="flex items-start text-2xl font-medium text-zinc-100 max-md:pr-5">
        <div className="flex justify-between items-center px-9 py-7 mr-0 w-full min-h-[115px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
            <button className="self-stretch my-auto">Services</button>
            <button className="self-stretch my-auto">About</button>
            <button className="self-stretch my-auto">Contact Us</button>
            <button className="gap-2.5 self-stretch p-4 my-auto rounded-2xl bg-stone-600 text-stone-50">
              Schedule Service
            </button>
          </div>
        </div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8698889a6380c5549641e530394b0e93a4453b1b0d2fc22f4b7d409553d55139?placeholderIfAbsent=true&apiKey=f5607ce988f94a3b92b5ccdda1152f16"
          alt="Company logo"
          width={207} // Explicit width
          height={116} // Explicit height
          className="object-contain shrink-0 mt-5 max-w-full aspect-[1.79]"
        />
      </nav>

      <main className="flex flex-col px-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 className="flex flex-col w-full text-8xl font-medium leading-none max-w-[1120px] text-zinc-100 max-md:max-w-full max-md:text-4xl">
          Contact Us
          <div className="flex mt-8 max-w-full min-h-[100px] w-[100px]" />
        </h1>

        <div className="z-10 mt-0 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <ContactForm />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col w-full rounded-3xl bg-stone-600 max-md:mt-10 max-md:max-w-full">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8753f01d11b98ac7e0672d3ebf20cbbb3bcaa39b180f9ceb72f2082c259f0cc?placeholderIfAbsent=true&apiKey=f5607ce988f94a3b92b5ccdda1152f16"
                  alt="Contact illustration"
                  width={500} // Replace with actual width
                  height={500} // Replace with actual height
                  className="object-contain w-full aspect-square max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex overflow-hidden flex-col justify-center px-16 py-16 mt-24 w-full bg-stone-600 text-stone-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap items-center w-full max-md:max-w-full">
          <div className="gap-10 self-stretch my-auto text-3xl font-light leading-9 min-w-[240px] w-[361px] max-md:max-w-full">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </div>
          <ContactInfo />
        </div>
      </footer>
    </div>
  );
}
