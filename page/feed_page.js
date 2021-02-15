const { fail } = require("assert");

var feed_page = function(){
    //locators
    let locPublishButton = "//button[normalize-space()='Publish Article']";
    let locEditArticleButton = "//div[@class='container']//a[@class='btn btn-sm btn-outline-secondary'][normalize-space()='Edit Article']";
    let locDeleteARticleButton = "//div[@class='container']//button[@class='btn btn-sm btn-outline-danger'][normalize-space()='Delete Article']";
 

    let locInputArticleTitle = "//input[@placeholder='Article Title']";
    let locInputArticleAbout = "//input[@placeholder=\"What's this article about?\"]";
    let locInputArticleMarkdown = "//textarea[@placeholder='Write your article (in markdown)']";
    let locInputArticleTags = "//input[@placeholder='Enter Tags']";
    let locViewPostTitle = "//h1[normalize-space()="
    let locViewPostMarkdown = "//p[normalize-space()="
    let locViewPostAbout = "//p[normalize-space()="

    //error messages
    let locArticleErrorMessages = "//app-list-errors/*[@class='error-messages']";
    let locBlankTitleError = "//li[normalize-space()=\"Title can't be blank\"]";
    let locBlankAboutError = "//li[normalize-space()=\"What's this article about? can't be blank\"]";
    let locBlankMardownError = "//li[normalize-space()=\"Write your article (in markdown) can't be blank\"]";
    let locBlankTagsError = "//li[normalize-space()=\"Enter Tags can't be blank\"]";

     
    this.verifyIfArticleEditorIsLoaded = async function(){
        expect(element(by.xpath(locPublishButton)).isPresent()).toBe(true, "Article Editor Page is not Loaded");
    };

    this.verifyIfNewPostTitleIsVisible = async function(myPostTitle){
        let myTitleXPATH = locViewPostTitle + "'" + myPostTitle + "']";
        expect(element(by.xpath(myTitleXPATH)).isPresent()).toBe(true, "Post Title '" + myPostTitle + "' is not visible. XPATH = " + myTitleXPATH);
    };

    this.verifyIfNewPostMarkdownIsVisible = async function(myPostMarkdown){
        let myMarkdownXPATH = locViewPostMarkdown + "'" + myPostMarkdown + "']";
        expect(element(by.xpath(myMarkdownXPATH)).isPresent()).toBe(true, "Markdown '" + myPostMarkdown + "' is not visible. XPATH = " + myMarkdownXPATH);
    };

    this.verifyIfNewPostAboutIsVisible = async function(myPostAbout){
        let myAboutXPATH = locViewPostAbout + "'" + myPostAbout + "']";
        expect(element(by.xpath(myAboutXPATH)).isPresent()).toBe(true, "About '" + myPostAbout + "' is not visible. XPATH = " + myAboutXPATH);
    };

    this.verifyIfErrorMessageIsDisplayed = async function()
    {
        expect(element(by.xpath(locArticleErrorMessages)).isPresent()).toBe(true, "Article Editor is not showing error messages");
    };

    this.verifyIfBlankTitleErrorIsDisplayed = function() 
	{		        
        expect(element(by.xpath(locBlankTitleError)).isPresent()).toBe(true, "Article blank Title error message is not displayed!");
	};

    this.verifyIfBlankAboutErrorIsDisplayed = function() 
	{		        
        expect(element(by.xpath(locBlankAboutError)).isPresent()).toBe(true, "Article blank About error message is not displayed!");
	};

    this.verifyIfBlankMarkdownErrorIsDisplayed = function() 
	{		        
        expect(element(by.xpath(locBlankMardownError)).isPresent()).toBe(true, "Article blank Markdown error message is not displayed!");
	};

    this.verifyIfBlankTagsErrorIsDisplayed = function() 
	{		        
        expect(element(by.xpath(locBlankTagsError)).isPresent()).toBe(true, "Article blank Tags error message is not displayed!");
	};

    this.postTitleMustNotExist = async function(removedPostTitle){
        let myTitleXPATH = locViewPostTitle + "'" + removedPostTitle + "']";
        expect(element(by.xpath(myTitleXPATH)).isPresent()).toBe(false, "Post Title '" + myPostTitle + "' was not deleted. XPATH = " + myTitleXPATH);
    };

    this.insertText = function(myElement,myText){
        element(by.xpath(myElement)).clear();
        if(myElement != ""){
            element(by.xpath(myElement)).sendKeys(myText);
        }
    };
    
    this.insertArticleTitle = function(myTitle)
	{	
		this.insertText(locInputArticleTitle,myTitle);
	};

    this.insertArticleAbout = function(myAbout)
	{	
		this.insertText(locInputArticleAbout,myAbout);
	};

    this.insertArticleMarkdown = function(myMarkdown)
	{	
		this.insertText(locInputArticleMarkdown,myMarkdown);
	};

    this.insertArticleTags = function(myTags)
	{	
		this.insertText(locInputArticleTags,myTags);
	};

    this.clickOnPublishButton = function() 
	{
		element(by.xpath(locPublishButton)).click();

	};

    this.clickOnEditArticleButton = function() 
	{
		element(by.xpath(locEditArticleButton)).click();

	};

    this.clickOnDeleteArticleButton = function() 
	{
		element(by.xpath(locDeleteARticleButton)).click();

	};

    
};
module.exports = new feed_page();