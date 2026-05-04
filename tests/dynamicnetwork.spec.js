const {test,expect}=require('@playwright/test')
test("Handle Dynamic Network",async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByRole('link', { name: 'New user? Signup' }).click()
    await page.waitForLoadState("networkidle")
    await page.waitForSelector('.interests-div')
    const count=await page.locator("//input[@type='checkbox']").count()
    expect(count).toBe(10)
    
})