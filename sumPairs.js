function sumPairs(array) {
    var result = [];

    for (var i = 0; i < array.length; i += 2) {
        var value1  = Number.isSafeInteger(array[i]);
        var value2;

        if (!value1) {
            result.push('skipped');
            continue;
        }

        value1 = array[i];

        if (typeof array[i + 1] !== 'undefined') {
            value2 = Number.isSafeInteger(array[i + 1]);

            if (!value2) {
                result.push('skipped');
                continue;
            }

            value2 = array[i + 1];
        } else {
            value2 = 0;
        }

        var pairTotal =  Number.isSafeInteger(value1 + value2) && (value1 + value2);

        if (pairTotal) {
            result.push(pairTotal)
        } else {
            result.push('skipped')
        }
    }

    return result;
}
