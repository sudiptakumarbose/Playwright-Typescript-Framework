import { Locator, Page } from "playwright/test";

export class leftnavigationPage {
    readonly page: Page;
    readonly pimLink: Locator;
    readonly orangeHRMLogo : Locator;
    readonly lefthandNavigationPlane : Locator;

    constructor(page: Page) {
        this.page = page;
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.orangeHRMLogo = page.getByRole('link', { name: 'client brand banner' });
        this.lefthandNavigationPlane = page.locator(".oxd-sidepanel");
    }
    /**
     * To open the PIM page
     */
    async openPimPage()
    {
        await this.pimLink.click();
    }
}