const removeFromArray = function(array, ...item) {
    item.forEach(x => {
        array.forEach(i => {
            if (i === x) {
                array.splice(array.indexOf(i), 1);
                return array;
            }
        });
        return array;
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
