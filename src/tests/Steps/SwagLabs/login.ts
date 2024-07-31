import { Given,Then,When } from "@cucumber/cucumber";
import { loginPage } from "../../Pages/SwagLabsWebsite/loginPage/loginPage";
import { pageObject } from "../../Hooks/PageObjects";
let Loginpage:loginPage;

  Given('User navigate to the login page', async function () {
    Loginpage=new loginPage(pageObject.page);
    await Loginpage.navigate();
  });
  When('Enter the username and password as {string} and {string}', async function (username, password) {
    await Loginpage.enterUsername(username);
    await Loginpage.enterPassword(password);
  });
  When('Click the submit button', async function () {
    await Loginpage.ClicklaunchButton();
  });
  Then('Verify the Home page', async function () {
    await Loginpage.verifyHomePageURL();
  });