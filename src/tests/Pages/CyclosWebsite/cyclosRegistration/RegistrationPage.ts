import { expect, Page } from "@playwright/test";
import {toClick,launchURL,sendkeys, assertText, clickAndSendkeys} from "../../../Helper/Actions";
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
    password:"(//input[@type='password'])[1]",
    confirmPassword:"(//input[@type='password'])[2]",
    nameRegisterText:"//div[@class='title-text flex-grow-1 d-flex align-items-center']"
 }
   
    // Web interaction methods for Registration page

    async navigate():Promise<any>{  
        await launchURL("https://demo.cyclos.org/ui/home");
    }

    async enterMandatoryDetails(username:string,loginname:string,emailid:any){
        // await toClick(PageLocators.nameTextBox);
        await sendkeys(this.PageLocators.nameTextBox,username);
        // await toClick(PageLocators.loginNameTextBox);
        await sendkeys(this.PageLocators.loginNameTextBox,loginname);
        // await toClick(PageLocators.emailTextBox);
        await sendkeys(this.PageLocators.emailTextBox,emailid);
        await toClick(this.PageLocators.genderRadioButton);
      
    }
   
    async clickRegisterButton():Promise<any>{
       await toClick(this.PageLocators.RegisterButton);
    }

    async clickNextButton():Promise<any>
    {
        await toClick(this.PageLocators.nextButon);
    }

    async passwordField()
    {
        await clickAndSendkeys(this.PageLocators.password,"demo");
        await clickAndSendkeys(this.PageLocators.confirmPassword,"demo");
    }

    async comparePage():Promise<any>
    {
        await assertText(this.PageLocators.nameRegisterText,"Registration confirmation");
    }
}