"use client";

import React from "react";
import TemplateModal from "../TemplateTable/Modal";
import ImageUploadForm from "@/components/ImageUploadForm";
import { Service } from "@/models/Service";
import { ACTIONS } from "@/types/actions";

type ServiceModalProps = {
    action: ACTIONS | null;
    service: Service | null;
    setService: React.Dispatch<React.SetStateAction<Service | null>>;
    handleService: () => void;
};

export default function ServiceModal({
    action,
    service,
    setService,
    handleService,
}: ServiceModalProps) {
    if (!service) return null;

    return (
        <TemplateModal<Service>
            action={action}
            title="Service"
            item={service}
            setItem={setService}
            handleItem={handleService}
        >
            <div className="space-y-4">
                <div>
                    <label htmlFor="service-name" className="block text-md mb-2">
                        Service Name
                    </label>
                    <input
                        id="service-name"
                        className="border border-gray-300 hover:border-gray-800 text-gray-700 rounded-md p-3 w-full"
                        placeholder="Service Name"
                        value={service.title}
                        onChange={(e) => {
                            setService({ ...service, title: e.target.value });
                        }}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="service-description" className="block text-md mb-2">
                        Description
                    </label>
                    <textarea
                        id="service-description"
                        className="border border-gray-300 hover:border-gray-800 text-gray-700 rounded-md p-3 w-full"
                        placeholder="Write your service description here..."
                        value={service.description}
                        rows={7}
                        onChange={(e) => {
                            setService({ ...service, description: e.target.value });
                        }}
                        required
                    />
                </div>

                <ImageUploadForm
                    previewImageUrl={service.imageUrl ? service.imageUrl : undefined}
                    onUploadSuccess={(url) => {
                        setService({ ...service, imageUrl: url });
                    }}
                />
            </div>
        </TemplateModal>
    );
}
