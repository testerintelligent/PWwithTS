import { Given,Then,When } from "@cucumber/cucumber";
import { pageObject } from "../Hooks/PageObjects";
import { validLogin } from "../Pages/loginPage/loginPage";

  Given('User navigate to the login page', async function () {
    pageObject.page.waitForTimeout(3000);
    pageObject.page.goto("https://www.saucedemo.com/v1/");
    validLogin();
    pageObject.page.waitForTimeout(10000);
  });



  When('Enter the username and password as {string} and {string}', async function (string, string2) {
   console.log("hello world");
  });



  When('Click the submit button', async function () {
    console.log("hello world");
  });



  Then('Verify the Home page', async function () {
    console.log("hello world");
  });