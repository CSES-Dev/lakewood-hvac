"use client";

import { Review } from "@/models/Review";

type ReviewRowProps = {
    review: Review;
    onEdit: (review: Review) => void;
    onDelete: (id: number) => void;
};

export default function ReviewRow({ review, onEdit, onDelete }: ReviewRowProps) {
    return (
        <tr className="border">
            <td className="p-2">{review.author}</td>
            <td className="p-2">
                {new Date(review.createdAt)
                    .toLocaleString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        year: "numeric",
                        minute: "2-digit",
                        hour12: true,
                    })
                    .replace(/\bat\b/, "•")}
            </td>
            <td className="p-2">{review.comments}</td>
            <td className="p-2">{review.service}</td>
            <td className="p-2">{review.rating}</td>
            <td className="p-2 text-right">
                <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded mb-1 w-20"
                    onClick={() => {
                        onEdit(review);
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
