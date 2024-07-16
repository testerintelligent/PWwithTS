import { Given,Then,When } from "@cucumber/cucumber";
import { loginPage } from "../Pages/loginPage/loginPage";
import { pageObject } from "../Hooks/PageObjects";
let Loginpage:loginPage;

  Given('User navigate to the login page', async function () {
    Loginpage=new loginPage(pageObject.page);
    await Loginpage.navigate();
  });



  When('Enter the username and password as {string} and {string}', async function (string, string2) {
    await Loginpage.enterUsername();
    await Loginpage.enterPassword();
  });



  When('Click the submit button', async function () {
    await Loginpage.ClicklaunchButton();
  });



  Then('Verify the Home page', async function () {
    console.log("hello world");
  });