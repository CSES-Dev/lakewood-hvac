"use client";

import React from "react";

export type Service = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

type ServiceRowProps = {
    service: Service;
    onEdit: (service: Service) => void;
    onDelete: (id: number) => void;
};

export default function ServiceRow({ service, onEdit, onDelete }: ServiceRowProps) {
    return (
        <tr className="border">
            <td className="p-2">{service.title}</td>
            <td className="p-2">{service.description}</td>
            <td className="p-2 text-right">
                <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded mb-1 w-20"
                    onClick={() => {
                        onEdit(service);
                    }}
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded w-20"
                    onClick={() => {
                        onDelete(service.id);
                    }}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
