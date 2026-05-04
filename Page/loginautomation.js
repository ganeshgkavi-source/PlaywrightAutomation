const{expect}=require('@playwright/test')
class LoginPage{


constructor (page)
{
    this.page=page
    this.username=page.getByRole('textbox', { name: 'Enter Email' })
    this.password=page.getByRole('textbox', { name: 'Enter Password' })
    this.loginbutton=page.getByRole('button', { name: 'Sign in' })
}

async login(username,password)
{
    await this.username.fill(username)
    await this.password.fill(password)
    await this.loginbutton.click()
}

async assertSignIn()
{
   await expect(this.page.getByRole('heading', { name: 'Learn Automation Courses' })).toHaveText(/Learn/)
}
}

module.exports=LoginPage