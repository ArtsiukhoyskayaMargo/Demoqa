import { expect, test } from '@playwright/test'
import fs from 'fs'; //Модуль Node.js для работы с файловой системой.
import path from 'path'; //Модуль Node.js для работы с путями файловой системы.

test('test downloading a file', async ({ page }) => {
		await page.goto('/');
		await page.getByText('Elements').click()
		await page.getByText('Upload and Download').click()

		const downloadPromise = page.waitForEvent('download');
		await page.locator('#downloadButton').click();
		const download = await downloadPromise;
		const filePath = path.join('C:', 'Users', 'User', 'Downloads', 'sampleFile.jpeg');
  
		// Сохранение загруженного файла
		await download.saveAs(filePath);
	 
		// Проверка, что файл был загружен и сохранен
		const fileExists = fs.existsSync(filePath);
		expect(fileExists).toBeTruthy();
		if (fileExists) {
		  console.log(`Файл ${filePath} был успешно загружен и сохранен.`);
		} else {
		  throw new Error(`Файл ${filePath} не был найден.`);
		}
	 });