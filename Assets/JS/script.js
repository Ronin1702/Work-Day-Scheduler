// Display the current date in the header of the page.

// const currentDate = dayjs();
// console.log(currentDate.format("dddd, MMMM D, YYYY"));
// var currentDay = document.getElementById('currentDay');
// currentDay.textContent = currentDate.format("dddd, MMMM D, YYYY");

// Below I try the jQuery method
var currentDate = dayjs().format('dddd, MMMM DD, YYYY');
console.log(currentDate);
$('#currentDay').text(currentDate);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  //Make a click listener to the saveBtn and get the values stored: 
  $('.saveBtn').on('click', function () {
    // define and allocate the hour of the related time-block.
    // this here refers to the same line where .saveBtn class is located.
    var hour = $(this).parent().attr('id');
    // definte inputs in the description box as tasks.
    var tasks = $(this).siblings('.description').val();
    // console log to check if my variables are set up correctly
    console.log(hour, tasks);
    // Storing the descriptions and related time-block in the localStorage:
    localStorage.setItem(hour, tasks);
  })
  // Retrieve items from the localStorage by using ids from each time-block div
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // Below I create a listener for the trashBtn and make it retrieve and remove related vals in the localStorage
  $('.trashBtn').on('click', function () {
    localStorage.removeItem($(this).parent().attr('id'));
    $(this).siblings('.description').val('');
  })
  // Below I created a listener for clearBtn and make it clear out all values and keys in the localStorage
  $('.clearBtn').on('click', function () {
    localStorage.clear();
    $('.description').val('');
  })

  function hourTracker() {

    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var timeBlock = parseInt($(this).attr('id').split('hour-')[1]);
      // console log to chedck if the varibles are set up alright
      console.log(timeBlock);
      console.log(currentHour);

      if (timeBlock === currentHour) {

        $(this).addClass('present');

      } else if (timeBlock > currentHour) {

        $(this).addClass('future');

      } else {

        $(this).addClass('past');
      }
    })
  }
  // kick on the hourTracker and set and interval to let it run every 15000ms
  hourTracker();
  setInterval(hourTracker, 15000);
})

