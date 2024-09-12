import { expect, Page } from "@playwright/test";
import {toClick,launchURL,sendkeys, assertText} from "../../../Helper/Actions";
import { pageObject } from "../../../Hooks/PageObjects";



export class RegistrationPage{
    // Locators for registration page
//Change all the locators into private to implement Encapsulation
private PageLocators={
    RegisterButton:"//a[@id='register-link']",
    nameTextBox:"(//input[@type='text'])[1]",
    loginNameTextBox:"(//input[@type='text'])[2]",
    emailTextBox:"(//input[@type='text'])[3]",
    genderRadioButton: "//label[text()=' Female ']",
    nextButon:"//span[text()='Next']",
    nameRegisterText:"//div[@class='title-text flex-grow-1 d-flex align-items-center']"
 }
   
    // Web interaction methods for Registration page

    async navigate():Promise<any>{  
        await launchURL("https://demo.cyclos.org/ui/home");
    }

    async enterMandatoryDetails():Promise<any>{
        // await toClick(PageLocators.nameTextBox);
        await sendkeys(this.PageLocators.nameTextBox,"Jeya");
        // await toClick(PageLocators.loginNameTextBox);
        await sendkeys(this.PageLocators.loginNameTextBox,"Jeyagandhi");
        // await toClick(PageLocators.emailTextBox);
        await sendkeys(this.PageLocators.emailTextBox,"aaa@gmail.com");
        await toClick(this.PageLocators.genderRadioButton);
      
    }
   
    async clickRegisterButton():Promise<any>{
       await toClick(this.PageLocators.RegisterButton);
    }

    async clickNextButton():Promise<any>
    {
        await toClick(this.PageLocators.nextButon);
    }

    async comparePage():Promise<any>
    {
        await assertText(this.PageLocators.nameRegisterText,"Registration confirmation");
    }
}