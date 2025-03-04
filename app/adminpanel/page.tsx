"use client";

import React, { useState } from "react";
import { Service } from "./components/ServiceRow";
import ServiceTable from "./components/ServiceTable";
import AddServiceModal from "./components/AddServiceModal";
import EditServiceModal from "./components/EditServiceModal";
import AboutUsTable, { AboutUsData } from "./components/AboutUsTable";
import EditAboutUsModal from "./components/EditAboutUsModal";

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
                : service
            )
        );
        setEditingService(null);
        }
    };

  // About Us state and editing
    const [aboutUs, setAboutUs] = useState<AboutUsData>({
        slogan: "Using the only highest quality materials, we aim to provide our clients the best service and results.",
        title: "Where It All Began",
        description: "Lakewood Heating and Air Conditioning Inc. is a professional HVAC company in Lakewood, CA with 30+ years in the community. We use only the highest quality materials and techniques and are dedicated to providing our clients with superior service and results. We offer a variety of services such as AC repair, heat pump installation, HVAC maintenance, and more. For friendly neighborhood air conditioning technicians, contact us today to schedule your appointment!",
    });
    const [editingAboutUs, setEditingAboutUs] = useState<AboutUsData | null>(null);

    const handleAboutUsEditClick = () => {
        setEditingAboutUs({ ...aboutUs });
    };

    const handleSaveAboutUs = () => {
        if (editingAboutUs) {
        setAboutUs(editingAboutUs);
        setEditingAboutUs(null);
        }
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>
        <ServiceTable
            services={services}
            onEdit={handleEditClick}
            onDelete={handleDeleteService}
            onAddClick={handleAddClick}
        />
        <AddServiceModal
            addingService={addingService}
            setAddingService={setAddingService}
            handleAddService={handleAddService}
        />
        <EditServiceModal
            editingService={editingService}
            setEditingService={setEditingService}
            handleSaveEdit={handleSaveEdit}
        />
        <AboutUsTable aboutUs={aboutUs} onEdit={handleAboutUsEditClick} />
        <EditAboutUsModal
            aboutUs={editingAboutUs}
            setAboutUs={setEditingAboutUs}
            handleSaveEdit={handleSaveAboutUs}
        />
        </div>
    );
}
