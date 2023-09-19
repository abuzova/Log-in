const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
import { Browser, expect } from "@playwright/test";
import { pageFixture } from "../hooks/pageFixture";
import LoginPage from '../../helper/pages/loginPage';
import * as data from "../../helper/test-data/loginUser.json";
//import data from '../../helper/test-data/loginUser.json';
//import data = require("../../helper/test-data/loginUser.json");


let browser: Browser;
let loginPage: LoginPage;

setDefaultTimeout(60 * 1000 * 2);

Given('User navigate to the Log in page', async () => { 
    loginPage = new LoginPage(pageFixture.page);  
    await pageFixture.page.goto(process.env.BASEURL);   
});

Given('User enter valid username and password', async () => {
//const name = await pageFixture.page.locator('form[id="form-login"]').getByRole('textbox', {name: 'username'});
//await name.fill(data.username);
 //   await expect(name).toHaveValue(data.username); 
    //await loginPage.loginUser(data.userName, data.password); 
    await loginPage.loginUser(data.userName, data.password); 
      
});

//  pageFixture !!!!!!!

When('User enter invalid username and password', async () => {
    //await pageFixture.page.locator('button[type="submit"]', { hasText: 'LOGIN' }).click();
    //await pageFixture.page.waitForURL('**/gallena');
    await loginPage.loginUser(data.invalidUserName, data.invalidPassword);
});

Then("User log in successfully",  async () => {
    //const successMassage = await page.locator('form[id="form-login"] div[class="login-message alert alert-error"]');
    //await expect(successMassage).toHaveText('The login information provided is invalid.');
    //await browser.close();
    
});

Then('Login should fail', async () => {
    const failMassage = await pageFixture.page.locator('form[id="form-login"] div[class="login-message alert alert-error"]');
    await expect(failMassage).toHaveText('The login information provided is invalid.');
    await expect(failMassage).toBeVisible();
    //await browser.close();   
   
}); 


   


/*Given('User log in successfully using valid login and password',  () => {
    footerPage.enterURL();
    footerPage.closeCookies();
});

When('I am on the "Home" page', () => {
    //cy.url().should('eq', 'https://telnyx.com/');
});

Then("Validate links of the left footer menu item", (datatable) => {
    datatable.hashes().forEach((element) => {
    //    footerPage.validateLeftFooterMenuItem(element.links_menu_item_left_footer, element.i_element);
    });
});
Then("Validate links of the right footer menu item", (datatable) => {
    datatable.hashes().forEach((element) => {
    //    footerPage.validateRightFooterMenuItem(element.links_menu_item_right_footer, element.i_element);
    });
});*/