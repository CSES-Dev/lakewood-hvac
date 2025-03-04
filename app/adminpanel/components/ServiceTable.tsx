"use client";

import React from "react";
import ServiceRow, { Service } from "./ServiceRow";

type ServiceTableProps = {
    services: Service[];
    onEdit: (id: number, name: string, description: string) => void;
    onDelete: (id: number) => void;
    onAddClick: (name: string) => void;
};

export default function ServiceTable({
    services,
    onEdit,
    onDelete,
    onAddClick,
}: ServiceTableProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Services</h2>
            <button
            onClick={() => {
                onAddClick("");
            }}
            className="bg-pink-500 text-white px-4 py-2 rounded"
            >
            Add Service
            </button>
        </div>
        <table className="w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-200">
                <th className="p-2 border text-left">Name</th>
                <th className="p-2 border text-left">Description</th>
                <th className="p-2 border text-right">Actions</th>
            </tr>
            </thead>
            <tbody>
            {services.map((service) => (
                <ServiceRow
                key={service.id}
                service={service}
                onEdit={onEdit}
                onDelete={onDelete}
                />
            ))}
            </tbody>
        </table>
        </div>
    );
}
