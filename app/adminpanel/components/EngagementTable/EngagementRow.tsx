"use client";

import React from "react";
import { FaImage } from "react-icons/fa6";
import { Engagement } from "@/models/Engagement";

type EnagementRowProps = {
    engagement: Engagement;
    onEdit: (engagement: Engagement) => void;
    onDelete: (id: number) => void;
};

export default function EngagementRow({ engagement, onEdit, onDelete }: EnagementRowProps) {
    return (
        <tr className="border">
            <td className="p-2 text-center align-middle">
                <input
                    type="checkbox"
                    checked={engagement.isVisible}
                    disabled
                    className="mx-auto scale-125"
                />
            </td>
            <td className="p-2">{engagement.title}</td>
            <td className="p-2">
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
                    .replace("at", "•")}
            </td>
            <td className="p-2">{engagement.description}</td>
            <td className="p-2">
                <div className="flex items-center space-x-2">
                    <FaImage className="text-gray-500" />
                    <a
                        href={engagement.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        {engagement.imageUrl}
                    </a>
                </div>
            </td>
            <td className="p-2 text-right">
                <div className="flex flex-col items-end space-y-1">
                    <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded w-20"
                        onClick={() => {
                            onEdit(engagement);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded w-20"
                        onClick={() => {
                            onDelete(engagement.id);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}
