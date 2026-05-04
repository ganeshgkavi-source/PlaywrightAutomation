const {test,expect}=require('@playwright/test')
const {LoginPage}=require('../Page/LoginPage')
test("Login Validation",async ({page}) =>
{
  const loginpage=new LoginPage(page)
  await page.goto("https://www.saucedemo.com/")
  await loginpage.login("standard_user","secret_sauce")


})