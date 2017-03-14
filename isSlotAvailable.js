var calendar = [
    {
        event: 'śniadanie',
        start: '2016-01-01 08:00',
        end: '2016-01-01 09:00'
    },
    {
        event: 'jogging',
        start: '2016-01-01 13:20',
        end: '2016-01-01 13:40'
    },
    {
        event: 'CodeSkill#6',
        start: '2016-01-01 18:00',
        end: '2016-01-01 22:00'
    }
];

function isSlotAvailable(slot) {
    slot.start = convertToDateObj(slot.start);
    slot.end = convertToDateObj(slot.end);

    return calendar.every(function (event) {
        return !(slot.start <= convertToDateObj(event.end) && slot.end >= convertToDateObj(event.start));
    });

    /////////////////////////
    function convertToDateObj(dateTimeString) {
        return new Date(dateTimeString);
    }
}
