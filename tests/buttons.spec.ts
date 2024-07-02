import { expect, test } from '@playwright/test'

test('test Buttons', async ({ page }) => {
	await page.goto('/');
	await page.locator('div').filter({ hasText: /^Elements$/ }).first().click()
	await page.locator('//span[text()="Buttons"]').click()
	await page.locator('#doubleClickBtn').click()
	await page.locator('#rightClickBtn').click()
	await page.locator('//button[text()="Click Me"]').click()
	await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click');
})