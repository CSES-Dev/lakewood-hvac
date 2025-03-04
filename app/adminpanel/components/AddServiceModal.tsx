"use client";

import React from "react";
import { Service } from "./ServiceRow";

type AddServiceModalProps = {
    addingService: Service | null;
    setAddingService: React.Dispatch<React.SetStateAction<Service | null>>;
    handleAddService: () => void;
};

export default function AddServiceModal({
    addingService,
    setAddingService,
    handleAddService,
}: AddServiceModalProps) {
    if (!addingService) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-4">Add Service</h3>
            <input
            className="border p-2 w-full mb-4"
            value={addingService.name}
            onChange={(e) => {
                setAddingService({ ...addingService, name: e.target.value });
            }}
            />
            <div className="flex justify-end space-x-2">
            <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                setAddingService(null);
                }}
            >
                Cancel
            </button>
            <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => {
                handleAddService();
                }}
            >
                Add
            </button>
            </div>
        </div>
        </div>
    );
}
