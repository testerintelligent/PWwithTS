import { Given ,When} from "@cucumber/cucumber";
import { API } from "../../Pages/API/APIControllers";
import { pageObject } from "../../Hooks/PageObjects";
import {GoData, users} from "../../Pages/API/apiDatas/postDatas";
import { logger } from "../../Helper/logger";
let api:API;



  // Put Request for Insurance app Api

  When('Test put request {string}', async function (URL) {
    await api.updateRequest(URL,users);
    logger.error("Error in put request");
  });
  // When('Test post request for GoREST {string}', async function (URL) {
  //   // await api.postWithHeader(URL,"a844c869786e0efed438ea11ed68bc3cf1aa31ecfcac132814085e773fa73c35",GoData);
  // });

  // Post Request for create repository

  Given('Test Create repository in github api {string}', async function (URL) {
    api=new API();
    await api.createRepository(URL,users);
  });

  // Patch Request for update repository 

  Given('Test Update repository in github api {string}', async function (URL) {
    api=new API();
    await api.updateRepository(URL,users);
  });

 // Delete Request for delete repository

  Given('Test Delete repository in github api {string}', async function (URL) {
    api=new API();
    await api.deleteRepository(URL,users);
  });

  // Get Request for get repository

  Given('Test Get repository in github api for {string} repository {string}', async function (Status,URL) {
    api=new API();
    await api.getRepository(URL,users,Status);
  });

  Given('Test Login functionality for insurance app {string}', async function (URL) {
    api=new API();
    await api.loginApi();
  });
// 
    When('Issue policy from insurance app {string} with {string},{string}, {string}, {string}, {string}, {string}, {string} and {string}', async function (URL,Name,Gender,Email,Address,DateOfBirth,PolicyType,SumInsured,Premium) {
    
    await api.issuePolicy(URL,Name,Gender,Email,Address,DateOfBirth,PolicyType,SumInsured,Premium);
    //
  });

  Given('I retrieve the list of users from insurance app {string}', async function (URL) {
   
    await api.getPolicy();
  });

  Given('Delete the already existed Insurance {string}', async function (URL) {
    await api.deletePolicy(URL);
  });