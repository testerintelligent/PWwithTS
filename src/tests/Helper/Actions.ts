import { pageObject } from "../Hooks/PageObjects";
import { expect } from "@playwright/test";

export async function launchURL(URL:string){
    await pageObject.page.goto(URL);
}
export async function toClick(Webelement:string){
    await pageObject.page.locator(Webelement).click();
}
export async function sendkeys(Webelement:string,text:string){
    await pageObject.page.locator(Webelement).fill(text);
}
export async function clickAndSendkeys(Webelement:string,text:string){
    await pageObject.page.locator(Webelement).click();
    await pageObject.page.locator(Webelement).fill(text);
}
export async function Fill(Webelement:string,text:string){
    await pageObject.page.fill(Webelement,text);
}
export async function Click(Webelement:string){
    await pageObject.page.click(Webelement);
}
export async function doubleClick(Webelement:string){
    await pageObject.page.dblclick(Webelement);
}
export async function Tab(Webelement:string){
    await pageObject.page.tap(Webelement);
}
export async function mouceClick(x:number,y:number){
    await pageObject.page.mouse.click(x,y);
}
export async function moucedoubleClick(x:number,y:number){
    await pageObject.page.mouse.dblclick(x, y);
}
export async function mousedown(){
    await pageObject.page.mouse.down();
}
export async function sleep(time:number){
 pageObject.page.waitForTimeout(time);
}
export async function assertURL(URL:string){
    const url =await pageObject.page.url();
    expect(url).toBe(URL);
}
export async function waitSelector(Webelement:string){
    await pageObject.page.waitForSelector(Webelement);
}
export async function dropDownValidate(Webelement:string,options:string){
    await pageObject.page.selectOption(Webelement,options);
}
export async function takeScreenshot(name:string){
    await pageObject.page.screenshot({path:"test-results/Screenshots/"+Date.now()+name+".png"});
}

export async function assertText(Webelement:string,text:string){
   
    await expect(pageObject.page.locator(Webelement)).toHaveText(text);
}
