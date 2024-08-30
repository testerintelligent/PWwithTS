import { Given ,When} from "@cucumber/cucumber";
import { API } from "../../Pages/API/APIControllers";
import { pageObject } from "../../Hooks/PageObjects";
import {GoData, users} from "../../Pages/API/apiDatas/postDatas";
import { logger } from "../../Helper/logger";
let api:API;

Given('Test get request {string}', async function (URL) {
    api=new API(pageObject.page);
    await api.getRequest(URL);
    logger.info("info in get request");
  });

  When('Test post request {string}', async function (URL) {
    await api.postRequest(URL,users);
    logger.error("Error in post request");
  });

  When('Test delete request {string}', async function (URL) {
    await api.deleteRequest(URL);
    logger.info("Error in delete request");
  });

  When('Test put request {string}', async function (URL) {
    await api.updateRequest(URL,users);
    logger.error("Error in put request");
  });
  // When('Test post request for GoREST {string}', async function (URL) {
  //   // await api.postWithHeader(URL,"a844c869786e0efed438ea11ed68bc3cf1aa31ecfcac132814085e773fa73c35",GoData);
  // });

  Given('Test Create repository in github api {string}', async function (URL) {
    api=new API(pageObject.page);
    await api.createRepository(URL,users);
  });

  Given('Test Update repository in github api {string}', async function (URL) {
    api=new API(pageObject.page);
    await api.updateRepository(URL,users);
  });

  Given('Test Delete repository in github api {string}', async function (URL) {
    api=new API(pageObject.page);
    await api.deleteRepository(URL,users);
  });

  Given('Test Get repository in github api for {string} repository {string}', async function (Status,URL) {
    api=new API(pageObject.page);
    await api.getRepository(URL,users,Status);
  });