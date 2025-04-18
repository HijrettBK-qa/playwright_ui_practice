import { Page,expect } from "@playwright/test";


export default class SignupPage {
page: Page; 

constructor(page:Page){
    this.page =page; 
}

async goToSignup(){await this.page.goto("https://magento.softwaretestingboard.com/customer/account/create/")}
async fillFirstName(name:string){await this.page.getByRole('textbox', { name: 'First Name*' }).fill(name)}
async fillLastName(lastname:string){await this.page.getByRole('textbox', { name: 'Last Name*' }).fill(lastname);}
async fillEmail(email: string){await this.page.getByRole('textbox', { name: 'Email*' }).fill(email)};
async fillPassword(password:string){await this.page.locator('[id="customer\\.password"]').fill(password);}
async confirmPassword(password:string){await this.page.locator('#repeatedPassword').fill('Test12345!');}
async createAccountBtn(){await this.page.getByRole('button', { name: 'Create an Account' }).click();}

async verifySignUp(){
    expect (await this.page.getByRole("alert")).toContainText(/Thank you for registering/i)
}
}