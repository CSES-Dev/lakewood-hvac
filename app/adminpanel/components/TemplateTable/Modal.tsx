"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ACTIONS } from "@/types/actions";

export type TemplateModalProps<T extends { id: number }> = {
    action: ACTIONS;
    title: string;
    item: T | null;
    setItem: React.Dispatch<React.SetStateAction<T | null>>;
    handleItem: () => void;
    children: React.ReactNode;
};

export default function TemplateModal<T extends { id: number }>({
    action,
    title,
    item,
    setItem,
    handleItem,
    children,
}: TemplateModalProps<T>) {
    const { handleSubmit } = useForm();
    const onSubmit = () => {
        handleItem();
    };

    // Prevent scrolling on the main page when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (!item) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-[60vw] max-h-[90vh] overflow-y-auto">
                <h3 className="text-2xl font-semibold mb-6">{`${action} ${title}`}</h3>

                <form onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
                    <div className="space-y-3">{children}</div>

                    <div className="flex justify-end space-x-4 mt-6">
                        <button
                            type="button"
                            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded transition"
                            onClick={() => {
                                setItem(null);
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
                        >
                            {action}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
