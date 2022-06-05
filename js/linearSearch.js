const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

// Basic version
exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        if (arrayToSearchThrough[i] === valueToFind) {
            return i;
        }
    }
    return undefined;
};

// Global version
exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    let indicesOfValues = [];
    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        if (arrayToSearchThrough[i] === valueToFind) {
            indicesOfValues.push(i);
        }
    }

    return indicesOfValues;
};