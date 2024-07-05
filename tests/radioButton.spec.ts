import { expect, test } from '@playwright/test'

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

// test("Click on Yes radio", async ({ page }) => {
// 	await page.locator('#yesRadio').check({ force: true });
// 	await page.locator('#yesRadio').isChecked();
// 	expect(await page.locator('.text-success')).toHaveText(yesRadioResult);
// });
