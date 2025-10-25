import { Locator, Page } from "playwright/test";

export class pimPage {
    readonly page: Page;
    readonly addemployeeButton: Locator;
    readonly firstnameTextBox: Locator;
    readonly middlenameTextBox: Locator;
    readonly lastnameTextBox: Locator;
    readonly saveButton: Locator;
    readonly newEmpNameHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addemployeeButton = page.getByRole('button', { name: ' Add' })
        this.firstnameTextBox = page.getByRole('textbox', { name: 'First Name' })
        this.middlenameTextBox = page.getByRole('textbox', { name: 'Middle Name' })
        this.lastnameTextBox = page.getByRole('textbox', { name: 'Last Name' })
        this.saveButton = page.getByRole('button', { name: 'Save' })
        this.newEmpNameHeading = page.locator("//h6").nth(1);
    }

    /**
     * To add a new employee in the PIM module
     * @param firstName 
     * @param middleName 
     * @param lastName 
     */
    async addEmployee(firstName: string, middleName: string, lastName: string) {
        await this.addemployeeButton.click();
        await this.firstnameTextBox.fill(firstName);
        await this.middlenameTextBox.fill(middleName);
        await this.lastnameTextBox.fill(lastName);
        await this.saveButton.click();


    }



}