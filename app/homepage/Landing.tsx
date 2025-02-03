"use client";

import React from "react";

{
    /* Landing - Brandon  */
}
export default function Landing() {
    return (
        <div className="bg-background">
            <div className="relative h-screen px-6 sm:px-16 bg-[url('/homePage/LandingImg.jpeg')] bg-cover bg-center bg-no-repeat">
                <div className="absolute text-white bottom-0 max-w-[70rem] ">
                    <h1 className="text-[3rem] sm:text-[5.625rem] font-bold pb-4 leading-[1.16]">
                        Lakewood Heating and Air Conditioning Inc.
                    </h1>
                    <h2 className="text-[1.5rem] sm:text-[2.5rem] pb-12">
                        Your friendly neighborhood air conditioning company!
                    </h2>
                </div>
            </div>
        </div>
    );
}
