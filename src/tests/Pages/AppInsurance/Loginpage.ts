import {  Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , sendkeys, assertText, takeScreenshot, assertURL } from "../../Helper/Actions";
import { url } from "inspector";
const PageLocators = {
    userName:"//input[@id='username']",
    password:"//input[@id='Password']",
    submit:"//button[@class='loginButton']"
}

export class LoginPage{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

async navigate():Promise<any>{  
    let url="http://192.168.99.141:3000/";
    launchURL(url);
}

async LoginSuccess():Promise<any>
{
await sendkeys(PageLocators.userName,"test@test.com");
await sendkeys(PageLocators.password,"12345");
await toClick(PageLocators.submit);
}

}
