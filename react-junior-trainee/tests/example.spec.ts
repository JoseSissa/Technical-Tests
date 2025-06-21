import { test, expect } from '@playwright/test';
import { API_URL } from '../src/config';
const LOCALHOST_URL = 'http://localhost:5173/';

test('app shows random cat fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL);
  // First click to get facto and image
  await page.getByRole('button', { name: 'Get Facto' }).click();
  await expect(page.getByTestId('facto')).toBeVisible();
  await expect(page.getByTestId('imageCat')).toBeVisible();
  // Catch the text and image
  const firstTextFacto = await page.getByTestId('facto').textContent();
  const firstImgSrcFacto = await page.getByTestId('imageCat').getAttribute('src');
  console.log({ firstTextFacto, firstImgSrcFacto });
  // Check the text and image
  expect(firstTextFacto?.length).toBeGreaterThan(0);
  expect(firstImgSrcFacto?.startsWith(API_URL.CATFACT_WORD_IMAGE)).toBeTruthy();



  // Second click to get another facto and image
  await page.getByRole('button', { name: 'Get Another Facto' }).click();
  await page.waitForFunction(
    (prev) => {
      const txt = document.querySelector('[data-testid="facto"]');
      return txt && txt.textContent !== prev;
    },
    firstTextFacto
  );

  expect(page.getByTestId('facto')).not.toHaveText(firstTextFacto || '');
  expect(page.getByTestId('imageCat')).not.toHaveAttribute('src', firstImgSrcFacto || '');
});