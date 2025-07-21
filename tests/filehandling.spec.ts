import {test} from '@playwright/test';

test("file handling test",async({page})=>{
    await page.goto("file:///C:/Users/abineshkumar.g/Documents/Javascript/cusasser.html");

    //file uploading test case
    const filePath :string ="test/html.pdf"
     await page.setInputFiles("input[type='file']",filePath)
    await page.locator("button[type='submit']").click();

    //download the uploaded file
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        page.click('a#downloadButton')
 
    ]);
 
    const downloadFilePath = await download.path();
    console.log("Downloading File Path:",downloadFilePath)
});
