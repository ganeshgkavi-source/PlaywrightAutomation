const {test,expect}=require('@playwright/test')
//test.use({viewport:{width:600,height:600}})
test("Maximizewindowsize",async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   console.log(await page.viewportSize().width)
   console.log(await page.viewportSize().height)
})