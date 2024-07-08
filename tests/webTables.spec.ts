import { expect, test } from '@playwright/test'
import { beforeEach } from 'node:test'

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByText('Elements').click()

});

test('test Web Tables', async ({ page }) => {
	// Данные для добавления записи
	const firstName = 'Margarita';
	const lastName = 'Artsiukhouskaya';
	const email = 'lubanecmargo@yandex.ru';
	const age = '30';
	const salary = '1000';
	const department = 'QA';

	await page.getByText('Web Tables').click();
	await page.locator('#addNewRecordButton').click();
	
	await page.locator('#firstName').fill(firstName);
	await page.locator('#lastName').fill(lastName);
	await page.locator('#userEmail').fill(email);
	await page.locator('#age').fill(age);
	await page.locator('#salary').fill(salary);
	await page.locator('#department').fill(department);
 
	// Нажатие на кнопку "Submit"
	await page.locator('#submit').click();
 
	// Проверка добавленной записи
	const rowSelector = `//div[text()="${firstName}"]//ancestor::div[@role="row"]`;
 
	await expect(page.locator(`${rowSelector}//div[text()="${lastName}"]`)).toBeVisible();
	await expect(page.locator(`${rowSelector}//div[text()="${email}"]`)).toBeVisible();
	await expect(page.locator(`${rowSelector}//div[text()="${age}"]`)).toBeVisible();
	await expect(page.locator(`${rowSelector}//div[text()="${salary}"]`)).toBeVisible();
	await expect(page.locator(`${rowSelector}//div[text()="${department}"]`)).toBeVisible();
 }); 