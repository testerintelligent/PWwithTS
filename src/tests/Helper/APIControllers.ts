import { Page } from "@playwright/test";
import { pageObject } from "../Hooks/PageObjects";
import {statusCode} from "./Actions"
export class API{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
     async getRequest(apiURL:string){
       const response=await pageObject.page.request.get(apiURL);
       statusCode(response,200);
    }
    async postRequest(apiURL:string,putData:any){
       const response=await pageObject.page.request.post(apiURL,{
            data: putData,
            headers: {
              'Content-Type': 'application/json',
            }});
            statusCode(response,201);
    }
    async updateRequest(apiURL:string){
      const response= await pageObject.page.request.put(apiURL);
      statusCode(response,200);
    }
    async deleteRequest(apiURL:string){
        const response=await pageObject.page.request.delete(apiURL);
        statusCode(response,204);
    }
    async headerVerification(apiURL:string,token:string){
       const response= await pageObject.page.request.get(apiURL, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
            }
          });
          statusCode(response,200);
    }
}


