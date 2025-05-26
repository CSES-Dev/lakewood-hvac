/* eslint-disable */
import { expect, test } from "@playwright/test";
import { Engagement } from "@/models/Engagement";

const ENGAGEMENT_API_URL = "/api/engagements";

test.describe.serial("Engagements API CRUD Operations", () => {
    let createdEngagementId: number;

    test("GET all engagements - should return an array of engagements", async ({ request }) => {
        const response = await request.get(ENGAGEMENT_API_URL);
        expect(response.status()).toBe(200);

        const engagements = (await response.json()) as Engagement[];

        expect(Array.isArray(engagements)).toBeTruthy();
        expect(engagements.length > 1);
    });

    // test("POST a new engagement - should create and return a valid engagement", async ({
    //     request,
    // }) => {
    //     const testEngagementData = {
    //         title: "Test title",
    //         description: "Test description",
    //         address: "9500 Gilman Drive",
    //         date: new Date(),
    //         imageUrl: "/mail.png",
    //         isVisible: true,
    //     };
    //     const response = await request.post(ENGAGEMENT_API_URL, {
    //         data: testEngagementData,
    //     });
    //     expect(response.status()).toBe(201);

    //     const engagement = (await response.json()) as Engagement;

    //     // Check date manually
    //     engagement.date = new Date(engagement.date);
    //     expect(engagement.date.toISOString()).toBe(testEngagementData.date.toISOString());

    //     // Check other fields
    //     expect(engagement).toMatchObject({
    //         ...testEngagementData,
    //         date: expect.any(Date),
    //     });

    //     createdEngagementId = engagement.id;
    // });

    // test("GET a single engagement - should return the new test engagement", async ({ request }) => {
    //     if (!createdEngagementId) {
    //         test.skip(
    //             !createdEngagementId,
    //             "Previous POST a test engagement failed, no engagement id found",
    //         );
    //         return;
    //     }

    //     const response = await request.get(
    //         `${ENGAGEMENT_API_URL}?id=${createdEngagementId.toString()}`,
    //     );
    //     expect(response.status()).toBe(200);

    //     const engagement = (await response.json()) as Engagement;
    //     expect(engagement.id).toBe(createdEngagementId);
    // });

    // test("Check if file upload path is accessible - should expect image header", async ({
    //     request,
    // }) => {
    //     if (!createdEngagementId) {
    //         test.skip(
    //             !createdEngagementId,
    //             "Previous POST a test engagement failed, no engagement id found",
    //         );
    //         return;
    //     }

    //     const response = await request.get(
    //         `${ENGAGEMENT_API_URL}?id=${createdEngagementId.toString()}`,
    //     );
    //     expect(response.status()).toBe(200);

    //     const engagement = (await response.json()) as Engagement;
    //     const imageUrl = engagement.imageUrl;

    //     const imageResponse = await request.get(imageUrl);
    //     expect(imageResponse.status()).toBe(200);
    //     expect(imageResponse.headers()["content-type"]).toMatch("image");
    // });

    // test("PUT to update a engagement - should update and return the engagement", async ({
    //     request,
    // }) => {
    //     if (!createdEngagementId) {
    //         test.skip(
    //             !createdEngagementId,
    //             "Previous POST a test engagement failed, no engagement id found",
    //         );
    //         return;
    //     }

    //     const updatedEngagementData = {
    //         update: {
    //             title: "This is an updated test title",
    //             description: "This is an updated test description",
    //         },
    //     };

    //     const response = await request.put(
    //         `${ENGAGEMENT_API_URL}?id=${createdEngagementId.toString()}`,
    //         {
    //             data: updatedEngagementData,
    //         },
    //     );
    //     expect(response.status()).toBe(200);

    //     const updatedEngagement = (await response.json()) as Engagement;
    //     expect(updatedEngagement.title).toBe(updatedEngagementData.update.title);
    //     expect(updatedEngagement.description).toBe(updatedEngagementData.update.description);
    // });

    // test("DELETE a engagement - should delete the engagement", async ({ request }) => {
    //     if (!createdEngagementId) {
    //         test.skip(
    //             !createdEngagementId,
    //             "Previous POST a test engagement failed, no engagement id found",
    //         );
    //         return;
    //     }

    //     const response = await request.delete(
    //         `${ENGAGEMENT_API_URL}?id=${createdEngagementId.toString()}`,
    //     );
    //     expect(response.status()).toBe(200);

    //     // Verify the engagement is actually deleted
    //     const getResponse = await request.get(
    //         `${ENGAGEMENT_API_URL}?id=${createdEngagementId.toString()}`,
    //     );
    //     expect(getResponse.status()).toBe(404);
    // });

    // test("POST with missing field - should return 400", async ({ request }) => {
    //     const missingEngagementData = {
    //         title: "Test fail on no title specified",
    //     };

    //     const response = await request.post(ENGAGEMENT_API_URL, {
    //         data: missingEngagementData,
    //     });
    //     expect(response.status()).toBe(400);
    // });

    // test("PUT with missing ID - should return 400", async ({ request }) => {
    //     const updatedEngagementData = {
    //         update: {
    //             title: "Test fail on no id specified",
    //             description: "Test fail on no id specified",
    //         },
    //     };

    //     const response = await request.put(ENGAGEMENT_API_URL, {
    //         data: updatedEngagementData,
    //     });
    //     expect(response.status()).toBe(400);
    // });

    // test("DELETE with missing ID - should return 400", async ({ request }) => {
    //     const response = await request.delete(ENGAGEMENT_API_URL);
    //     expect(response.status()).toBe(400);
    // });
});
