import { Locator, Page } from "playwright/test";

export class userPage {
    readonly page: Page;
    readonly userProfileButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userProfileButton = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.logoutButton = page.locator("//a[text()='Logout']");
    }
    async logout() {
       await this.userProfileButton.click();
       await this.logoutButton.click();
    }
}