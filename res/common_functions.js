const { fail } = require("assert");

var common_functions = function(){

    const BASIC_LOGIN = "candidatex";
    const BASIC_PASS = "qa-is-cool";

    this.getRandomString = function(length) {
        var string = '';
        var letters = 'abcdefghijklmnopqrstuvwxyz1234567890'
        for (i = 0; i < length; i++) {
            string += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return string;
    };

    this.returnBblogURL = function(){

        let appUrl = 'https://'+ BASIC_LOGIN + ":" + BASIC_PASS + '@qa-task.backbasecloud.com/';
        return appUrl;
    }
    
    
};
module.exports = new common_functions();