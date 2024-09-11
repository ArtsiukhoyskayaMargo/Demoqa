import { type Locator, type Page } from '@playwright/test';

export class DynamicPropertiesPage { 
	readonly page: Page;
   readonly elementsLink: Locator;
	readonly dynamicPropertiesLink: Locator;
	readonly visibleAfter5SecondText: Locator;
	readonly colorChangeButton: Locator;

	constructor(page: Page) {
	this.page = page;
	this.elementsLink = page.getByText('Elements');
   this.dynamicPropertiesLink = page.getByText('Dynamic Properties');
	this.visibleAfter5SecondText = page.getByText('Visible After 5 Seconds');
	this.colorChangeButton = page.getByText('Color Change');
	}

	async goto () {
		await this.page.goto('/');
	}
	async navigateToDynamicProperties() {
		await this.elementsLink.click();
		await this.dynamicPropertiesLink.click();
	 }
	async waitForVisibleAfter5Seconds() {
		await this.page.waitForSelector('text=Visible After 5 Seconds', { timeout: 5000 });
	 }

	async getColorChangeButtonColor () {
		return this.colorChangeButton.evaluate((button) => {
			return window.getComputedStyle(button).color
	   });
	}
 }