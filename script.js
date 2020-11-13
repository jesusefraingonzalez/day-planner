// get current time and date
var now = dayjs();
//display the current date at the top of the page
var currentDay = $("#current-day");
currentDay.text(now.format('dddd , DD  MMMM YYYY'));

