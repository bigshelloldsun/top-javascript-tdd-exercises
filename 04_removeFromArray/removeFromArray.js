const removeFromArray = function(array, ...list) {
    list.forEach(listItem => {
        array.forEach(arrItem => {
            if (arrItem === listItem) {
                array.splice(array.indexOf(arrItem), 1);
                return array;
            }
        });
        return array;
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
