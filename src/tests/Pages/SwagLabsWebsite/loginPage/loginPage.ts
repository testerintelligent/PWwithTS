import { Page } from "@playwright/test";
import { assertURL, clickAndSendkeys, launchURL, toClick } from "../../../Helper/Actions";
import { cyclosloginPage } from "../../CyclosWebsite/cyclosLoginPage/cyclosLoginPage";

const PageLocators={
    usernameInputfield:"#user-name",
    passwordInputField:"#password",
    loginButton:"#login-button"
}
//Inplement inheritance in this sub class
export class loginPage extends cyclosloginPage{
  //overwride method
    async navigate(URL: string):Promise<any> {
        await launchURL(URL);
    }
    //overwride method
    async enterUsername(username: string): Promise<any> {
        await clickAndSendkeys(PageLocators.usernameInputfield,username);
    }
    //overwride method
    async enterPassword(password: string): Promise<any> {
        await clickAndSendkeys(PageLocators.passwordInputField,password);
    }
    //overwride method
    async ClicklaunchButton(): Promise<any> {
        await toClick(PageLocators.loginButton);
    }
    
    async verifyHomePageURL():Promise<any>{
        const homePageUrl:string="https://www.saucedemo.com/v1/inventory.html";
        await assertURL(homePageUrl);
    }

}
   
