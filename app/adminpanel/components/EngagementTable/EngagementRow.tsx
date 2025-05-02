"use client";

import React from "react";
import { Engagement } from "@/models/Engagement";

type EnagementRowProps = {
    engagement: Engagement;
    onEdit: (engagement: Engagement) => void;
    onDelete: (id: number) => void;
};

export default function ReviewRow({ engagement, onEdit, onDelete }: EnagementRowProps) {
    return (
        <tr className="border">
            <td className="p-2">{engagement.title}</td>
            <td className="p-2">{engagement.date.toString()}</td>
            <td className="p-2">{engagement.description}</td>
            <td className="p-2">{engagement.isVisible.toString()}</td>
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
