describe('TS-03-Feed Test Suite',function(){
    //requires Page Objects and Common functinos
    var landingPage = require('../../../page/landing_page.js');
    var topNav = require('../../../page/topnav_page.js');
    var signIn = require('../../../page/signin_page.js');
    var feed = require('../../../page/feed_page.js');
    var profile = require('../../../page/profile_page.js');
    var commonFunctions = require('../../../res/common_functions.js');

    //timeout for implicity wait ---works only for elements
    let implicitlyWaitTimeOut = 5000;
    
    //TestData
    let existentUser = "posts1";
    let existentEmail= "posts1@gmail.com";
    let existentPassword= "passwd";
    let sizeForRandomString = 5;

    //TC-14
    let newTitle = "Title" + commonFunctions.getRandomString(sizeForRandomString);
    let newAbout = "About" + commonFunctions.getRandomString(sizeForRandomString);
    let newMarkdown = "Markdown" + commonFunctions.getRandomString(sizeForRandomString);
    let newTag = "tag" + commonFunctions.getRandomString(sizeForRandomString);
    
    //TC-17
    let titleForEdition = "Title" + commonFunctions.getRandomString(sizeForRandomString);
    let aboutForEdition = "About" + commonFunctions.getRandomString(sizeForRandomString);
    let markdownForEdition = "Markdown" + commonFunctions.getRandomString(sizeForRandomString);
    let tagForEdition = "tag" + commonFunctions.getRandomString(sizeForRandomString);

    let updatedTitle = "UpdatedTitle" + commonFunctions.getRandomString(sizeForRandomString);
    let updatedAbout = "UpdatedAbout" + commonFunctions.getRandomString(sizeForRandomString);
    let updatedMarkdown = "UpdatedMarkdown" + commonFunctions.getRandomString(sizeForRandomString);
    let updatedTag = "updatedTag" + commonFunctions.getRandomString(sizeForRandomString);
    
    //TC-23
    let deleteTitle = "ToBeDeletedTitle" + commonFunctions.getRandomString(sizeForRandomString);
    let deleteAbout = "ToBeDeletedAbout" + commonFunctions.getRandomString(sizeForRandomString);
    let deleteMarkdown = "ToBeDeletedMarkdown" + commonFunctions.getRandomString(sizeForRandomString);
    let deleteTag = "ToBeDeletedTag" + commonFunctions.getRandomString(sizeForRandomString);

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

    xit('TC-14-User must be able to post a new article',function(){	
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignIn();
        signIn.verifyIfSignUpPageIsLoaded();
        //signIn.insertSignInUserName(existentUser);
        //The above commented step fails due to defect Def-5: Page is requesting Username but is accepting Email instead of Username
        signIn.insertSignInUserName(existentEmail);
        //Using existent email instead of existent user only to show this test running

        signIn.insertSignInPassword(existentPassword);
        signIn.clickOnSignInButton();
        topNav.verifyIfUserNameIsVisibleOnTopNav(existentUser);
        //Post Article
        topNav.clickOnTopNavNewPost();
        feed.verifyIfArticleEditorIsLoaded();
        feed.insertArticleTitle(newTitle);
        feed.insertArticleAbout(newAbout);
        feed.insertArticleMarkdown(newMarkdown);
        feed.insertArticleTags(newTag);
        feed.clickOnPublishButton();
        //Verifies whether article was created
        feed.verifyIfNewPostTitleIsVisible(newTitle);
        feed.verifyIfNewPostMarkdownIsVisible(newMarkdown);
        topNav.clickOnTopNavHome();
        landingPage.clickOnPopularTag(newTag);
        feed.verifyIfNewPostAboutIsVisible(newAbout);
	}
    );  

    it('TC-17-User must be able to edit an article',function(){	
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignIn();
        signIn.verifyIfSignUpPageIsLoaded();
        //signIn.insertSignInUserName(existentUser);
        //The above commented step fails due to defect Def-5: Page is requesting Username but is accepting Email instead of Username  
        signIn.insertSignInUserName(existentEmail);
        //Using existent email instead of existent user only to show this test running
        signIn.insertSignInPassword(existentPassword);
        signIn.clickOnSignInButton();
        topNav.verifyIfUserNameIsVisibleOnTopNav(existentUser);
        //creates a new article
        topNav.clickOnTopNavNewPost();
        feed.verifyIfArticleEditorIsLoaded();
        feed.insertArticleTitle(titleForEdition);
        feed.insertArticleAbout(aboutForEdition);
        feed.insertArticleMarkdown(markdownForEdition);
        feed.insertArticleTags(tagForEdition);
        feed.clickOnPublishButton();
        //edits the article
        feed.clickOnEditArticleButton();
        feed.verifyIfArticleEditorIsLoaded();
        feed.insertArticleTitle(updatedTitle);
        feed.insertArticleAbout(updatedAbout);
        feed.insertArticleMarkdown(updatedMarkdown);
        feed.insertArticleTags(updatedTag);
        feed.clickOnPublishButton();
        //verify whether the updates were saved
        feed.verifyIfNewPostTitleIsVisible(updatedTitle);
        feed.verifyIfNewPostMarkdownIsVisible(updatedMarkdown);
        topNav.clickOnTopNavHome();
        landingPage.clickOnPopularTag(updatedTag);
        feed.verifyIfNewPostAboutIsVisible(updatedAbout);        
	}
    );  

    xit('TC-18-User must be not able to post with blank fields',function(){	
        //Test case fails due to Defect Def-10
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignIn();
        signIn.verifyIfSignUpPageIsLoaded();
        //signIn.insertSignInUserName(existentUser);
        //The above commented step fails due to defect Def-5: Page is requesting Username but is accepting Email instead of Username
        signIn.insertSignInUserName(existentEmail);
        //Using existent email instead of existent user only to show this test running
        signIn.insertSignInPassword(existentPassword);
        signIn.clickOnSignInButton();
        topNav.verifyIfUserNameIsVisibleOnTopNav(existentUser);
        topNav.clickOnTopNavNewPost();
        feed.verifyIfArticleEditorIsLoaded();
        feed.clickOnPublishButton();

        //verifies whether Bblog shows blank fields error:
        feed.verifyIfBlankTitleErrorIsDisplayed();
        feed.verifyIfBlankAboutErrorIsDisplayed();
        feed.verifyIfBlankMarkdownErrorIsDisplayed();
        feed.verifyIfBlankTagsErrorIsDisplayed();
        //The above test steps will fail Due to Def-10: Bblog alows the operator to create na Article with blank fields
	}
    );  

    it('TC-23-User must be able to delete an article',function(){	
        landingPage.verifyIfPageTitleIsDisplayed();
        topNav.clickOnTopNavSignIn();
        signIn.verifyIfSignUpPageIsLoaded();
        //signIn.insertSignInUserName(existentUser);
        //The above commented step fails due to defect Def-5: Page is requesting Username but is accepting Email instead of Username
        signIn.insertSignInUserName(existentEmail);
        //Using existent email instead of existent user only to show this test running
        signIn.insertSignInPassword(existentPassword);
        signIn.clickOnSignInButton();
        topNav.verifyIfUserNameIsVisibleOnTopNav(existentUser);
        topNav.clickOnTopNavNewPost();
        feed.verifyIfArticleEditorIsLoaded();
        //inserts new article
        feed.insertArticleTitle(deleteTitle);
        feed.insertArticleAbout(deleteAbout);
        feed.insertArticleMarkdown(deleteMarkdown);
        feed.insertArticleTags(deleteTag);
        feed.clickOnPublishButton();
        feed.verifyIfNewPostTitleIsVisible(deleteTitle);
        feed.verifyIfNewPostMarkdownIsVisible(deleteMarkdown);
        //deletes the article
        feed.clickOnDeleteArticleButton();
        topNav.clickOnTopNavUser(existentUser);
        //makes sure post is not available on My Articles
        feed.postTitleMustNotExist(deleteTitle);
        //logout
        topNav.clickOnTopNavSettings();
        profile.clickOnLogoutButton();
	}
    );     
}
);
	