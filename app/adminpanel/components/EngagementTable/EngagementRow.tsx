"use client";

import { basename } from "path";
import TemplateRow from "../TemplateTable/Row";
import { Engagement } from "@/models/Engagement";

type EnagementRowProps = {
    engagement: Engagement;
    onEdit: (engagement: Engagement) => void;
    onDelete: (id: number) => void;
};

export default function EngagementRow({ engagement, onEdit, onDelete }: EnagementRowProps) {
    return (
        <TemplateRow<Engagement> item={engagement} onEdit={onEdit} onDelete={onDelete}>
            <td className="p-4 text-center align-middle">
                <input
                    type="checkbox"
                    checked={engagement.isVisible}
                    disabled
                    className="mx-auto scale-125"
                />
            </td>
            <td className="p-4">{engagement.title}</td>
            <td className="p-4">
                {new Date(engagement.date)
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
            <td className="p-4">{engagement.address}</td>
            <td className="p-4">{engagement.description}</td>
            <td className="p-4">
                {engagement.imageUrl ? (
                    <a
                        href={engagement.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        {basename(engagement.imageUrl)}
                    </a>
                ) : (
                    <span>No upload</span>
                )}
            </td>
        </TemplateRow>
    );
}
