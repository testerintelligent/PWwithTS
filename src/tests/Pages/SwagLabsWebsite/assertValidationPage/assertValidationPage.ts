import { expect, Page } from "@playwright/test";
import { assertURL, clickAndSendkeys, launchURL, toClick } from "../../../Helper/Actions";
import { pageObject } from "../../../Hooks/PageObjects";

const PageLocators={
    selectItem:"(//*[@class='inventory_item_name'])[1]",
    addToCartButton:"(//button[@class='btn_primary btn_inventory'])[1]",
    CartButton:"//a[@class='shopping_cart_link fa-layers fa-fw']",
   
}
export class productCheckingPage{
    firstProduct:string="";
    secondProduct:string="";
    
    async inventoryURL():Promise<any>{
       
     await launchURL("https://www.saucedemo.com/v1/inventory.html")
    }

    async selectTheItem():Promise<any>{
     this.firstProduct = await pageObject.page.locator(PageLocators.selectItem).innerText()
     console.log(" product:"+this.firstProduct)
    }

    async addTheProduct():Promise<any>{
        await toClick(PageLocators.addToCartButton);
        await toClick(PageLocators.CartButton);
    }

    async itemInCart():Promise<any>{
        this.secondProduct = await pageObject.page.locator(PageLocators.selectItem).innerText()
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



   
