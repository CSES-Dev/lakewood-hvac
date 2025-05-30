"use client";

import React, { useEffect, useState } from "react";
import ServiceItem from "../components/ServiceItem";

type Service = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

export default function ServiceSquares() {
    const [services, setServices] = useState<Service[]>([]);
    const loadServices = () => {
        fetch("/api/services")
            .then((res) => res.json() as Promise<Service[]>)
            .then(setServices)
            .catch((err: unknown) => {
                console.error(err);
            });
    };
    useEffect(loadServices, []);

    return (
        <div className="px-4 py-8 sm:p-8 mx-auto">
            <h2 className="max-sm:text-[6.25vw] text-[clamp(0px,3.13vw,67.5px)] text-center mb-8 text-primary-foreground">
                Professional Work, With Professional Services
            </h2>
            {/* Images */}
            <div className="flex flex-wrap lg:flex-nowrap w-full p-4 gap-8 justify-center">
                {services.map((data) => (
                    <ServiceItem
                        key={data.id}
                        description={data.title}
                        source={data.imageUrl}
                    ></ServiceItem>
                ))}
            </div>
        </div>
    );
}
