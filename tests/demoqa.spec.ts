// import { expect, test } from '@playwright/test'
// import { beforeEach } from 'node:test'

// test.beforeEach(async ({ page }) => {
// 	await page.goto('https://demoqa.com/')
// 	await page.locator('div').filter({ hasText: /^Elements$/ }).first().click() //*[text()='Elements']
// });

// 	test('positiv test Text Box', async ({ page }) => {
// 	await page.locator('li').filter({ hasText: 'Text Box' }).click();
// 	await page.locator('#userName').fill('Margarita')
//    await page.locator('#userEmail').fill('lubanecmargo@yandex.ru')
//    await page.locator('#currentAddress').fill('Minsk')
// 	await page.locator('#permanentAddress').fill('Minsk')
// 	await page.locator('#submit').click()
// 	await expect (page.locator('Name:Margarita')).toBeVisible()
// 	await expect (page.locator('Email:lubanecmargo@yandex.ru')).toBeVisible()
// 	await expect (page.locator('Current Address :Minsk')).toBeVisible()
// 	await expect (page.locator('Permananet Address :Minsk')).toBeVisible()
// })

// test('hegativ test Text Box', async ({ page }) => {
// 	await page.locator('li').filter({ hasText: 'Text Box' }).click();
// 	await page.locator('#userEmail').fill('5555')
// 	await page.locator('#submit').click()
// 	await expect(page.locator('#userEmail').getAttribute('placeholder')).resolves.toEqual('name@example.com');
// })

// test('test Check Box', async ({ page }) => {
// 	await page.locator('li').filter({ hasText: 'Check Box' }).click()
//    await page.locator('#tree-node').getByRole('img').nth(3).click()
// 	await expect (page.locator('#result')).toContainText('You have selected')
// 	await page.getByLabel('Toggle').click();
// 	await expect(page.locator("'Desktop'")).toBeVisible();
// 	await expect(page.locator("'Documents'")).toBeVisible();
// 	await expect(page.locator("'Downloads'")).toBeVisible();
// })

// test('test Radio Button', async ({ page }) => {
// 	await page.locator('li').filter({ hasText: 'Radio Button' }).click()
// 	await page.locator('label[class^="custom-control"][for="yesRadio"]').click()
// 	await expect(page.locator('//p[@class="mt-3"]').textContent()).resolves.toBe("You have selected Yes");
// 	await page.locator('label[class^="custom-control"][for="impressiveRadio"]').click()
// 	await expect(page.locator('//p[@class="mt-3"]').textContent()).resolves.toBe("You have selected Impressive");
// 	// await page.locator('label[class^="custom-control"][for="noRadio"]').click() тут я бы завела баг, ибо кнопка не кликабельна
// })

// test('test Web Tables', async ({ page }) => {
// 	await page.locator('//span[text()="Web Tables"]').click()
// 	await page.locator('#addNewRecordButton').click()
// 	await page.locator('#firstName').fill('Margarita')
// 	await page.locator('#lastName').fill('Artsiukhouskaya')
// 	await page.locator('#userEmail').fill('lubanecmargo@yandex.ru')
// 	await page.locator('#age').fill('30')
//    await page.locator('#salary').fill('1000')
//    await page.locator('#department').fill('QA')
// 	await page.locator('#submit').click()
// })