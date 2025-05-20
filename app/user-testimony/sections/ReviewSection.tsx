"use client";

import { useEffect, useState } from "react";
import ReviewItem from "../components/ReviewItem";
import { Review } from "@/models/Review";

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
                    date={new Date(data.createdAt)}
                    service={data.service}
                />
            ))}
        </div>
    );
};

export default ReviewSection;
