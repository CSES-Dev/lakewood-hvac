"use client";

import { useEffect, useState } from "react";
import ReviewItem from "../components/ReviewItem";
import { Review } from "@/models/Review";

// const squareData = [
//     {
//         name: "Floyd Miles",
//         review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//         rating: 3.5,
//     },
//     {
//         name: "Ronald Richards",
//         review: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//         rating: 4.0,
//     },
//     {
//         name: "Savannah Nguyen",
//         review: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//         rating: 3.5,
//     },
//     {
//         name: "Bennie Smith",
//         review: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//         rating: 4.0,
//     },
// ];

const ReviewSection = () => {
    const [reviews, setReviews] = useState<Review[]>([]);

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

    return (
        <div>
            {reviews.map((data, index) => (
                <ReviewItem
                    key={index}
                    name={data.author}
                    review={data.comments}
                    rating={data.rating}
                />
            ))}
        </div>
    );
};

export default ReviewSection;
