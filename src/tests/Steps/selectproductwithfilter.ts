import { Given,When,Then } from "@cucumber/cucumber";
import { pageObject } from "../Hooks/PageObjects";
import { addMinimumProducts } from "../Pages/selectProductWithFilterPage/selectProductWithFilterPage";
import { toClick } from "../Helper/Actions";
let minimumProducts:addMinimumProducts;

Given('Using filter to select the products', async function () {
  minimumProducts=new addMinimumProducts(pageObject.page);
  await minimumProducts.filterClick();
  await minimumProducts.FilterCheck();
  await minimumProducts.addTheProduct();
  
});
When('Click checkout button',async function (){
  await minimumProducts.clickCheckoutButton();
})