var profile_page = function(){
    //locators
    let locLogoutButton = "//button[normalize-space()='Or click here to logout.']";
    
    this.clickOnLogoutButton = function() 
	{		
		element(by.xpath(locLogoutButton)).click();

	};
    

    
};
module.exports = new profile_page();
