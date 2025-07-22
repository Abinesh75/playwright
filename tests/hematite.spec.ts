import {test} from '@playwright/test';
test("Login Test", async ({ page }) => {
    await page.goto('http://quiz.hematitecorp.com/#/');
    await page.pause();
    await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('abineshab30@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Tamil@30');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('FNPQO6');
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).press('CapsLock');
  await page.getByRole('button', { name: 'submit' }).click();
})