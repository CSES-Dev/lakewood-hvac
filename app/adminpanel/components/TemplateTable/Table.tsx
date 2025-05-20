"use client";

import React from "react";

export type FieldDefinition = {
    name: string;
    align?: "left" | "center" | "right";
};

type TemplateTableProps = {
    title: string;
    fields: FieldDefinition[];
    onAddClick: () => void;
    addButtonText?: string;
    children?: React.ReactNode;
};

export function TemplateTable({
    title,
    fields,
    onAddClick,
    addButtonText = "Add Item",
    children,
}: TemplateTableProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <button onClick={onAddClick} className="bg-pink-500 text-white px-4 py-2 rounded">
                    {addButtonText}
                </button>
            </div>
            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        {fields.map((field) => (
                            <th
                                key={field.name}
                                className={`p-4 border text-${field.align ?? "left"}`}
                            >
                                {field.name}
                            </th>
                        ))}
                        <th className="p-4 border text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    );
}
