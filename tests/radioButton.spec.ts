import { expect, test } from '@playwright/test'

test('test Radio Button', async ({ page }) => {
	await page.goto('/');
	await page.getByText('Elements').click();
	await page.locator('//span[text()="Radio Button"]').click()
	await page.locator('label[class^="custom-control"][for="yesRadio"]').click()
	await expect(page.locator('//p[@class="mt-3"]').textContent()).resolves.toBe("You have selected Yes");
	await page.locator('label[class^="custom-control"][for="impressiveRadio"]').click()
	await expect(page.locator('//p[@class="mt-3"]').textContent()).resolves.toBe("You have selected Impressive");
})