const{test,expect}=require('@playwright/test')
test("Login validation",async ({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Products')).toBeVisible()
    await page.locator('.product_sort_container').selectOption({label:"Price (low to high)"})
    const price=await page.locator('.inventory_item_price').allTextContents()
    console.log(price)
    const numprice=price.map(p => parseFloat(p.replace("$","")))
    console.log(numprice)
    await expect(numprice).toEqual([...numprice].sort((a,b)=>a-b))
})
test("Mouse Hover",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/hovers")
    await page.locator('.figure').nth(0).hover()
    await expect(page.getByText("name: user1")).toHaveText("name: user1")
})
test("File Upload",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator('#file-upload').setInputFiles("./tests/fileupload.spec.js")
    await page.getByRole('button',{name:"Upload"}).click()
    await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toHaveText("File Uploaded!")

})