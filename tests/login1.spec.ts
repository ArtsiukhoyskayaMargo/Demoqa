'user strict';
import { expect, test, request } from '@playwright/test';

test.describe('New user', () => {
test('Navigate a new user', async ({ page }) => {
	await page.goto('/');
	await page.getByText('Book Store Application').click();
	await page.getByText('Login').click();
	await page.locator('#newUser').click();
});

const user = {
	firstname: 'Test11',
	lastname:'Test12',
	userName: 'Testing1989',
	password: '0sL!3Gic$7w9',
};

test('Test user registration via API and check user', async ({ request }) => {
	const response = await request.post('https://demoqa.com/Account/v1/User', {
	  headers: {
		 'Content-Type': 'application/json'
	  },
	  data: user
	});
	console.log('Response status:', response.status());
   console.log('Response body:', await response.text());
 
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  console.log(responseBody);
  expect(responseBody.userID).toBeDefined();
});

test('test login in system with UI', async ({ page }) => {
	await page.goto('/register');
	await page.locator('#gotologin').click();
	const userName = 'Testing1989';
	const password = '0sL!3Gic$7w9';
 
	await page.locator('#userName').fill(userName);
	await page.locator('#password').fill(password);
	await page.locator('#login').click();
	await expect(page.getByText(userName)).toBeVisible();
	await page.getByText('Delete Account').click();
   await page.getByRole('button', { name: 'OK' }).click();
})
})