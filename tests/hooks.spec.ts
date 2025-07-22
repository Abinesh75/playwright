/*import {test,expect} from '@playwright/test';
test('test 1',async({page})=>{
    console.log("Madhu");
 
});
test('test 2',async({page})=>{
    console.log("Nila");
 
});
test('test 3',async({page})=>{
    console.log("abi");
 
});
 
 test('test 4',async({page})=>{
    console.log("abi");
 
});
test('test 5',async({page})=>{
    console.log("abi");
 
});
test.afterAll("test 6",()=>{
    console.log("Take Breakfast");
})*/

import { test, expect } from '@playwright/test';
test("Login Test", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.pause();
});

