"use client";

import React from "react";

export type TemplateRowProps<T extends { id: number }> = {
    item: T;
    onEdit: (item: T) => void;
    onDelete: (id: number) => void;
    children?: React.ReactNode;
};

export default function TemplateRow<T extends { id: number }>({
    item,
    onEdit,
    onDelete,
    children,
}: TemplateRowProps<T>) {
    return (
        <tr className="border">
            {children}

            <td className="p-4 text-center">
                <div className="flex flex-col items-end space-y-1">
                    <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded w-20"
                        onClick={() => {
                            onEdit(item);
                        }}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded w-20"
                        onClick={() => {
                            onDelete(item.id);
                        }}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}
