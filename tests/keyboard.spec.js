const {test,expect}=require("@playwright/test")
test("Keyboard action",async ({page})=>{
    await page.goto("https://www.google.com")
    await page.locator("#APjFqb").focus()
    await page.keyboard.type("Virat Kholi!")
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")
    for (let i=0;i<"Virat Kholi".length+1;i++){
    await page.keyboard.press("ArrowLeft")}
    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")
    await page.keyboard.type("Rohit Sharma")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Control+V")   
    await page.waitForTimeout(5000)

}
)
