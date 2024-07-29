import { expect, Page } from "@playwright/test";
import { assertURL, clickAndSendkeys, launchURL, toClick } from "../../Helper/Actions";

const PageLocators={
    selectItem:"(//*[@class='inventory_item_name'])[1]",
    addToCartButton:"(//button[@class='btn_primary btn_inventory'])[1]",
    CartButton:"//a[@class='shopping_cart_link fa-layers fa-fw']",
   
}
export class productCheckingPage{
    firstProduct:string="";
    secondProduct:string="";
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    
    async inventoryURL() {
       
     await launchURL("https://www.saucedemo.com/v1/inventory.html")
    }

    async selectTheItem(){
     this.firstProduct = await this.page.locator(PageLocators.selectItem).innerText()
     console.log(" product:"+this.firstProduct)
    }

    async addTheProduct(){
        await toClick(PageLocators.addToCartButton);
        await toClick(PageLocators.CartButton);
    }

    async itemInCart(){
        this.secondProduct = await this.page.locator(PageLocators.selectItem).innerText()
        console.log(" product:"+this.secondProduct)

        
        } 

        async itemComparison(){
            if(this.firstProduct==this.secondProduct)
            {
                console.log("Both are same");
            }
    else{
        console.log("Not equal");
    }
            
            } 

        

       

        
    
}



   
