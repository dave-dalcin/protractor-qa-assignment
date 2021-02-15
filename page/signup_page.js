const { fail } = require("assert");

var signup_page = function(){
    //locators
    let locInputUserName = "//input[@placeholder='Username']";
    let locInputEmail = "//input[@placeholder='Email']";
    let locInputPassword = "//input[@placeholder='Password']";
    let locSignUpButton = "//button[@type='submit']";
    let locSignUpText = "//h1[@class='text-xs-center']";
    let locErrorMessages = "//app-list-errors/*[@class='error-messages']";
    let locUntreatedErrorMessages = "//li[normalize-space()='error [object Object]']";
    let locUserNameBlankErrorMessage = "//li[normalize-space()=\"username can't be blank\"]";
    let locEmailBlankErrorMessage = "//li[normalize-space()=\"email can't be blank\"]";
    let locPasswordBlankErrorMessage = "//li[normalize-space()=\"password can't be blank\"]";
    let locUserNameAlreadyTakenMessage = "//li[normalize-space()='username is already taken.']";
    let locEmailAlreadyTakenMessage = "//li[normalize-space()='email is already taken.']";

    this.verifyIfSignUpPageIsLoaded = async function(){
        expect(element(by.xpath(locSignUpText)).getText()).toEqual("Sign up","Sign up page is not showing 'Sign up' text!");

    };

    this.insertText = function(myElement,myText){
        element(by.xpath(myElement)).clear();
		element(by.xpath(myElement)).sendKeys(myText)

    };
    
    this.insertUserName = function(myUserName)
	{	
		this.insertText(locInputUserName,myUserName);
	};

    this.insertEmail = function(myEmail)
	{	
		this.insertText(locInputEmail,myEmail);
	};

    this.insertPassword = function(myPassword)
	{	
		this.insertText(locInputPassword,myPassword);
	};

    this.clickOnSignUpButton = function() 
	{		
		element(by.xpath(locSignUpButton)).click();

	};

    this.verifyIfErrorMessageIsDisplayed = async function()
    {
        expect(element(by.xpath(locErrorMessages)).isPresent()).toBe(true, "BBlog is not showing error messages");
    };

    this.verifyIfUntreatedErrorMessageAreNotDisplayed = function() 
	{		
		expect(element(by.xpath(locUntreatedErrorMessages)).isPresent()).toBe(false, "BBlog is showing untreated error messages");
	};

    this.verifyIfBlankUserNameErrorIsDisplayed = function() 
	{		        
        expect(element(by.xpath(locUserNameBlankErrorMessage)).isPresent()).toBe(true, "Blank Username error message is not displayed!");
	};

    this.verifyIfBlankEmailErrorIsDisplayed = function() 
	{		        
        expect(element(by.xpath(locEmailBlankErrorMessage)).isPresent()).toBe(true, "Blank Email error message is not displayed!");
	};

    this.verifyIfBlankPasswordErrorIsDisplayed = function() 
	{		        
        expect(element(by.xpath(locPasswordBlankErrorMessage)).isPresent()).toBe(true, "Blank Password error message is not displayed!");
        //Validation fails due to Def-4. User was created without password
	};

    this.verifyIfAlreadyTakenUserNameMessageIsDisplayed = function() 
	{		        
        expect(element(by.xpath(locUserNameAlreadyTakenMessage)).isPresent()).toBe(true, "Username already taken message is not displayed!");
	};

    this.verifyIfAlreadyTakenEmailMessageIsDisplayed = function() 
	{		        
        expect(element(by.xpath(locEmailAlreadyTakenMessage)).isPresent()).toBe(true, "Email already taken message is not displayed!");
	};
};
module.exports = new signup_page();