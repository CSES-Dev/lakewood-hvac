"use client";

import React, { useEffect, useState } from "react";

import EngagementModal from "./components/EngagementTable/EngagementModal";
import EngagementTable from "./components/EngagementTable/EngagementTable";

import ReviewModal from "./components/ReviewTable/ReviewModal";
import ReviewTable from "./components/ReviewTable/ReviewTable";

import { Service } from "./components/ServiceTable/ServiceRow";
import ServiceTable from "./components/ServiceTable/ServiceTable";
import ServiceModal from "@/app/adminpanel/components/ServiceTable/components/ServiceModal";

import MessagePopup from "@/components/MessagePopup";
import { Engagement } from "@/models/Engagement";
import { Review } from "@/models/Review";
import { ACTIONS } from "@/types/actions";

import { Message } from "@/types/message";

export default function AdminPanel() {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState<Message>({
        title: "",
        body: "",
    });

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    const [action, setAction] = useState<ACTIONS | null>(null);

    // Engagements state and editing
    const [engagements, setEngagements] = useState<Engagement[]>([]);
    const [editingEngagement, setEditingEngagement] = useState<Engagement | null>(null);
    const [addingEnagement, setAddingEnagement] = useState<Engagement | null>(null);

    const handleEngagementEditClick = (engagement: Engagement) => {
        setAction(ACTIONS.EDIT);
        setEditingEngagement(engagement);
    };

    const handleAddEngagementClick = () => {
        const newEnagement: Engagement = {
            id: 0,
            title: "",
            description: "",
            address: "",
            date: new Date(),
            imageUrl: "",
            isVisible: true,
        };

        setAction(ACTIONS.ADD);
        setAddingEnagement(newEnagement);
    };

    const handleAddEngagement = () => {
        if (addingEnagement) {
            const { id: _, ...engagementWithoutId } = addingEnagement;
            const message: Message = {
                title: "Event Added",
                body: "Your changes have been saved",
            };
            setConfirmationMessage(message);

            fetch("/api/engagements", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(engagementWithoutId),
            })
                .then((response) => response.json() as Promise<Engagement>)
                .then((createdEngagement) => {
                    const engagementWithId = {
                        ...addingEnagement,
                        id: createdEngagement.id,
                    };

                    setEngagements((prev) => [...prev, engagementWithId]);
                    setAddingEnagement(null);
                    setShowConfirmation(true);
                })
                .catch(() => {
                    console.error("Error adding engagement.");
                });
        }
    };

    const handleDeleteEngagement = (id: number) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this event?");
        if (!isConfirmed) return;

        const message: Message = {
            title: "Engagement Deleted",
            body: "Your changes have been saved",
        };
        setConfirmationMessage(message);

        fetch(`/api/engagements?id=${String(id)}`, {
            method: "DELETE",
            credentials: "include",
        })
            .then(() => {
                setEngagements((prev) => prev.filter((engagement) => engagement.id !== id));
                setShowConfirmation(true);
            })
            .catch(() => {
                console.error("Error deleting engagement.");
            });
    };

    const handleSaveEngagementEdit = () => {
        if (editingEngagement) {
            const { id: _, ...engagementWithoutId } = editingEngagement;
            const engagementUpdateRequest = { update: engagementWithoutId };
            const message: Message = {
                title: "Event Edited",
                body: "Your changes have been saved",
            };
            setConfirmationMessage(message);

            fetch(`/api/engagements?id=${String(editingEngagement.id)}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(engagementUpdateRequest),
            })
                .then(() => {
                    setEngagements((prev) =>
                        prev.map((engagement) =>
                            engagement.id === editingEngagement.id ? editingEngagement : engagement,
                        ),
                    );
                    setEditingEngagement(null);

                    setShowConfirmation(true);
                })
                .catch(() => {
                    console.error("Error saving engagement edit.");
                });
        }
    };

    // ----------------------------
    // ----------Services----------
    // ----------------------------
    const [services, setServices] = useState<Service[]>([]);
    const loadServices = () => {
        fetch("/api/services")
            .then((res) => res.json() as Promise<Service[]>)
            .then(setServices)
            .catch((err: unknown) => {
                console.error(err);
            });
    };
    useEffect(loadServices, []);

    const [modalMode, setModalMode] = useState<"add" | "edit">("add");
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [showModal, setShowModal] = useState(false);

    const openAddModal = () => {
        setModalMode("add");
        setSelectedService(null);
        setShowModal(true);
    };
    const openEditModal = (service: Service) => {
        setModalMode("edit");
        setSelectedService(service);
        console.log("Editing service:", selectedService);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const handleDelete = (id: number) => {
        if (!confirm("Are you sure you want to delete this service?")) return;
        fetch(`/api/services?id=${String(id)}`, { method: "DELETE" })
            .then((res) => {
                if (!res.ok) throw new Error("Delete failed");
                // refresh list
                loadServices();
            })
            .catch((err: unknown) => {
                console.error(err);
            });
    };
    const handleModalSuccess = () => {
        loadServices();
        setShowModal(false);
    };

    // Reviews state and editing
    const [reviews, setReviews] = useState<Review[]>([]);
    const [editingReview, setEditingReview] = useState<Review | null>(null);
    const [addingReview, setAddingReview] = useState<Review | null>(null);

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
            service: "",
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
                credentials: "include",
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

        fetch(`/api/reviews?id=${String(id)}`, {
            method: "DELETE",
            credentials: "include",
        })
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
                credentials: "include",
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

    useEffect(() => {
        fetch("/api/engagements", { method: "GET" })
            .then((response) => response.json() as Promise<Engagement[]>)
            .then((data) => {
                setEngagements(data);
            })
            .catch((error: unknown) => {
                console.error("Error fetching engagements.", error);
            });

        fetch("/api/reviews?all=true", { method: "GET" })
            .then((res) => res.json())
            .then((data: Review[]) => {
                setReviews(data);
            })
            .catch((error: unknown) => {
                console.error("Error fetching reviews.", error);
            });
    }, []);

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            {showConfirmation && (
                <MessagePopup message={confirmationMessage} onClose={handleCloseConfirmation} />
            )}
            <h1 className="text-3xl font-bold text-center my-10">Admin Panel</h1>
            <EngagementTable
                engagements={engagements}
                onEdit={handleEngagementEditClick}
                onDelete={handleDeleteEngagement}
                onAddClick={handleAddEngagementClick}
            />
            <EngagementModal
                action={action}
                engagement={action === ACTIONS.ADD ? addingEnagement : editingEngagement}
                setEngagement={action === ACTIONS.ADD ? setAddingEnagement : setEditingEngagement}
                handleEngagement={
                    action === ACTIONS.ADD ? handleAddEngagement : handleSaveEngagementEdit
                }
            />
            <ServiceTable
                services={services}
                onAddClick={openAddModal}
                onEdit={(svc) => {
                    openEditModal(svc);
                }}
                onDelete={(id) => {
                    handleDelete(id);
                }}
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
                    initialData={
                        modalMode === "edit" && selectedService ? selectedService : undefined
                    }
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
