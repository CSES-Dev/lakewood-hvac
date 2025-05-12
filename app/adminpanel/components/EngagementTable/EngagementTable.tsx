"use client";

import React from "react";
import EngagementRow from "./EngagementRow";
import { Engagement } from "@/models/Engagement";

type EngagementTableProps = {
    engagements: Engagement[];
    onEdit: (engagement: Engagement) => void;
    onDelete: (id: number) => void;
    onAddClick: (name: string) => void;
};

export default function EngagementTable({
    engagements,
    onEdit,
    onDelete,
    onAddClick,
}: EngagementTableProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Community Events</h2>
                <button
                    onClick={() => {
                        onAddClick("");
                    }}
                    className="bg-pink-500 text-white px-4 py-2 rounded"
                >
                    Add Event
                </button>
            </div>
            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border text-center">Published?</th>
                        <th className="p-2 border text-left">Event Name</th>
                        <th className="p-2 border text-left">Date</th>
                        <th className="p-2 border text-left">Description</th>
                        <th className="p-2 border text-left">Image</th>
                        <th className="p-2 border text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {engagements.map((engagement) => (
                        <EngagementRow
                            key={engagement.id}
                            engagement={engagement}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
