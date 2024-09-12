import { Page, expect } from "@playwright/test"
import { assertURL, clickAndSendkeys, launchURL, sendkeys, sleep, toClick, dropDownValidate,waitSelector } from "../../../Helper/Actions";



const pageLocators1={
    selectfilter:"//select[@class='product_sort_container']",
    filteratoz:"//option[@value='az']",
    filterZtoa:"//option[@value='za']",
    filterLowtoHigh:"(//select[@class='product_sort_container']/option)[2]",
    filterHightolow:"//option[@value='hilo']",
    addToCartButton:"(//button[@class='btn_primary btn_inventory'])[1]",
    CartButton:"//a[@class='shopping_cart_link fa-layers fa-fw']",
    checkoutButton:"//a[@class='btn_action checkout_button']"
}

export class addMinimumProducts{
   
    async filterClick():Promise<any>{
       await toClick(pageLocators1.selectfilter);
    }
    async FilterCheck():Promise<any>{
        await dropDownValidate(pageLocators1.selectfilter,"Price (low to high)");
    }
   
    async addTheProduct():Promise<any>{
        await toClick(pageLocators1.addToCartButton);
        await toClick(pageLocators1.CartButton);
    }
    async clickCheckoutButton():Promise<any>{
        await toClick(pageLocators1.checkoutButton);
    }
}
