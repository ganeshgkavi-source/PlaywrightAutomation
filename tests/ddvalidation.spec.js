const {test,expect}=require('@playwright/test')
test("dropdown validation",async ({page}) =>
    {
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator('#state').selectOption({label:"Goa"})
    await page.waitForTimeout(1000)
    await page.locator('#state').selectOption({value:"Tamil Nadu"})
    await page.waitForTimeout(1000)
    await page.locator('#state').selectOption({index:7})
    await page.waitForTimeout(1000)
    // verifying tamil nadu present in the list or not
    const value=await page.locator("#state").textContent()
    await expect(value.includes("Tamil Nadu")).toBeTruthy()
    let states= await page.$("#state")
    let allelement= await states.$$("Option")
    let ddstatus=false
    for (let i=0;i<allelement.length;i++)
    {
        let val=allelement[i]
        let statevalues=await val.textContent()
        if(statevalues.includes("Tamil Nadu"))
        {
            ddstatus=true
            break
        }
        console.log("List of values in the drop down:"+statevalues)
    }
    await expect(ddstatus).toBeTruthy()
    //Handling multiple dropdowns
    await page.locator("#hobbies").selectOption(['Playing','Reading','Swimming'])
    await page.waitForTimeout(5000)
})



