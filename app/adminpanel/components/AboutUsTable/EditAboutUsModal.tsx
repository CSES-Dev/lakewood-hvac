"use client";

import React from "react";
import { AboutUsData } from "./AboutUsTable";

type EditAboutUsModalProps = {
    aboutUs: AboutUsData | null;
    setAboutUs: React.Dispatch<React.SetStateAction<AboutUsData | null>>;
    handleSaveEdit: () => void;
};

export default function EditAboutUsModal({
    aboutUs,
    setAboutUs,
    handleSaveEdit,
}: EditAboutUsModalProps) {
    if (!aboutUs) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-semibold mb-4">Edit About Us</h3>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Slogan</label>
                    <input
                        className="border p-2 w-full"
                        value={aboutUs.slogan}
                        onChange={(e) => {
                            setAboutUs({ ...aboutUs, slogan: e.target.value });
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Title</label>
                    <input
                        className="border p-2 w-full"
                        value={aboutUs.title}
                        onChange={(e) => {
                            setAboutUs({ ...aboutUs, title: e.target.value });
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-semibold">Description</label>
                    <textarea
                        className="border p-2 w-full"
                        value={aboutUs.description}
                        onChange={(e) => {
                            setAboutUs({ ...aboutUs, description: e.target.value });
                        }}
                    />
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                        onClick={() => {
                            setAboutUs(null);
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
