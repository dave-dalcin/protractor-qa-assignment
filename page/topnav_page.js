var topnav_page = function(){
    //locators
    let locSignUpTopNav = "//a[@routerlink='/register']";
    let locSignInTopNav = "//a[@routerlink='/login']";
    let locNewPostTopNav = "//a[@routerlink='/editor']";
    let locSettingsTopNav = "//a[@routerlink='/settings']";
    let locUserNameTopNav = " //a[@class='nav-link'][@href='#/profile";
    let locHomeTopNav = "//a[normalize-space()='Home']";



    this.clickOnTopNavSignUp = function() 
	{		
		element(by.xpath(locSignUpTopNav)).click();

	};

    this.clickOnTopNavSignIn = function() 
	{		
		element(by.xpath(locSignInTopNav)).click();

	};

    this.clickOnTopNavNewPost = function() 
	{		
		element(by.xpath(locNewPostTopNav)).click();

	};

    this.clickOnTopNavHome = function() 
	{		
		element(by.xpath(locHomeTopNav)).click();

	};

    this.clickOnTopNavUser = function (logedUser)
    {
        let myLogedUser = logedUser.toLowerCase();
        let myElement = locUserNameTopNav + "/" + myLogedUser + "']";
        element(by.xpath(myElement)).click();

    }

    this.clickOnTopNavSettings = function()
    {
        element(by.xpath(locSettingsTopNav)).click();

    }

    this.verifyIfUserNameIsVisibleOnTopNav = async function(myUserNameTopNav)
    {
        let myUserName = myUserNameTopNav.toLowerCase();
        let myElement = locUserNameTopNav + "/" + myUserName + "']";
    
        		        
        expect(element(by.xpath(myElement)).isPresent()).toBe(true, "User " + myUserName + " is not logged!");
    };

    
};
module.exports = new topnav_page();
