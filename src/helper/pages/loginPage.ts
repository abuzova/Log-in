import { expect, Page } from "@playwright/test";

export default class LoginPage { 
    constructor(private page: Page) {
        this.page = page;   
     }

    private Elements = {
        loginBtn: 'button[type="submit"]',
        errorMessage: "//div[@class='login-message alert alert-error']" 
    }

    async getErrorMessage(){
        return this.Elements.errorMessage;
    }

    async enterUserName(user: string) {
        const name = await this.page.locator('form[id="form-login"]').getByRole('textbox', {name: 'username'});
        await name.fill(user);
        await expect(name).toHaveValue(user); 
    }


    async enterPassword(Password: string) {
        const password = await this.page.locator('form[id="form-login"]').getByRole('textbox', {name: 'password'});
        await password.fill(Password);   
    }

    async clickLoginButton() {        
        await this.page.locator(this.Elements.loginBtn, { hasText: 'LOGIN' }).click();
        await this.page.waitForURL('**/gallena');  
    }

    async loginUser( user: string, password: string ) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

}