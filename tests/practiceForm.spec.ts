/* import { test, expect } from '@playwright/test';
import exp from 'constants'
import path from 'path';

const firstName = 'Ivan';
const lastName = 'Ivanov';
const userEmail = 'Ukrop121@gmail.ru';
const userMobile = '0291408592';
const curentAddr = 'Minsk';
const filePath = path.join('C:', 'Users', 'User', 'OneDrive', 'Рабочий стол', 'tests.png');

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByText('Forms').click()
	await page.getByText('Practice Form').click()
});

test('Positiv test Practice Form', async ({ page }) => {
   // Upload a file
	await page.locator('input[id="uploadPicture"]').setInputFiles(filePath);
	const uploadedFileName = await page.inputValue('#uploadPicture');
   expect(uploadedFileName).toContain('tests.png');

	// Fill in the form
   await page.locator('#dateOfBirthInput').click()
	await page.locator('div[aria-label="Choose Monday, August 26th, 2024"]').click()
	await page.locator('#firstName').fill(firstName);
	await page.locator('#lastName').fill(lastName);
	await page.locator('#userEmail').fill(userEmail);
	await page.locator('#userNumber').fill(userMobile); 
	await page.locator('label[for="gender-radio-2"]').check();
	await page.locator('#gender-radio-2').isChecked();
	await page.locator('#subjectsInput').fill('Hindi');
	await page.keyboard.press('Enter');
	await page.locator('label[for="hobbies-checkbox-1"]').check(); 
	await page.locator('#hobbies-checkbox-1').isChecked(); 
	await page.getByPlaceholder('Current Address').fill(curentAddr);
   await page.getByText('Select State').click();
	await page.keyboard.type('NCR');
	await page.keyboard.press('Enter')
   await page.getByText('Select City').click();
	await page.keyboard.type('Delhi');
	await page.keyboard.press('Enter')
   await page.getByText('Submit').click()

	// Verify that the form was submitted successfully
	await expect(page.locator('.table.table-dark.table-striped.table-bordered.table-hover')).toBeVisible()
	await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
});

test('Negative test for input mobile number', async ({ page }) => {
	await page.locator('#userNumber').fill('nnnnnnnnnn'); 
   await page.getByText('Submit').click()
	await expect(page.getByText('Mobile')).toHaveCSS('color', 'rgb(33, 37, 41)');
});

test('Negative test for unselected radio button (Gender)', async ({ page }) => {
	await page.locator('#firstName').fill(firstName);
	await page.locator('#lastName').fill(lastName); 
	await page.locator('#userNumber').fill(userMobile)
   await page.getByText('Submit').click()
	await expect(page.locator('label[for="gender-radio-1"]')).toHaveCSS('color', 'rgb(220, 53, 69)');
});
	
test('Negative test for email input with spaces', async ({ page }) => {
	await page.locator('#firstName').fill(firstName);
	await page.locator('#lastName').fill(lastName); 
	await page.locator('#userNumber').fill(userMobile)
	await page.locator('label[for="gender-radio-2"]').check();
	await page.locator('#gender-radio-2').isChecked();
	await page.locator('#userEmail').click()
	await page.keyboard.press('Space');
   await page.getByText('Submit').click()
	await expect(page.locator('#userEmail')).toHaveCSS('color', 'rgb(73, 80, 87)');
});

test('Negative test with empty fields', async ({ page }) => {
   await page.getByText('Submit').click()
	await expect(page.locator('#firstName')).toHaveCSS('color', 'rgb(73, 80, 87)');
	await expect(page.locator('#lastName')).toHaveCSS('color', 'rgb(73, 80, 87)');
	await expect(page.locator('label[for="gender-radio-2"]')).toHaveCSS('color', 'rgb(220, 53, 69)');
	await expect(page.getByText('Mobile')).toHaveCSS('color', 'rgb(33, 37, 41)');
});
 */
import { test, expect } from '@playwright/test';
import path from 'path';
import { PracticeFormPage } from '../PageObject/practiceFormPage';

const filePath = path.join('C:', 'Users', 'User', 'OneDrive', 'Рабочий стол', 'tests.png');

test.beforeEach(async ({ page }) => {
	const practiceFormPage = new PracticeFormPage(page);
	await practiceFormPage.goto();
});

test('Positive test for Practice Form', async ({ page }) => {
  const practiceFormPage = new PracticeFormPage(page);
  // Загрузка файла
  await practiceFormPage.uploadFile(filePath);
  await practiceFormPage.verifyUploadedFileName('tests.png');
  // Заполнение полей
  await practiceFormPage.fillForm('Ivan', 'Ivanov', 'Ukrop121@gmail.ru', '0291408592', 'Minsk');
  await practiceFormPage.chooseRadioButton();
  await practiceFormPage.chooseCheckBox()
  await practiceFormPage.chooseDate();
  await practiceFormPage.chooseSubject('Hindi');
  await practiceFormPage.selectStateAndCity('NCR', 'Delhi');
  // Отправка формы
  await practiceFormPage.submitForm();
  // Проверка успешной отправки формы
  await practiceFormPage.verifySubmissionSuccess();
});

test('Negative test for input mobile number', async ({ page }) => {
  const practiceFormPage = new PracticeFormPage(page);
  await practiceFormPage.fillForm('', '', '', 'nnnnnnnnnn', '',);
  await practiceFormPage.submitForm();
  await practiceFormPage.verifyMobileInputError('rgb(33, 37, 41)');
});

test('Negative test for unselected radio button (Gender)', async ({ page }) => {
  const practiceFormPage = new PracticeFormPage(page);
  await practiceFormPage.fillForm('Ivan', 'Ivanov', ' ', '0291408592', ' ');
  await practiceFormPage.submitForm();
  await practiceFormPage.verifyGenderInputError('rgb(220, 53, 69)');
});

test('Negative test for email input with spaces', async ({ page }) => {
  const practiceFormPage = new PracticeFormPage(page);
  await practiceFormPage.fillForm('Ivan', 'Ivanov', ' ', '0291408592', ' ');
  await practiceFormPage.chooseRadioButton();
  await practiceFormPage.submitForm();
  await practiceFormPage.verifyEmailInputError('rgb(73, 80, 87)');
});

test('Negative test with empty fields', async ({ page }) => {
  const practiceFormPage = new PracticeFormPage(page);
  await practiceFormPage.submitForm();
  await practiceFormPage.verifyEmptyFieldsErrors('rgb(73, 80, 87)', 'rgb(73, 80, 87)', 'rgb(220, 53, 69)', 'rgb(33, 37, 41)');
});


