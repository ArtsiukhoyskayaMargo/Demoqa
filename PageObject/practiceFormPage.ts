import { expect, type Locator, type Page } from '@playwright/test';

export class PracticeFormPage {
readonly page: Page;
readonly firstNameInput: Locator;
readonly lastNameInput: Locator;
readonly emailInput: Locator;
readonly genderRadio: Locator;
readonly mobileInput: Locator;
readonly dateOfBirth: Locator;
readonly dateOfBirthInput: Locator;
readonly subjectInput: Locator;
readonly hobbiesCheckbox: Locator;
readonly uploadPictureInput: Locator;
readonly currentAddressInput: Locator;
readonly stateSelect: Locator;
readonly citySelect: Locator;
readonly submitButton: Locator;
readonly successMessage: Locator;
readonly successMessage2: Locator;
readonly userNumberError: Locator;
readonly genderError: Locator;
readonly emailError: Locator;
readonly firstNameError: Locator;
readonly lastNameError: Locator;
readonly mobileError: Locator;

  constructor(page: Page) {
  this.page = page;
  this.firstNameInput = page.locator('#firstName');
  this.lastNameInput = page.locator('#lastName');
  this.emailInput = page.locator('#userEmail');
  this.genderRadio = page.locator('label[for="gender-radio-2"]');
  this.mobileInput = page.locator('#userNumber');
  this.dateOfBirth = page.locator('#dateOfBirthInput');
  this.dateOfBirthInput = page.locator('div[aria-label="Choose Monday, September 2nd, 2024"]');
  this.subjectInput = page.locator('#subjectsInput')
  this.hobbiesCheckbox = page.locator('label[for="hobbies-checkbox-1"]');
  this.uploadPictureInput = page.locator('input[id="uploadPicture"]');
  this.currentAddressInput = page.getByPlaceholder('Current Address');
  this.submitButton = page.getByText('Submit');
  this.stateSelect = page.getByText('Select State');
  this.successMessage = page.locator('#example-modal-sizes-title-lg');
  this.successMessage2 = page.locator('.table.table-dark.table-striped.table-bordered.table-hover');
  this.citySelect = page.getByText('Select City');
  this.userNumberError = page.getByText('Mobile');
  this.genderError = page.locator('label[for="gender-radio-1"]');
  this.emailError = page.locator('#userEmail');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.getByText('Forms').click();
    await this.page.getByText('Practice Form').click();
  }

  async uploadFile(filePath: string) {
    await this.uploadPictureInput.setInputFiles(filePath);
  }

  async fillForm(firstName: string, lastName: string, email: string, mobile: string, address: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.mobileInput.fill(mobile);
    await this.currentAddressInput.fill(address);
  }
  
  async chooseRadioButton() {
    await this.genderRadio.check();
  } 
  
  async chooseCheckBox() {
    await this.hobbiesCheckbox.check();
  }

  async chooseDate() {
    await this.dateOfBirth.click()
    await this.dateOfBirthInput.click()
  }

  async chooseSubject(subject: string) {
    await this.subjectInput.fill(subject);
	  await this.page.keyboard.press('Enter');
  }

  async selectStateAndCity(state: string, city: string) {
    await this.stateSelect.click();
    await this.page.keyboard.type(state);
    await this.page.keyboard.press('Enter');
    await this.citySelect.click();
    await this.page.keyboard.type(city);
    await this.page.keyboard.press('Enter');
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async verifySubmissionSuccess() {
    await expect(this.successMessage).toHaveText('Thanks for submitting the form');
    await expect(this.successMessage2).toBeVisible();
  }

  async verifyUploadedFileName(expectedFileName: string) {
    const uploadedFileName = await this.uploadPictureInput.inputValue();
    await expect(uploadedFileName).toContain(expectedFileName);
  }

  async verifyMobileInputError(expectedColor: string) {
    await expect(this.userNumberError).toHaveCSS('color', expectedColor);
  }

  async verifyGenderInputError(expectedColor: string) {
    await expect(this.genderError).toHaveCSS('color', expectedColor);
  }

  async verifyEmailInputError(expectedColor: string) {
    await expect(this.emailError).toHaveCSS('color', expectedColor);
  }

  async verifyEmptyFieldsErrors(firstNameColor: string, lastNameColor: string, genderColor: string, mobileColor: string) {
    await expect(this.firstNameInput).toHaveCSS('color', firstNameColor);
    await expect(this.lastNameInput).toHaveCSS('color', lastNameColor);
    await expect(this.genderError).toHaveCSS('color', genderColor);
    await expect(this.userNumberError).toHaveCSS('color', mobileColor);
  }
}