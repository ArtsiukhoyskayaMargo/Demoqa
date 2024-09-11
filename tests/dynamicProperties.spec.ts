/* import { expect, test } from '@playwright/test'

test('test check button color', async ({ page }) => {
	await page.goto('/');
	await page.getByText('Elements').click()
	await page.getByText('Dynamic Properties').click()
	await page.waitForSelector('text=Visible After 5 Seconds', { timeout: 5000 });
	await expect(page.getByText('Visible After 5 Seconds')).toBeVisible();
	await expect(page.getByText('Color Change')).toHaveCSS('color', 'rgb(220, 53, 69)');
	});
	 */
	import { test, expect } from '@playwright/test';
   import { DynamicPropertiesPage } from '../PageObject/dynamicPropertiesPage';

	test('test check button color', async ({ page }) => {
		const dynamicPropertiesPage = new DynamicPropertiesPage(page);
		await dynamicPropertiesPage.goto();
		await dynamicPropertiesPage.navigateToDynamicProperties();
		await dynamicPropertiesPage.waitForVisible0After5Seconds();
		await dynamicPropertiesPage.getColorChangeButtonColor();

		await expect(dynamicPropertiesPage.visibleAfter5SecondText).toBeVisible();
		const color = await dynamicPropertiesPage.getColorChangeButtonColor();
		expect(color).toBe('rgb(220, 53, 69)');
	});