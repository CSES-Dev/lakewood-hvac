"use client";

import SquareItem from "../components/SquareItem";

const squareData = [
    {
        source: "/homePage/AC.png",
        description: "Air Conditioning",
    },
    {
        source: "/homePage/Heating.png",
        description: "Heating",
    },
    {
        source: "/homePage/Thermostats.png",
        description: "Thermostats",
    },
    {
        source: "/homePage/HeatPumps.png",
        description: "HeatPumps",
    },
];

export default function Squares() {
    return (
        <div className="px-4 py-4 sm:px-8 sm:py-8 md:px-16 md:py-16 lg:px-20 lg:py-20 mx-auto">
            <h2 className="text-4xl text-left font-bold mb-8 text-primary-foreground">
                Professional Work, With Professional Services
            </h2>
            {/* Images */}
            <div className="flex flex-wrap lg:flex-nowrap w-full gap-4 justify-center">
                {squareData.map((data, index) => (
                    <SquareItem
                        key={index}
                        description={data.description}
                        source={data.source}
                    ></SquareItem>
                ))}
            </div>
        </div>
    );
}
