import { test as baseTest } from './common-fixures'

type hooksfixureType = {
    gotoUrl: any;
    logout: any;
}

export const test =baseTest.extend<hooksfixureType>({
    gotoUrl: async ({ loginpage }, use) => {
        await loginpage.navigateToLoginPage();
        await use();

    },
    logout:async({accountuserPage},use)=>{
        await use();
        await accountuserPage.logout();

    }
})

export {expect} from '@playwright/test'