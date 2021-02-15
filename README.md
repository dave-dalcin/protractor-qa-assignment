# Environment Setup for Backbase Automation Task

## Prerequisites
* Node.js should be installed and available from command line
  * To check that Node.js is installed, run `npm` command in console
* Visual Studio Code is installed as development IDE
  * For convenience you can use build-in command line in Visual Studio Code (ctrl + ~)
* Google Chrome browser is installed

## Running webdriver-manager
Run `web-driver manager start` command in order to start selenium webdriver. Keep this instance of command line alive as web server is running there. 

## Running the tests
Run `protractor /conf/config.js` command in order to start the tests. The actual config.js file is pointing to ts03-feed-spec.js, but feel free to add all *-spec.js files to the config file

## spec files description
Path: "../test/e2e"
ts01-signup-spec.js - 5 tests to verify whether the signup functions are working. Most of the tests are expected to fail due to Defects: Def-1, Def-3, Def-4, Def-5. Please see "../manual-test-cases/QA Assignment Test Cases.xlsx" defects tab

ts02-signin-spec.js - 2 tests to verify whether the signin functions are working. Both tests are expected to fail due to Defect: Def-5: Page is requesting Username but is accepting Email instead of Username

ts03-feed-spec.js - 4 tests to verify whether the feed functions are working. All the tests are expected to fail due to login defects. However, I have performed a workaround in order to show the tests running.
TC-18 is failing once BBlog allows the user to create blank articles

Please note that Test Data was generated using random values.

## page objects
Path: "../page"
POM is used to handle the page methods in page object files.

## common functions
Path: "../res"
Functions to be used in all the tests and pages

## common functions
Path: "../report"
Report files

## manual test cases
Path: "../manual-test-cases"
Contains the Manual Test Cases scripts and the defects

## defects
Path: "../defects"
Contains the defect evidences

## introduction video
Path: "../introduction-videos"
Contains 2 videos explaining the manual and the automated tests





