import { test, expect } from "../Fixtures/Fixtures";


test('Login', async({page,login}) =>{

    await login.login("testhbk@gmail.com","Test12345!")
    await login.verifyLogin();
});