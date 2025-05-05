import { test, expect } from "../Fixtures/Fixtures";


test('Login without auth', async({page,login}) =>{

    await login.login("testhbk@gmail.com","Test12345!")
    await login.verifyLogin();
});

test.describe("Login with customer 01 auth",()=> {
    test.use({storageState: ".auth/customer01.json"});

    test.beforeEach("goto the page",async({page})=>{
        await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/");
    })
    test('Auth validation', async({page}) =>{
 
        await expect(page.title()).not.toBe("Customer Login")
    });  


})
