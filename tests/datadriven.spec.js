const{test,expect}=require('@playwright/test')
const testdata=JSON.parse(JSON.stringify(require("../testdata.json")))
test.describe("data driven",function()
{
    for(const data of testdata)
        {
    test.describe(`Login page ${data.id}`,function(){
    test("Login",async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByRole('textbox', { name: 'Enter Email' }).fill(data.username)
    await page.getByRole('textbox', { name: 'Enter Password' }).fill(data.password)
        })

        })

    }
    })

