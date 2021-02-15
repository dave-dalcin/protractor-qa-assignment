const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const landing_page = require('../../../page/landing_page.js');
const signup_page = require('../../../page/signup_page.js');


describe('TS-01-SignUp Test Suite',function(){
    var landingPage = require('../../../page/landing_page.js');
    var topNav = require('../../../page/topnav_page.js');
    var signUp = require('../../../page/signup_page.js');
    var commonFunctions = require('../../../res/common_functions.js');

    //timeout for implicity wait ---works only for elements
    let implicitlyWaitTimeOut = 5000;
    
    
    //TestData
    let sizeForRandomString = 5;
    let newUserName = "User1" + commonFunctions.getRandomString(sizeForRandomString);
    let newEmail = newUserName + "@gmail.com";
    let newPassword = "Passwd" + commonFunctions.getRandomString(sizeForRandomString);
    let newInvalidUserName = "InvalidUser1" + commonFunctions.getRandomString(sizeForRandomString);
    let newInvalidEmail = newInvalidUserName + "@gmail.com";
    let newInvalidPassword = "InvalidPasswd" + commonFunctions.getRandomString(sizeForRandomString);
    let alreadyTakenUser = "negative";
    let alreadyTakenEmail = "negative@gmail.com";

    beforeEach(function(){
        browser.get(commonFunctions.returnBblogURL());
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(implicitlyWaitTimeOut);
    }
    );

    afterEach(function(){
        browser.close();
    }
    );


    it('TC-01-User must be able to create a new account',function(){	
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignUp();
        signUp.verifyIfSignUpPageIsLoaded(); 
        //test case fails on step above due to Def-1:Sign Up page is showing Sign In text instead of Sign Up
        signUp.insertUserName(newUserName);
        signUp.insertEmail(newEmail);
        signUp.insertPassword(newPassword);
        signUp.clickOnSignUpButton();
        topNav.verifyIfUserNameIsVisibleOnTopNav(newUserName);
	}
    );  

    it('TC-02-User must not be able to sign up without all the attributes',function(){	
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignUp();
        signUp.verifyIfSignUpPageIsLoaded(); 
        //test case fails on step above due to Def-1:Sign Up page is showing Sign In text instead of Sign Up
        signUp.insertUserName("");
        signUp.insertEmail("");
        signUp.insertPassword("");
        signUp.clickOnSignUpButton();
        signUp.verifyIfErrorMessageIsDisplayed();
        signUp.verifyIfUntreatedErrorMessageAreNotDisplayed();
        //test case fails on step above due to def-3: Untreated error message
        signUp.verifyIfErrorMessageIsDisplayed();
        signUp.verifyIfBlankUserNameErrorIsDisplayed();
        signUp.verifyIfBlankEmailErrorIsDisplayed();
        signUp.verifyIfBlankPasswordErrorIsDisplayed();
        ////test case fails on step above due to Def-4. User was created without password   
	}
    );  

    it('TC-03-User must not be able to sign up without password',function(){	
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignUp();
        signUp.verifyIfSignUpPageIsLoaded(); 
        //test case fails on step above due to Def-1:Sign Up page is showing Sign In text instead of Sign Up
        signUp.insertUserName(newInvalidUserName);
        signUp.insertEmail(newInvalidEmail);
        signUp.insertPassword("");
        signUp.clickOnSignUpButton();
        signUp.verifyIfErrorMessageIsDisplayed();
        //test case fails on step above due to Def-4. User was created without password
        //BBlog will not show any error message and the user will be able to signup without password
        signUp.verifyIfUntreatedErrorMessageAreNotDisplayed();
        signUp.verifyIfBlankPasswordErrorIsDisplayed();
	}
    );  

    it('TC-04-User must not be able to sign up without username or without email',function(){	
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignUp();
        signUp.verifyIfSignUpPageIsLoaded(); 
        //test case fails on step above due to Def-1:Sign Up page is showing Sign In text instead of Sign Up
        
        //Credentials without UserName
        signUp.insertEmail(newInvalidEmail);
        signUp.insertPassword(newInvalidPassword);
        signUp.insertUserName("");
        signUp.clickOnSignUpButton();
        signUp.verifyIfErrorMessageIsDisplayed();
        signUp.verifyIfBlankUserNameErrorIsDisplayed();

         //Credentials without Email
         signUp.insertUserName(newInvalidUserName);
         signUp.insertPassword(newInvalidPassword);
         signUp.insertEmail("");
         signUp.clickOnSignUpButton();
         signUp.verifyIfErrorMessageIsDisplayed();
         signUp.verifyIfBlankEmailErrorIsDisplayed();    
	}
    );  

    it('TC-05-User must not be able to sign up with already taken credentials',function(){	
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignUp();
        signUp.verifyIfSignUpPageIsLoaded(); 
        //test case fails on step above due to Def-1:Sign Up page is showing Sign In text instead of Sign Up
        //Username and elmail already taken
        signUp.insertUserName(alreadyTakenUser);
        signUp.insertEmail(alreadyTakenEmail);
        signUp.insertPassword(newPassword);
        signUp.clickOnSignUpButton();
        signUp.verifyIfErrorMessageIsDisplayed();
        signUp.verifyIfUntreatedErrorMessageAreNotDisplayed();
        signUp.verifyIfAlreadyTakenUserNameMessageIsDisplayed();
        signUp.verifyIfAlreadyTakenEmailMessageIsDisplayed();
	}
    );  
    
}
);
	