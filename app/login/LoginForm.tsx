"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "@/components/ui/FormInput";
import { useAuth } from "@/contexts/AuthContext";
import { LoginCredentials } from "@/types/login";

export default function LoginForm() {
    const router = useRouter();
    const { setIsLoggedIn } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<LoginCredentials>();

    const onSubmit: SubmitHandler<LoginCredentials> = (data) => {
        fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (!res.ok) {
                    return res
                        .json()
                        .then((error: { message?: string }) => {
                            setError("root", {
                                type: "manual",
                                message: error.message ?? "Login failed",
                            });
                        })
                        .catch(() => {
                            setError("root", {
                                type: "manual",
                                message: "Login failed",
                            });
                        });
                }

                setIsLoggedIn(true);
                router.push("/adminpanel");
                router.refresh();
            })
            .catch(() => {
                setError("root", {
                    type: "manual",
                    message: "Server error, please try again",
                });
            });
    };

    return (
        <form
            onSubmit={(e) => void handleSubmit(onSubmit)(e)}
            className="flex flex-col w-full max-md:max-w-full"
        >
            <div className="flex grow gap-2.5 items-center px-9 py-4 w-full max-sm:text-[3.47vw] text-[clamp(0px,1.74vw,37.5px)] leading-none rounded-3xl bg-[#A8CCA0BF] max-md:px-5 max-md:pt-4 max-md:mt-10">
                <div className="flex flex-col self-stretch my-auto w-full max-md:max-w-full">
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
                        label="Password"
                        type="password"
                        {...register("password", { required: "Password is required." })}
                        errorMessage={errors.password?.message}
                    />
                    {errors.root && (
                        <span className="text-red-500 text-sm mt-6">{errors.root.message}</span>
                    )}
                    <button
                        type="submit"
                        className="gap-2.5 self-stretch px-7 py-6 mt-8 mb-4 w-full rounded-2xl bg-button text-white text-input-background max-md:px-5 max-md:max-w-full"
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </div>
            </div>
        </form>
    );
}
