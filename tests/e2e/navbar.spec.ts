import { expect, test } from '@playwright/test';
import { navigationLinks } from '@/components/ui/NavigationBar';

test('Navbar should be visible', async ({ page }) => {
    await page.goto("/");

    const navbar = page.locator('header');
    await expect(navbar).toBeVisible();
});

test('Navbar should contain expected links', async ({ page }) => {
    await page.goto("/");
    const navbar = page.locator('header');

    await Promise.all(
        navigationLinks.map(async (navigationLink) => {
          const linkElement = navbar.locator(`text=${navigationLink.label}`);

          await expect(linkElement).toBeVisible();
          await expect(linkElement).toHaveAttribute('href', navigationLink.href);
        })
    );
});