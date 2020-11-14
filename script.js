// get current time and date
var now = dayjs();
//display the current date at the top of the page
var currentDay = $("#current-day");
currentDay.text(now.format('dddd , DD  MMMM YYYY'));

//dynamically create time-blocks
//current time initialized to 9AM, end time at 5 pm
var currentTime = dayjs().set('hour', 9).set('minute', 00).set('seconds', 00);
var endTime = dayjs().set('hour', 17).set('minute', 00).set('seconds', 00);


while (currentTime.isBefore(endTime)) {
    var list = $('#list');
    var listEl = $('<li>').addClass('time-block row').attr('data-time', currentTime.format('h A'));
    var timeEl = $('<div>').addClass('hour').html(currentTime.format('h A'));
    var inputArea = $('<textarea>');
    var saveButton = $('<input>').addClass('saveBtn').attr('type', 'button').attr('value', 'Save');

    //check time block time against now for color change functionality
    if (currentTime.get('h') === now.get('h')) inputArea.addClass('present');
    else if (currentTime.get('h') < now.get('h')) inputArea.addClass('past');
    else inputArea.addClass('future');

    //append elements to corresponding parents
    listEl.append(timeEl);
    listEl.append(inputArea);
    listEl.append(saveButton);
    list.append(listEl);

    //increment start time to get to end of the day 
    currentTime = currentTime.add(1, 'hour');
}

//add functionality for saving text in todo area
// click event for save button stores a time key and textarea value
$('li').on('click', function (event) {
    event.preventDefault();
    var userText = $(this).children('textarea').val();
    var thisTime = $(this).attr('data-time');
    localStorage.setItem(thisTime, userText);
});

// make sure tasks are saved on the page after refresh
$('li').each(function () {
    var task = localStorage.getItem($(this).attr('data-time'));
    console.log(task);
    $(this).children('textarea').val(task);
});