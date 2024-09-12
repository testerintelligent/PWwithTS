import {  Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , sendkeys, assertText, takeScreenshot } from "../../Helper/Actions";
const PageLocators = {
    firstName:"[placeholder='First Name']",
    lastName:"[placeholder='Last Name']"
}

export class automationDemoPage{
  
    // Web interaction methods for Automation demo login page

    async navigate():Promise<any>{  
        await launchURL("https://demo.automationtesting.in/Register.html");
    }
    async enterFirstName(firstName:string):Promise<any>{
        await clickAndSendkeys(PageLocators.firstName,firstName);
    }
    async enterLastName(lastName:string):Promise<any>{
        await clickAndSendkeys(PageLocators.lastName,lastName);
    }
}