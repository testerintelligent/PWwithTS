import { expect, Page } from "@playwright/test";
import { assertURL, clickAndSendkeys, launchURL, toClick } from "../../../Helper/Actions";
import { pageObject } from "../../../Hooks/PageObjects";



// Web interaction methods for Product checkin page

export class productCheckingPage{
    // Locators for assert validation page
//Change all the locators into private to implement Encapsulation
private PageLocators={
    selectItem:"(//*[@class='inventory_item_name'])[1]",
    addToCartButton:"(//button[@class='btn_primary btn_inventory'])[1]",
    CartButton:"//a[@class='shopping_cart_link fa-layers fa-fw']",
   
}
    firstProduct:string="";
    secondProduct:string="";
    //public Methods for implement functionalities
    async inventoryURL():Promise<any>{
       await launchURL("https://www.saucedemo.com/v1/inventory.html")
    }

    async selectTheItem():Promise<any>{
     this.firstProduct = await pageObject.page.locator(this.PageLocators.selectItem).innerText()
     console.log(" product:"+this.firstProduct)
    }

    async addTheProduct():Promise<any>{
        await toClick(this.PageLocators.addToCartButton);
        await toClick(this.PageLocators.CartButton);
    }

    async itemInCart():Promise<any>{
        this.secondProduct = await pageObject.page.locator(this.PageLocators.selectItem).innerText()
        console.log(" product:"+this.secondProduct)       
        } 

    async itemComparison():Promise<any>{
            if(this.firstProduct==this.secondProduct)
            {
                console.log("Both are same");
            }
    else{
        console.log("Not equal");
    }            
 }    
}