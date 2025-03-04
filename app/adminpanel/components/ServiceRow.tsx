"use client";

import React from "react";

export type Service = {
    id: number;
    name: string;
};

type ServiceRowProps = {
    service: Service;
    onEdit: (id: number, name: string) => void;
    onDelete: (id: number) => void;
};

export default function ServiceRow({ service, onEdit, onDelete }: ServiceRowProps) {
    return (
        <tr className="border">
        <td className="p-2">{service.name}</td>
        <td className="p-2 text-right">
            <button
            className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
            onClick={() => {
                onEdit(service.id, service.name);
            }}
            >
            Edit
            </button>
            <button
            className="bg-red-500 text-white px-3 py-1 rounded"
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
