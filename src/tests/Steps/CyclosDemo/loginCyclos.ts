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
  Given('Verify the Home page title as {string}',async function(text:string){
    await Cyclosloginpage.VerifyHomePageText(text);
  })
  Given('Verify the Invalid message as {string}',async function(assertText:string){
    await Cyclosloginpage.invalidDatas(assertText);
  })

  



  
  