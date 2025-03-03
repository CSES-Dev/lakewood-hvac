"use client"; // This marks the file as a client component

import React, { useState } from "react";

import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import MessagePopup from "@/components/MessagePopup";
import { ContactFormData } from "@/types/contact";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>();
    
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Remove the 'async' here
    const onSubmit = (data: ContactFormData) => {
        console.log("Form submitted!", data);
        setShowConfirmation(true);
        reset();
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <>
            {showConfirmation && (
                <MessagePopup
                    title="Thanks for your request!"
                    message="Your message has been received, and someone from our team will be in touch soon!"
                    onClose={handleCloseConfirmation}
                />
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-md:max-w-full">
                <div className="flex grow gap-2.5 items-center px-9 py-4 w-full text-xl leading-none rounded-3xl bg-[#A8CCA0BF] max-md:px-5 max-md:pt-4 max-md:mt-10">
                    <div className="flex flex-col self-stretch my-auto w-full max-md:max-w-full">
                        <FormInput
                            label="Full Name"
                            {...register("fullName", { required: "Full name is required." })}
                            errorMessage={errors.fullName?.message}
                        />
                        <FormInput
                            label="Email Address"
                            type="email"
                            {...register("email", {
                                required: "Email is required.",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Please enter a valid email address."
                                }
                            })}
                            errorMessage={errors.email?.message}
                        />
                        <FormInput
                            label="Phone Number"
                            type="tel"
                            {...register("phoneNumber", {
                                pattern: {
                                    value: /^[0-9]{10,15}$/,
                                    message: "Please enter a valid phone number (10-15 digits)."
                                }
                            })}
                            errorMessage={errors.phoneNumber?.message}
                        />
                        <FormInput
                            label="How can we help?"
                            isTextArea
                            {...register("message", { required: "Message is required." })}
                            errorMessage={errors.message?.message}
                        />
                        <button
                            type="submit"
                            className="gap-2.5 self-stretch px-7 py-6 mt-8 mb-4 w-full rounded-2xl bg-button text-input-background max-md:px-5 max-md:max-w-full"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
