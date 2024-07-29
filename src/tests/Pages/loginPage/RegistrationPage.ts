import { expect, Page } from "@playwright/test";
import {toClick,launchURL,sendkeys} from "../../Helper/Actions";

const PageLocators={
   RegisterButton:"//a[@id='register-link']",
   nameTextBox:"(//input[@type='text'])[1]",
   loginNameTextBox:"(//input[@type='text'])[2]",
   emailTextBox:"(//input[@type='text'])[3]",
   genderRadioButton: "//label[text()=' Female ']",
   nextButon:"//span[text()='Next']",
   nameRegisterText:"//div[@class='title-text flex-grow-1 d-flex align-items-center']"
}

export class RegistrationPage{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    async navigate(){  
        await launchURL("https://demo.cyclos.org/ui/home");
    }

    async enterMandatoryDetails(){
        // await toClick(PageLocators.nameTextBox);
        await sendkeys(PageLocators.nameTextBox,"Jeya");
        // await toClick(PageLocators.loginNameTextBox);
        await sendkeys(PageLocators.loginNameTextBox,"Jeyagandhi");
        // await toClick(PageLocators.emailTextBox);
        await sendkeys(PageLocators.emailTextBox,"aaa@gmail.com");
        await toClick(PageLocators.genderRadioButton);
      
    }
   
    async clickRegisterButton(){
       await toClick(PageLocators.RegisterButton);
    }

    async clickNextButton()
    {
        await toClick(PageLocators.nextButon);
    }
}

   
