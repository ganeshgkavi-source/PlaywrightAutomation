const{test,expect}=require('@playwright/test')
test("Valid Input",async ({page})=>
    {
await page.goto("https://www.saucedemo.com/")
//positive flow
await page.getByPlaceholder("Username").fill("standard_user")
await page.screenshot({path: 'D:/Ganesh/JS/Playwright Learnings/Screenshot/Valid Input/step1.png'})
await page.getByPlaceholder("Password").fill("secret_sauce")
await page.screenshot({path: 'D:/Ganesh/JS/Playwright Learnings/Screenshot/Valid Input/step2.png'})
await page.locator('#login-button').click()
await page.screenshot({path: 'D:/Ganesh/JS/Playwright Learnings/Screenshot/Valid Input/step3.png'})
await expect(page).toHaveURL(/inventory/)
await expect(page.getByText("Products")).toBeVisible()
await page.locator('#react-burger-menu-btn').click()
await page.screenshot({path: 'D:/Ganesh/JS/Playwright Learnings/Screenshot/Valid Input/step4.png'})
await page.getByRole('link', { name: 'Logout' }).click()
await page.screenshot({path: 'D:/Ganesh/JS/Playwright Learnings/Screenshot/Valid Input/step5.png'})})
test("Invalid Input",async ({page})=>
    {
//invalid login
await page.goto("https://www.saucedemo.com/")
await page.getByPlaceholder("Username").fill("locked_out_user")
await page.screenshot({path: 'Invalidip_step1.png'})
await page.getByPlaceholder("Password").fill("secret_sauce")
await page.screenshot({path: 'Invalidipstep2.png'})
await page.locator('#login-button').click()
await page.screenshot({path: 'Invalidipstep3.png'})
const errmsg=await page.getByRole('heading', { name: 'Epic sadface: Sorry, this user has been locked out.' }).textContent()
await expect(page.getByRole('heading', { name: 'Epic sadface: Sorry, this user has been locked out.' })).toHaveText("Epic sadface: Sorry, this user has been locked out.")//validated error msg is coming as expected
})
test("Empty Input",async ({page})=>
    {
//Empty Input
await page.goto("https://www.saucedemo.com/")
await page.getByPlaceholder("Username").fill("")
await page.screenshot({path: 'EmptyIp_step1.png'})
await page.getByPlaceholder("Password").fill("")
await page.screenshot({path: 'EmptyIp_step2.png'})
await page.locator('#login-button').click()
await page.screenshot({path: 'EmptyIp_step3.png'})
await expect(page.locator('h3:visible')).toHaveText("Epic sadface: Username is required")
})