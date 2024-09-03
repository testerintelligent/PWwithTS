import {  expect, Page } from "@playwright/test";
import {  clickAndSendkeys, launchURL, toClick , assertURL, assertText, takeScreenshot } from "../../Helper/Actions";
import { pageObject } from "../../Hooks/PageObjects";

const PageLocators = {
    bankManagerLogin:"//button[@ng-click='manager()']",
    addCustomer:"//button[@ng-click='addCust()']",
    firtName:"//input[@ng-model='fName']",
    lastName:"//input[@ng-model='lName']",
    postCode:"//input[@ng-model='postCd']",
    addDetails:"//button[text()='Add Customer']",
    home:"//button[text()='Home']"
}

export class ManagerLogin{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async navigate():Promise<any>{  
        let url="https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login";
        await launchURL(url);
        await assertURL(url);
    }

    async clickManager()
    {
        await(toClick(PageLocators.bankManagerLogin));
    }

    async fillDetails()
    {
     let fname:string="admin"+Date.now();
        await(toClick(PageLocators.addCustomer));
        await(clickAndSendkeys(PageLocators.firtName,fname));
        await(clickAndSendkeys(PageLocators.lastName,"sam"));
        await(clickAndSendkeys(PageLocators.postCode,"600001"));
        expect(PageLocators.home,"Home");
        await(toClick(PageLocators.addCustomer));  
    }
}