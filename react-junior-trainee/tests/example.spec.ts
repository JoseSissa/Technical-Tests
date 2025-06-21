import { test, expect } from '@playwright/test';
import { API_URL } from '../src/config';
const LOCALHOST_URL = 'http://localhost:5173/';


test('app shows random cat fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // First click to get facto and image
  await page.getByRole('button', { name: 'Get Facto' }).click();

  await expect(page.getByTestId('facto')).toBeVisible();
  await expect(page.getByTestId('imageCat')).toBeVisible();

  const textFacto = await page.getByTestId('facto').textContent();
  const imgSrcFacto = await page.getByTestId('imageCat').getAttribute('src');

  await expect(textFacto).not.toBe('');
  await expect(imgSrcFacto?.startsWith(API_URL.CATFACT_WORD_IMAGE)).toBeTruthy();
  // await 
});