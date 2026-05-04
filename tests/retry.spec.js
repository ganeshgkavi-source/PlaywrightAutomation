const{test,expect}=require('@playwright/test')
test("Valid Input",async ({page})=>
    {
await page.goto("https://www.saucedemo.com/")
//positive flow
await page.getByPlaceholder("Username").fill("standard_user")
await page.getByPlaceholder("Password").fill("secret_sauce")
await page.locator('#login-button').click()
await expect(page).toHaveURL(/inventory/)
await expect(page.getByText("Products")).toBeVisible()
await page.locator('#react-burger-menu-btn').click()
await page.getByRole('link', { name: 'Logout' }).click()})