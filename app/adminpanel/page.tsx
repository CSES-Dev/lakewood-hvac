"use client";

import React, { useEffect, useState } from "react";

import EngagementModal from "./components/EngagementTable/EngagementModal";
import EngagementTable from "./components/EngagementTable/EngagementTable";

import ReviewModal from "./components/ReviewTable/ReviewModal";
import ReviewTable from "./components/ReviewTable/ReviewTable";

import ServiceModal from "./components/ServiceTable/ServiceModal";
import ServiceTable from "./components/ServiceTable/ServiceTable";

import MessagePopup from "@/components/MessagePopup";
import { Engagement } from "@/models/Engagement";
import { Review } from "@/models/Review";
import { Service } from "@/models/Service";
import { ACTIONS } from "@/types/actions";

import { Message } from "@/types/message";

export default function AdminPanel() {
    // ─── Confirmation Popup ──────────────────────────────────────────────────────
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState<Message>({
        title: "",
        body: "",
    });
    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    // ─── Engagements: list + “add/edit” state ────────────────────────────────────
    const [engagements, setEngagements] = useState<Engagement[]>([]);
    const [engagementAction, setEngagementAction] = useState<ACTIONS | null>(null);
    const [editingEngagement, setEditingEngagement] = useState<Engagement | null>(null);
    const [addingEngagement, setAddingEngagement] = useState<Engagement | null>(null);

    const handleEngagementEditClick = (engagement: Engagement) => {
        setEngagementAction(ACTIONS.EDIT);
        setEditingEngagement(engagement);
    };
    const handleAddEngagementClick = () => {
        setEngagementAction(ACTIONS.ADD);
        setAddingEngagement({
        id: 0,
        title: "",
        description: "",
        address: "",
        date: new Date(),
        imageUrl: "",
        isVisible: true,
        });
    };

    const handleAddEngagement = () => {
        if (!addingEngagement) return;

        const { id: _, ...payload } = addingEngagement;
        setConfirmationMessage({ title: "Event Added", body: "Your changes have been saved" });

        fetch("/api/engagements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
        })
        .then((res) => res.json() as Promise<Engagement>)
        .then((created) => {
            setEngagements((prev) => [...prev, { ...addingEngagement, id: created.id }]);
            setAddingEngagement(null);
            setEngagementAction(null);
            setShowConfirmation(true);
        })
        .catch(() => {
            console.error("Error adding engagement.");
        });
    };

    const handleDeleteEngagement = (id: number) => {
        if (!window.confirm("Are you sure you want to delete this event?")) return;

        setConfirmationMessage({ title: "Engagement Deleted", body: "Your changes have been saved" });
        fetch(`/api/engagements?id=${id}`, {
        method: "DELETE",
        credentials: "include",
        })
        .then(() => {
            setEngagements((prev) => prev.filter((e) => e.id !== id));
            setShowConfirmation(true);
        })
        .catch(() => {
            console.error("Error deleting engagement.");
        });
    };

    const handleSaveEngagementEdit = () => {
        if (!editingEngagement) return;

        const { id: _, ...payload } = editingEngagement;
        setConfirmationMessage({ title: "Event Edited", body: "Your changes have been saved" });

        fetch(`/api/engagements?id=${editingEngagement.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ update: payload }),
        })
        .then(() => {
            setEngagements((prev) =>
            prev.map((e) => (e.id === editingEngagement.id ? editingEngagement : e))
            );
            setEditingEngagement(null);
            setEngagementAction(null);
            setShowConfirmation(true);
        })
        .catch(() => {
            console.error("Error saving engagement edit.");
        });
    };

    // ─── Services: list + “add/edit” state ───────────────────────────────────────
    const [services, setServices] = useState<Service[]>([]);
    const [serviceAction, setServiceAction] = useState<ACTIONS | null>(null);
    const [editingService, setEditingService] = useState<Service | null>(null);
    const [addingService, setAddingService] = useState<Service | null>(null);

    const handleServiceEditClick = (service: Service) => {
        setServiceAction(ACTIONS.EDIT);
        setEditingService(service);
    };
    const handleAddServiceClick = () => {
        setServiceAction(ACTIONS.ADD);
        setAddingService({ id: 0, title: "", description: "", imageUrl: "" });
    };

    const handleAddService = () => {
        if (!addingService) return;

        const { id: _, ...payload } = addingService;
        setConfirmationMessage({ title: "Service Added", body: "Your changes have been saved" });

        fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
        })
        .then((res) => res.json() as Promise<Service>)
        .then((created) => {
            setServices((prev) => [...prev, { ...addingService, id: created.id }]);
            setAddingService(null);
            setServiceAction(null);
            setShowConfirmation(true);
        })
        .catch(() => {
            console.error("Error adding service.");
        });
    };

    const handleDeleteService = (id: number) => {
        if (!window.confirm("Are you sure you want to delete this service?")) return;

        setConfirmationMessage({ title: "Service Deleted", body: "Your changes have been saved" });
        fetch(`/api/services?id=${id}`, {
        method: "DELETE",
        credentials: "include",
        })
        .then(() => {
            setServices((prev) => prev.filter((s) => s.id !== id));
            setShowConfirmation(true);
        })
        .catch(() => {
            console.error("Error deleting service.");
        });
    };

    const handleSaveServiceEdit = () => {
        if (!editingService) return;

        const { id: _, ...payload } = editingService;
        setConfirmationMessage({ title: "Service Edited", body: "Your changes have been saved" });

        fetch(`/api/services?id=${editingService.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        // body: JSON.stringify({ update: payload }),
        body: JSON.stringify({
            title: editingService.title,
            description: editingService.description,
            imageUrl: editingService.imageUrl,
        }),
        })
        .then(() => {
            setServices((prev) =>
            prev.map((s) => (s.id === editingService.id ? editingService : s))
            );
            setEditingService(null);
            setServiceAction(null);
            setShowConfirmation(true);
        })
        .catch(() => {
            console.error("Error saving service edit.");
        });
    };

    // ─── Reviews: list + “add/edit” state ────────────────────────────────────────
    const [reviews, setReviews] = useState<Review[]>([]);
    const [reviewAction, setReviewAction] = useState<ACTIONS | null>(null);
    const [editingReview, setEditingReview] = useState<Review | null>(null);
    const [addingReview, setAddingReview] = useState<Review | null>(null);

    const handleReviewEditClick = (review: Review) => {
        setReviewAction(ACTIONS.EDIT);
        setEditingReview(review);
    };
    const handleAddReviewClick = () => {
        setReviewAction(ACTIONS.ADD);
        setAddingReview({
        id: 0,
        author: "",
        comments: "",
        rating: 0.0,
        createdAt: new Date(),
        service: "",
        });
    };

    const handleAddReview = () => {
        if (!addingReview) return;

        const { id: _, ...payload } = addingReview;
        setConfirmationMessage({ title: "Review Added", body: "Your changes have been saved" });

        fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
        })
        .then((res) => res.json() as Promise<Review>)
        .then((created) => {
            setReviews((prev) => [...prev, created]);
            setAddingReview(null);
            setReviewAction(null);
            setShowConfirmation(true);
        })
        .catch(() => {
            console.error("Error adding review.");
        });
    };

    const handleDeleteReview = (id: number) => {
        if (!window.confirm("Are you sure you want to delete this review?")) return;

        setConfirmationMessage({ title: "Review Deleted", body: "Your changes have been saved" });
        fetch(`/api/reviews?id=${id}`, {
        method: "DELETE",
        credentials: "include",
        })
        .then(() => {
            setReviews((prev) => prev.filter((r) => r.id !== id));
            setShowConfirmation(true);
        })
        .catch(() => {
            console.error("Error deleting review.");
        });
    };

    const handleSaveReviewEdit = () => {
        if (!editingReview) return;

        const { id: _, ...payload } = editingReview;
        setConfirmationMessage({ title: "Review Edited", body: "Your changes have been saved" });

        fetch(`/api/reviews?id=${editingReview.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ update: payload }),
        })
        .then(() => {
            setReviews((prev) =>
            prev.map((r) => (r.id === editingReview.id ? editingReview : r))
            );
            setEditingReview(null);
            setReviewAction(null);
            setShowConfirmation(true);
        })
        .catch(() => {
            console.error("Error saving review edit.");
        });
    };

    // ─── Initial data fetch ─────────────────────────────────────────────────────
    useEffect(() => {
        fetch("/api/engagements")
        .then((res) => res.json() as Promise<Engagement[]>)
        .then((data) => setEngagements(data))
        .catch((err) => console.error("Error fetching engagements.", err));

        fetch("/api/services")
        .then((res) => res.json() as Promise<Service[]>)
        .then((data) => setServices(data))
        .catch((err) => console.error("Error fetching services.", err));

        fetch("/api/reviews?all=true")
        .then((res) => res.json() as Promise<Review[]>)
        .then((data) => setReviews(data))
        .catch((err) => console.error("Error fetching reviews.", err));
    }, []);

    // ─── Render ─────────────────────────────────────────────────────────────────
    return (
        <div className="min-h-screen p-8 bg-gray-100">
        {showConfirmation && (
            <MessagePopup message={confirmationMessage} onClose={handleCloseConfirmation} />
        )}

        <h1 className="text-3xl font-bold text-center my-10">Admin Panel</h1>

        {/* ─── Engagements Table + Modal ─────────────────────────────────────────── */}
        <EngagementTable
            engagements={engagements}
            onEdit={handleEngagementEditClick}
            onDelete={handleDeleteEngagement}
            onAddClick={handleAddEngagementClick}
        />
        <EngagementModal
            action={engagementAction}
            engagement={engagementAction === ACTIONS.ADD ? addingEngagement : editingEngagement}
            setEngagement={
            engagementAction === ACTIONS.ADD ? setAddingEngagement : setEditingEngagement
            }
            handleEngagement={
            engagementAction === ACTIONS.ADD ? handleAddEngagement : handleSaveEngagementEdit
            }
        />

        {/* ─── Services Table + Modal ─────────────────────────────────────────────── */}
        <ServiceTable
            services={services}
            onEdit={handleServiceEditClick}
            onDelete={handleDeleteService}
            onAddClick={handleAddServiceClick}
        />
        <ServiceModal
            action={serviceAction}
            service={serviceAction === ACTIONS.ADD ? addingService : editingService}
            setService={serviceAction === ACTIONS.ADD ? setAddingService : setEditingService}
            handleService={serviceAction === ACTIONS.ADD ? handleAddService : handleSaveServiceEdit}
        />

        {/* ─── Reviews Table + Modal ──────────────────────────────────────────────── */}
        <ReviewTable
            reviews={reviews}
            onEdit={handleReviewEditClick}
            onDelete={handleDeleteReview}
            onAddClick={handleAddReviewClick}
        />
        <ReviewModal
            action={reviewAction}
            review={reviewAction === ACTIONS.ADD ? addingReview : editingReview}
            setReview={reviewAction === ACTIONS.ADD ? setAddingReview : setEditingReview}
            handleReview={reviewAction === ACTIONS.ADD ? handleAddReview : handleSaveReviewEdit}
        />
        </div>
    );
}
