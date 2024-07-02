import { expect, test } from '@playwright/test'

const userName = 'Margarita';
const userEmail = 'lubanecmargo@yandex.ru';
const currentAddress = 'Minsk';
const permanentAddress = 'Minsk';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.locator('div').filter({ hasText: /^Elements$/ }).first().click(); 
});

test('positiv test Text Box', async ({ page }) => {
	await page.locator('//span[text()="Text Box"]').click();
	await page.locator('#userName').fill(userName);
	await page.locator('#userEmail').fill(userEmail);
	await page.locator('#currentAddress').fill(currentAddress);
	await page.locator('#permanentAddress').fill(permanentAddress);
	await page.locator('#submit').click();
	await expect(page.locator(`#output .border #name`)).toHaveText(`Name:${userName}`);
	await expect(page.locator(`#output .border #email`)).toHaveText(`Email:${userEmail}`);
	await expect(page.locator(`#output .border #currentAddress`)).toHaveText(`Current Address :${currentAddress}`);
	await expect(page.locator(`#output .border #permanentAddress`)).toHaveText(`Permananet Address :${permanentAddress}`);
});


test('hegativ test Text Box', async ({ page }) => {
	await page.locator('li').filter({ hasText: 'Text Box' }).click();
	await page.locator('#userEmail').fill('5555')
	await page.locator('#submit').click()
	await expect(page.locator('#userEmail').getAttribute('placeholder')).resolves.toEqual('name@example.com');
})