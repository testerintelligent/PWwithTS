import { Given ,When} from "@cucumber/cucumber";
import { API } from "../../Pages/API/APIControllers";
import { pageObject } from "../../Hooks/PageObjects";
import {users} from "../../Pages/API/apiDatas/postDatas";
let api:API;

Given('Test get request {string}', async function (URL) {
    api=new API(pageObject.page);
    await api.getRequest(URL);
  });

  When('Test post request {string}', async function (URL) {
    await api.postRequest(URL,users);
  });

  When('Test delete request {string}', async function (URL) {
    await api.deleteRequest(URL);
  });

  When('Test put request {string}', async function (URL) {
    await api.updateRequest(URL,users);
  });