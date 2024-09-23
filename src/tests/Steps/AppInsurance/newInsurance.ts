import { Given,Then,When } from "@cucumber/cucumber";
import { newInsurance } from "../../Pages/AppInsurance/newInsurancePage";
import { pageObject } from "../../Hooks/PageObjects";
import { assertText, assertURL, sendkeys, toClick } from "../../Helper/Actions";
import { send } from "process";

let newinsurancePage:newInsurance;

// Launch Application Method

Given('User launch the page', async function () {
    newinsurancePage = new newInsurance()
    await newinsurancePage.navigate();
  });

// Fill Username and password method
  
  When('user entering {string} and {string}', async function (user1:string,pass1:string) {
    await newinsurancePage.loginPage(user1,pass1);
}); 
    
When('user click on New Insurance link',async function(){
    await newinsurancePage.clickNewInsurance();
  });
