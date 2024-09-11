/* import { expect, test } from '@playwright/test'

test('check that text appears when clicking "What is Lorem Ipsum?"', async ({ page }) => {
	await page.goto('/');
	await page.getByText('Widgets').click();
	await page.getByText('Accordian').click();
	await page.getByText('What is Lorem Ipsum?').click();
	const locator = page.locator('#section1Content');
<<<<<<< HEAD
	await expect(locator).toContainText("Lorem Ipsum is simply dummy text of the printing and typesetting industry!.");
});
=======
	await expect(locator).toContainText("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
}); */
>>>>>>> 1e7e8c81f0ca01c96c026eebffa695c65b996bca

import { test, expect } from '@playwright/test';
import { AccordianPage } from '../PageObject/accordianPage';

test('check that text appears when you clicking " What  is Lorem Ipsum ?"', async ({ page }) => {
	const accordianPage = new AccordianPage(page);

	await accordianPage.goto();
   await accordianPage.navigateToAccordian();
	await accordianPage.clickLoremIpsum();
	await accordianPage.expectLoremIpsumText();
});
