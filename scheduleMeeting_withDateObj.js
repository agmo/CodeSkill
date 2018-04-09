function scheduleMeeting_withDateObj(availability) {
    const availabilityA = availability[0];
    const availabilityB = availability[1];

    if (availabilityA.length === 0 || availabilityB.length === 0) {
        return null;
    }

    let startJ;
    for (let i = 0; i < availabilityA.length; i++) {
        const slotA = availabilityA[i];

        for (let j = startJ || 0; j < availabilityB.length; j++) {
            const slotB = availabilityB[j];

            if (datesOverlap(slotA, slotB)) {
                return findFirstAvailableDate(slotA, slotB);
            } else {
                if (isEarlier(slotA, slotB) === 'B') {
                    startJ = j + 1;
                } else {
                    j++;
                }
            }
        }
    }

    return null;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function addLeadingZero(number) {
    return number < 10 ? `0${number}` : number;
}

function convertToDateObj(dateTimeString) {
    return new Date(dateTimeString);
}

function datesOverlap(slotA, slotB) {
    const slotAStart = convertToDateObj(slotA[0]);
    const slotAEnd = convertToDateObj(slotA[1]);
    const slotBStart = convertToDateObj(slotB[0]);
    const slotBEnd = convertToDateObj(slotB[1]);

    return slotAStart <= slotBEnd && slotAEnd >= slotBStart;
}

function findFirstAvailableDate(slotA, slotB) {
    const slotAStart = convertToDateObj(slotA[0]);
    const slotBStart = convertToDateObj(slotB[0]);

    const result = new Date(Math.max(slotAStart, slotBStart));

    return `${result.getFullYear()}-${addLeadingZero(result.getMonth() + 1)}-${addLeadingZero(result.getDate())}`
}

function isEarlier(slotA, slotB) {
    const slotAEnd = convertToDateObj(slotA[1]);
    const slotBStart = convertToDateObj(slotB[0]);

    return slotAEnd < slotBStart ? 'A' : 'B';
}


