import { test,expect } from "playwright/test"

test("custom assertion",async({page})=>{

    await page.goto("file:///C:/Users/abineshkumar.g/Documents/Javascript/cusasser.html");
    await page.pause();

    //Ex-1 It will check number is greater than 10
    const textValue:any =await page.locator('#d1').textContent();
    const value = parseInt(textValue || '0');
    await expect(value > 10).toBeTruthy();

    //EX-2 Check character is greater than 5 or not

   /* const textChar:any =await page.locator('#d2').textContent();
       await expect(textChar.length).toBeGreaterThan(5); */

    const message = await page.locator('#d2');
    await asertMinCharLength(message,5);
    })

    const asertMinCharLength = async(locator:any,minLength:number)=>{
        const text = await locator.textContent();
        await expect((text || '').length).toBeGreaterThan(minLength);
    }
