// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $("#currentDay");
var saveBtn = $(".saveBtn");
var rootEl = $("#root");

var hour5 = $("#hour-5");
var hour6 = $("#hour-6");
var hour7 = $("#hour-7");
var hour8 = $("#hour-8");
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour1 = $("#hour-1");
var hour2 = $("#hour-2");
var hour3 = $("#hour-3");
var hour4 = $("#hour-4");
var hourX = [hour5, hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4];


$(function () {
    saveBtn.on('click', function () {
        var value = $(this).siblings("textarea").val();
        var id = $(this).parent().attr("id");
        localStorage.setItem(id, value);
        
    });
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    // if time of box = current time, style green 
    // else if time is past, style red
    // else if time is future, style grey

    currentHour = dayjs().hour();
    console.log(dayjs().hour());
    
    function applyTense () {
         if (currentHour == hourX) {
            $(".time-block").addClass('.present');
        } 
    
        };
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    
   function displayDate() {
        var currentDate = dayjs().format('MMMM DD YYYY [at] hh:mm a');
        currentDayEl.text(currentDate);
   };

   displayDate();
   applyTense();
  
});
