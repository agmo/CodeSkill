function reverseDigits(number) {
    var negative = number < 0;
    var stringified = Math.abs(number).toString();
    var stringResult = stringified
        .split('')
        .reverse()
        .join('')
        .trimLeadingZeros();

    var numberResult = Number(stringResult);

    if (String(numberResult) === stringResult) {
        return negative ? (numberResult * -1) : numberResult;
    } else {
        throw new Error('The converted number cannot be accurately represented.')
    }

}

///////////////////////////////////////////////////
(function () {
    if (typeof String.prototype.trimLeadingZeros !== 'function') {
        String.prototype.trimLeadingZeros = function () {
            var trimmedString = this.valueOf();

            if (trimmedString.length === 1 && trimmedString.charAt(0) === '0') { //Do not trim for zero
                return trimmedString;
            }

            while (trimmedString.charAt(0) === '0') {
                trimmedString = trimmedString.substr(1);
            }

            return trimmedString;
        }
    }
}());