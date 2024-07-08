import { expect, test } from '@playwright/test'

const userName = 'Margarita';
const userEmail = 'lubanecmargo@yandex.ru';
const currentAddress = 'Minsk';
const permanentAddress = 'Minsk';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByText('Elements').click();  
});

test('positiv test Text Box', async ({ page }) => {
	await page.locator('//span[text()="Text Box"]').click();
	await page.locator('#userName').fill(userName);
	await page.locator('#userEmail').fill(userEmail);
	await page.locator('#currentAddress').fill(currentAddress);
	await page.locator('#permanentAddress').fill(permanentAddress); 
	await page.locator('#submit').click();
	await expect(page.locator('#name')).toHaveText(`Name:${userName}`);
	await expect(page.locator('#email')).toHaveText(`Email:${userEmail}`);
	await expect(page.locator('#currentAddress.mb-1')).toHaveText(`Current Address :${currentAddress}`);
	await expect(page.locator('#permanentAddress.mb-1')).toHaveText(`Permananet Address :${permanentAddress}`);
});


test('negativ test Text Box', async ({ page }) => {
	await page.getByText('Text Box').click();
	await page.locator('#userEmail').fill('5555')
	await page.locator('#submit').click()
	//Проверка, что поле ввода загорелось красным цветом
	const borderColor = await page.locator('#userEmail').evaluate(element => 
		window.getComputedStyle(element).borderColor
	);
	expect(borderColor).toBe('rgb(255, 0, 0)');// Красный цвет в формате RGB
})
