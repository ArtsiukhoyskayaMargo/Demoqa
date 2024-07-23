import { expect, type Locator, type Page } from '@playwright/test';

// экспортируемый класс RadioButtonsPage будет использоваться для работы с элементами страницы, содержащей радио-кнопки.
export class RadioButtonsPage { 
  readonly page: Page;
  readonly yesRadioLabel: Locator;
  readonly yesRadioInput: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.yesRadioLabel = page.locator('label[for="yesRadio"]');
    this.yesRadioInput = page.locator('#yesRadio');
    this.successMessage = page.locator('.text-success');
  }

  async goto() {
    await this.page.goto('/radio-button');
  }

  async clickYesRadio() {
    await this.yesRadioLabel.click();
  }

  async isYesRadioChecked() {
    return this.yesRadioInput.isChecked();
  }

  async getSuccessMessage() {
    return this.successMessage.textContent();
  }
}
