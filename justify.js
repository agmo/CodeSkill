function justify(text) {
    var lines = text.split('\n');
    var longestLine = getMaxLineLength(lines);
    var justifiedLines = lines.map(function (line) {
        if (line.length === longestLine || line.length <= Math.floor(longestLine / 2)) {
            return line;
        }

        return insertSpaces(line, longestLine);
    });

    return justifiedLines.join('\n');

    ////////////////////////////////////////////////
    function insertSpaces(string, expectedLength) {
        var strippedOfSpaces = stripSpaces(string);
        var spacesToInsert = expectedLength - strippedOfSpaces.join('').length;

        for (var i = 0; i < spacesToInsert; i++) {
            strippedOfSpaces[i % (strippedOfSpaces.length - 1)] += ' ';
        }

        return strippedOfSpaces.join('');

        function stripSpaces(string) {
            var wordsAndSpaces = string.split(' ');
            var words = filterOutSpaces(wordsAndSpaces);

            return words;
        }

        function filterOutSpaces(array) {
            return array.filter(function (element) {
                return element.length !== 0;
            })
        }
    }

    function getMaxLineLength(lines) {
        var maxLength = 0;

        lines.forEach(function (line) {
            if (line.length > maxLength) {
                maxLength = line.length;
            }
        });

        return maxLength;
    }
}