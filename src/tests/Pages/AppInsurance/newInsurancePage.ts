import {  expect, Page } from "@playwright/test";
import {  assertText, clickAndSendkeys, launchURL, select, toClick  } from "../../Helper/Actions";
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
    policyType3:"//input[@value='Vehicle Insurance ']",
    sumInsured:"//select[@name='SumInsured']",
    premium:"//input[@id='Premium']",
    submitPolicy:"//button[@type='submit']",
    policyConfirmation:"//p[text()='Insurance policy created successfully.']"
}

export class newInsurance{
  
    //Interaction methods for App insurance - Login Page
async navigate():Promise<any>{  
    let url="http://192.168.99.141:3000/";
    launchURL(url);
}

//Logn Page steps
async loginPage(username:string,password:string)
{
    await clickAndSendkeys(PageLocators.userName,username);
    await clickAndSendkeys(PageLocators.password,password);
    await toClick(PageLocators.submit);
}

//Clicking New Insurance
async clickNewInsurance()
{
  await toClick(PageLocators.newInsurance);
}

//Entering the details to create Policy
async enterDetails(firsteName:string,dob:Date,gender:string,policytype:string,sumInsured:any)
{
    const randomFigures = Math.random().toString();
    const email = randomFigures.substr(2) + '@email.com';

    await clickAndSendkeys(PageLocators.insurerName,firsteName);
    await clickAndSendkeys(PageLocators.insurerEmail,email);
    await clickAndSendkeys(PageLocators.insurerAddress,"Chennai");
    await clickAndSendkeys(PageLocators.insurerDateofBirth,dob);
    await clickAndSendkeys(PageLocators.premium,"1000");
    await select(PageLocators.sumInsured,sumInsured);
  
    //Condition for selecting Gender while creating policy
if(gender=="Female")
{
    await toClick(PageLocators.insurerGenderFemale);
}
else
{
    await toClick(PageLocators.insurerGendermale);
}

//Condition for Selecting Policy Type while creating Policy
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

async submit()
{
    await toClick(PageLocators.submitPolicy);
    await assertText(PageLocators.policyConfirmation,"Insurance policy created successfully.");
}

}
