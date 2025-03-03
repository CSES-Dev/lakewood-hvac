import { expect, test } from "@playwright/test";

test("Navigates to about page and checks if sections are rendered", async ({ page }) => {
    await page.goto("/about");

    const aboutSections = page.locator("section");
    await expect(aboutSections).toHaveCount(1);
});
