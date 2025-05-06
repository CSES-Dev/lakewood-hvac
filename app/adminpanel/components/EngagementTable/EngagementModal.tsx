"use client";

import React from "react";
import { ACTIONS } from "../../page";
import DateTimeSelect from "@/components/DataTimeSelect";
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
                <h3 className="text-lg font-semibold mb-4">{`${action} Event`}</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className="border border-gray-300 text-black p-3 w-full mb-2 rounded-sm"
                        placeholder="Title"
                        value={engagement.title}
                        onChange={(e) => {
                            setEngagement({ ...engagement, title: e.target.value });
                        }}
                        required
                    />
                    <input
                        className="border border-gray-300 text-black p-3 w-full mb-2 rounded-sm"
                        placeholder="Description"
                        value={engagement.description}
                        onChange={(e) => {
                            setEngagement({ ...engagement, description: e.target.value });
                        }}
                        required
                    />
                    <DateTimeSelect
                        className="w-full mb-2"
                        date={action === ACTIONS.EDIT ? new Date(engagement.date) : null}
                        onChange={(newDate: Date | null) => {
                            if (newDate) setEngagement({ ...engagement, date: newDate });
                        }}
                    />
                    <div className="mt-4">
                        <span className="mr-2">Publish Event?</span>
                        <input
                            type="checkbox"
                            checked={engagement.isVisible}
                            onChange={(e) => {
                                setEngagement({ ...engagement, isVisible: e.target.checked });
                            }}
                        />
                    </div>
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
