function removeDuplicateChars(string) {
    return [...new Set(string)].join('');
}
