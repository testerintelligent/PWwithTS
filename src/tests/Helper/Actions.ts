import { pageObject } from "../Hooks/PageObjects";

export async function toClick(Webelement:string){
    await pageObject.page.locator(Webelement).click();
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
    await pageObject.page.waitForTimeout(time);
}
