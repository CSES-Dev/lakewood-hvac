"use client";

import TemplateRow from "../TemplateTable/Row";
import { Review } from "@/models/Review";

type ReviewRowProps = {
    review: Review;
    onEdit: (review: Review) => void;
    onDelete: (id: number) => void;
};

export default function ReviewRow({ review, onEdit, onDelete }: ReviewRowProps) {
    return (
        <TemplateRow<Review> item={review} onEdit={onEdit} onDelete={onDelete}>
            <td className="p-4">{review.author}</td>
            <td className="p-4">
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
            <td className="p-4">{review.comments}</td>
            <td className="p-4 text-center">{review.rating}</td>
        </TemplateRow>
    );
}
