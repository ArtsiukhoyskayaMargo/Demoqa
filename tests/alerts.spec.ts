import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByText('Alerts, Frame & Windows').click()
	await page.goto('/alerts')
});

test('test alert', async ({ page }) => {
  // Ожидание появления alert при клике на кнопку
  page.once('dialog', async dialog => {
    // Проверка текста alert
    expect(dialog.message()).toBe('You clicked a button');
    // Нажатие на кнопку OK
    await dialog.accept();
  });

  // Клик по кнопке с локатором #alertButton
  await page.click('#alertButton');
});