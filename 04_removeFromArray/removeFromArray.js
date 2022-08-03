const removeFromArray = function(array, item) {
    for (i of array) {
        if (i === item) {
            return array.splice(i, i + 1);
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
