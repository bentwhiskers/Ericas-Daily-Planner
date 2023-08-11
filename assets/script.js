$(function () {

    var currentDayEl = $("#currentDay");
    var saveBtn = $(".saveBtn");

    // Save to local storage on save button click
    saveBtn.on('click', function () {
        var value = $(this).siblings("textarea").val();
        var id = $(this).parent().attr("id");
        localStorage.setItem(id, value);
    });

    function renderInput() {
        // For each textarea (user input area), check if there's a saved value in localStorage
        $(".description").each(function() {
            var timeBlockId = $(this).parent().attr("id");
            var storedValue = localStorage.getItem(timeBlockId);
            if (storedValue) {
                $(this).val(storedValue);
            }
        });
    }

    function applyTense() {
        var currentHour = parseInt(dayjs().format("h")); 

        $("section[id^='hour']").each(function() {
            var blockHour = parseInt($(this).attr("id").split("-")[1]); // get the hour from the id

            if (blockHour === currentHour) {
                $(this).addClass('present');
            } else if (blockHour < currentHour) {
                $(this).addClass('past');
            } else {
                $(this).addClass('future');
            }
        });
    }

    function displayDate() {
        var currentDate = dayjs().format('MMMM DD YYYY [at] hh:mm a');
        currentDayEl.text(currentDate);
    }

    // Initial function calls
    displayDate();
    applyTense();
    renderInput();
});


