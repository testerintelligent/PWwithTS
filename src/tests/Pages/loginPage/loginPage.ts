import { clickAndSendkeys, toClick } from "../../Helper/Actions";
import { pageObject } from "../../Hooks/PageObjects"

let loginPage={
    usernameInputfield:"#user-name",
    passwordInputField:"#password",
    loginButton:"#login-button"
}

export function validLogin(){
    clickAndSendkeys(loginPage.usernameInputfield,"standard_user");
    clickAndSendkeys(loginPage.passwordInputField,"secret_sauce");
    toClick(loginPage.loginButton);
}
   
