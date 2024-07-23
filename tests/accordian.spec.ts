import { expect, test } from '@playwright/test'

test('check that text appears when clicking "What is Lorem Ipsum?"', async ({ page }) => {
	await page.goto('/');
	await page.getByText('Widgets').click();
	await page.getByText('Accordian').click();
	await page.getByText('What is Lorem Ipsum?').click();
	const locator = page.locator('#section1Content');
	await expect(locator).toContainText("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
});

