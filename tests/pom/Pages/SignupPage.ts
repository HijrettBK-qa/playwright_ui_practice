import { Page,expect } from "@playwright/test";


export default class SignupPage {
page: Page; 

constructor(page:Page){
    this.page =page; 
}

async goToSignup(){await this.page.goto("https://magento.softwaretestingboard.com/customer/account/create/")}
async disagreePop(){await this.page.getByRole('button', { name: 'DISAGREE' }).click();}
async fillFirstName(name:string){await this.page.getByRole('textbox', { name: 'First Name*' }).fill(name)}
async fillLastName(lastname:string){await this.page.getByRole('textbox', { name: 'Last Name*' }).fill(lastname);}
async fillEmail(email: string){await this.page.getByRole('textbox', { name: 'Email*' }).fill(email)};
async fillPassword(password:string){await this.page.getByRole('textbox', { name: 'Password*', exact: true }).fill(password);}
async confirmPassword(password:string){await this.page.getByRole('textbox', { name: 'Confirm Password*' }).fill(password);}
async createAccountBtn(){await this.page.getByRole('button', { name: 'Create an Account' }).click();}

async verifySignUp(){
    await expect(this.page.getByRole('alert').nth(1)).toContainText('Thank you for registering with Main Website Store.');
}
}