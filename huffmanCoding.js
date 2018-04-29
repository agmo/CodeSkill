const input = 'I love CodeSkill';
const dict = {};
let tree;

function calculateWeights(input) {
    const weights = {};

    for (let i = 0, len = input.length; i < len; i++) {
        weights[input[i]] = weights[input[i]] + 1 || 1;
    }

    return weights;
}

function mapToNodes(weights) {
    const nodes = [];
    for (let char in weights) {
        if (weights.hasOwnProperty(char)) {
            nodes.push([weights[char], char]);
        }
    }
    return nodes.sort();

}

function createTree(nodes) {
    if (nodes.length === 1) {
        tree = nodes[0][1];

        return tree;
    }

    const rest = nodes.splice(2);
    const weightSum = nodes[0][0] + nodes[1][0];
    const removedChars = [nodes[0][1], nodes[1][1]];

    const sortedRest = insertIntoSorted(rest, [weightSum, removedChars]);

    return createTree(sortedRest);
}

function insertIntoSorted(arrToInsertInto, itemToInsert) {
    for (let i = 0, len = arrToInsertInto.length; i < len; i++) {
        if (arrToInsertInto[i][0] >= itemToInsert[0]) {
            arrToInsertInto.splice(i, 0, itemToInsert);
            return arrToInsertInto;
        }
    }

    arrToInsertInto.push(itemToInsert);
    return arrToInsertInto;
}

function visit(node, code = '') {
    if (typeof node === 'string') {
        dict[node] = code;
        return;
    }

    visit(node[0], code + '0');
    visit(node[1], code + '1');
}

function encode(input, dict) {
    let encoded = '';

    for (let i = 0, len = input.length; i < len; i++) {
        encoded += dict[input[i]];
    }

    return encoded;
}

function decode(encoded) {
    let result = '';
    let _tree = tree;


    for (let i = 0, len = encoded.length; i < len; i++) {
        if (typeof _tree[encoded[i]] === 'string') {
            result += _tree[encoded[i]];
            _tree = tree;
            continue;
        }

        _tree = _tree[encoded[i]]
    }

    return result;
}

visit(createTree(mapToNodes(calculateWeights(input))));
console.log('dict:', dict);
console.log(encode(input, dict));
console.log(encode(input, dict).length);
console.log(decode(encode(input, dict)));