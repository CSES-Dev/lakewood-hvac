"use client";

import React from "react";
import { Service } from "./ServiceRow";
import { ACTIONS } from "@/types/actions";

type ServiceModalProps = {
    action: ACTIONS | null;
    service: Service | null;
    setService: React.Dispatch<React.SetStateAction<Service | null>>;
    handleService: () => void;
};

export default function AddServiceModal({
    action,
    service,
    setService,
    handleService,
}: ServiceModalProps) {
    if (!service) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-semibold mb-4">{`${action ?? ""} Service`}</h3>
                <input
                    className="border p-2 w-full mb-4"
                    placeholder="Name"
                    value={service.name}
                    onChange={(e) => {
                        setService({ ...service, name: e.target.value });
                    }}
                />
                <input
                    className="border p-2 w-full mb-4"
                    placeholder="Description"
                    value={service.description}
                    onChange={(e) => {
                        setService({ ...service, description: e.target.value });
                    }}
                />
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => {
                            setService(null);
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded"
                        onClick={() => {
                            handleService();
                        }}
                    >
                        {action}
                    </button>
                </div>
            </div>
        </div>
    );
}
