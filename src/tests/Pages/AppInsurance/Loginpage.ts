import {  expect, Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , assertText, select, Fill, waitSelector } from "../../Helper/Actions";
import { url } from "inspector";
import { send } from "process";
import { cli } from "winston/lib/winston/config";
import { pageObject } from "../../Hooks/PageObjects";

// Locators for app insurance application
const PageLocators = {
    userName:"//input[@id='username']",
    newInsurance:"//button[@type='submit']",
    password:"//input[@id='Password']",
    submit:"//button[@class='loginButton']",
    homePageText:"//th[text()='Delete Record']",
    loginErrorMessage:"//p[text()='Invalid username or password']",
    name:"//input[@id='Name']",
    email:"//input[@id='email']",
    address:"//input[@id='Address']",
    dateOfBirth:"//input[@id='DateOfBirth']",
    healthInsurancePolicyType:"//input[@value='Health Insurance ']",
    gender:"//input[@value='Male']",
    sumInsured:"//select[@name='SumInsured']",
    premiumAmount:"//input[@id='Premium']",
    registerSubmit:"//button[@class='insuranceButton']",
    assertInsSubmit:"//p[text()='Insurance policy created successfully.']"
}

export class LoginPage{
  
    //Interaction methods for App insurance - Login Page

async navigate():Promise<any>{  
    let url="http://192.168.99.141:3000/";
    launchURL(url);
}

async enterUsername(username:string):Promise<any>{
    await clickAndSendkeys(PageLocators.userName,username);
}
async enterPassword(password:string):Promise<any>{
    await clickAndSendkeys(PageLocators.password,password);
}

async submit()
{
    await toClick(PageLocators.submit);
}

async assertRegisterPage()
{
    await assertText(PageLocators.assertInsSubmit,"Insurance policy created successfully.");
}

async addDetailsForPolicy()
{
     let date = "1991-12-04"
    const name="Jaya"+Date.now();
    await pageObject.page.mouse.move(20, 40);
    await clickAndSendkeys(PageLocators.name,name);
    await clickAndSendkeys(PageLocators.email,name+"@gmail.com");
    await clickAndSendkeys(PageLocators.address,"chennai");
    await toClick(PageLocators.healthInsurancePolicyType);
    await toClick(PageLocators.gender);
    await pageObject.page.waitForTimeout(2000);
    await select(PageLocators.sumInsured,"1,00,000");
    await clickAndSendkeys(PageLocators.premiumAmount,"1000"); 
    await Fill(PageLocators.dateOfBirth, date);
}

async submitPage()
{
await toClick(PageLocators.registerSubmit);
}

async assertHomePage(option:any)
{
    if(option=='Yes')
    {
        await assertText(PageLocators.homePageText,"Delete Record");
    }
    else
    {
        await assertText(PageLocators.loginErrorMessage,"Invalid username or password");
    }
    
}

async createNewInsurance()
{
    await toClick(PageLocators.newInsurance); 
}
}
