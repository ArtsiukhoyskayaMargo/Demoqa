/* import { expect, test } from '@playwright/test'

test('check that text appears when clicking "What is Lorem Ipsum?"', async ({ page }) => {
	await page.goto('/');
	await page.getByText('Widgets').click();
	await page.getByText('Accordian').click();
	await page.getByText('What is Lorem Ipsum?').click();
	const locator = page.locator('#section1Content');
	await expect(locator).toContainText("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
}); */

import { test, expect } from '@playwright/test';
import { AccordianPage } from '../PageObject/accordianPage';

test('check that text appears when clicking "What is Lorem Ipsum?"', async ({ page }) => {
	const accordianPage = new AccordianPage(page);

	await accordianPage.goto();
   await accordianPage.navigateToAccordian();
	await accordianPage.clickLoremIpsum();
	await accordianPage.expectLoremIpsumText();
});
