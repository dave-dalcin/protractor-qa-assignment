describe('TS-02-SignIn Test Suite',function(){

    var landingPage = require('../../../page/landing_page.js');
    var topNav = require('../../../page/topnav_page.js');
    var signIn = require('../../../page/signin_page.js');
    var commonFunctions = require('../../../res/common_functions.js');

    //timeout for implicity wait ---works only for elements
    let implicitlyWaitTimeOut = 5000;
    
    //TestData
    let existentUser = "posts1";
    let existentEmail= "posts1@gmail.com";
    let existentPassword= "passwd";

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

    it('TC-06-User must be able to sign in with valid credentials',function(){	
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignIn();
        signIn.verifyIfSignUpPageIsLoaded();
        signIn.insertSignInUserName(existentUser);
        //Comment1: signIn.insertSignInUserName(existentEmail);
        signIn.insertSignInPassword(existentPassword);
        signIn.clickOnSignInButton();
        topNav.verifyIfUserNameIsVisibleOnTopNav(existentUser);
        //The above step fails due to defect Def-5: Page is requesting Username but is accepting Email instead of Username
        //If you want to see this test passing to simulate the defect, remove the comment from Comment1
	}
    );  

    it('TC-07-User must not be able to sign in with blank UserName or blank Password',function(){	
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignIn();
        signIn.verifyIfSignUpPageIsLoaded();
        //Username with blank Password
        signIn.insertSignInUserName(existentUser);
        signIn.insertSignInPassword("");
        signIn.clickOnSignInButton();
        signIn.verifyIfBlankSignInPasswordErrorIsDisplayed();

        //Blank Username with Password
        signIn.insertSignInUserName("");
        signIn.insertSignInPassword(existentPassword);
        signIn.clickOnSignInButton();
        signIn.verifyIfBlankSignInUserNameErrorIsDisplayed();
        //The above step fails due to defect Def-5: Page is requesting Username but is accepting Email instead of Username
	}
    );  
    
    
}
);
	