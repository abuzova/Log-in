const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
import { Browser, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import LoginPage from '../../helper/pages/loginPage';
import * as data from "../../helper/test-data/loginUser.json";

let loginPage: LoginPage;

setDefaultTimeout(60 * 1000 * 2);

Given('User navigate to the Log in page', async () => { 
    loginPage = new LoginPage(pageFixture.page);  
    await pageFixture.page.goto(process.env.BASEURL);   
});

Given('User enter valid username and password', async () => {
    await loginPage.loginUser(data.userName, data.password);      
});


When('User enter invalid username and password', async () => {   
    await loginPage.loginUser(data.invalidUserName, data.invalidPassword);
});

Then("User log in successfully",  async () => {  
    await expect(pageFixture.page).toHaveURL(/.*login/);  // it is test url, have to change on the true url
});

Then('Login should fail', async () => {
    const failMassage = await pageFixture.page.locator(await loginPage.getErrorMessage());
    await expect(failMassage).toHaveText(data.errorMsg);
    await expect(failMassage).toBeVisible(); 
}); 