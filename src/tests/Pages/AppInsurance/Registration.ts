import { expect } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , assertText, select, Fill, waitSelector, sendkeys, assertURL } from "../../Helper/Actions";
import { pageObject } from "../../Hooks/PageObjects";
const { format } = require('date-fns');

// Locators for app insurance application
const PageLocators = {
    userName:"//input[@id='username']",
    newInsurance:"//button[@type='submit']",
    password:"//input[@id='Password']",
    submit:"//button[@class='loginButton']",
    homePageText:"//th[text()='Delete Record']",
    loginErrorMessage:"//p[text()='Invalid username or password']",
    fname:"//input[@id='firstName']",
    lname:"//input[@id='lastName']",
    email:"//input[@id='email']",
    address:"//input[@id='address']",
    passwordRegisterPage:"//input[@id='password']",
    confirmPasswordRegisterPage:"//input[@id='confirmPassword']",
    startDate:"//input[@id='startDate']",
    endDate:"//input[@id='endDate']",
    phoneNumber:"//input[@id='phoneNumber']",
    dateOfBirth:"//input[@id='DateOfBirth']",
    healthInsurancePolicyType:"//input[@value='Health Insurance ']",
    gender:"//input[@value='Male']",
    sumInsured:"//select[@name='SumInsured']",
    registerPageText:"//h3[text()='Create an Account']",
    premiumAmount:"//input[@id='Premium']",
    registerSubmit:"//button[@class='registerButton']",
    assertInsSubmit:"//p[text()='Insurance policy created successfully.']",
    registerLink:"//a[@href='/register']",
    registerSuccessfulMessage:"//div[@class='success-message']//h2[text()='Registration successful!']"
}

export class Registration{

    async navigate():Promise<any>{  
        let url="http://192.168.99.141:3000/";
        launchURL(url);

        await toClick(PageLocators.registerLink);
    }
    
    async enterUsername(username:string):Promise<any>{
        await clickAndSendkeys(PageLocators.userName,username);
    }
    async enterPassword(password:string):Promise<any>{
        await clickAndSendkeys(PageLocators.password,password);
    }
    
    async submit():Promise<any>
    {
        await toClick(PageLocators.submit);
    }
    
async addDetailsForPolicy():Promise<any>
{    
    const date1 = new Date('2024-09-23T00:00:00Z');
    const formattedDate = format(date1, 'yyyy-MM-dd');

    const fname="Jaya";
    await pageObject.page.mouse.move(20, 40);
    await clickAndSendkeys(PageLocators.fname,fname);
    await clickAndSendkeys(PageLocators.lname,"Expleo");
    await clickAndSendkeys(PageLocators.email,fname+"@gmail.com");
    await clickAndSendkeys(PageLocators.passwordRegisterPage,"12345");
    await clickAndSendkeys(PageLocators.confirmPasswordRegisterPage,"12345");
    await clickAndSendkeys(PageLocators.startDate,formattedDate);
    await clickAndSendkeys(PageLocators.endDate,"2025-09-22");
    await clickAndSendkeys(PageLocators.address,"chennai");
    await sendkeys(PageLocators.phoneNumber,"1234567897");
}

async submitPage()
{
await toClick(PageLocators.registerSubmit);
}

async assertRegistrationSuccessMessage()
{
    await assertText(PageLocators.registerSuccessfulMessage,"Registration successful!");
}

}