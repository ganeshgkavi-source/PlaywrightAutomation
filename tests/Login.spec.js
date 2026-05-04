const {test,expect}=require('@playwright/test')
test("Login test",async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").type("Admin",{delay:200})
    await page.getByPlaceholder("Password").type("admin123",{delay:100})
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/dashboard/)
    await page.getByAltText("profile picture").first().click()
    await page.getByRole('menuitem', { name: 'Logout' }).click()
    await expect(page).toHaveURL(/login/)
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("wrong123")
    await page.getByRole('button', { name: 'Login' }).click();
    //found this getbytext using selectorshub
    await expect(page.getByText('Invalid credentials')).toBeVisible()
    await expect(page).toHaveURL(/login/)
    await page.getByPlaceholder("Username").clear()
    await page.getByPlaceholder("Password").clear()
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/dashboard/);
 await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

})