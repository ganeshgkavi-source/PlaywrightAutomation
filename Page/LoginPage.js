class LoginPage{
    constructor(page){
        this.page=page
        this.username=page.getByPlaceholder("Username")
        this.password=page.getByPlaceholder("Password")
        this.loginbutton=page.locator('#login-button')
    }

    async login(Username,Password){
        await this.username.fill(Username)
        await this.password.fill(Password)
        await this.loginbutton.click()
    }
}
module.exports={LoginPage}