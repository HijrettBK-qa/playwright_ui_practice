import { Locator, Page, expect } from "@playwright/test";

export default class LoginPage {

    page: Page;

    constructor(page: Page) {

        this.page = page;
    }

    async goLogin() {await this.page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/") };
    async disagree() { await this.page.getByRole('button', { name: 'DISAGREE' }).click(); }
    async email(email: string) { await this.page.getByRole('textbox', { name: 'Email*' }).fill(email); }
    async password(password: string) { await this.page.getByRole('textbox', { name: 'Password* Password' }).fill(password); }
    async signinBtn(){await this.page.getByRole("button",{name:"Sign In"}).click()}
    title = (): Locator => this.page.locator('h1.page-title span.base');
    async verifyLogin(){ await expect(this.title()).toHaveText('My Account');}

    async login(email, password) {

        await this.goLogin();
        await this.disagree();
        await this.email(email);
        await this.password(password);
        await this.signinBtn();
    }

}