import { test, expect,chromium, Browser, Page, Locator, BrowserContext} from '@playwright/test';
 
test('aut test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    // browsercontext-1
    const browserContext_1: BrowserContext = await browser.newContext();
    const page: Page = await browserContext_1.newPage();

    const userId:string = "abineshab30@gmail.com";
    const userPass:string = "Tamil@30";
    const authHeader ="Basic "+btoa(userId+":"+userPass);

    page.setExtraHTTPHeaders({Authorization:authHeader});

    await page.goto("http://quiz.hematitecorp.com/#/");

    //browserContext_1.close();
    //browser.close();

    //await new Promise(()=>{});
});