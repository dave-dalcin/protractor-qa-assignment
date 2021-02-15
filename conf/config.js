//Protractor Test Cases config
var reporter = require('C:/Users/daved/AppData/Roaming/npm/node_modules/protractor-jasmine2-html-reporter');
var reportPath = '../report';

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub/',
	directConnect: true,
	capabilities: {
		'browserName' : 'chrome'
	}
	, restartBrowserBetweenTests: true
	, framework: 'jasmine',
	specs: ['../test/e2e/feed/*-spec.js'],
	jasmineNodeOpts: {
		defaultTimeoutInterval:	30000	
	},
	onPrepare: function() {
		jasmine.getEnv().addReporter(
		  new reporter({
			savePath: reportPath
		  })
		);
	 }
	
	
};