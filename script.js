// get current time and date
var now = dayjs();
//display the current date at the top of the page
var currentDay = $("#current-day");
currentDay.text(now.format('dddd , DD  MMMM YYYY'));

//dynamically create time-blocks
//start time set to 9AM, end time at 5 pm
var startTime = dayjs().set('hour', 9).set('minute', 00).set('seconds', 00);
var endTime = dayjs().set('hour', 17).set('minute', 00).set('seconds', 00);
var list = $('#list');

while (startTime.isBefore(endTime)) {
    
    var listEl = $('<li>').addClass('time-block row').attr('data-time', startTime.format('h A'));
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

    // console.log('start ' + startTime.get('h'));
    // console.log('now ' + now.get('h'));
    listEl.append(timeEl);
    listEl.append(inputArea);
    listEl.append(saveButton);
    list.append(listEl);
    //increment start time to get to end of the day 
    startTime = startTime.add(1, 'hour');
}
//add functionality for saving text in todo area
// click event for save button stores a time key and textarea value
$('li').on('click', function (event) {
    event.preventDefault();
    var userText = $(this).children('textarea').val();
    var thisTime = $(this).attr('data-time');
    localStorage.setItem(thisTime, userText);
});

// make sure time is saved on the page after refresh
$('li').each(function(index , item){
    console.log($(this).attr('data-time'));
    console.log(item);
    var task = localStorage.getItem($(this).attr('data-time'));
    console.log(task);
    $(this).children('textarea').val(task);
});