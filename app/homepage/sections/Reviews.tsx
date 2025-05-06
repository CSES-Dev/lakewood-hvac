"use client";

import { useEffect, useState } from "react";
import ReviewItem from "../components/ReviewItem";
import { Review } from "@/models/Review";

export default function Reviews() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [startIndex, setStartIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState("");
    const itemsPerPage = 2;

    useEffect(() => {
        fetch("/api/reviews")
            .then((response) => response.json() as Promise<Review[]>)
            .then((data) => {
                setReviews(data);
            })
            .catch((error: unknown) => {
                console.error("Error fetching reviews.", error);
            });
    }, []);

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
        <div className="px-4 py-8 sm:p-8 mx-auto overflow-x-hidden">
            <h2 className="max-sm:text-[6.25vw] text-[clamp(0px,3.13vw,67.5px)] text-center mb-8 text-primary-foreground">
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
                                    text={review.comments}
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
