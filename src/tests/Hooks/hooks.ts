import { Before,BeforeAll,AfterAll,After, setDefaultTimeout, Status} from "@cucumber/cucumber";
import {chromium,Browser,Page, BrowserContext} from "@playwright/test"
import { pageObject } from "../Hooks/PageObjects"


let browser:Browser;
let pages:Page;
let context:BrowserContext;
BeforeAll(async function() {
    browser=await chromium.launch({headless:false});
})
Before(async function(){ 
    context = await browser.newContext();
    pages=await context.newPage();
    pageObject.page=pages;
})
After(async function({pickle,result}) {
     //Failed ScreenShot
    console.log(result?.status);
    if(result?.status==Status.FAILED){
        setDefaultTimeout(2000);
        const img=await pageObject.page.screenshot({path:`./test-results/Screenshots/${pickle.name}`,type:"png"});
        await this.attach(img,"image/png");
    }
//    pageObject.page.close();
//    context.close();
})
// AfterAll(async function(){
//     await browser.close();
// })
