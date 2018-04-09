function scheduleMeeting(availability) {
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

function datesOverlap(slotA, slotB) {
    const slotAStart = slotA[0];
    const slotAEnd = slotA[1];
    const slotBStart = slotB[0];
    const slotBEnd = slotB[1];

    return isStartABeforeEndB(slotAStart, slotBEnd) && isEndAAfterStartB(slotAEnd, slotBStart);

    function isStartABeforeEndB(a, b) {
        const yearA = extractYear(a);
        const yearB = extractYear(b);

        if (yearA === yearB) {
            return checkMonth(a, b);
        } else {
            return yearA < yearB;
        }

        function checkMonth(a, b) {
            const monthA = extractMonth(a);
            const monthB = extractMonth(b);

            if (monthA === monthB) {
                return checkDay(a, b);
            } else {
                return monthA < monthB;
            }
        }

        function checkDay(a, b) {
            const dayA = extractDay(a);
            const dayB = extractDay(b);

            return dayA <= dayB;
        }
    }

    function isEndAAfterStartB(a, b) {
        const yearA = extractYear(a);
        const yearB = extractYear(b);

        if (yearA === yearB) {
            return checkMonth(a, b);
        } else {
            return yearA > yearB;
        }

        function checkMonth(a, b) {
            const monthA = extractMonth(a);
            const monthB = extractMonth(b);

            if (monthA === monthB) {
                return checkDay(a, b);
            } else {
                return monthA > monthB;
            }
        }

        function checkDay(a, b) {
            const dayA = extractDay(a);
            const dayB = extractDay(b);

            return dayA >= dayB;
        }
    }
}

function extractDay(dateString) {
    return Number.parseInt(dateString.substr(8), 10)
}

function extractMonth(dateString) {
    return Number.parseInt(dateString.substr(5, 2))
}

function extractYear(dateString) {
    return Number.parseInt(dateString.substr(0, 4))
}

function findFirstAvailableDate(slotA, slotB) {
    const slotAStart = slotA[0];
    const slotBStart = slotB[0];

    const result = {year: '', month: '', day: ''};

    checkYear(slotAStart, slotBStart);


    function checkYear(a, b) {
        const yearA = extractYear(a);
        const yearB = extractYear(b);

        if (yearA === yearB) {
            result.year = yearA;
            checkMonth(slotAStart, slotBStart);
        } else if (yearA < yearB) {
            result.year = yearB;
            result.month = extractMonth(b);
            result.day = extractDay(b);
        } else if (yearA > yearB) {
            result.year = yearA;
            result.month = extractMonth(a);
            result.day = extractDay(a);
        }

    }

    function checkMonth(a, b) {
        const monthA = extractMonth(a);
        const monthB = extractMonth(b);

        if (monthA === monthB) {
            result.month = monthA;
            checkDay(a, b);
        } else if (monthA < monthB) {
            result.month = extractMonth(b);
            result.day = extractDay(b);
        } else if (monthA > monthB) {
            result.month = extractMonth(a);
            result.day = extractDay(a);
        }
    }

    function checkDay(a, b) {
        const dayA = extractDay(a);
        const dayB = extractDay(b);

        result.day = Math.max(dayA, dayB);
    }

    return `${result.year}-${addLeadingZero(result.month)}-${addLeadingZero(result.day)}`;
}

function isEarlier(slotA, slotB) {
    const slotAEnd = slotA[1];
    const slotBStart = slotB[0];

    return isEndABeforeStartB(slotAEnd, slotBStart) ? 'A' : 'B';

    function isEndABeforeStartB(a, b) {
        const yearA = extractYear(a);
        const yearB = extractYear(b);

        if (yearA === yearB) {
            return checkMonth(a, b);
        } else {
            return yearA < yearB;
        }

        function checkMonth(a, b) {
            const monthA = extractMonth(a);
            const monthB = extractMonth(b);

            if (monthA === monthB) {
                return checkDay(a, b);
            } else {
                return monthA < monthB;
            }
        }

        function checkDay(a, b) {
            const dayA = extractDay(a);
            const dayB = extractDay(b);

            return dayA < dayB;
        }
    }
}


