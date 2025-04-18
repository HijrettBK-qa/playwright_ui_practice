import { test as base } from '@playwright/test'; 
import SignupPage from '../Pages/SignupPage';

// Declare the types of your fixtures.
type myFixtures = {

signup: SignupPage;


}
// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.

export const test = base.extend<myFixtures>({  // test i "MyFixtures" olarak extend et
    signup: async ({ page }, use) => {
  
      // set up fixture and Use the fixture value in the test.
      await use(new SignupPage(page));  //use, promise donduren bi function. that's why we use "await" here. use sayesinde, signup nesnesi cagirildigi her yerde kullanilabilir artik
    }
})

export { expect, APIRequestContext, Cookie } from '@playwright/test';
