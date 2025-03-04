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
        {id: 0, name: "Air Conditioning", description: "At Lakewood Heating and Air Conditioning Inc., we pride ourselves on providing top-notch air conditioning services to ensure that our clients enjoy a comfortable living environment. Our team of skilled technicians is well-equipped to handle installations, maintenance, and repairs for a variety of air conditioning systems. No matter the size or complexity of your cooling needs, you can trust us to deliver efficient, cost-effective, and timely solutions that keep your home cool and comfortable throughout the year."},
        {id: 1, name: "Heating", description: "Lakewood Heating and Air Conditioning Inc. is your reliable partner for all your heating needs. Our experienced technicians are committed to delivering exceptional heating services, from installations to repairs and maintenance for a wide range of heating systems. Our goal is to provide you with energy-efficient, safe, and comfortable heating solutions to keep your home cozy during the colder months while ensuring superior customer satisfaction. Give us a call today to learn more!"},
        {id: 1, name: "Thermostats", description: "Our thermostat services include professional installation, maintenance, and repair of a variety of thermostat types and models. Our experts work with you to identify the ideal thermostat solution for your home, ensuring optimal temperature regulation and energy management, ultimately enhancing your comfort and reducing energy costs. Contact us to get started!"},
        {id: 1, name: "Heat Pumps", description: "Lakewood Heating and Air Conditioning Inc. offers comprehensive heat pump installation services, designed to provide you with an eco-friendly, energy-efficient, and cost-effective alternative to traditional heating and cooling systems. Our skilled technicians are proficient in installing a wide range of heat pump models, ensuring seamless integration into your existing HVAC system. Trust us to help you transition to a greener, more comfortable living space while reducing your energy consumption and costs."},
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

    const handleEditClick = (id: number, name: string, description: string) => {
        setEditingService({ id, name, description });
    };

    const handleAddClick = (name: string) => {
        // When adding a new service, initialize with an empty description.
        setAddingService({ id: services.length, name, description: "" });
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
                ? {
                    ...service,
                    name: editingService.name,
                    description: editingService.description,
                }
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