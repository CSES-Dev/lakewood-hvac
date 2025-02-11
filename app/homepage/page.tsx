"use client";

import React from "react";
import Landing from "./Landing";
import Reviews from "./Reviews";
import CirclesSection from "./sections/CirclesSection";

export default function Page() {
    return (
        <div className="bg-background">
            <Landing></Landing>
            {/* Services */}
            <div>
                {/* Squares - Jesus*/}
                <div className="px-4 py-8 sm:p-8 mx-auto">
                    <h2 className="text-5xl text-left font-bold mb-8 text-primary-foreground ">
                        Professional Work, With Professional Services
                    </h2>
                    {/* Images */}
                    <div className="flex flex-wrap lg:flex-nowrap w-full p-4 gap-4 justify-center">
                        <div className="max-w-xs relative rounded-lg overflow-hidden">
                            <img
                                src="/homePage/AC.png"
                                alt="Air Conditioning"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 w-full bg-white/80 text-black text-sm font-semibold p-2">
                                Air Conditioning
                            </div>
                        </div>
                        <div className="max-w-xs relative rounded-lg overflow-hidden">
                            <img
                                src="/homePage/Heating.png"
                                alt="Air Conditioning"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 w-full bg-white/80 text-black text-sm font-semibold p-2">
                                Heating
                            </div>
                        </div>
                        <div className="max-w-xs relative rounded-lg overflow-hidden">
                            <img
                                src="/homePage/Thermostats.png"
                                alt="Air Conditioning"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 w-full bg-white/80 text-black text-sm font-semibold p-2">
                                Thermostats
                            </div>
                        </div>
                        <div className="max-w-xs relative rounded-lg overflow-hidden">
                            <img
                                src="/homePage/HeatPumps.png"
                                alt="Air Conditioning"
                                className="w-full h-full object-cover"
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
            {/* What our clients say - Jesus*/}
            <Reviews></Reviews>
        </div>
    );
}
