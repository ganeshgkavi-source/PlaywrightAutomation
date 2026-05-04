const{test,expect}=require("@playwright/test")
test("Handle iframes",async({page})=>{
await page.goto("https://docs.oracle.com/javase/8/docs/api/")
const iframe=await page.frameLocator("//frame[@name='packageFrame']")
await iframe.locator("//h1").click()
await page.pause()
}
)
