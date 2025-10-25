import { test } from '../fixures/common-fixures';
import { expect } from 'playwright/test';

test('Global steup for auto login', {
    tag: ['@UI', '@UAT', '@dev'],
    annotation: {
        type: 'Test Case link',
        description: 'Put the link of the test case here'
    }
}, async ({ page, loginpage, dashboardpage, commonUtils }) => {

    const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
    const decyptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
    await test.step("Navigate to the login URL", async () => {
        await loginpage.navigateToLoginPage();
    })
    await test.step("Login with credentials", async () => {
        await loginpage.loginWithCredentials(decryptedUsername, decyptedPassword);
        await page.waitForURL(process.env.BASE_URL + '/web/index.php/dashboard/index');
    })
    await test.step("Assert that the user lands on th dashboard page", async () => {
        await expect(dashboardpage.dashboardTitleText).toHaveText("Dashboard");
    })

    // saving the state so that the user does not need to login on each step
    await page.context().storageState({
        path: './playwright/.auth/auth.json'
    })


})