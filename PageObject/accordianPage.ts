import { expect, type Locator, type Page } from '@playwright/test';

export class AccordianPage { 
	readonly page: Page;
   readonly widgetsLink: Locator;
	readonly accordianLink: Locator;
	readonly loremIpsumLink: Locator
	readonly sectionContent: Locator;

	constructor(page: Page) {
		this.page = page;
		this.widgetsLink = page.getByText('Widgets');
		this.accordianLink = page.getByText('Accordian');
		this.loremIpsumLink = page.getByText('What is Lorem Ipsum?');
      this.sectionContent = page.locator('#section1Content');
	}

	async goto () {
		await this.page.goto('/');
	}

	async navigateToAccordian () {
		await this.widgetsLink.click();
		await this.accordianLink.click();
	}
   async clickLoremIpsum() {
		await this.loremIpsumLink.click();
	}

	async expectLoremIpsumText() {
		await expect(this.sectionContent).toContainText("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
  }
}
