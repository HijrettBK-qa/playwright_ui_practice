import { test as setup,expect } from "@playwright/test";

setup("Create customer 1 auth", async ({ page,context }) => {

    //Note for me: Find a way to use pom with it

    const email = "testhbk@gmail.com";
    const password = "Test12345!";
    const customer1AuthFile = ".auth/customer01.json";

    await page.goto("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/");
    await page.getByRole('button', { name: 'DISAGREE' }).click();
    await page.getByRole('textbox', { name: 'Email*' }).fill(email);
    await page.getByRole('textbox', { name: 'Password* Password' }).fill(password);
    await page.getByRole("button", { name: "Sign In" }).click()

    //login validation
    await expect(page.locator("span.logged-in").nth(0)).toContainText('Test hbk');
    await context.storageState({path: customer1AuthFile});
    

})