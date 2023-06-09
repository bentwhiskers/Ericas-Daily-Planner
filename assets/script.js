// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $("#currentDay");
var saveBtn = $(".saveBtn");
var rootEl = $("#root");

$(function () {
    saveBtn.on('click', function () {
        var value = $(this).siblings("textarea").val();
        var id = $(this).parent().attr("id");
        localStorage.setItem(id, value);
        
    });
    
    function applyTense () {
        currentHour = dayjs().format("h");
        var timeBlock = $("section[id^='hour']");

         if (currentHour == timeBlock) {
            timeBlock.addClass('present');
        } else if (currentHour > timeBlock) {
            timeBlock.addClass('future');
        } else { 
            timeBlock.addClass('past');
        };
    
    };
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    function retrieveInput() {
        var 
    }
    
    function displayDate() {
        var currentDate = dayjs().format('MMMM DD YYYY [at] hh:mm a');
        currentDayEl.text(currentDate);
    };

    displayDate();
    applyTense();
  
});
