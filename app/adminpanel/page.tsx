"use client";

import React, { useEffect, useState } from "react";

import EngagementModal from "./components/EngagementTable/EngagementModal";
import EngagementTable from "./components/EngagementTable/EngagementTable";

import ReviewModal from "./components/ReviewTable/ReviewModal";
import ReviewTable from "./components/ReviewTable/ReviewTable";

import ServiceModal from "./components/ServiceTable/ServiceModal";
import { Service } from "./components/ServiceTable/ServiceRow";
import ServiceTable from "./components/ServiceTable/ServiceTable";

import MessagePopup from "@/components/MessagePopup";
import { Engagement } from "@/models/Engagement";
import { Review } from "@/models/Review";

import { Message } from "@/types/message";

export const ACTIONS = {
    ADD: "Add",
    EDIT: "Edit",
};

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

        fetch(`/api/engagements?id=${String(id)}`, { method: "DELETE" })
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
                body: JSON.stringify(engagementUpdateRequest),
            })
                .then(() => {
                    setEngagements((prev) =>
                        prev.map((engagement) =>
                            engagement.id === editingEngagement.id
                                ? {
                                      ...engagement,
                                      title: editingEngagement.title,
                                      description: editingEngagement.description,
                                      date: editingEngagement.date,
                                      imageUrl: editingEngagement.imageUrl,
                                      isVisible: editingEngagement.isVisible,
                                  }
                                : engagement,
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

    // Services state and editing
    const [services, setServices] = useState<Service[]>([
        {
            id: 0,
            name: "Air Conditioning",
            description:
                "At Lakewood Heating and Air Conditioning Inc., we pride ourselves on providing top-notch air conditioning services to ensure that our clients enjoy a comfortable living environment. Our team of skilled technicians is well-equipped to handle installations, maintenance, and repairs for a variety of air conditioning systems. No matter the size or complexity of your cooling needs, you can trust us to deliver efficient, cost-effective, and timely solutions that keep your home cool and comfortable throughout the year.",
        },
        {
            id: 1,
            name: "Heating",
            description:
                "Lakewood Heating and Air Conditioning Inc. is your reliable partner for all your heating needs. Our experienced technicians are committed to delivering exceptional heating services, from installations to repairs and maintenance for a wide range of heating systems. Our goal is to provide you with energy-efficient, safe, and comfortable heating solutions to keep your home cozy during the colder months while ensuring superior customer satisfaction. Give us a call today to learn more!",
        },
        {
            id: 2,
            name: "Thermostats",
            description:
                "Our thermostat services include professional installation, maintenance, and repair of a variety of thermostat types and models. Our experts work with you to identify the ideal thermostat solution for your home, ensuring optimal temperature regulation and energy management, ultimately enhancing your comfort and reducing energy costs. Contact us to get started!",
        },
        {
            id: 3,
            name: "Heat Pumps",
            description:
                "Lakewood Heating and Air Conditioning Inc. offers comprehensive heat pump installation services, designed to provide you with an eco-friendly, energy-efficient, and cost-effective alternative to traditional heating and cooling systems. Our skilled technicians are proficient in installing a wide range of heat pump models, ensuring seamless integration into your existing HVAC system. Trust us to help you transition to a greener, more comfortable living space while reducing your energy consumption and costs.",
        },
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

    const handleServiceEditClick = (id: number, name: string, description: string) => {
        setAction("Edit");
        setEditingService({ id, name, description });
    };

    const handleServiceAddClick = (name: string) => {
        // Initialize with an empty description.
        setAction("Add");
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

    const handleSaveServiceEdit = () => {
        if (editingService) {
            setServices((prev) =>
                prev.map((service) =>
                    service.id === editingService.id
                        ? {
                              ...service,
                              name: editingService.name,
                              description: editingService.description,
                          }
                        : service,
                ),
            );
            setEditingService(null);
        }
    };

    // Reviews state and editing
    const [reviews, setReviews] = useState<Review[]>([]);
    const [editingReview, setEditingReview] = useState<Review | null>(null);
    const [addingReview, setAddingReview] = useState<Review | null>(null);

    const handleReviewEditClick = (id: number, author: string, comments: string) => {
        setAction(ACTIONS.EDIT);
        setEditingReview({ id, author, comments });
    };

    const handleAddReviewClick = () => {
        setAction(ACTIONS.ADD);
        setAddingReview({ id: 0, author: "", comments: "" });
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
                            review.id === editingReview.id
                                ? {
                                      ...review,
                                      author: editingReview.author,
                                      comments: editingReview.comments,
                                  }
                                : review,
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
        fetch("/api/engagements")
            .then((response) => response.json() as Promise<Engagement[]>)
            .then((data) => {
                setEngagements(data);
            })
            .catch((error: unknown) => {
                console.error("Error fetching engagements.", error);
            });

        fetch("/api/reviews")
            .then((response) => response.json() as Promise<Review[]>)
            .then((data) => {
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
            <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>
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
                onEdit={handleServiceEditClick}
                onDelete={handleDeleteService}
                onAddClick={handleServiceAddClick}
            />
            <ServiceModal
                action={action}
                service={action === ACTIONS.ADD ? addingService : editingService}
                setService={action === ACTIONS.ADD ? setAddingService : setEditingService}
                handleService={action === ACTIONS.ADD ? handleAddService : handleSaveServiceEdit}
            />
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
