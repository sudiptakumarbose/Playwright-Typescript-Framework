import { test as baseTest } from '@playwright/test'
import { loginPage } from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'
import { userPage } from '../pages/userPage'
import { leftnavigationPage } from '../pages/leftnavigationPage'
import { pimPage } from '../pages/pimPage'


type pomFixuresType = {

    loginpage: loginPage
    dashboardpage: dashboardPage
    accountuserPage: userPage;
    leftnavigationPage: leftnavigationPage
    pimPage: pimPage

}

export const test = baseTest.extend<pomFixuresType>({
    loginpage: async ({ page }, use) => {

        await use(new loginPage(page));
    },
    dashboardpage: async ({ page }, use) => {
        await use(new dashboardPage(page));
    },
    accountuserPage: async ({ page }, use) => {
        await use(new userPage(page));
    },
    leftnavigationPage: async ({ page }, use) => {
        await use(new leftnavigationPage(page))

    },
    pimPage: async ({ page }, use) => {
        await use(new pimPage(page))
    }
})

