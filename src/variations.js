"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpper = exports.getLower = exports.getLastChar = exports.getFirstChar = exports.getNumberOfChars = void 0;
function getNumberOfChars(name) {
    // number of characters in: name
    var numberOfCharacters = name.length;
    return numberOfCharacters;
}
exports.getNumberOfChars = getNumberOfChars;
function getFirstChar(name) {
    // first character of: name
    var firstCharacter = name.charAt(0);
    return firstCharacter;
}
exports.getFirstChar = getFirstChar;
function getLastChar(name) {
    // last character of: name
    var lastCharacter = name.charAt(name.length - 1);
    return lastCharacter;
}
exports.getLastChar = getLastChar;
function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    var lowerCase = name.toLowerCase();
    return lowerCase;
}
exports.getLower = getLower;
function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    var upperCase = name.toUpperCase();
    return upperCase;
}
exports.getUpper = getUpper;
