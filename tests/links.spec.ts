import { expect, test } from '@playwright/test'

test('test switching to a tab Elements', async ({ page }) => {
	await page.goto('/');
	await page.locator('//h5[text()="Elements"]').click()
	await page.locator('//span[text()="Links"]').click()
})

// test('test clicking Created link and checking 201 status code', async ({ page }) => {
//    await page.goto('https://demoqa.com/links')////a[@id='created'][text()="Created"]

// 	await page.route('**/*', (route, request) => {
// 		route.continue((response) => {
// 		  if (response.status() === 201) {
// 			 console.log('Request succeeded with status 201');
// 		  }
// 		  return response;
// 		});
// 	 });
  
// 	 // Клик по ссылке
// 	 await page.locator('#created').click();
  
// 	 // Проверка что статус код 201 был получен
// 	 const response = await page.waitForResponse(response => response.status() === 201);
// 	 expect(response.status()).toBe(201);
//   });
// })

// // test.describe('NASA APOD API Filtering and Searching', () => {
// // 	const apiKey = 'za6Lneqxy2TErym1ZODR8ZDML0qcvD1tqBUxMeXC'; // Replace with a valid API key for real testing
// // 	const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2022-01-01&end_date=2022-12-31`;
 
// // 	test('TC-001: ', async ({ request }) => {
// // 	  // Step 1: Send a GET request to the API endpoint with date range parameters
// // 	  const response = await request.get(apiUrl);
 
// // 	  // Step 2: Verify the status code of the response
// // 	  expect(response.status()).toBe(200);
