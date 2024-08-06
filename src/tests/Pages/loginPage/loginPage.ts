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
    async navigate():Promise<any>{  
        await launchURL("https://www.saucedemo.com/v1/");
    }
    async enterUsername(username:string):Promise<any>{
        await clickAndSendkeys(PageLocators.usernameInputfield,username);
    }
    async enterPassword(password:string):Promise<any>{
        await clickAndSendkeys(PageLocators.passwordInputField,password);
    }
    async ClicklaunchButton():Promise<any>{
       await toClick(PageLocators.loginButton);
    }
    async verifyHomePageURL():Promise<any>{
        const homePageUrl:string="https://www.saucedemo.com/v1/inventory.html";
        await assertURL(homePageUrl);
    }
}

   
