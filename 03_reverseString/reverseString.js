const reverseString = function(string) {
    let stringArray = Array.from(string);
    let newString = [];

    for (let i = string.length; i >= 0; i--) {
        newString.push(stringArray[i]);
    }
    return newString.toString().replace(/,/g, '');
};

// Do not edit below this line
module.exports = reverseString;
