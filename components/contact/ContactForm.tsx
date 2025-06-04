"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import MessagePopup from "@/components/MessagePopup";
import FormInput from "@/components/ui/FormInput";
import { ContactFormData } from "@/types/contact";
import { Message } from "@/types/message";

const successMessage: Message = {
    title: "Thanks for your request!",
    body: "Your message has been received, and someone from our team will be in touch soon!",
};

const errorMessage: Message = {
    title: "Apologies!",
    body: "Failed to send message. Please try again later.",
};

async function submitFormspree(data: ContactFormData): Promise<boolean> {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response.ok;
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>();

    const [message, setMessage] = useState<Message>(successMessage);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const onSubmit = async (data: ContactFormData) => {
        try {
            const success = await submitFormspree(data);

            if (success) {
                setMessage(successMessage);
                reset();
            } else setMessage(errorMessage);
        } catch {
            setMessage(errorMessage);
        }

        setShowConfirmation(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <>
            {showConfirmation && (
                <MessagePopup message={message} onClose={handleCloseConfirmation} />
            )}
            <form
                onSubmit={(e) => void handleSubmit(onSubmit)(e)}
                className="flex flex-col w-full max-md:max-w-full"
            >
                <div className="flex grow gap-2.5 items-center px-9 py-4 w-full max-sm:text-[3.47vw] text-[clamp(0px,1.74vw,37.5px)] leading-none rounded-3xl bg-[#A8CCA0BF] max-md:px-5 max-md:pt-4 max-md:mt-10">
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
                                    message: "Please enter a valid email address.",
                                },
                            })}
                            errorMessage={errors.email?.message}
                        />
                        <FormInput
                            label="Phone Number"
                            type="tel"
                            {...register("phoneNumber", {
                                pattern: {
                                    value: /^[0-9]{10,15}$/,
                                    message: "Please enter a valid phone number (10-15 digits).",
                                },
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
                            className="gap-2.5 self-stretch px-7 py-6 mt-8 mb-4 w-full rounded-2xl bg-button text-white text-input-background max-md:px-5 max-md:max-w-full"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
