"use client";

import React from "react";
import ReviewRow from "./ReviewRow";
import { Review } from "@/models/Review";

type ReviewTableProps = {
    reviews: Review[];
    onEdit: (review: Review) => void;
    onDelete: (id: number) => void;
    onAddClick: () => void;
};

export default function ReviewTable({ 
    reviews, 
    onEdit, 
    onDelete, 
    onAddClick 
}: ReviewTableProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Customer Reviews</h2>
                <button
                    onClick={() => {
                        onAddClick();
                    }}
                    className="bg-pink-500 text-white px-4 py-2 rounded"
                >
                    Add Review
                </button>
            </div>
            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border text-left">Author</th>
                        <th className="p-2 border text-left">Date</th>
                        <th className="p-2 border text-left">Review</th>
                        <th className="p-2 border text-left">Rating</th>
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
