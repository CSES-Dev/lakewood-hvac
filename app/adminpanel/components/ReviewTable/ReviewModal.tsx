"use client";

import Rating from "@mui/material/Rating";
import React from "react";
import TemplateModal from "../TemplateTable/Modal";
import DateTimeSelect from "@/components/DataTimeSelect";
import { Review } from "@/models/Review";
import { ACTIONS } from "@/types/actions";

type ReviewModalProps = {
    action: ACTIONS | null;
    review: Review | null;
    setReview: React.Dispatch<React.SetStateAction<Review | null>>;
    handleReview: () => void;
};

export default function ReviewModal({ action, review, setReview, handleReview }: ReviewModalProps) {
    if (!review) return null;

    return (
        <TemplateModal<Review>
            action={action}
            title="Review"
            item={review}
            setItem={setReview}
            handleItem={handleReview}
        >
            <div className="space-y-4">
                <div>
                    <label htmlFor="review-author" className="block text-md mb-2">
                        Author
                    </label>
                    <input
                        id="review-author"
                        className="border border-gray-300 hover:border-gray-800 text-gray-700 rounded-md p-3 w-full"
                        placeholder="John Smith"
                        value={review.author}
                        onChange={(e) => {
                            setReview({ ...review, author: e.target.value });
                        }}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="review-date" className="block text-md mb-2">
                        Date
                    </label>
                    <DateTimeSelect
                        date={action === ACTIONS.EDIT ? new Date(review.createdAt) : null}
                        onChange={(newDate: Date | null) => {
                            if (newDate) setReview({ ...review, createdAt: newDate });
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="review-text" className="block text-md mb-2">
                        Review
                    </label>
                    <textarea
                        id="review-text"
                        className="border border-gray-300 hover:border-gray-800 text-gray-700 rounded-md p-2 w-full"
                        placeholder="Write your review here..."
                        value={review.comments}
                        rows={7}
                        onChange={(e) => {
                            setReview({ ...review, comments: e.target.value });
                        }}
                        required
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor="service-text" className="block text-md mb-2">
                            Service (Optional)
                        </label>
                        <select
                            id="service"
                            className="border border-gray-300 hover:border-gray-800 text-gray-700 rounded-md p-3 w-full"
                            value={review.service}
                            onChange={(e) => {
                                setReview({ ...review, service: e.target.value });
                            }}
                        >
                            <option value="">None</option>
                            <option value="Air Conditioning">Air Conditioning</option>
                            <option value="Heating">Heating</option>
                            <option value="Thermostats">Thermostats</option>
                            <option value="Heat Pumps">Heat Pumps</option>
                        </select>
                    </div>
                </div>
            </div>
            <label htmlFor="review-rating" className="block text-md">
                Rating
            </label>
            <Rating
                id="review-rating"
                value={review.rating}
                precision={0.5}
                onChange={(_, newRating) => {
                    setReview({ ...review, rating: newRating ?? 0 });
                }}
                className="mt-0"
            />
            <div></div>
        </TemplateModal>
    );
}
