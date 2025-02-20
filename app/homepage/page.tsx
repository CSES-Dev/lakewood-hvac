"use client";

import React from "react";
import Landing from "./sections/Landing";
import Reviews from "./sections/Reviews";
import FeaturedCircles from "./sections/FeaturedCircles";
import ServiceSquares from "./sections/ServiceSquares";
import ScheduleService from "./sections/ScheduleService";

export default function Page() {
    return (
        <div className="bg-background">
            <Landing></Landing>
            <ServiceSquares></ServiceSquares>
            <FeaturedCircles></FeaturedCircles>
            <Reviews></Reviews>
            <ScheduleService></ScheduleService>
        </div>
    );
}
