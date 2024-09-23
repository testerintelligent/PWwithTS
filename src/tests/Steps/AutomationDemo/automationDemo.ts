import { Given,Then,When } from "@cucumber/cucumber";
import { automationDemoPage } from "../../Pages/automationDemoPage/automationDemoPage";
import { pageObject } from "../../Hooks/PageObjects";

let demoPage:automationDemoPage;

// Launch application method
Given('User Launch the automation demo site', async function () {
    demoPage = new automationDemoPage()
    await demoPage.navigate();
  });

// Fill Mandatory details method 
  Given('fill the mandatory details', async function () {
    await demoPage.enterFirstName("Tester");
    await demoPage.enterLastName("one")
  }); 

  Given('upload an file in the portal', async function () {
    
  });

  Given('Click submit and navigate to next page', async function () {
    //await demoPage.submit();
  });

  Then('Verify the Registration page details', async function () {
    
  });