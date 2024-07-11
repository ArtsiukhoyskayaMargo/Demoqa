import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByText('Alerts, Frame & Windows').click()
	await page.goto('/alerts')
});

test('test click button to see alert', async ({ page }) => {
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('You clicked a button');
    await dialog.accept();
  });
  await page.click('#alertButton');
});

test('test click button to confirm action and check message', async ({ page }) => {
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('Do you confirm action?');
    await dialog.accept();
  });
  await page.click('#confirmButton');
  await expect(page.locator('text=You selected Ok')).toBeVisible();
});