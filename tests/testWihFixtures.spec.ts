import { test} from '../test-options'
import {faker} from '@faker-js/faker'


// test.beforeEach(async({page}) => {
//     await page.goto('/', { waitUntil: 'load' });
// })
  


test('parametrized methods', async({pageManager}) => {
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(100)}@test.com`

    // await pm.navigateTo().formLayoutPage()
    await pageManager.onFormLayoutsPage().submitUsingGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 2')
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
   
})
