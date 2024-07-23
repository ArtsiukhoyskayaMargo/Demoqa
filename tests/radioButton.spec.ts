/* import { expect, test } from '@playwright/test'

test.describe("Radio buttons", () => {
	const yesRadioResult = 'Yes';

	test.beforeEach(async ({ page }) => {
		 await page.goto('/radio-button');
	});

	test("Click on Yes radio", async ({ page }) => {
		 await page.locator('label[for="yesRadio"]').check(); //Использует метод check() для выбора (установки) этой радиокнопки.
		 await page.locator('#yesRadio').isChecked(); //проверяет, что радиокнопка с идентификатором #yesRadio действительно находится в состоянии "выбрано".
		 expect(await page.locator('.text-success')).toHaveText(yesRadioResult); //Убеждается, что соответствующий текст на странице обновился до 'Yes'.
	});
});

Денис
test("Click on Yes radio", async ({ page }) => {
	await page.locator('#yesRadio').check({ force: true });
	await page.locator('#yesRadio').isChecked();
	expect(await page.locator('.text-success')).toHaveText(yesRadioResult);
}); */

import { expect, test } from '@playwright/test';
import { RadioButtonsPage } from '../PageObject/radioButtonPage'

test.describe("Radio buttons", () => {
  const yesRadioResult = 'Yes';

  let radioButtonsPage;

  test.beforeEach(async ({ page }) => {
    radioButtonsPage = new RadioButtonsPage(page);
    await radioButtonsPage.goto();
  });

  test("Click on Yes radio", async ({ page }) => {
	const radioButtonsPage = new RadioButtonsPage(page); //когда вызывается new RBP создается новый объект
  //объекты new User имеют доступ к методам класса.
	await radioButtonsPage.clickYesRadio(); 
	const isChecked = await radioButtonsPage.isYesRadioChecked();
	expect(isChecked).toBeTruthy();
	const successMessage = await radioButtonsPage.getSuccessMessage();
	expect(successMessage).toBe(yesRadioResult);
 });
});
