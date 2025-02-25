"use client";

import React, { useState } from "react";

type Service = {
    id: number;
    name: string;
};

export default function AdminPanel() {
    const [services, setServices] = useState<Service[]>([
        { id: 0, name: "Air Conditioning" },
        { id: 1, name: "Heating" },
    ]);

    // temporary id thing
    const [counter, setCounter] = useState(services.length - 1);
    const getNextId = () => {
        const newId = counter + 1;
        setCounter(newId);
        return newId;
    };

    const [editingService, setEditingService] = useState<Service | null>(null);

    const [addingService, setAddingService] = useState<Service | null>(null);

    const handleEditClick = (id: number, name: string) => {
        setEditingService({ id, name });
    };

    const handleAddClick = (name: string) => {
        setAddingService({ id: services.length, name });
    };
    console.log(services);

    const handleAddService = () => {
        if (addingService) {
            setServices((prev) => [...prev, { ...addingService, id: getNextId() }]);
            setAddingService(null);
        }
    };

    const handleDeleteService = (id: number) => {
        setServices(services.filter((service) => service.id !== id));
    };

    const handleSaveEdit = () => {
        if (editingService) {
            setServices((prev) =>
                prev.map((service) =>
                    service.id === editingService.id
                        ? { ...service, name: editingService.name }
                        : service,
                ),
            );
            setEditingService(null);
        }
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>

            {/* Services Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Services</h2>
                    <button
                        onClick={() => {
                            handleAddClick("");
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
                            <th className="p-2 border text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service.id} className="border">
                                <td className="p-2">{service.name}</td>
                                <td className="p-2 text-right">
                                    <button
                                        className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                                        onClick={() => {
                                            handleEditClick(service.id, service.name);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                        onClick={() => {
                                            handleDeleteService(service.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Modal */}
            {addingService && (
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
                                onClick={handleAddService}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Edit Modal */}
            {editingService && (
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
                                onClick={handleSaveEdit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
