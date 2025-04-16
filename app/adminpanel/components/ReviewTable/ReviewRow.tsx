"use client";

import React from "react";
import { Review } from "@/models/Review";

type ReviewRowProps = {
    review: Review;
    onEdit: (id: number, name: string, review: string) => void;
    onDelete: (id: number) => void;
};

export default function ReviewRow({ review, onEdit, onDelete }: ReviewRowProps) {
    return (
        <tr className="border">
            <td className="p-2">{review.author}</td>
            <td className="p-2">{review.comments}</td>
            <td className="p-2 text-right">
                <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded mb-1 w-20"
                    onClick={() => {
                        onEdit(review.id, review.author, review.comments);
                    }}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded w-20"
                    onClick={() => {
                        onDelete(review.id);
                    }}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
