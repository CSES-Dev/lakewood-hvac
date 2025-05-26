"use client";

import ServiceItem from "../components/ServiceItem";
import React, { useEffect, useState } from "react";

type Service = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

const ServiceSection = () => {
    const [services, setServices] = useState<Service[]>([]);
    const loadServices = () => {
        fetch('/api/services')
            .then((res) => res.json() as Promise<Service[]>)
            .then(setServices)
            .catch((err: unknown) => {
                console.error(err);
            });
    };
    useEffect(loadServices, []);

    return (
        <div>
            {services.map((data) => (
                <ServiceItem
                    key={data.id}
                    title={data.title}
                    description={data.description}
                    source={data.imageUrl}
                />
            ))}
        </div>
    );
};

export default ServiceSection;
