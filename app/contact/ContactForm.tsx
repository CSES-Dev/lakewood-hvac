"use client";

import React, { useState } from "react";
import FormInput from "./FormInput";
import { ContactFormData } from "@/types/contact";

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newErrors: { [key: string]: string } = {};

        // Full Name validation
        if (!formData.fullName) {
            newErrors.fullName = "Full name is required.";
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Message validation
        if (!formData.message) {
            newErrors.message = "Message is required.";
        }

        // Set errors if any
        if (Object.keys(newErrors).length === 0) {
            // If no errors, proceed with form submission (e.g., API call)
            console.log("Form submitted!", formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-md:max-w-full">
            <div className="flex grow gap-2.5 items-center px-9 py-4 w-full text-xl leading-none rounded-3xl bg-[#A8CCA0BF] max-md:px-5 max-md:pt-4 max-md:mt-10">
                <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[595px] max-md:max-w-full">
                    <FormInput
                        label="Full Name"
                        value={formData.fullName}
                        onChange={(value) => {
                            setFormData({ ...formData, fullName: value });
                        }}
                        errorMessage={errors.fullName}
                    />
                    <FormInput
                        label="Email Address"
                        value={formData.email}
                        onChange={(value) => {
                            setFormData({ ...formData, email: value });
                        }}
                        type="email"
                        errorMessage={errors.email}
                    />
                    <FormInput
                        label="Phone Number"
                        value={formData.phoneNumber}
                        onChange={(value) => {
                            setFormData({ ...formData, phoneNumber: value });
                        }}
                        type="tel"
                    />
                    <FormInput
                        label="How can we help?"
                        value={formData.message}
                        onChange={(value) => {
                            setFormData({ ...formData, message: value });
                        }}
                        isTextArea
                        errorMessage={errors.message}
                    />
                    <button
                        type="submit"
                        className="gap-2.5 self-stretch px-7 py-4 mt-8 mb-4 w-full rounded-2xl bg-button text-input-background max-md:px-5 max-md:max-w-full"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
}
