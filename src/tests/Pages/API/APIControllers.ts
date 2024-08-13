import { Page } from "@playwright/test";
import { pageObject } from "../../Hooks/PageObjects";
import {dataForCookie} from "./apiDatas/postDatas";
import {cookieVerification, responseHeaders, responseJSON, responseURL, setCookies, statusCode} from "../../Helper/Actions"
export class API{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
     async getRequest(apiURL:string):Promise<any>{
       const response=await pageObject.page.request.get(apiURL);
       statusCode(response,200);
       responseJSON(response);
       responseData(response);
    }
    async postRequest(apiURL:string,putData:any):Promise<any>{
       const response=await pageObject.page.request.post(apiURL,{
            data: putData,
            headers: {
              'Content-Type': 'application/json',
            }});
            statusCode(response,201);
            responseJSON(response);
            
    }
    async updateRequest(apiURL:string,updateData:any):Promise<any>{
      const response= await pageObject.page.request.put(apiURL,{
        data: updateData,
        headers: {
          'Content-Type': 'application/json',
        }});
      statusCode(response,200);
      responseJSON(response);
    }
    async deleteRequest(apiURL:string):Promise<any>{
        const response=await pageObject.page.request.delete(apiURL);
        statusCode(response,204);
      
    }
    async headerVerification(apiURL:string,token:string):Promise<any>{
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