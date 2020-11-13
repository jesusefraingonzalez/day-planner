// get current time and date
var now = dayjs();
//display the current date at the top of the page
var currentDay = $("#current-day");
currentDay.text(now.format('dddd , DD  MMMM YYYY'));

//dynamically create time-blocks
//start time set to 9AM, end time at 5 pm
var startTime = dayjs().set('hour', 1).set('minute', 00).set('seconds', 00);
var endTime = dayjs().set('hour', 17).set('minute', 00).set('seconds', 00);

while (startTime.isBefore(endTime)) {
    var list = $('#list');
    var listEl = $('<li>').addClass('time-block row');
    var timeEl = $('<div>').addClass('hour').html(startTime.format('h A'));
    var inputArea = $('<textarea>');
    var saveButton = $('<input>').addClass('saveBtn').attr('type', 'button').attr('value', 'Save');

    if (startTime.get('h') === now.get('h')) {
        inputArea.addClass('present');
    }
    else if (startTime.get('h') < now.get('h')) {
        inputArea.addClass('past');
    }
    else inputArea.addClass('future');

    console.log('start ' + startTime.get('h'));
    console.log('now ' + now.get('h'));
    listEl.append(timeEl);
    listEl.append(inputArea);
    listEl.append(saveButton);
    list.append(listEl);
    //increment start time to get to end of the day 
    startTime = startTime.add(1, 'hour');
}
//add functionality for saving text in todo area
//key = time of time block , value = textarea content
var saveBtn = $(".saveBtn");
saveBtn.on('click', function (event) {
    event.preventDefault();
    var userText = $('textarea').val();
    localStorage.setItem('efrain', userText);
});

