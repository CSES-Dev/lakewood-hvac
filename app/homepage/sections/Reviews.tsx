"use client";

import { useEffect, useState } from "react";
import ReviewItem from "../components/ReviewItem";

const reviews = [
    {
        text: "Outstanding service! My husband and I were unsure about which company to use to put in our Ductless HVAC system. So glad we met the owner Juan!",
        author: "Veloz Michelle",
    },
    {
        text: "I've worked with hundreds of service providers over the years. Juan at Lakewood Heating and Air set a new standard. We were referred to Juan because our regular heating guy (also excellent) was not able to do the installation of a unit on a third floor. From his first call to his wrap-up, Juan was the consummate professional. His technicians did the job and three significant extras. He summed it up, 'We try never to just meet expectations; we try to exceed them.' Mission accomplished. Juan and his team greatly exceeded expectations. Absolutely the cleanest looking install ever!",
        author: "Luther Nussbaum",
    },
    {
        text: "Recently I had the pleasure to have a work done by Juan, from Lakewood Heating and Air Conditioning. Juan was professional, courteous and thorough. The service was prompt, friendly, and efficient. I highly recommend Juan for his reliable and courteous service.",
        author: "Leo Braka",
    },
    {
        text: "I had to get rid of my old furnace, because there were no parts to have it repaired. I had window air conditioners in two of my bedrooms and they were noisy. I was so happy when Juan told me about the mini split system that could do both heating and cooling, I was so happy. I hadn’t ever heard about this. These are so quiet! My neighbor also commented on that. I really appreciate the professionalism and I am very happy with the service. Great company!!",
        author: "Sharon Block",
    },
    {
        text: "Our AC went out and Juan at Lakewood Heating and Air responded right away and Ryan fixed our unit I less than 24 hrs! They’re a professional company and we will definitely call them for any future repairs. Thanks Guys!!",
        author: "Theresa Vitale",
    },
    {
        text: "Juan to the rescue!! Our A/C went out today on a Sunday morning... he was here in 2 hours and problem solved in less than 1 hour. We highly recommend this A/C Angel!",
        author: "Melodie McDonald",
    },
    {
        text: "Amazing company! My heating system stopped working a few days ago, I called some random HVAC company who gave me a wrong diagnosis and tried to sell me a wireless system I did not need, but when I called Lakewood to have a second opinion. The lady who was the dispatch manager at Lakewood was so helpful, she sent me a technician on the same day. He assessed the issue in minutes and fixed it on the spot, he then made sure the system was working properly. I highly recommend Lakewood!",
        author: "Marely Snow",
    },
];

export default function Reviews() {
    const [startIndex, setStartIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState("");
    const itemsPerPage = 2;

    // Handle Previous Click
    const prevReview = () => {
        setAnimationClass("-translate-x-full opacity-0");
        setTimeout(() => {
            setStartIndex((prevIndex) =>
                prevIndex === 0 ? reviews.length - itemsPerPage : prevIndex - 1,
            );
            setAnimationClass("translate-x-0 opacity-100");
        }, 300); // Matches transition duration
    };

    // Handle Next Click
    const nextReview = () => {
        setAnimationClass("translate-x-full opacity-0");
        setTimeout(() => {
            setStartIndex((prevIndex) =>
                prevIndex + itemsPerPage >= reviews.length ? 0 : prevIndex + 1,
            );
            setAnimationClass("translate-x-0 opacity-100");
        }, 300);
    };

    // Auto scroll every 7 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextReview();
        }, 7000);

        return () => {
            clearInterval(interval);
        }; // Cleanup to prevent memory leaks
    }, [startIndex]);

    return (
        <div className="px-4 py-8 sm:p-8 mx-auto">
            <h2 className="text-4xl text-center font-bold mb-8 text-primary-foreground">
                See What Our Clients Say
            </h2>

            <div className="flex items-center justify-center gap-x-1 sm:gap-x-4">
                {/* Left Button */}
                <button
                    onClick={prevReview}
                    className="w-12 h-12 rounded-full text-4xl bg-foreground text-primary-foreground flex items-center justify-center transition hover:scale-110"
                >
                    &lt;
                </button>
                {/* ReviewItems */}
                <div className="w-full">
                    <div className="w-full flex flex-col lg:flex-row">
                        {reviews
                            .slice(startIndex, startIndex + itemsPerPage)
                            .map((review, index) => (
                                <ReviewItem
                                    key={index}
                                    text={review.text}
                                    author={review.author}
                                    animation={animationClass}
                                ></ReviewItem>
                            ))}
                    </div>
                </div>
                {/* Right Button */}
                <button
                    onClick={nextReview}
                    className="w-12 h-12 rounded-full text-4xl bg-foreground text-primary-foreground flex items-center justify-center transition hover:scale-110"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
