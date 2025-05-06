"use client";

import React from "react";

{
    /* Landing - Brandon  */
}
export default function Landing() {
    return (
        <div className="bg-background relative h-screen px-6 sm:px-16">
            <div className="absolute inset-0 bg-[url('/homePage/LandingImg.jpeg')] bg-cover bg-center bg-no-repeat"></div>

            <div className="absolute text-white top-[4.86vw] z-10">
                <h1 className="max-sm:text-[12.5vw] text-[clamp(0px,6.25vw,135px)] font-medium pb-4 leading-[1.16]">
                    Lakewood Heating and Air Conditioning Inc.
                </h1>
                <h2 className="max-sm:text-[5.56vw] text-[clamp(0px,2.78vw,60px)] pb-12 font-light">
                    Your friendly neighborhood air conditioning company!
                </h2>
            </div>
        </div>
    );
}
