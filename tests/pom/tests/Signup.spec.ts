import { test, expect } from "../Fixtures/Fixtures"


test('Create an account', async ({ page,signup }) => {
  
await signup.goToSignup();

await signup.fillFirstName("testname");
await signup.fillLastName("testLastName");
await signup.fillPassword("TestPassword123!")
await signup.confirmPassword("TestPassword123!")
await signup.verifySignUp();
    
});