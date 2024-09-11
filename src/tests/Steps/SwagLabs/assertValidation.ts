import { Given,Then,When } from "@cucumber/cucumber";
import { productCheckingPage } from "../../Pages/SwagLabsWebsite/assertValidationPage/assertValidationPage";
import { pageObject } from "../../Hooks/PageObjects";
import { expect } from "@playwright/test";
let Checking:productCheckingPage;

  // Given('User navigate to the login page', async function () {
  //   Loginpage=new loginPage(pageObject.page);
  //   await Loginpage.navigate();
  // });
  // When('Enter the username and password as {string} and {string}', async function (username, password) {
  //   await Loginpage.enterUsername(username);
  //   await Loginpage.enterPassword(password);
  // });
  // When('Click the submit button', async function () {
  //   await Loginpage.ClicklaunchButton();
  // });
  // Then('Verify the Home page', async function () {
  //   await Loginpage.verifyHomePageURL();
  // });

  Given('verify the product item', async function () {
  //  await Checking.inventoryURL()
   Checking = new productCheckingPage();
   await Checking.selectTheItem()
   await Checking.addTheProduct()
   await Checking.itemInCart()
   await Checking.itemComparison()
  });
