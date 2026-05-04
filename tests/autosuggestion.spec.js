const{test,expect}=require("@playwright/test")
test("Autocomplete selection using KB",async({page})=>{
    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").fill("Virat Kholi")
    await page.waitForSelector('li.sbct,div.sbct')
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(6000)
})
test("Autocomplete selection based on text",async({page})=>{
    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").fill("Virat Kohli")
    await page.waitForSelector('li.sbct,div.sbct')
    const elements=await page.$$('li.sbct,div.sbct')
    for (let i=0;i<elements.length;i++){
        const value=(await elements[i].textContent()).trim()
        if(value.toLowerCase().includes("wife"))
        {   
            console.log("Clicking suggestion:", value)
            await elements[i].click()
            await page.waitForTimeout(5000)
            break
        }
    }
})