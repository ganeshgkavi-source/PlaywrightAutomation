const{test,expect}=require("@playwright/test")
test("Handle Alert",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog",async(d)=>{
        expect(d.type()).tocontain("Alert")
        expect(d.message()).tocontain("Click for JS Alert")
        d.accept()
    })
    await page.getByRole('button', { name: 'Click for JS Alert' })
}
)
test("Handle confirm",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog",async(d)=>{
        expect(d.type()).tocontain("Confirm")
        expect(d.message()).tocontain("Click for JS Confirm")
        d.dismiss()
    })
    await page.getByRole('button', { name: 'Click for JS Confirm' })
}
)
test("Handle prompt",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on("dialog",async(d)=>{
        expect(d.type()).tocontain("Prompt")
        expect(d.message()).tocontain("Click for JS Prompt")
        d.accept()
    })
    await page.getByRole('button', { name: 'Click for JS Prompt' })
}
)