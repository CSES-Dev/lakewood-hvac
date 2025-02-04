"use client";

import React from "react";
import Landing from "./Landing";
import Reviews from "./Reviews";
import Image from "next/image";
import CirclesSection from "./sections/CirclesSection";

export default function Page() {
    return (
        <div className="bg-background">
            <Landing></Landing>
            {/* Services */}

            <div>
                {/* Squares - Jesus*/}
                <div className="px-4 py-8 sm:p-8 mx-auto">
                    <h2 className="text-4xl text-center font-bold mb-8 text-primary-foreground">
                        Professional Work, With Professional Services
                    </h2>
                    {/* Images */}
                    <div className="flex flex-wrap lg:flex-nowrap w-full p-4 gap-4 justify-center">
                        <div className="max-w-xs relative rounded-lg overflow-hidden">
                            <Image
                                src="/homePage/AC.png"
                                alt="Air Conditioning"
                                className="w-full h-full object-cover"
                                fill={true}
                            />
                            <div className="absolute bottom-0 w-full bg-white/80 text-black text-sm font-semibold p-2">
                                Air Conditioning
                            </div>
                        </div>
                        <div className="max-w-xs relative rounded-lg overflow-hidden">
                            <Image
                                src="/homePage/Heating.png"
                                alt="Air Conditioning"
                                className="w-full h-full object-cover"
                                fill={true}
                            />
                            <div className="absolute bottom-0 w-full bg-white/80 text-black text-sm font-semibold p-2">
                                Heating
                            </div>
                        </div>
                        <div className="max-w-xs relative rounded-lg overflow-hidden">
                            <Image
                                src="/homePage/Thermostats.png"
                                alt="Air Conditioning"
                                className="w-full h-full object-cover"
                                fill={true}
                            />
                            <div className="absolute bottom-0 w-full bg-white/80 text-black text-sm font-semibold p-2">
                                Thermostats
                            </div>
                        </div>
                        <div className="max-w-xs relative rounded-lg overflow-hidden">
                            <Image
                                src="/homePage/HeatPumps.png"
                                alt="Air Conditioning"
                                className="w-full h-full object-cover"
                                fill={true}
                            />
                            <div className="absolute bottom-0 w-full bg-white/80 text-black text-sm font-semibold p-2">
                                HeatPumps
                            </div>
                        </div>
                    </div>
                </div>
                {/* Circles - Brandon*/}
                <div></div>
            </div>
            <CirclesSection />
            {/* What our clients say - Jesus*/}
            <Reviews></Reviews>
        </div>
    );
}
