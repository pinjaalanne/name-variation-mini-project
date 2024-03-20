"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var variations_ts_1 = require("./variations.ts");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var answer5 = document.querySelector("#answer5");
var name = document.querySelector("#your-name");
name.addEventListener("keyup", function () {
    var value = name.value;
    var nbChars = (0, variations_ts_1.getNumberOfChars)(value);
    var firstChar = (0, variations_ts_1.getFirstChar)(value);
    var lastChar = (0, variations_ts_1.getLastChar)(value);
    var lower = (0, variations_ts_1.getLower)(value);
    var upper = (0, variations_ts_1.getUpper)(value);
    answer1.textContent = nbChars.toString();
    if (typeof firstChar === "string") {
        answer2.textContent = firstChar;
    }
    if (typeof lastChar === "string") {
        answer3.textContent = lastChar;
    }
    if (typeof lower === "string") {
        answer4.textContent = lower;
    }
    if (typeof upper === "string") {
        answer5.textContent = upper;
    }
});
