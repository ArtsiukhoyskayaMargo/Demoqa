import { expect, test } from '@playwright/test'

test('test Radio Button', async ({ page }) => {
	await page.goto('/');
	await page.locator('div').filter({ hasText: /^Elements$/ }).first().click()
	await page.locator('//span[text()="Radio Button"]').click()//('li').filter({ hasText: 'Radio Button' }).click()
	await page.locator('label[class^="custom-control"][for="yesRadio"]').click()
	await expect(page.locator('//p[@class="mt-3"]').textContent()).resolves.toBe("You have selected Yes");
	await page.locator('label[class^="custom-control"][for="impressiveRadio"]').click()
	await expect(page.locator('//p[@class="mt-3"]').textContent()).resolves.toBe("You have selected Impressive");
	// await page.locator('label[class^="custom-control"][for="noRadio"]').click() тут я бы завела баг, ибо кнопка не кликабельна
})