const {test,expect}=require('@playwright/test')
test("Verify Google Title",async ({page})=>{
await page.goto("https://google.com")
const title=await page.title()
console.log(title);
console.log(await expect(page).toHaveTitle(title));
})