"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Defining
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
// Defining Parameter Types
function signUpUser(name, email, isPaid) { }
// Default Parameters
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("terrence");
signUpUser("terrence", "terrencejung928@gmail.com", true);
loginUser("t", "t@t.com");
