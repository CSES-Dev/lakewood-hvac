"use client";

import React from "react";

{
    /* Landing - Brandon  */
}
export default function Landing() {
    return (
        <div className="bg-background relative h-screen px-6 sm:px-16">
            <div className="absolute inset-0 bg-[url('/homePage/LandingImg.jpeg')] bg-cover bg-center bg-no-repeat"></div>

            <div className="absolute text-white top-[4.86vw] max-w-[70rem] z-10">
                <h1 className="text-[3rem] sm:text-[5.625rem] font-medium pb-4 leading-[1.16]">
                    Lakewood Heating and Air Conditioning Inc.
                </h1>
                <h2 className="text-[1.5rem] sm:text-[2.5rem] pb-12 font-light">
                    Your friendly neighborhood air conditioning company!
                </h2>
            </div>
        </div>
    );
}
