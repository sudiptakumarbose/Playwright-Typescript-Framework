import { test, expect } from '../fixures/hooks-fixures'
import CommonUtils from '../utils/CommonUtils'
import loginModuleData from '../testData/loginModuleData.json'

test.use({
    storageState: {
        cookies: [],
        origins: []
    }
})

test.describe("Invalid Login Test", {
    tag: '@invalidLogin'
}, async () => {
    // Test to verify that the user is not able to login with incorrect username
    test('Verify that the user cannot login with invalid username', {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case link',
            description: 'Put the link of the test case here'
        }
    }, async ({ gotoUrl, loginpage, commonUtils }) => {
        const password = commonUtils.decryptData(process.env.PASSWORD!)
        await test.step("Open the URL and login with invalid username ", async () => {
            await loginpage.loginWithCredentials(loginModuleData.wrongUsername, password);

        })
        await test.step("Assertion of invalid credentials", async () => {
            await expect(loginpage.invalidcredError).toHaveText(loginModuleData.invlaidcredentialsText);
            await expect(loginpage.userName).toBeVisible();
        })


    })
    // Test to verify that the user is not able to login with incorrect password
    test('Verify that the user cannot log in with an invalid password.', {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case link',
            description: 'Put the link of the test case here'
        }
    }, async ({ gotoUrl, loginpage, commonUtils }) => {
        const userName = commonUtils.decryptData(process.env.USER_NAME!)
        await test.step("Open the URL and login with invalid password ", async () => {
            await loginpage.loginWithCredentials(userName, loginModuleData.wrongPassword);
        })
        await test.step("Assertion of invalid password", async () => {
            await expect(loginpage.invalidcredError).toHaveText(loginModuleData.invlaidcredentialsText);
            await expect(loginpage.userName).toBeVisible();
        })

    })
    // Test to verify that the user is not able to login with both incorrect username and password
    test('Verify that the user cannot login with both an invalid username and password', {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: 'Test Case link',
            description: 'Put the link of the test case here'
        }
    }, async ({ gotoUrl, loginpage, commonUtils }) => {
        await test.step("Open the URL and login with invalid username and password", async () => {
            await loginpage.loginWithCredentials(loginModuleData.wrongUsername, loginModuleData.wrongPassword);
        })
        await test.step("Assertion of invalid username and password", async () => {
            await expect(loginpage.invalidcredError).toHaveText(loginModuleData.invlaidcredentialsText);
            await expect(loginpage.userName).toBeVisible();

        })


    })
})
test.describe("Valid Login Test", {
    tag: '@validlogin'
},
    async () => {
        test("Verify that the user can login with valid username and password",
            {
                tag: ['@VISUAL', '@UAT']
            }
            , async ({ gotoUrl, loginpage, commonUtils, leftnavigationPage }) => {
                const userName = commonUtils.decryptData(process.env.USER_NAME!);
                const password = commonUtils.decryptData(process.env.PASSWORD!);
                await test.step("Loging with valid credentials", async () => {
                    await loginpage.loginWithCredentials(userName, password);
                })
                await expect(leftnavigationPage.orangeHRMLogo).toHaveScreenshot('Brand_Logo.png');
                await expect(leftnavigationPage.lefthandNavigationPlane).toHaveScreenshot('leftNavigationPlane.png');


            })

    })



