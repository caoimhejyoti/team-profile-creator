const fs = require ("fs");
var stringValidate = require ("string-validate");

const questions = [
    {name: "name",
    type: "input",
    message: "What is your name?",
    validate: function (name) {
                if (typeof name === "string"){
                    return true
                }else{
                    return ("Please enter a valid name");
                };
    }},

    {name: "id",
    type: "number",
    message: "What is your name?",
    validate: function (name) {
                if (typeof name === "string"){
                    return true
                }else{
                    return ("Please enter a valid name");
                };
    }},

    {name: "email",
    type: "input",
    message: "What is your email address?",
    validate: function (userInput) {
                const symbols = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (symbols.test(String(userInput).toLowerCase())) {
                    return true
                } else {
                    return ('Please enter a valid email!');
                };
            },
    }
];