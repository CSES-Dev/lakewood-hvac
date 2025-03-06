"use client";

import React from "react";
import { Review } from "./ReviewRow";

type EditReviewModalProps = {
    editingReview: Review | null;
    setEditingReview: React.Dispatch<React.SetStateAction<Review | null>>;
    handleSaveEdit: () => void;
};

export default function EditReviewModal({
    editingReview,
    setEditingReview,
    handleSaveEdit,
}: EditReviewModalProps) {
    if (!editingReview) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-4">Edit Review</h3>
            <input
            className="border p-2 w-full mb-4"
            placeholder="Name"
            value={editingReview.name}
            onChange={(e) => {
                setEditingReview({ ...editingReview, name: e.target.value });
            }}
            />
            <textarea
            className="border p-2 w-full mb-4"
            placeholder="Review"
            value={editingReview.review}
            onChange={(e) => {
                setEditingReview({ ...editingReview, review: e.target.value });
            }}
            />
            <div className="flex justify-end space-x-2">
            <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                setEditingReview(null);
                }}
            >
                Cancel
            </button>
            <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => {
                handleSaveEdit();
                }}
            >
                Save
            </button>
            </div>
        </div>
        </div>
    );
}
