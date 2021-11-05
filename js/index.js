const { oddNum, evenNum } = require('./var');
const checkOddorEven = require('./func');

function checkStringOddorEven(str) {
    if (str.length % 2 == 0) {
        return evenNum;
    }
    return oddNum;
}

console.log(checkOddorEven(10));
console.log(checkStringOddorEven('hello'));