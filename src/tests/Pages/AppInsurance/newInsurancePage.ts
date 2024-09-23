import {  expect, Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , assertText, select, Fill, waitSelector } from "../../Helper/Actions";
import { pageObject } from "../../Hooks/PageObjects";

// Locators for app insurance application
const PageLocators = {
    userName:"//input[@id='username']",
    password:"//input[@id='Password']",
    submit:"//button[@class='loginButton']",
    newInsurance:"//a[@href='/insurance']",
    insurerName:"//input[@id='Name']",
    insurerEmail:"//input[@id='email']",
    insurerAddress:"//input[@id='Address']",
    insurerDateofBirth:"//input[@id='DateOfBirth']",
}

export class newInsurance{
  
    //Interaction methods for App insurance - Login Page

async navigate():Promise<any>{  
    let url="http://192.168.99.141:3000/";
    launchURL(url);
}

async loginPage(username:string,password:string)
{
    await clickAndSendkeys(PageLocators.userName,username);
    await clickAndSendkeys(PageLocators.password,password);
    await toClick(PageLocators.submit);
}

async clickNewInsurance()
{
  await toClick(PageLocators.newInsurance);
}

}
