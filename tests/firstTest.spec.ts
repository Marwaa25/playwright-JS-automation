import {test,expect} from 'playwright/test'

// for repetetive situation we can use the hooks

test.beforeEach(async({page}) =>{
    await page.goto('/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('the first test', async({page}) =>{
    await page.getByText('Form Layouts').click()
}) 


test('Navigate to datepicker page', async({page})=>{
    await page.getByText('Datepicker').click()
})


test('Locator syntax rules', async({page}) =>{
    //by tag name
    page.locator('input')

    //by ID
    await page.locator('#inputEmail1').click()


    //by Class
    page.locator('.shape-rectangle')

    //byattribute

    page.locator('[placeholder="Email"]')

    //by entire class value
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition cdk-focused cdk-mouse-focused"]')

    //by combining different selectors !!!!do not add space!!!!!
    page.locator('input[placeholder="Email"]')


})


test('User-Facing Locators', async({page})=>{
    await page.getByRole('textbox',{name:"Email"}).first().click()
    await page.getByRole('button',{name:"Sign in"}).first().click()
    await page.getByLabel('Email').first().click()
    await page.getByPlaceholder('Jane Doe').click()
    await page.getByText('Using the Grid').click()

    await page.getByTestId('SignIn').click()
    // await page.getByTitle('Iot Dashboard').click()

})

test('Reusing Locators', async({page})=>{
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"})
    const emailField = basicForm.getByRole('textbox',{name:"Email"})

    await emailField.fill('test@test.com')
    await basicForm.getByRole('textbox',{name: "Password"}).fill('test1@')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.getByRole('button').click()

    await expect(emailField).toHaveValue('test@test.com')
})