"use client";

import { useEffect, useState } from "react";
import ReviewItem from "../components/ReviewItem";
import SearchBar from "../components/SearchBar";
import { Review } from "@/models/Review";

const ReviewSection = () => {
    type SortOption = "date" | "rating";
    type RatingFilter = "all" | "high" | "low";
    type ServiceFilter =
        | "All Services"
        | "Air Conditioning"
        | "Heating"
        | "Thermostats"
        | "Heat Pumps";
    const [serviceFilter, setServiceFilter] = useState<ServiceFilter>("All Services");
    const [ratingFilter, setRatingFilter] = useState<RatingFilter>("all");
    const [sortBy, setSortBy] = useState<SortOption>("date");
    const [page, setPage] = useState(1);
    const pageSize = 4;
    const [searchTerm, setSearchTerm] = useState("");
    const [allReviews, setAllReviews] = useState<Review[]>([]);
    const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        let filtered = allReviews;

        if (searchTerm) {
            const lower = searchTerm.toLowerCase();
            filtered = filtered.filter(
                (review) =>
                    review.author.toLowerCase().includes(lower) ||
                    review.comments.toLowerCase().includes(lower),
            );
        }

        if (ratingFilter === "high") {
            filtered = filtered.filter((review) => review.rating >= 3.5);
        } else if (ratingFilter === "low") {
            filtered = filtered.filter((review) => review.rating <= 3);
        }

        if (serviceFilter != "All Services") {
            filtered = filtered.filter((review) => review.service === serviceFilter);
        }

        setFilteredReviews(filtered);
        setPage(1);
    }, [searchTerm, allReviews, ratingFilter, serviceFilter]);

    const sortedReviews = [...filteredReviews].sort((a, b) => {
        if (sortBy === "rating") {
            return b.rating - a.rating;
        }
        // default to date sort
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    const totalPages = Math.ceil(sortedReviews.length / pageSize);
    const currentPageReviews = sortedReviews.slice((page - 1) * pageSize, page * pageSize);

    useEffect(() => {
        fetch("/api/reviews?all=true")
            .then((res) => res.json())
            .then((data) => {
                setAllReviews(data);
            })
            .catch((error) => {
                console.error("Error fetching reviews.", error);
            });
    }, []);

    useEffect(() => {
        setPage(1);
    }, [sortBy]);

    return (
        <div>
            <div className="flex flex-row flex-wrap gap-[clamp(0.5rem,1.5vw,1.25rem)] mb-[clamp(1rem,2vw,2rem)] text-[clamp(0px,1.74vw,37.5px)]">

                <div className="flex-grow min-w-[200px]">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                
                <div className="flex flex-row justify-end">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="text-[clamp(0.875rem,1.2vw,1.25rem)] bg-primary text-[#FFFDF6] px-3 py-1 rounded-md ml-[clamp(0.5rem,1vw,1rem)] w-[clamp(6rem,15vw,10rem)] max-w-full"

                    >
                        <option value="date">Date</option>
                        <option value="rating">Rating</option>
                    </select>
                    <select
                        value={ratingFilter}
                        onChange={(e) => setRatingFilter(e.target.value as RatingFilter)}
                        className="text-[clamp(0.875rem,1.2vw,1.25rem)] bg-primary text-[#FFFDF6] px-3 py-1 rounded-md ml-[clamp(0.5rem,1vw,1rem)] w-[clamp(6rem,15vw,10rem)] max-w-full"


                    >
                        <option value="all">All Ratings</option>
                        <option value="high">High (3.5-5)</option>
                        <option value="low">Low (1-3)</option>
                    </select>
                    <select
                        value={serviceFilter}
                        onChange={(e) => setServiceFilter(e.target.value as ServiceFilter)}
                        className="text-[clamp(0.875rem,1.2vw,1.25rem)] bg-primary text-[#FFFDF6] px-3 py-1 rounded-md ml-[clamp(0.5rem,1vw,1rem)] w-[clamp(6rem,15vw,10rem)] max-w-full"

                    >
                        <option value="All Services">All Services</option>
                        <option value="Air Conditioning">Air Conditioning</option>
                        <option value="Heating">Heating</option>
                        <option value="Thermostats">Thermostats</option>
                        <option value="Heat Pumps">Heat Pumps</option>
                    </select>
                </div>
            </div>
            <div>
                {currentPageReviews.map((data, index) => (
                    <ReviewItem
                        key={index}
                        name={data.author}
                        review={data.comments}
                        rating={data.rating}
                        date={new Date(data.createdAt)}
                        service={data.service}
                    />
                ))}
            </div>
            <div className="flex flex-row justify-between items-center mt-4">
                <div>
                    <button
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        disabled={page === 1}
                        className="text-[#FFFDF6] max-sm:text-[3.47vw] text-[clamp(0px,1.74vw,37.5px)] px-2 py-1 rounded disabled:opacity-65"
                    >
                        &lt;
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                        <button
                            key={pg}
                            onClick={() => setPage(pg)}
                            className={`text-[#FFFDF6] max-sm:text-[3.47vw] text-[clamp(0px,1.74vw,37.5px)] px-2 py-1 rounded ${
                                pg === page ? "" : "text-[#FFFDF6] opacity-65 hover:text-[#FFFDF6]"
                            }`}
                        >
                            {pg}
                        </button>
                    ))}

                    <button
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                        disabled={page === totalPages}
                        className="text-[#FFFDF6] max-sm:text-[3.47vw] text-[clamp(0px,1.74vw,37.5px)] px-2 py-1 rounded disabled:opacity-65"
                    >
                        &gt;
                    </button>
                </div>
                <div className="text-[#FFFDF6] max-sm:text-[3.47vw] text-[clamp(0px,1.74vw,37.5px)]">
                    {page} of {totalPages}
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
