import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByText('Alerts, Frame & Windows').click()
	await page.getByText('Browser Windows').click()
});
test('test a new tab', async ({ page, context }) => {
	const [newPage] = await Promise.all([
		context.waitForEvent('page'),
		page.click('#tabButton')
	 ]);
	 await expect(newPage).toHaveURL('https://demoqa.com/sample');
	 await expect(newPage.locator('text=This is a sample page')).toBeVisible();
});


test('test a new window', async ({ page, context }) => {
	const [newWindow] = await Promise.all([
		context.waitForEvent('page'),
		page.click('#windowButton')
	 ]);
	await expect(newWindow).toHaveURL('https://demoqa.com/sample');
	await expect(newWindow.locator('text=This is a sample page')).toBeVisible();
 });

test('test a new window message', async ({ page, context }) => {
	const [newWindowMessage] = await Promise.all([
		context.waitForEvent('page'),
		page.click('#messageWindowButton')
	 ]);
	 const messageText = 'Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.';
	 await expect(newWindowMessage.locator('body')).toHaveText(messageText);
  });