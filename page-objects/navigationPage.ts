import {Locator, Page} from '@playwright/test'
import { HelperBase } from './helperBase'


//playwright recommand separate locators from the functional methods


export class NavigationPage extends HelperBase{

    readonly formLayoutMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toastrMenuItem: Locator
    readonly tootltipMenuItem: Locator

    constructor(page: Page){
        super(page)
        this.formLayoutMenuItem = page.getByText('Form Layout')
        this.datePickerMenuItem = page.getByText('Datepicker')
        this.smartTableMenuItem = page.getByText('Smart Table')
        this.toastrMenuItem = page.getByText('Toastr')
        this.tootltipMenuItem = page.getByText('Tooltip')

    }

    async formLayoutPage(){
        await this.selectGroupMenuItem('Forms')
        await this.formLayoutMenuItem.click()
        await this.waitForNumberOfSeconds(2)
    }

    async datepickerPage(){
        await this.selectGroupMenuItem('Forms')
        await this.datePickerMenuItem.click()
    }
    
    async smartTablePage(){
        await this.selectGroupMenuItem('Tables & Data')
        await this.smartTableMenuItem.click()
    }

    async toastrPag(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toastrMenuItem.click()

    }

    async tooltilpPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tootltipMenuItem.click()
        }
    
    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')

        if(expandedState == "false")
            await groupMenuItem.click()
    }
    
}