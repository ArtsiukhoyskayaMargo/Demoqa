import { expect, test } from '@playwright/test'

test('test Check Box', async ({ page }) => {
	await page.goto('/');
	await page.getByText('Elements').click()
	await page.getByText('Check Box').click()
   await page.locator("//button[@aria-label='Toggle' and contains(@class, 'rct-collapse-btn')]").click()
   await page.locator("(//button[@aria-label='Toggle' and contains(@class, 'rct-collapse-btn')])[4]").click()
   await page.locator("(//span[@class='rct-checkbox'])[5]").click()
	// Ожидание, пока элемент #result станет видимым
	await page.waitForSelector('#result');

	await expect (page.locator('#result')).toContainText('You have selected')
	const resultText = page.locator('#result')
	expect(resultText).toContainText('You have selected :')
	expect(resultText).toContainText('wordFile')
});
