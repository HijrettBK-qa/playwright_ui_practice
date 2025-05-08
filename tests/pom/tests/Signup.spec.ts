import { test, expect } from "../Fixtures/Fixtures"



test('Create an account',
    { tag: '@smoke' }, async ({ page, signup }) => {

        await signup.goToSignup();
        await signup.disagreePop();
        await signup.fillFirstName("testname");
        await signup.fillLastName("testLastName");
        await signup.fillEmail("test01@gmail.com")
        await signup.fillPassword("TestPassword123!")
        await signup.confirmPassword("TestPassword123!")
        await signup.createAccountBtn();

        await signup.verifySignUp();

        //Note: After creating an account, write their credentials down to a file as a new login credentials
    });

test('Create an account', async ({ page,signup }) => {
  
await signup.goToSignup();

await signup.fillFirstName("testname");
await signup.fillLastName("testLastName");
await signup.fillPassword("TestPassword123!")
await signup.confirmPassword("TestPassword123!")
await signup.verifySignUp();
    
});
