import { Given,Then,When } from "@cucumber/cucumber";
import { LoginPage } from "../../Pages/AppInsurance/Loginpage";
import { pageObject } from "../../Hooks/PageObjects";
import { assertURL, sendkeys } from "../../Helper/Actions";
import { send } from "process";

let loginPage:LoginPage;
Given('User launch the page', async function () {
    loginPage = new LoginPage(pageObject.page)
    await loginPage.navigate();
    console.log("url")
  });
  
  When('user enter {string} and {string}', async function (user1:any,pass1:any) {
    await loginPage.enterUsername(user1);
    await loginPage.enterPassword(pass1);
    await loginPage.submit();
  });

  Then('user able to navigate home page', async function () {
   await loginPage.assertHomePage();
  });

  
  Given('User navigate to register page', async function () {
    await loginPage.assertHomePage();
  });

  When('User enter the details', async function () {
   await loginPage.addDetailsForPolicy();
  });

  Then('user click on submit', async function () {
    await loginPage.submitPage();
  });

  Then('the user should able to see the details', async function () {
   await loginPage.assertRegisterPage();
  });

  