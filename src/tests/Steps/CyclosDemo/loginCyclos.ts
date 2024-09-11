import { Given,Then,When } from "@cucumber/cucumber";
import { cyclosloginPage } from "../../Pages/CyclosWebsite/cyclosLoginPage/cyclosLoginPage";
import { pageObject } from "../../Hooks/PageObjects";
let Cyclosloginpage:cyclosloginPage;

  Given('User navigate to login page with {string}', async function (Url:string) {
    Cyclosloginpage=new cyclosloginPage();
    await Cyclosloginpage.navigate(Url);
  });
  
  Given('Enter the username and password {string} and {string}', async function (username, password) {
    await Cyclosloginpage.enterUsername(username);
    await Cyclosloginpage.enterPassword(password);
  });
  
  Given('Click the login submit button', async function () {
    await Cyclosloginpage.ClicklaunchButton();
  });

  Given('Click the user payment option', async function () {
    await Cyclosloginpage.ClickPayUserButton();
  });

  Given('I perform the user payment', async function () {

    await Cyclosloginpage.ClickUserSelectionButton();
    await Cyclosloginpage.ClickUserSelection();
    await Cyclosloginpage.enterUserAmount();
    await Cyclosloginpage.nextButton(); 
    await Cyclosloginpage.paymentConfirm();

  });

  Given('I click the confirm button', async function () {
       await Cyclosloginpage.confirmButton(); 
  });

  Then('I validate the payment', async function () {
    await Cyclosloginpage.validatePayment();
  });



  
  