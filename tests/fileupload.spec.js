const {test,expect}=require('@playwright/test')
test("File upload",async ({page}) =>
    {
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("D:\\Ganesh\\JS\\Playwright Learnings\\Screenshot\\Valid Input\\step1.png")
    await page.locator("#file-submit").click()
    await expect(page.locator("//h3")).toHaveText("File Uploaded!")
})