import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');
  await page.getByText('Yes').click();
  await page.getByText('You have selected Yes').click();
  await page.getByText('You have selected Yes').click();
});