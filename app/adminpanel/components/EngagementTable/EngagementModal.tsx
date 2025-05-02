"use client";

import React from "react";
import { Engagement } from "@/models/Engagement";

type EngagementModalProps = {
    action: string;
    engagement: Engagement | null;
    setEngagement: React.Dispatch<React.SetStateAction<Engagement | null>>;
    handleEngagement: () => void;
};

export default function AddEngagementModal({
    action,
    engagement,
    setEngagement,
    handleEngagement,
}: EngagementModalProps) {
    if (!engagement) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleEngagement();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h3 className="text-lg font-semibold mb-4">{`${action} Review`}</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className="border p-2 w-full mb-2"
                        placeholder="Title"
                        value={engagement.title}
                        onChange={(e) => {
                            setEngagement({ ...engagement, title: e.target.value });
                        }}
                        required
                    />
                    <input
                        className="border p-2 w-full mb-2"
                        placeholder="Description"
                        value={engagement.description}
                        onChange={(e) => {
                            setEngagement({ ...engagement, description: e.target.value });
                        }}
                        required
                    />
                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                            type="button"
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                            onClick={() => {
                                setEngagement(null);
                            }}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                            {action}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
