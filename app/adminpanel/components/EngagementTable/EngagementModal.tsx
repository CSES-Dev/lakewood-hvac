"use client";

import React from "react";
import TemplateModal from "../TemplateTable/Modal";
import DateTimeSelect from "@/components/DataTimeSelect";
import ImageUploadForm from "@/components/ImageUploadForm";
import { Engagement } from "@/models/Engagement";
import { ACTIONS } from "@/types/actions";

type EngagementModalProps = {
    action: ACTIONS | null;
    engagement: Engagement | null;
    setEngagement: React.Dispatch<React.SetStateAction<Engagement | null>>;
    handleEngagement: () => void;
};

export default function EngagementModal({
    action,
    engagement,
    setEngagement,
    handleEngagement,
}: EngagementModalProps) {
    if (!engagement) return null;

    return (
        <TemplateModal<Engagement>
            action={action}
            title="Engagement"
            item={engagement}
            setItem={setEngagement}
            handleItem={handleEngagement}
        >
            <div className="space-y-4">
                <div>
                    <label htmlFor="engagement-name" className="block text-md mb-2">
                        Event Name
                    </label>
                    <input
                        id="engagement-name"
                        className="border border-gray-300 hover:border-gray-800 text-gray-700 rounded-md p-3 w-full"
                        placeholder="Event Name"
                        value={engagement.title}
                        onChange={(e) => {
                            setEngagement({ ...engagement, title: e.target.value });
                        }}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="engagement-date" className="block text-md mb-2">
                        Date
                    </label>
                    <DateTimeSelect
                        date={action === ACTIONS.EDIT ? new Date(engagement.date) : null}
                        onChange={(newDate: Date | null) => {
                            if (newDate) setEngagement({ ...engagement, date: newDate });
                        }}
                    />
                </div>

                <div>
                    <label htmlFor="engagement-address" className="block text-md mb-2">
                        Address
                    </label>
                    <input
                        id="engagement-adress"
                        className="border border-gray-300 hover:border-gray-800 text-gray-700 rounded-md p-3 w-full"
                        placeholder="Address"
                        value={engagement.address}
                        onChange={(e) => {
                            setEngagement({ ...engagement, address: e.target.value });
                        }}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="engagement-description" className="block text-md mb-2">
                        Description
                    </label>
                    <textarea
                        id="engagement-description"
                        className="border border-gray-300 hover:border-gray-800 text-gray-700 rounded-md p-3 w-full"
                        placeholder="Write your event description here..."
                        value={engagement.description}
                        rows={7}
                        onChange={(e) => {
                            setEngagement({ ...engagement, description: e.target.value });
                        }}
                        required
                    />
                </div>

                <ImageUploadForm
                    previewImageUrl={engagement.imageUrl ? engagement.imageUrl : undefined}
                    onUploadSuccess={(url) => {
                        setEngagement({ ...engagement, imageUrl: url });
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
            </div>
        </TemplateModal>
    );
}
