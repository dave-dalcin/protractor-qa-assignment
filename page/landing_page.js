var landing_page = function(){
    var pageTittle = 'BBlog';
	//locators
    let locPopularTag = "//a[normalize-space()='";
	
    this.verifyIfPageTitleIsDisplayed = function(){
		expect (browser.getTitle()).toEqual(pageTittle);
	};

	this.goToBblogLandingPage = function(){
		if(this.getPageTittle){
			return true;
		}

	};

	this.clickOnPopularTag = function(myTag) 
	{		
		let myXPATH = locPopularTag + myTag + "']";
		element(by.xpath(myXPATH)).click();

	};



};
module.exports = new landing_page();
