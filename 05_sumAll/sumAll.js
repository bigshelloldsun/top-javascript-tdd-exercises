const sumAll = function(firstNum, lastNum) {
    let sum = 0;

    if (typeof firstNum !== 'number' || typeof lastNum !== 'number') {
        return 'ERROR';
    } else if (firstNum < 0 || lastNum < 0) {
        return 'ERROR';
    } else if (firstNum > lastNum) {
        for (;firstNum >= lastNum; firstNum--) {
            sum += firstNum;
        }
        return sum;
    } else if (firstNum < lastNum) {
        for (;firstNum <= lastNum; firstNum++) {
            sum+= firstNum;
        }
        return sum;
    }
    
};

let num1 = 5;
let num2 = '5';

console.log(typeof num1);
console.log(typeof num2);

// Do not edit below this line
module.exports = sumAll;
