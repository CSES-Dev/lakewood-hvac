import React from "react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
    return (
        <div className="flex overflow-hidden flex-col bg-background">
            <main className="flex flex-col px-16 my-16 w-full max-md:px-5 max-md:my-10 max-md:max-w-full">
                <h1 className="flex flex-col w-full text-8xl font-medium leading-none max-w-[1120px] text-header max-md:max-w-full max-md:text-6xl">
                    Contact Us
                    <div className="flex mt-8 max-w-full min-h-[100px] max-md:min-h-[5px]" />
                </h1>

                <div className="z-10 w-full max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <ContactForm />
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex overflow-hidden flex-col w-full rounded-3xl max-md:mt-10 max-md:max-w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.4026836440325!2d-118.13527642424282!3d33.85351167323249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd328b9d836d55%3A0xd4badfa32c2ad99b!2sLakewood%20Heating%20and%20Air%20Conditioning%20Inc.!5e0!3m2!1sen!2sus!4v1737916289075!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    className="object-contain w-full aspect-square max-md:max-w-full"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
