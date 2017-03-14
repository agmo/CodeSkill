function sumPairs(array) {
    var result = [];

    for (var i = 0; i < array.length; i += 2) {
        var value1  = Number.isSafeInteger(array[i]) && array[i];
        var value2 = typeof array[i + 1] !== 'undefined' ? (Number.isSafeInteger(array[i+1])) && array[i + 1] : 0;
        var pairTotal =  Number.isSafeInteger(value1 + value2) && (value1 + value2);

        if (pairTotal) {
            result.push(pairTotal)
        } else {
            result.push('skipped')
        }
    }

    return result;
}
