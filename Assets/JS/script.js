// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Display the current date in the header of the page.

// const currentDate = dayjs();
// console.log(currentDate.format("dddd, MMMM D, YYYY"));
// var currentDay = document.getElementById('currentDay');
// currentDay.textContent = currentDate.format("dddd, MMMM D, YYYY");

// Below I try the jQuery method

var currentDate = dayjs().format('dddd, MMMM DD, YYYY');
console.log(currentDate)
$('#currentDay').html(currentDate);

// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//Make a click listener to the saveBtn and get the values stored: 
$('.saveBtn').on('click', function () {
  var hour = $(this).parent().attribute('id');
  var tasks = $(this).siblings(".description").val();
  console.log(hour, tasks)
  // Adding the descriptions in the localStorage:
  localStorage.setItem(hour, tasks)
})

function hourTracker() {
  var currentHour = dayjs().hour();

  $('.time-block').each(function () {
    var timeBlock = parseInt($(this).attribute('id').split('hour-')[1]);

    if (timeBlock === currentHour) {
      $(this).setAttribute('present');
    } else if (timeBlock > currentHour) {
      $(this).setAttribute('future');


    } else {
      $(this).setAttribute('past');

    }
  })
}
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?

//   // Retrieve items from the localStorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

hourTracker();
// });

