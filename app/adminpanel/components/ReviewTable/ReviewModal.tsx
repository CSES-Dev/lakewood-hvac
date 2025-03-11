"use client";

import React from "react";
import { Review } from "@/models/Review"

type ReviewModalProps = {
    action: string;
    review: Review | null;
    setReview: React.Dispatch<React.SetStateAction<Review | null>>;
    handleReview: () => void;
};

export default function AddReviewModal({
    action,
    review,
    setReview,
    handleReview,
}: ReviewModalProps) {
    if (!review) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-semibold mb-4">{`${action} Review`}</h3>
                <input
                    className="border p-2 w-full mb-4"
                    placeholder="Name"
                    value={review.author}
                    onChange={(e) => {
                        setReview({ ...review, author: e.target.value });
                    }}
                />
                <textarea
                    className="border p-2 w-full mb-4"
                    placeholder="Review"
                    value={review.comments}
                    onChange={(e) => {
                        setReview({ ...review, comments: e.target.value });
                    }}
                />
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => {
                            setReview(null);
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded"
                        onClick={() => {
                            handleReview();
                        }}
                    >
                        {action}
                    </button>
                </div>
            </div>
        </div>
    );
}
