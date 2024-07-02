import { expect, test } from '@playwright/test'
import { beforeEach } from 'node:test'

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.locator('div').filter({ hasText: /^Elements$/ }).first().click() //*[text()='Elements']
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