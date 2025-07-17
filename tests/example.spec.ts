import { test, expect } from '@playwright/test';

test("check addition of two number", async({page})=>{
  await page.goto('file:///C:/Users/abineshkumar.g/Documents/Javascript/calc.html');
  await page.fill("#num1",'5');
  await page.fill("#num2",'3');
  await page.click('#btn')

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('8');
//await expect(page).toHaveTitle("Hematite Infotech");
});

/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/