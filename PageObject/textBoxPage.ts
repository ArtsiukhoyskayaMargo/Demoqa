import { expect } from '@playwright/test'

exports.TextBoxPage = class TextBoxPage {
  
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.elementsLink = page.getByText('Elements');
		this.textBoxLink = page.locator('//span[text()="Text Box"]');
		this.userNameInput = page.locator('#userName');
		this.userEmailInput = page.locator('#userEmail');
		this.currentAddressInput = page.locator('#currentAddress');
		this.permanentAddressInput = page.locator('#permanentAddress');
		this.submitButton = page.locator('#submit');
		this.nameOutput = page.locator('#name');
		this.emailOutput = page.locator('#email');
		this.currentAddressOutput = page.locator('#currentAddress.mb-1');
		this.permanentAddressOutput = page.locator('#permanentAddress.mb-1');
	 }
  
	 async navigate() {
		await this.page.goto('/');
		await this.elementsLink.click();
	 }
  
	 async fillForm(userName, userEmail, currentAddress, permanentAddress) {
		await this.textBoxLink.click();
		await this.userNameInput.fill(userName);
		await this.userEmailInput.fill(userEmail);
		await this.currentAddressInput.fill(currentAddress);
		await this.permanentAddressInput.fill(permanentAddress);
	 }
  
	 async submitForm() {
		await this.submitButton.click();
	 }
  
	 async checkFormSubmission(userName, userEmail, currentAddress, permanentAddress) {
		await expect(this.nameOutput).toHaveText(`Name:${userName}`);
		await expect(this.emailOutput).toHaveText(`Email:${userEmail}`);
		await expect(this.currentAddressOutput).toHaveText(`Current Address :${currentAddress}`);
		await expect(this.permanentAddressOutput).toHaveText(`Permananet Address :${permanentAddress}`);
	 }
  
	 async checkEmailError() {
		const borderColor = await this.userEmailInput.evaluate(element => 
		  window.getComputedStyle(element).borderColor
		);
		expect(borderColor).toBe('rgb(255, 0, 0)'); // Красный цвет в формате RGB
	 }
  };