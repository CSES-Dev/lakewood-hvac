"use client";

import React from "react";
import { Review } from "./ReviewRow";

type AddReviewModalProps = {
    addingReview: Review | null;
    setAddingReview: React.Dispatch<React.SetStateAction<Review | null>>;
    handleAddReview: () => void;
};

export default function AddReviewModal({
    addingReview,
    setAddingReview,
    handleAddReview,
}: AddReviewModalProps) {
    if (!addingReview) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-4">Add Review</h3>
            <input
            className="border p-2 w-full mb-4"
            placeholder="Name"
            value={addingReview.name}
            onChange={(e) => {
                setAddingReview({ ...addingReview, name: e.target.value });
            }}
            />
            <textarea
            className="border p-2 w-full mb-4"
            placeholder="Review"
            value={addingReview.review}
            onChange={(e) => {
                setAddingReview({ ...addingReview, review: e.target.value });
            }}
            />
            <div className="flex justify-end space-x-2">
            <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                setAddingReview(null);
                }}
            >
                Cancel
            </button>
            <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => {
                handleAddReview();
                }}
            >
                Add
            </button>
            </div>
        </div>
        </div>
    );
}
