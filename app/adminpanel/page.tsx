"use client";

import React, { useEffect, useState } from "react";

import ReviewModal from "./components/ReviewTable/ReviewModal";
import ReviewTable from "./components/ReviewTable/ReviewTable";

import ServiceModal from "@/app/adminpanel/components/ServiceTable/components/ServiceModal";
import { Service } from "./components/ServiceTable/ServiceRow";
import ServiceTable from "./components/ServiceTable/ServiceTable";

import MessagePopup from "@/components/MessagePopup";
import { Review } from "@/models/Review";

import { Message } from "@/types/message";

// import AboutUsTable, { AboutUsData } from "./components/AboutUsTable/AboutUsTable";
// import EditAboutUsModal from "./components/AboutUsTable/EditAboutUsModal";

export default function AdminPanel() {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState<Message>({
        title: "",
        body: "",
    });

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };
    const [action, setAction] = useState<string>("");
    const ACTIONS = {
        ADD: "Add",
        EDIT: "Edit",
    };

    // ----------------------------
    // ----------Services----------
    // ----------------------------
    const [services, setServices] = useState<Service[]>([]);
    const loadServices = () => {
        fetch('/api/services')
            .then((res) => res.json() as Promise<Service[]>)
            .then(setServices)
            .catch(console.error);
    };
    useEffect(loadServices, []);

    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [showModal, setShowModal] = useState(false);

    const openAddModal = () => {
        setModalMode('add');
        setSelectedService(null);
        setShowModal(true);
    };
    const openEditModal = (service: Service) => {
        setModalMode('edit');
        setSelectedService(service);
        console.log('Editing service:', selectedService);
        setShowModal(true);
    };
    const closeModal = () => setShowModal(false);

    const handleDelete = (id: number) => {
        if (!confirm('Are you sure you want to delete this service?')) return;
        fetch(`/api/services?id=${id}`, { method: 'DELETE' })
        .then((res) => {
            if (!res.ok) throw new Error('Delete failed');
            // refresh list
            loadServices();
        })
        .catch(console.error);
    };
    const handleModalSuccess = () => {
        loadServices();
        setShowModal(false);
    };

    // // About Us state and editing
    // const [aboutUs, setAboutUs] = useState<AboutUsData>({
    //     slogan: "Using the only highest quality materials, we aim to provide our clients the best service and results.",
    //     title: "Where It All Began",
    //     description: "Lakewood Heating and Air Conditioning Inc. is a professional HVAC company in Lakewood, CA with 30+ years in the community. We use only the highest quality materials and techniques and are dedicated to providing our clients with superior service and results. We offer a variety of services such as AC repair, heat pump installation, HVAC maintenance, and more. For friendly neighborhood air conditioning technicians, contact us today to schedule your appointment!",
    // });
    // const [editingAboutUs, setEditingAboutUs] = useState<AboutUsData | null>(null);

    // const handleAboutUsEditClick = () => {
    //     setEditingAboutUs({ ...aboutUs });
    // };

    // const handleSaveAboutUs = () => {
    //     if (editingAboutUs) {
    //     setAboutUs(editingAboutUs);
    //     setEditingAboutUs(null);
    //     }
    // };

    // Reviews state and editing
    const [reviews, setReviews] = useState<Review[]>([]);
    const [editingReview, setEditingReview] = useState<Review | null>(null);
    const [addingReview, setAddingReview] = useState<Review | null>(null);

    useEffect(() => {
        fetch("/api/reviews")
            .then((response) => response.json() as Promise<Review[]>)
            .then((data) => {
                setReviews(data);
            })
            .catch((error: unknown) => {
                console.error("Error fetching reviews.", error);
            });
    }, []);

    const handleReviewEditClick = (review: Review) => {
        setAction(ACTIONS.EDIT);
        setEditingReview(review);
    };

    const handleAddReviewClick = () => {
        const newReview: Review = {
            id: 0,
            author: "",
            comments: "",
            rating: 0.0,
            createdAt: new Date(),
        };

        setAction(ACTIONS.ADD);
        setAddingReview(newReview);
    };

    const handleAddReview = () => {
        if (addingReview) {
            const { id: _, ...reviewWithoutId } = addingReview;
            const message: Message = {
                title: "Review Added",
                body: "Your changes have been saved",
            };
            setConfirmationMessage(message);

            fetch("/api/reviews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reviewWithoutId),
            })
                .then((response) => response.json() as Promise<Review>)
                .then((createdReview) => {
                    setReviews((prev) => [...prev, createdReview]);
                    setAddingReview(null);

                    setShowConfirmation(true);
                })
                .catch(() => {
                    console.error("Error adding review.");
                });
        }
    };

    const handleDeleteReview = (id: number) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this review?");
        if (!isConfirmed) return;

        const message: Message = {
            title: "Review Deleted",
            body: "Your changes have been saved",
        };
        setConfirmationMessage(message);

        fetch(`/api/reviews?id=${String(id)}`, { method: "DELETE" })
            .then(() => {
                setReviews((prev) => prev.filter((review) => review.id !== id));
                setShowConfirmation(true);
            })
            .catch(() => {
                console.error("Error deleting review.");
            });
    };

    const handleSaveReviewEdit = () => {
        if (editingReview) {
            const { id: _, ...reviewWithoutId } = editingReview;
            const reviewUpdateRequest = { update: reviewWithoutId };
            const message: Message = {
                title: "Review Edited",
                body: "Your changes have been saved",
            };
            setConfirmationMessage(message);

            fetch(`/api/reviews?id=${String(editingReview.id)}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reviewUpdateRequest),
            })
                .then(() => {
                    setReviews((prev) =>
                        prev.map((review) =>
                            review.id === editingReview.id ? editingReview : review,
                        ),
                    );

                    setEditingReview(null);
                    setShowConfirmation(true);
                })
                .catch(() => {
                    console.error("Error saving review edit.");
                });
        }
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            {showConfirmation && (
                <MessagePopup message={confirmationMessage} onClose={handleCloseConfirmation} />
            )}
            <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>
            <ServiceTable
                services={services}
                onAddClick={openAddModal}
                onEdit={(svc) => openEditModal(svc)}
                onDelete={(id) => handleDelete(id)}
            />
            {/* <ServiceModal
                action={action}
                service={action === ACTIONS.ADD ? addingService : editingService}
                setService={action === ACTIONS.ADD ? setAddingService : setEditingService}
                handleService={action === ACTIONS.ADD ? handleAddService : handleSaveServiceEdit}
            /> */}
            {showModal && (
                <ServiceModal
                    mode={modalMode}
                    initialData={modalMode === 'edit' ? selectedService! : undefined}
                    onClose={closeModal}
                    onSuccess={handleModalSuccess}
                />
            )}
            {/* <AboutUsTable aboutUs={aboutUs} onEdit={handleAboutUsEditClick} />
        <EditAboutUsModal
            aboutUs={editingAboutUs}
            setAboutUs={setEditingAboutUs}
            handleSaveEdit={handleSaveAboutUs}
        /> */}
            <ReviewTable
                reviews={reviews}
                onEdit={handleReviewEditClick}
                onDelete={handleDeleteReview}
                onAddClick={handleAddReviewClick}
            />
            <ReviewModal
                action={action}
                review={action === ACTIONS.ADD ? addingReview : editingReview}
                setReview={action === ACTIONS.ADD ? setAddingReview : setEditingReview}
                handleReview={action === ACTIONS.ADD ? handleAddReview : handleSaveReviewEdit}
            />
        </div>
    );
}

// TODO: add and immediate, response 400
