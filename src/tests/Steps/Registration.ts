import { Given,When,Then } from "@cucumber/cucumber";
import { pageObject } from "../Hooks/PageObjects";
import { RegistrationPage} from "../Pages/loginPage/RegistrationPage";
import { assert } from "console";

let Register:RegistrationPage;

Given('User Launch the URL', async function () {
  Register=new RegistrationPage(pageObject.page);
    await Register.navigate();
  });

  When('Click on Register link', async function () {
   await Register.clickRegisterButton();
  });

  Given('Enter the mandatory details', async function () {
    await Register.enterMandatoryDetails();
  });

  Given('Click Next and confirm', async function () {
   await Register.clickNextButton();
   console.log("Next Page");
  });

  Given('Verify the Registration page', async function () {
   await Register.comparePage();
   console.log("Registeration Completed");
   });

