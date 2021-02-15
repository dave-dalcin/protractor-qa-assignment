const { fail } = require("assert");

var signin_page = function(){
    //locators
    let locInputSignInUserName = "//input[@placeholder='Username']";
    let locInputSignInPassword = "//input[@placeholder='Password']";
    let locSignInButton = "//button[normalize-space()='Sign in']";
    let locSignInText = "//h1[normalize-space()='Sign in']";
    let locSignInErrorMessages = "//app-list-errors/*[@class='error-messages']";
    let locSignInUntreatedInErrorMessages = "//li[normalize-space()='error [object Object]']";
    let locSignInUserNameBlankErrorMessage = "//li[normalize-space()=\"username can't be blank\"]";
    let locSignInPasswordBlankErrorMessage = "//li[normalize-space()=\"password can't be blank\"]";
    
    this.verifyIfSignUpPageIsLoaded = async function(){
        expect(element(by.xpath(locSignInText)).getText()).toEqual("Sign in");

    };

    this.insertText = function(myElement,myText){
        element(by.xpath(myElement)).clear();
        if(myElement != ""){
            element(by.xpath(myElement)).sendKeys(myText);
        }
		

    };
    
    this.insertSignInUserName = function(myUserName)
	{	
		this.insertText(locInputSignInUserName,myUserName);
	};

    this.insertSignInPassword = function(myPassword)
	{	
		this.insertText(locInputSignInPassword,myPassword);
	};

    this.clickOnSignInButton = function() 
	{		
		element(by.xpath(locSignInButton)).click();

	};

    this.verifyIfErrorMessageIsDisplayed = async function()
    {
        expect(element(by.xpath(locSignInErrorMessages)).isPresent()).toBe(true, "BBlog is not showing error messages");
    

    };

    this.verifyIfUntreatedErrorMessageAreNotDisplayed = function() 
	{		
		this.verifyIfErrorMessageIsDisplayed();
        expect(element(by.xpath(locSignInUntreatedInErrorMessages)).isPresent()).toBe(false, "BBlog is showing untreated error messages");
	};

    this.verifyIfBlankSignInUserNameErrorIsDisplayed = function() 
	{		        
        this.verifyIfErrorMessageIsDisplayed();
        expect(element(by.xpath(locSignInUserNameBlankErrorMessage)).isPresent()).toBe(true, "Blank Username error message is not displayed!");
	};

    this.verifyIfBlankSignInPasswordErrorIsDisplayed = function() 
	{	
        this.verifyIfErrorMessageIsDisplayed();	        
        expect(element(by.xpath(locSignInPasswordBlankErrorMessage)).isPresent()).toBe(true, "Blank Password error message is not displayed!");
	};
    
};
module.exports = new signin_page();