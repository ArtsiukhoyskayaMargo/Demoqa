/* import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByText('Elements').click()
	await page.locator('//span[text()="Links"]').click()
});


test('test checking Home link', async ({ page, context }) => {
		//Мы используем Promise.all для параллельн.д. открытие новой вкладки+клик по ссылке
		const [newPage] = await Promise.all([
		  context.waitForEvent('page'),
		  page.locator('#simpleLink').click(), 
		]);
		await expect(newPage).toHaveURL('https://demoqa.com/')
		//expect(await page.locator('img[src="/images/WB.svg"]')).toBeVisible();

   });


 test('Сlick on the link Created and check for 201 status code', async ({ page }) => {
	// Шаг 1: Переход на нужную страницу
    await page.goto('/links');
    // Шаг 2: Клик по ссылке с идентификатором #created
    await page.locator('#created').click();
    // Шаг 3: Ожидание получения ответа с сервера с статус кодом 201
    const response = await page.waitForResponse(response => response.status() === 201);
    // Шаг 4: Проверка, что статус код действительно 201
    expect(response.status()).toBe(201);
    expect(await page.locator('#linkResponse')).toContainText('201')
  });
 */

  import { test, expect } from '@playwright/test';
  import {LinksPage } from '../PageObject/linksPage';

  test.describe('LinksPage tests', () => {
	let page: Page;
	let context;
	let linksPage: LinksPage;

	test.beforeEach(async ({ browser }) => {
		context = await browser.newContext();
		page = await context.newPage();
		linksPage = new LinksPage(page);
		await linksPage.goto();
	});

	test('navigate to links and check home link', async () => {
		await linksPage.navigateToLinks();
		const newPage = await linksPage.clickHomeLink(context);
		await expect(newPage).toHaveURL('https://demoqa.com/');
	});

	test('click on created link and check response', async () => {
		await linksPage.navigateToLinks();
		const response = await linksPage.clickCreated();
		expect(response.status()).toBe(201);
		await linksPage.checkResponse();
	});
});