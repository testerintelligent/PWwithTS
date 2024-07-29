import { expect, Page } from "@playwright/test";
import { assertURL, clickAndSendkeys, launchURL, toClick , sendkeys, assertText, sleep, takeScreenshot, waitSelector } from "../../Helper/Actions";
import { pageObject } from "../../Hooks/PageObjects";

const PageLocators={
    usernameInputfield:"[formcontrolname='principal']",
    passwordInputField:"[type='password']",
    loginButton:"//*[text()='Submit']",
    payButton:"(//a[@class='quick-access-item'])[1]",
    userSelectionButton:"//*[@formcontrolname='subject']//button",
    userSelection:"//a[text()=' Demo one ']",
    amountField:"//*[@formcontrolname='amount']//input",
    paymentConfirmation:"//div[@class='content-title d-flex']//div",
    nextButton:"//span[text()='Next']",
    confirmButton:"//*[@type='button']//span[text()='Confirm']"
}

export class cyclosloginPage{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async navigate(){  
        await launchURL("https://demo.cyclos.org/ui/login");
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
    async ClickPayUserButton(){
        await toClick(PageLocators.payButton);
     }

     async ClickUserSelectionButton(){
        await toClick(PageLocators.userSelectionButton);
     }

     async ClickUserSelection(){
        await toClick(PageLocators.userSelection);
     }

     async enterUserAmount(){
        await sendkeys(PageLocators.amountField,"100");
     }

     async nextButton(){
        await toClick(PageLocators.nextButton);
     }

     async paymentConfirm(){
        await assertText(PageLocators.paymentConfirmation," Payment confirmation ");
     }
     
     async confirmButton(){
        await toClick(PageLocators.confirmButton);
     }


}

   
