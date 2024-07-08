import { expect, test } from '@playwright/test'

test('test Buttons', async ({ page }) => {
		await page.goto('/');
		await page.getByText('Elements').click()
		await page.getByText('Buttons').click()
		// 1	
		await page.locator('#doubleClickBtn').dblclick()
		const doubleClickMeButton = page.locator('#doubleClickMessage');
		await expect(doubleClickMeButton).toHaveText('You have done a double click')
		await expect(doubleClickMeButton).toBeVisible();
		// 2		
	   await page.locator('#rightClickBtn').click({ button: 'right' });
		const rightClickMeButton = page.locator('#rightClickMessage');
		await expect(rightClickMeButton).toHaveText('You have done a right click')
		await expect(rightClickMeButton).toBeVisible();
		// 3
		await page.locator('//button[text()="Click Me"]').click()
		const dynamicClickMessage = page.locator('#dynamicClickMessage');
		await expect(dynamicClickMessage).toHaveText('You have done a dynamic click')
		await expect(dynamicClickMessage).toBeVisible();
})