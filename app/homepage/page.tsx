"use client";

import React from "react";
import Landing from "./sections/Landing";
import Reviews from "./sections/Reviews";
import CirclesSection from "./sections/CirclesSection";
import Squares from "./sections/Squares";

export default function Page() {
    return (
        <div className="bg-background">
            <Landing></Landing>
            <Squares></Squares>
            <CirclesSection></CirclesSection>
            <Reviews></Reviews>
        </div>
    );
}
