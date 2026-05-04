const{expect}=require('@playwright/test')
class HomePage{


constructor (page){
    this.page=page
    this.menu=page.getByRole('img', { name: 'menu' })
    this.signout=page.getByRole('button', { name: 'Sign out' })
    
}

async homePage()
{
    await this.menu.click()
    await this.signout.click()
}
async assertSignOut()
{
    await expect(this.page.getByRole('heading', { name: 'Sign In' }).first()).toHaveText(/Sign/)
    
}
}


module.exports=HomePage