import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../wrapper/PlaywrightWrappers";



export default class LoginPage {    
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        userInput: "Username",
        passwordInput: "Password",
        loginBtn: 'button[type="submit"]',
        errorMessage: "alert"
    }

     async navigateToLoginPage() {
        await this.base.goto("/login");
        await expect(this.page).toHaveTitle("BookCart");
    }
    async enterUserName(user: string) {
        const name = await this.page.locator('form[id="form-login"]').getByRole('textbox', {name: 'username'});
        await name.fill(user);
        await expect(name).toHaveValue(user); 
    }


    async enterPassword(Password: string) {
        const password = await this.page.locator('form[id="form-login"]').getByRole('textbox', {name: 'password'});
        await password.fill(Password);
   //     await this.page.getByLabel(this.Elements.passwordInput).fill(Password);
    }

    async clickLoginButton() {        
        await this.page.locator(this.Elements.loginBtn, { hasText: 'LOGIN' }).click();
        await this.page.waitForURL('**/gallena');
        //await this.base.waitAndClick(this.Elements.loginBtn);
    }

    getErrorMessage() {
        return this.page.getByRole("alert");
    }

    public async loginUser( user: string, password: string ) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
    /*static loginUser(username: any, password: any) {
        throw new Error("Method not implemented.");
    }*/


}