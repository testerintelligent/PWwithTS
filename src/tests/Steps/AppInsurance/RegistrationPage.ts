import { Given,Then,When } from "@cucumber/cucumber";
import { Registration } from "../../Pages/AppInsurance/Registration";

let registrationPage:Registration;

// Launch Application Method

Given('User launch the page and navigate to register page', async function () {
    registrationPage = new Registration()
    await registrationPage.navigate();
    console.log("url")
  });

// Fill Username and password method
  
  When('user enter {string} and {string}', async function (user1:any,pass1:any) {
    await registrationPage.enterUsername(user1);
    await registrationPage.enterPassword(pass1);
    await registrationPage.submit();
  });

// Fill policy details method

  When('User enter the details', async function () {
   await registrationPage.addDetailsForPolicy();
  });
// Submit details method 

  Then('user click on submit', async function () {
    await registrationPage.submitPage();
  });

  Then('user should able to see the details',async function(){
await registrationPage.assertRegistrationSuccessMessage();
  });
