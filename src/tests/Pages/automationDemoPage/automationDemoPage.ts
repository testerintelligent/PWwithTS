import {  Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , sendkeys, assertText, takeScreenshot } from "../../Helper/Actions";


export class automationDemoPage{
    //Change all the locators into private to implement Inheritance
    private PageLocators = {
        firstName:"[placeholder='First Name']",
        lastName:"[placeholder='Last Name']"
    }
  
    // Web interaction methods for Automation demo login page

    async navigate():Promise<any>{  
        await launchURL("https://demo.automationtesting.in/Register.html");
    }
    async enterFirstName(firstName:string):Promise<any>{
        await clickAndSendkeys(this.PageLocators.firstName,firstName);
    }
    async enterLastName(lastName:string):Promise<any>{
        await clickAndSendkeys(this.PageLocators.lastName,lastName);
    }
}