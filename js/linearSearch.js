const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    let indexOfValue = undefined;

    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        if (arrayToSearchThrough[i] === valueToFind) {
            indexOfValue = i;
        }
    }

    return indexOfValue;
};

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
    let indicesOfValues = [];
    for (let i = 0; i < arrayToSearchThrough.length; i++) {
        if (arrayToSearchThrough[i] === valueToFind) {
            indicesOfValues.push(i);
        }
    }

    return indicesOfValues;
};
