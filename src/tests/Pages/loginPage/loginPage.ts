import { Page } from "@playwright/test";
import { assertURL, clickAndSendkeys, launchURL, toClick } from "../../Helper/Actions";

const PageLocators={
    usernameInputfield:"#user-name",
    passwordInputField:"#password",
    loginButton:"#login-button"
}
export class loginPage{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async navigate(){  
        await launchURL("https://www.saucedemo.com/v1/");
    }
    async enterUsername(username:string){
        await clickAndSendkeys(PageLocators.usernameInputfield,username);
    }
    async enterPassword(password:string){
        await clickAndSendkeys(PageLocators.passwordInputField,password);
    }
    async ClicklaunchButton(){
       await toClick(PageLocators.loginButton);
    }
    async verifyHomePageURL(){
        const homePageUrl:string="https://www.saucedemo.com/v1/inventory.html";
        await assertURL(homePageUrl);
    }
}

   
