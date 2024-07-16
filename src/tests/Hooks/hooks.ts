import { Before,BeforeAll,AfterAll,After, setDefaultTimeout, Status} from "@cucumber/cucumber";
import {chromium,Browser,Page, BrowserContext} from "@playwright/test"
import { pageObject } from "../Hooks/PageObjects"


let browser:Browser;
let pages:Page;
// BeforeAll(async function() {
   
// })
Before(async function(){ 
    browser=await chromium.launch({headless:false});
    pages=await browser.newPage();
    pageObject.page=pages;
});
After(async function({pickle,result}) {
     //Failed ScreenShot
    console.log(result?.status);
    if(result?.status==Status.FAILED){
       // setDefaultTimeout(2000);
        const img=await pageObject.page.screenshot({path:`./test-results/Screenshots/${pickle.name}`,type:"png"});
        await this.attach(img,"image/png");
    }
    console.log("Close Browser");
    await browser.close();
//    pageObject.page.close();
//    context.close();
});
// AfterAll( function(){
//      browser.close();
// })
