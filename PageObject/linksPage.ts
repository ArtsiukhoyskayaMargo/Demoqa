import { expect, Locator, Page } from '@playwright/test';

export class LinksPage { 
	readonly page: Page;
   readonly elementsLink: Locator;
	readonly linksLink: Locator;
	readonly homeLink: Locator
	readonly createdLink: Locator;
	readonly responseLink: Locator;

	constructor(page: Page) {
		this.page = page;
		this.elementsLink = page.getByText('Elements');
		this.linksLink = page.locator('//span[text()="Links"]');
		this.homeLink = page.locator('#simpleLink');
		this.createdLink = page.locator('#created');
		this.responseLink = page.locator('#linkResponse')
		}

		async goto () {
			await this.page.goto('/');
		}

		async navigateToLinks() {
			await this.elementsLink.click();
			await this.linksLink.click();
		 }

		async clickHomeLink(context) {
			const [newPage] = await Promise.all([
				context.waitForEvent('page'),
				this.homeLink.click(),
			]);
         return newPage
		}

		async clickCreated() {
			await this.createdLink.click()
			const response = await this.page.waitForResponse(response => response.status() === 201);
			return response			
		}
		
     async checkResponse() {
		   await expect(this.responseLink).toContainText('201');
	  }
	}