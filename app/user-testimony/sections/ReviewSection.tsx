"use client";

import { useEffect, useState } from "react";
import ReviewItem from "../components/ReviewItem";
import { Review } from "@/models/Review";

const ReviewSection = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`/api/reviews?page=${page}&limit=4`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data.reviews);
                setTotalPages(data.totalPages);
            })
            .catch((error) => {
                console.error("Error fetching reviews.", error);
            });
    }, [page]);

    return (
        <div>
            <div>
                {reviews.map((data, index) => (
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
