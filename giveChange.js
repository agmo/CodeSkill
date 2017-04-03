function giveChange(expectedChange) {
    if (expectedChange <= 0 || !Number.isSafeInteger(expectedChange)) {
        throw 'invalid input';
    }

    const availableCoins = [5, 2, 1];
    let coinsToGive = [];

    for (let i = 0; i < availableCoins.length; i++) {
        let currentCoin = availableCoins[i];
        let noOfCoins = Math.floor(expectedChange / currentCoin);

        expectedChange -= noOfCoins * currentCoin;

        while (noOfCoins > 0) {
            coinsToGive.push(currentCoin);
            --noOfCoins;
        }

        if (expectedChange === 0) {
            break;
        }
    }

    return coinsToGive;
}