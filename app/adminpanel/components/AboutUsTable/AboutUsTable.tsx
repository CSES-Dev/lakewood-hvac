"use client";

import React from "react";

export type AboutUsData = {
    slogan: string;
    title: string;
    description: string;
};

type AboutUsTableProps = {
    aboutUs: AboutUsData;
    onEdit: () => void;
};

export default function AboutUsTable({ aboutUs, onEdit }: AboutUsTableProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">About Us</h2>
        <table className="w-full border border-gray-300">
            <thead>
            <tr className="bg-gray-200">
                <th className="p-2 border text-left">Slogan</th>
                <th className="p-2 border text-left">Title</th>
                <th className="p-2 border text-left">Description</th>
                <th className="p-2 border text-right">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border">
                <td className="p-2">{aboutUs.slogan}</td>
                <td className="p-2">{aboutUs.title}</td>
                <td className="p-2">{aboutUs.description}</td>
                <td className="p-2 text-right">
                <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                    onClick={() => {
                    onEdit();
                    }}
                >
                    Edit
                </button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    );
}
