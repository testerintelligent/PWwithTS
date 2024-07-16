import { Page } from "@playwright/test";
import { clickAndSendkeys, toClick } from "../../Helper/Actions";
import { pageObject } from "../../Hooks/PageObjects"

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
        await this.page.goto("https://www.saucedemo.com/v1/");
    }
    async enterUsername(){
        await clickAndSendkeys(PageLocators.usernameInputfield,"standard_user");
    }
    async enterPassword(){
        await clickAndSendkeys(PageLocators.passwordInputField,"secret_sauce");
    }
    async ClicklaunchButton(){
       await toClick(PageLocators.loginButton);
    }
}

   
