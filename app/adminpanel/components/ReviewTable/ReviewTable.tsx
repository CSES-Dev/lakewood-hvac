"use client";

import React from "react";
import ReviewRow, { Review } from "./ReviewRow";

type ReviewTableProps = {
    reviews: Review[];
    onEdit: (id: number, name: string, review: string) => void;
    onDelete: (id: number) => void;
    onAddClick: (name: string) => void;
};

export default function ReviewTable({
    reviews,
    onEdit,
    onDelete,
    onAddClick,
}: ReviewTableProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Customer Reviews</h2>
            <button
            onClick={() => {
                onAddClick("");
            }}
            className="bg-pink-500 text-white px-4 py-2 rounded"
            >
            Add Review
            </button>
        </div>
        <table className="w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-200">
                <th className="p-2 border text-left">Name</th>
                <th className="p-2 border text-left">Review</th>
                <th className="p-2 border text-right">Actions</th>
            </tr>
            </thead>
            <tbody>
            {reviews.map((review) => (
                <ReviewRow
                key={review.id}
                review={review}
                onEdit={onEdit}
                onDelete={onDelete}
                />
            ))}
            </tbody>
        </table>
        </div>
    );
}
