import { expect, test } from '@playwright/test'
import { beforeEach } from 'node:test'

test.beforeEach(async ({ page }) => {
	await page.goto('https://demoqa.com/')
	await page.locator('div').filter({ hasText: /^Elements$/ }).first().click() //*[text()='Elements']
});

	test('positiv test Text Box', async ({ page }) => {
	await page.locator('li').filter({ hasText: 'Text Box' }).click();
	await page.locator('#userName').fill('Margarita')
   await page.locator('#userEmail').fill('lubanecmargo@yandex.ru')
   await page.locator('#currentAddress').fill('Minsk')
	await page.locator('#permanentAddress').fill('Minsk')
	await page.locator('#submit').click()
	await expect (page.locator('Name:Margarita')).toBeVisible()
	await expect (page.locator('Email:lubanecmargo@yandex.ru')).toBeVisible()
	await expect (page.locator('Current Address :Minsk')).toBeVisible()
	await expect (page.locator('Permananet Address :Minsk')).toBeVisible()
})

test('hegativ test Text Box', async ({ page }) => {
	await page.locator('li').filter({ hasText: 'Text Box' }).click();
	await page.locator('#userEmail').fill('5555')
	await page.locator('#submit').click()
	await expect(page.locator('#userEmail').getAttribute('placeholder')).resolves.toEqual('name@example.com');
})

test('test Check Box', async ({ page }) => {
	await page.locator('li').filter({ hasText: 'Check Box' }).click()
   await page.locator('#tree-node').getByRole('img').nth(3).click()
	await expect (page.locator('#result')).toContainText('You have selected')
	await page.getByLabel('Toggle').click();
	await expect(page.locator("'Desktop'")).toBeVisible();
	await expect(page.locator("'Documents'")).toBeVisible();
	await expect(page.locator("'Downloads'")).toBeVisible();
})