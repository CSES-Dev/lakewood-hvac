"use client";

import React from "react";
import { Review } from "@/models/Review";

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleReview();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h3 className="text-lg font-semibold mb-4">{`${action} Review`}</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className="border p-2 w-full mb-2"
                        placeholder="Name"
                        value={review.author}
                        onChange={(e) => {
                            setReview({ ...review, author: e.target.value });
                        }}
                        required
                    />
                    <textarea
                        className="border p-2 w-full mb-2"
                        placeholder="Review"
                        value={review.comments}
                        onChange={(e) => {
                            setReview({ ...review, comments: e.target.value });
                        }}
                        required
                    />
                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            type="button"
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                            onClick={() => {
                                setReview(null);
                            }}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                            {action}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
