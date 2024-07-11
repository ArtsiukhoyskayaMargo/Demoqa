import { expect, test } from '@playwright/test'

test('test check button color', async ({ page }) => {
	await page.goto('/');
	await page.getByText('Elements').click()
	await page.getByText('Dynamic Properties').click()
	await page.waitForTimeout(5000);
	await expect(page.getByText('Visible After 5 Seconds')).toBeVisible();
	await expect(page.getByText('Color Change')).toHaveCSS('color', 'rgb(220, 53, 69)');
	});
	