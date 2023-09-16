const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
//import footerPage from "../pages/FooterPage.spec";
import { expect, chromium, Page, Browser } from "@playwright/test";

let browser: Browser;
let page: Page;
setDefaultTimeout(60 * 1000);

Given('User navigate to the Log in page', async () => {
    browser = await chromium.launch({ headless: false });    
    page = await browser.newPage();
    page.goto('https://a.cms.omniupdate.com/11/#qa/fari-test/gallena');
   
  });

Given('User enter username', async () => {
    const name = await page.locator('form[id="form-login"]').getByRole('textbox', {name: 'username'});
    await name.fill('example value');
    await expect(name).toHaveValue('example value');       
});

Given('User enter password', async () => {    
    const password = await page.locator('form[id="form-login"]').getByRole('textbox', {name: 'password'});
    await password.fill('password value');
    //await expect(password).toHaveValue('password value');    
});

When('User click on the "Login" button', async () => {
    await page.locator('button[type="submit"]', { hasText: 'LOGIN' }).click();
    await page.waitForURL('**/gallena');
});

Then("User log in successfully",  async () => {
    //const successMassage = await page.locator('form[id="form-login"] div[class="login-message alert alert-error"]');
    //await expect(successMassage).toHaveText('The login information provided is invalid.');
    await browser.close();    
});

Then('Login should fail', async () => {
    const failMassage = await page.locator('form[id="form-login"] div[class="login-message alert alert-error"]');
    await expect(page.locator('form[id="form-login"] div[class="login-message alert alert-error"]')).toHaveText('The login information provided is invalid.');
    await expect(failMassage).toBeVisible();   
    await browser.close();   
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