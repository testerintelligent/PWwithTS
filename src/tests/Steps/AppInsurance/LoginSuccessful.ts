import { Given,Then,When } from "@cucumber/cucumber";
import { LoginPage } from "../../Pages/AppInsurance/Loginpage";
import { pageObject } from "../../Hooks/PageObjects";
import { assertURL, sendkeys } from "../../Helper/Actions";
import { send } from "process";

let loginPage:LoginPage;

// Launch Application Method

Given('User launch the page', async function () {
    loginPage = new LoginPage()
    await loginPage.navigate();
    console.log("url")
  });

// Fill Username and password method
  
  When('user enter {string} and {string}', async function (user1:any,pass1:any) {
    await loginPage.enterUsername(user1);
    await loginPage.enterPassword(pass1);
    await loginPage.submit();
  });

// Navigate Home page method

  Then('user able to navigate home page', async function () {
   await loginPage.assertHomePage();
  });

// Navigate to register page method 

  Given('User navigate to register page', async function () {
    await loginPage.assertHomePage();
    await loginPage.createNewInsurance();
  });

// Fill policy details method

  When('User enter the details', async function () {
   await loginPage.addDetailsForPolicy();
  });

// Submit details method 

  Then('user click on submit', async function () {
    await loginPage.submitPage();
  });

// Assert register details method

  Then('the user should able to see the details', async function () {
   await loginPage.assertRegisterPage();
  });

  