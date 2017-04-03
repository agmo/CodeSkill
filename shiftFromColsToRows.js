function shiftFromColsToRows(input) {
    input = input.split('\n').map(item => item.split('|'));

    let shifted = Object.keys(input[0]) //http://stackoverflow.com/a/40575135/7091985
        .map(column => input.map(row => row[column]));

    return shifted.map(item => item.join('|')).join('\n');
}