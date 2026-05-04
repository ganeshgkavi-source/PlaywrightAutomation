const{test,expect}=require('@playwright/test')
test("Multiple tabs",async ({browser})=> {
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newpage]=await Promise.all([
                                    context.waitForEvent("page"),
                                    page.locator("//div[@class='container-child']//a[4]").click()

                                    ])
    await newpage.getByLabel('Email address or phone number').fill("9500140568")
    await newpage.waitForTimeout(6000)
    await newpage.close()
    await page.getByRole('textbox', { name: 'Enter Email' }).fill("ganesh")
    await page.waitForTimeout(6000)
})