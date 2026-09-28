import { test, expect } from '@playwright/test';

test('navigates to EPAM Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  const menuButton = page.getByRole('button', { name: /menu/i });
  await expect(menuButton).toBeVisible();
  await menuButton.click();

  const servicesLink = page.getByRole('link', { name: 'Services', exact: true });
  await expect(servicesLink).toBeVisible();
  await servicesLink.click();

  const clientWorkLink = page.getByRole('link', {
    name: 'Explore Our Client Work',
    exact: true,
  });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();

  await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
});
