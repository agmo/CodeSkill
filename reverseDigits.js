function reverseDigits(number) {
    var negative = number < 0;
    var stringified = Math.abs(number).toString();
    var result = stringified
        .split('')
        .reverse()
        .join('')
        .trimLeadingZeros();

    return negative ? Number('-' + result) : Number(result);
}

///////////////////////////////////////////////////
(function () {
    if (typeof String.prototype.trimLeadingZeros !== 'function') {
        String.prototype.trimLeadingZeros = function () {
            var trimmedString = this;

            while (trimmedString.charAt(0) === '0') {
                trimmedString = trimmedString.substr(1);
            }

            return trimmedString;
        }
    }
}());