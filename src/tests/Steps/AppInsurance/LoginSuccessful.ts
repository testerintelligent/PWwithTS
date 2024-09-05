import { Given,Then,When } from "@cucumber/cucumber";
import { LoginPage } from "../../Pages/AppInsurance/Loginpage";
import { pageObject } from "../../Hooks/PageObjects";
import { assertURL } from "../../Helper/Actions";

let loginPage:LoginPage;
Given('User launch the page', async function () {
    loginPage = new LoginPage(pageObject.page)
    await loginPage.navigate();
    console.log("url")
  });
  
  When('user enter username and password', async function () {
  await loginPage.LoginSuccess();
  });

  Then('user able to navigate home page', async function () {
   
  });