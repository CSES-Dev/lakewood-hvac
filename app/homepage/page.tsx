"use client";

import React from "react";
import Landing from "./Landing";
import Reviews from "./Reviews";

export default function Page() {
    return (
        <div className="bg-background">
            <Landing></Landing>
            {/* Services */}
            <div>
                {/* Squares - Jesus*/}
                <div></div>
                {/* Circles - Brandon*/}
                <div></div>
            </div>
            {/* What our clients say - Jesus*/}
            <Reviews></Reviews>
        </div>
    );
}
