import { Page } from "@playwright/test";
import { pageObject } from "../../Hooks/PageObjects";
import {dataForCookie} from "./apiDatas/postDatas";
import {cookieVerification,responseRequest, responseData, responseHeaders, responseJSON, responseURL, setCookies, statusCode} from "../../Helper/Actions"
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
    async createRepository(apiURL:string,putData:any):Promise<any>{
      const response=await pageObject.page.request.post("https://api.github.com/user/repos",{
           data: {"name":"mysecondrepo",
            "description":"This is your first repository!",
            "homepage":"https://github.com",
            "private":false,
            "is_template":true,
            "has_issues":true,
            "has_projects":true,
            "has_wiki":true
            },
           headers: {
             'Header':'X-GitHub-Api-Version: 2022-11-28',
             'Accept':'application/vnd.github.v3+json',
             'Authorization':'token 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'
           }});
           statusCode(response,201);
           responseJSON(response);          
   }

   async getRepository(apiURL:string,putData:any,Status:string):Promise<any>{
    const response=await pageObject.page.request.get("https://api.github.com/repos/Sevugan93/mysecondrepo",{
      headers: {
           'Header':'X-GitHub-Api-Version: 2022-11-28',
           'Accept':'application/vnd.github.v3+json',
           'Authorization':'token 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'
         }});
         if(Status==='valid'){
          statusCode(response,200);  
         }
         else{
          statusCode(response,404);
         }
        
         responseJSON(response);
 }

   async updateRepository(apiURL:string,putData:any):Promise<any>{
    const response=await pageObject.page.request.patch("https://api.github.com/repos/Sevugan93/mysecondrepo",{
      data: {"name":"mythirdrepo",
        "description":"This is not my first repository lol!",
        "homepage":"https://github.com",
        "private":true,
        "is_template":true,
        "has_issues":true,
        "has_projects":true,
        "has_wiki":true
        },
      headers: {
              'Header':'X-GitHub-Api-Version: 2022-11-28',
              'Accept':'application/vnd.github.v3+json',
              'Authorization':'token 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'
            }});
            statusCode(response,200);
            responseJSON(response);          
    } 
 
  async deleteRepository(apiURL:string,putData:any):Promise<any>{
    const response=await pageObject.page.request.delete("https://api.github.com/repos/Sevugan93/mythirdrepo",{
         headers: {
           'Header':'X-GitHub-Api-Version: 2022-11-28',
           'Accept':'application/vnd.github.v3+json',
           'Authorization':'token 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'
         }});
         statusCode(response,201);
       //  responseJSON(response);          
 }
}