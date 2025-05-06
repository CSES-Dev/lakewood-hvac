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
        <div className="px-4 py-8 sm:p-8 mx-auto">
            <h2 className="max-sm:text-[6.94vw] text-[clamp(0px,3.47vw,75px)] text-center font-bold mb-8 text-primary-foreground">
                Professional Work, With Professional Services
            </h2>
            {/* Images */}
            <div className="flex flex-wrap lg:flex-nowrap w-full p-4 gap-4 justify-center">
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
