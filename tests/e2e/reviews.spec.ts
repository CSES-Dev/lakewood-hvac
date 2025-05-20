import { expect, test } from "@playwright/test";
import { Review } from "@/models/Review";

const REVIEW_API_URL = "/api/reviews";

test.describe.serial("Reviews API CRUD Operations", () => {
    let createdReviewId: number;

    test("GET all reviews - should return an array of reviews", async ({ request }) => {
        const response = await request.get(REVIEW_API_URL);
        expect(response.status()).toBe(200);

        const reviews = (await response.json()) as Review[];

        expect(Array.isArray(reviews)).toBeTruthy();
        expect(reviews.length > 1);
    });

    test("POST a new review - should create and return a valid review", async ({ request }) => {
        const testReviewData = {
            author: "This is a test author",
            comments: "This is a test review",
            rating: 4.5,
            createdAt: new Date(),
        };
        const response = await request.post(REVIEW_API_URL, {
            data: testReviewData,
        });
        expect(response.status()).toBe(201);

        const review = (await response.json()) as Review;

        // Check date manually
        review.createdAt = new Date(review.createdAt);
        expect(review.createdAt.toISOString()).toBe(testReviewData.createdAt.toISOString());

        // Check other fields
        expect(review).toMatchObject({
            ...testReviewData,
            createdAt: expect.any(Date),
        });

        createdReviewId = review.id;
    });

    test("GET a single review - should return the new test review", async ({ request }) => {
        if (!createdReviewId) {
            test.skip(!createdReviewId, "Previous POST a test review failed, no review id found");
            return;
        }

        const response = await request.get(`${REVIEW_API_URL}?id=${createdReviewId.toString()}`);
        expect(response.status()).toBe(200);

        const review = (await response.json()) as Review;
        expect(review.id).toBe(createdReviewId);
    });

    test("PUT to update a review - should update and return the review", async ({ request }) => {
        if (!createdReviewId) {
            test.skip(!createdReviewId, "Previous POST a test review failed, no review id found");
            return;
        }

        const updatedReviewData = {
            update: {
                author: "This is an updated test author",
                comments: "This is an updated test review",
            },
        };

        const response = await request.put(`${REVIEW_API_URL}?id=${createdReviewId.toString()}`, {
            data: updatedReviewData,
        });
        expect(response.status()).toBe(200);

        const updatedReview = (await response.json()) as Review;
        expect(updatedReview.author).toBe(updatedReviewData.update.author);
        expect(updatedReview.comments).toBe(updatedReviewData.update.comments);
    });

    test("DELETE a review - should delete the review", async ({ request }) => {
        if (!createdReviewId) {
            test.skip(!createdReviewId, "Previous POST a test review failed, no review id found");
            return;
        }

        const response = await request.delete(`${REVIEW_API_URL}?id=${createdReviewId.toString()}`);
        expect(response.status()).toBe(200);

        // Verify the review is actually deleted
        const getResponse = await request.get(`${REVIEW_API_URL}?id=${createdReviewId.toString()}`);
        expect(getResponse.status()).toBe(404);
    });

    test("POST with missing field - should return 400", async ({ request }) => {
        const missingReviewData = {
            author: "Test fail on no title specified",
        };

        const response = await request.post(REVIEW_API_URL, {
            data: missingReviewData,
        });
        expect(response.status()).toBe(400);
    });

    test("PUT with missing ID - should return 400", async ({ request }) => {
        const updatedReviewData = {
            update: {
                title: "Test fail on no id specified",
                comments: "Test fail on no id specified",
            },
        };

        const response = await request.put(REVIEW_API_URL, {
            data: updatedReviewData,
        });
        expect(response.status()).toBe(400);
    });

    test("DELETE with missing ID - should return 400", async ({ request }) => {
        const response = await request.delete(REVIEW_API_URL);
        expect(response.status()).toBe(400);
    });
});
