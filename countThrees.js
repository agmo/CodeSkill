function countThreesInRange(rangeStart, rangeStop) {
    if (!isInputValid(rangeStart, rangeStop)) {
        return 'Invalid input';
    }

    return countThreesForZeroToNumber(rangeStop) - countThreesForZeroToNumber(rangeStart - 1);

    function countThreesForZeroToNumber(number) {
        var threesCount = 0;
        var firstDigit;
        var orderOfMagnitude;

        while (number > 0) {
            orderOfMagnitude = getOrderOfMagnitude(number);
            firstDigit = Math.floor(number / Math.pow(10, orderOfMagnitude));

            if (firstDigit <= 3) {
                threesCount += firstDigit * getMaxSingleDigitCount(orderOfMagnitude);
            } else if (firstDigit > 3) {
                threesCount += (firstDigit - 1) * getMaxSingleDigitCount(orderOfMagnitude) + Math.pow(10, orderOfMagnitude);
            }

            number = number % Math.floor(Math.pow(10, orderOfMagnitude));

            if (firstDigit === 3) {
                threesCount += (number + 1);
                break;
            }
        }

        return threesCount;

        function getOrderOfMagnitude(number) {
            return Math.floor(Math.log10(number));
        }
    }

    function isInputValid(rangeStart, rangeStop) {
        return Number.isSafeInteger(rangeStart) && Number.isSafeInteger(rangeStop) &&
            (rangeStop >= rangeStart) &&
            rangeStart >= 0 ;
    }
}

/////////////////////////////////
function getMaxSingleDigitCount(orderOfMagnitude) {
    var result = 0;
    var i = 1;

    while (orderOfMagnitude > 0) {
        result = result * 9 + (0.1 * Math.pow(10, i));
        orderOfMagnitude--;
        i++;
    }

    return result;
}

/**
 * Polyfill
 * https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Math/log10
 * @type {Function}
 */
Math.log10 = Math.log10 || function (x) {
        return Math.log(x) * Math.LOG10E;
    };

/**
 * Polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
 * @type {Function}
 */
Number.isSafeInteger = Number.isSafeInteger || function (value) {
        return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
    };