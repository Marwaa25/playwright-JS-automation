import { test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager';
import {faker} from '@faker-js/faker'


test.beforeEach(async({page}) => {
    await page.goto('/', { waitUntil: 'load' });
})

test('navigate to form page @smoke', async({page}) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formLayoutPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPag()
    await pm.navigateTo().tooltilpPage()
    
})

test('parametrized methods', async({page}) => {
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(100)}@test.com`

    await pm.navigateTo().formLayoutPage()
    await pm.onFormLayoutsPage().submitUsingGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 2')
    await page.screenshot({path: 'screenshot/formsLayoursPage.png'})
    const buffer = await page.screenshot()
    console.log(buffer.toString('base64'))
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
    await page.locator('nb-card',{hasText: "Inline form"}).screenshot({path:'screenshot/InlineForm.png'})
    await pm.navigateTo().datepickerPage()
    await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(5)
    await pm.onDatePickerPage().selectDatepickerWithRangeFromToday(6,15)
})
