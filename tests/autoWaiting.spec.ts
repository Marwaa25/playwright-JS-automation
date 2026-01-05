import {test,expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto(process.env.URL)
    await page.getByText('Button Triggering AJAX Request').click()  
})

test('auto waiting',async({page}) => {
    const succesButton = page.locator('.bg-success')

    // await succesButton.click()

    // const text = await succesButton.textContent()
    // await succesButton.waitFor({state: "attached"})
    // const text = await succesButton.allTextContents()


    // expect(text).toContain('Data loaded with AJAX get request.')

    await expect(succesButton).toHaveText('Data loaded with AJAX get request.',{timeout: 20000})
})

test('alternative waits', async({page}) => {
    const succesButton = page.locator('.bg-success')

    // wait for element

    // await page.waitForSelector('.bg-success')

    // wait for a particular response
    // await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    // const text = await succesButton.allTextContents()
    // expect(text).toContain('Data loaded with AJAX get request.')
})

test('timeouts', async({page}) => {

    const succesButton = page.locator('.bg-success')
    await succesButton.click()
})
