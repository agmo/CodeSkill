function countLines(text, lineLength) {
    var linesTotal = 0;
    var currentIndex = lineLength;
    var counting = true;

    while (counting) {
        if (currentIndex >= text.length) {
            increaseLineCount();
            quitCounting();
        } else if (isSpace(text.charCodeAt(currentIndex))) {
            increaseLineCount();
            goToNextLine();
        } else {
            lookBehindForASpace();
        }
    }

    return linesTotal;

    //////////////////////////
    function goToNextLine() {
        currentIndex += lineLength + 1;
    }

    function increaseLineCount() {
        linesTotal++;
    }

    function isSpace(charCode) {
        return charCode === 32;
    }

    function lookBehindForASpace() {
        do {
            currentIndex--;
        } while (!isSpace(text.charCodeAt(currentIndex)))
    }

    function quitCounting() {
        counting = false;
    }
}