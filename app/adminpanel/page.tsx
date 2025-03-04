"use client";

import React, { useState } from "react";
import { Service } from "./components/ServiceRow";
import ServiceTable from "./components/ServiceTable";
import AddServiceModal from "./components/AddServiceModal";
import EditServiceModal from "./components/EditServiceModal";
import AboutUsTable, { AboutUsData } from "./components/AboutUsTable";
import EditAboutUsModal from "./components/EditAboutUsModal";
import ReviewTable from "./components/ReviewTable";
import AddReviewModal from "./components/AddReviewModal";
import EditReviewModal from "./components/EditReviewModal";
import { Review } from "./components/ReviewRow";

export default function AdminPanel() {
    // Services state
    const [services, setServices] = useState<Service[]>([
        {
        id: 0,
        name: "Air Conditioning",
        description: "Cooling services for your comfort",
        },
        { id: 1, name: "Heating", description: "Efficient heating solutions" },
    ]);
    // Temporary id for services
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
        // Initialize with an empty description.
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
        slogan: "Our Slogan",
        title: "Our Title",
        description: "Our description goes here.",
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

    // Reviews state and editing
    const [reviews, setReviews] = useState<Review[]>([
        { id: 0, name: "John Doe", review: "Great service!" },
        { id: 1, name: "Jane Doe", review: "Very professional." },
    ]);
    const [reviewCounter, setReviewCounter] = useState(reviews.length - 1);
    const getNextReviewId = () => {
        const newId = reviewCounter + 1;
        setReviewCounter(newId);
        return newId;
    };

    const [editingReview, setEditingReview] = useState<Review | null>(null);
    const [addingReview, setAddingReview] = useState<Review | null>(null);

    const handleReviewEditClick = (id: number, name: string, review: string) => {
        setEditingReview({ id, name, review });
    };

    const handleAddReviewClick = (name: string) => {
        // Initialize with an empty review text.
        setAddingReview({ id: reviews.length, name, review: "" });
    };

    const handleAddReview = () => {
        if (addingReview) {
        setReviews((prev) => [...prev, { ...addingReview, id: getNextReviewId() }]);
        setAddingReview(null);
        }
    };

    const handleDeleteReview = (id: number) => {
        setReviews(reviews.filter((review) => review.id !== id));
    };

    const handleSaveReview = () => {
        if (editingReview) {
        setReviews((prev) =>
            prev.map((review) =>
            review.id === editingReview.id
                ? { ...review, name: editingReview.name, review: editingReview.review }
                : review
            )
        );
        setEditingReview(null);
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
        <ReviewTable
            reviews={reviews}
            onEdit={handleReviewEditClick}
            onDelete={handleDeleteReview}
            onAddClick={handleAddReviewClick}
        />
        <AddReviewModal
            addingReview={addingReview}
            setAddingReview={setAddingReview}
            handleAddReview={handleAddReview}
        />
        <EditReviewModal
            editingReview={editingReview}
            setEditingReview={setEditingReview}
            handleSaveEdit={handleSaveReview}
        />
        </div>
    );
}
