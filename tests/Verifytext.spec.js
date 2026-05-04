const {test,expect}=require('@playwright/test')
test("Verify Text",async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   console.log(await page.viewportSize().width)
   console.log(await page.viewportSize().height)
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("Ganesh")
    await page.locator('button[type="submit"]').click()
    const errorMsg=await page.getByText("Invalid credentials").textContent()
    console.log(errorMsg)
    await expect(errorMsg==="Invalid credentials").toBeTruthy()
    await expect(errorMsg.includes("creden")).toBeTruthy()   
    await expect(page.getByText("Invalid Credentials")).toBeVisible()}
)