"use client";

import React from "react";
import { Service } from "./ServiceRow";

type EditServiceModalProps = {
    editingService: Service | null;
    setEditingService: React.Dispatch<React.SetStateAction<Service | null>>;
    handleSaveEdit: () => void;
};

export default function EditServiceModal({
    editingService,
    setEditingService,
    handleSaveEdit,
}: EditServiceModalProps) {
    if (!editingService) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-4">Edit Services</h3>
            <input
            className="border p-2 w-full mb-4"
            value={editingService.name}
            onChange={(e) => {
                setEditingService({ ...editingService, name: e.target.value });
            }}
            />
            <div className="flex justify-end space-x-2">
            <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => {
                setEditingService(null);
                }}
            >
                Cancel
            </button>
            <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={() => {
                handleSaveEdit();
                }}
            >
                Save
            </button>
            </div>
        </div>
        </div>
    );
}
