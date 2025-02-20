"use client";

import ServiceItem from "../components/ServiceItem";

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
        description: "Heat Pumps",
    }
];

export default function ServiceSquares() {

    return (
        <div className="px-4 py-8 sm:p-8 mx-auto">
            <h2 className="text-4xl text-center font-bold mb-8 text-primary-foreground">
                Professional Work, With Professional Services
            </h2>
            {/* Images */}
            <div className="flex flex-wrap lg:flex-nowrap w-full p-4 gap-8 justify-center">
                {squareData.map(((data, index) => (
                    <ServiceItem key={index} description={data.description} source={data.source}></ServiceItem>
                )))}
            </div>
        </div>
    );
}
