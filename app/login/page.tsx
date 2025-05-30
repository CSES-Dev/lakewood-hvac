"use client";

import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
        <div className="flex overflow-hidden flex-col bg-background">
            <main className="px-16 w-full mb-20 max-md:px-5 max-md:max-w-full">
                <h1 className="my-16 w-full max-sm:text-[12.5vw] text-[clamp(0px,6.25vw,135px)] font-medium leading-none text-header max-md:my-6 ">
                    Log In
                </h1>

                <div className="w-full md:w-3/5 max-md:max-w-full">
                    <LoginForm />
                </div>
            </main>
        </div>
    );
}
