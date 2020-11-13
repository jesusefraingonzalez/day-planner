// get current time and date
var now = dayjs();
//display the current date at the top of the page
var currentDay = $("#current-day");
currentDay.text(now.format('dddd , DD  MMMM YYYY'));


//add functionality for saving text in todo area
//key = time of time block , value = textarea content
var saveBtn = $(".saveBtn");
saveBtn.on('click' , function(event){
    event.preventDefault();
    var userText = $('textarea').val();
    localStorage.setItem('efrain' , userText);
});

