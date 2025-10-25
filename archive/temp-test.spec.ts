//import { test } from '../fixures/common-fixures';
import {test} from '../fixures/hooks-fixures';
import { expect } from "@playwright/test";
import { loginPage } from '../pages/loginPage';

/*
test.beforeEach('before each hook', async ({ loginpage }) => {
    await loginpage.navigateToLoginPage();
})

test.afterEach('After each hook', async ({ accountuserPage }) => {
    await accountuserPage.logout();
})*/

test("Temp test 1", async ({ page,gotoUrl }) => {

    //await loginpage.navigateToLoginPage();
    await page.waitForTimeout(5000);
    console.log(await page.title());

})


test("Temp test 2", async ({ page, gotoUrl }) => {
    //await loginpage.navigateToLoginPage();
    await expect(page).toHaveTitle("OrangeHRM")
})

test("Temp test 3", async ({ page, gotoUrl,logout }) => {
    //await loginpage.navigateToLoginPage();
    await expect(page).toHaveTitle("OrangeHRM")

})