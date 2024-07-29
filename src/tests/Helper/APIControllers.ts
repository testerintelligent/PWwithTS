import { Page } from "@playwright/test";
import { pageObject } from "../Hooks/PageObjects";
import {responseData, responseHeaders, responseJSON, responseRequest, responseURL, statusCode} from "./Actions"
export class API{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
     async getRequest(apiURL:string){
       const response=await pageObject.page.request.get(apiURL);
       statusCode(response,200);
       responseHeaders(response);
    }
    async postRequest(apiURL:string,putData:any){
       const response=await pageObject.page.request.post(apiURL,{
            data: putData,
            headers: {
              'Content-Type': 'application/json',
            }});
            statusCode(response,201);
            responseJSON(response);
            responseURL(response);
            
    }
    async updateRequest(apiURL:string,updateData:any){
      const response= await pageObject.page.request.put(apiURL,{
        data: updateData,
        headers: {
          'Content-Type': 'application/json',
        }});
      statusCode(response,200);
      responseJSON(response);
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
          responseHeaders(response);
    }
}


