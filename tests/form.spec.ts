import {test,chromium,Page,Locator, Browser} from '@playwright/test';
 
test("Locator",async()=>{
    const browser:Browser = await chromium.launch({headless: false,channel:'chrome'});
    const page:Page = await browser.newPage();
 
    await page.goto("file:///C:/Users/abineshkumar.g/Downloads/playwrightCode-master/playwrightCode-master/form.html");
 
    const fname:Locator = await page.locator("#txt1");
    await fname.fill("vijayasarathy");
 
    const password:Locator = await page.locator("#txt2");
    await password.fill("vijayasarathy@123");
    // await fname.fill("vijayasarathy");
 
    //use of class selector
 
     const logo:Locator = await page.locator(".logo");
     const logoExist = await logo.isEnabled();
     console.log(logoExist);
     const contact:Locator = await page.locator(".txtContact");
     await contact.fill("8768678768");
 
    //use of text selector
 
    const heading:Locator = await page.locator("text=Registration Form");
    const headingExit = await heading.isEnabled();
    console.log(headingExit);

    //use of css property and tag name

    const address:Locator = await page.locator("css=input#txtaddress");
    await address.fill("Sipcot it part,Chennai");
 
});
 