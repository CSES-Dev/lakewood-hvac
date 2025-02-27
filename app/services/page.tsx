import React from "react";
import Landing from "./sections/Landing";
import ServiceSection from "./sections/ServiceSection";

export default function Services() {
    return (
        <main className="bg-background px-[6.11vw] pt-[5.28vw] pb-[5vw] p-[0.69vw]">
            <Landing></Landing>
            <ServiceSection></ServiceSection>
        </main>
    );
}
