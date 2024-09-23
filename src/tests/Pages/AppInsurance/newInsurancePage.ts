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
    insurerGenderFemale:"//input[@value='Female']",
    insurerGendermale:"//input[@value='Male']",
    policyType1:"//input[@value='Life Insurance ']",
    policyType2:"//input[@value='Health Insurance ']",
    policyType3:"//input[@value='Vehicle Insurance ']"
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

async enterDetails(firsteName:string,email:string,dob:Date,gender:string,policytype:string)
{
    await clickAndSendkeys(PageLocators.insurerName,firsteName);
    await clickAndSendkeys(PageLocators.insurerEmail,email);
    await clickAndSendkeys(PageLocators.insurerAddress,"Chennai");
    await clickAndSendkeys(PageLocators.insurerDateofBirth,dob);

if(gender=="Female")
{
    await toClick(PageLocators.insurerGenderFemale);
}
else
{
    await toClick(PageLocators.insurerGendermale);
}
   
if(policytype=="Life Insurance")
{
    await toClick(PageLocators.policyType1);
}
else if(policytype=="Health Insurance")
{
    await toClick(PageLocators.policyType2);
}
else
{
    await toClick(PageLocators.policyType3);
}
}

}
