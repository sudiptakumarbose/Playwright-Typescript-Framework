import { test, expect } from '../fixures/hooks-fixures'
import pimData from '../testData/pimModuleData.json'


test('Verify that the employee is successfully added under the PIM page',{
    tag:['@UI','@UAT']
}, async ({ gotoUrl, leftnavigationPage, pimPage }) => {
    await test.step("open Pim Page",async()=>{
        await leftnavigationPage.openPimPage();
    })
    await test.step("Add Employee in Pim page",async()=>{
         await pimPage.addEmployee(pimData.firstName, pimData.middleName, pimData.lastName);
         await expect(pimPage.newEmpNameHeading).toHaveText(`${pimData.firstName} ${pimData.lastName}`);
    })
   
    
})