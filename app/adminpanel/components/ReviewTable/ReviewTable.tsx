"use client";

import { FieldDefinition, TemplateTable } from "../TemplateTable/Table";
import ReviewRow from "./ReviewRow";
import { Review } from "@/models/Review";

type ReviewTableProps = {
    reviews: Review[];
    onEdit: (review: Review) => void;
    onDelete: (id: number) => void;
    onAddClick: () => void;
};

export default function ReviewTable({ reviews, onEdit, onDelete, onAddClick }: ReviewTableProps) {
    const reviewTableFields: FieldDefinition[] = [
        { name: "Author", align: "left" },
        { name: "Date", align: "left" },
        { name: "Review", align: "left" },
        { name: "Star Rating", align: "center" },
    ];

    return (
        <TemplateTable
            title={"Customer Reviews"}
            fields={reviewTableFields}
            onAddClick={onAddClick}
            addButtonText={"Add Review"}
        >
            {reviews.map((review) => (
                <ReviewRow key={review.id} review={review} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </TemplateTable>
    );
}
