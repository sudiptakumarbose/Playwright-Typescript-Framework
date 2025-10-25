import { Locator, Page } from "playwright/test";

export class loginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly passWord: Locator;
    readonly loginButton: Locator;
    readonly invalidcredError: Locator

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByRole('textbox', { name: 'Username' });
        this.passWord = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.invalidcredError = page.locator("//p[text()='Invalid credentials']")

    }

    async navigateToLoginPage() {
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);


    }
    async loginWithCredentials(username: string, password: string) {
        await this.userName.fill(username);
        await this.passWord.fill(password);
        await this.loginButton.click();
    }



}