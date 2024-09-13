import { Given,Then,When } from "@cucumber/cucumber";
import { vocherPage } from "../../Pages/cyclosLoginPage/CyclosVocher";
import { pageObject } from "../../Hooks/PageObjects";
import { assertText } from "../../Helper/Actions";
let CyclocsVocherpage:vocherPage;

// Navigation method for cyclos vocher page 

Given('User navigate to Home page and click dashboard', async function () {
    CyclocsVocherpage=new vocherPage();
    await CyclocsVocherpage.verifyHomePageURL();
  });

  // Method for clicking vocher button in cyclos vocher page

  When('I click on Vocher Module', async function () {
    await CyclocsVocherpage.clickVocherButton();
  });

  // Method for navigating to gift vocher option in cyclos vocher page 

  When('navigate to Gift Vocher option', async function () {
    await CyclocsVocherpage.gotoGiftVocher();
  });

  // Method for validating gift vocher in cyclos vocher page

  When('Validate the gift vocher page', async function () {
  await CyclocsVocherpage.validateGiftVocher();
  });

 // Method for filling gift vocher amount in cylcos vocher page 

  When('Enter the amount and click the gift vocher option', async function () {
   await CyclocsVocherpage.giftVocherAmount();
  });

  // Method for confirmation in cyclos vocher page

  When('click the confirm button to complete the process', async function () {
    await CyclocsVocherpage.ConfirmationText();
  });

  // Method for validating gift vocher details in gift vocher page

  Then('verify the gift vocher details', async function () {
  await CyclocsVocherpage.assertGiftVocherPage();
  });