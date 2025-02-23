import React from "react";
import FeaturedCircles from "./homepage/sections/FeaturedCircles";
import Landing from "./homepage/sections/Landing";
import Reviews from "./homepage/sections/Reviews";
import ScheduleService from "./homepage/sections/ScheduleService";
import ServiceSquares from "./homepage/sections/ServiceSquares";


export default function Home() {
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
