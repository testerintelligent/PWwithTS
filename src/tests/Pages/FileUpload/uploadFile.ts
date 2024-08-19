import { Page } from "@playwright/test";
import { launchURL, toClick } from "../../Helper/Actions";

export class upload{
    private page:Page;
    constructor(page:Page){
        this.page=page;
    }
    async LaunchURL(URL:string):Promise<any>{
        await launchURL(URL);
     }
     async clickFileShareLink():Promise<any>{
        await toClick("//span[text()='Add Files']");
     }
}