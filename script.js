$(document).ready(function() {
    //makes a functioning clock for current time and date
    function updateTime() {
        var now = moment();
        var exactTime = now.format("MMMM Do YYYY, h:mm:ss a");
    
        $("#currentDay").text(exactTime);
    }
    setInterval(updateTime, 1000);
    
// provides save button functionality, and localStorage access
    $(".saveBtn").on("click", function(){
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
    
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13  .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

// Sets (past, present, future) for time blocks
    function timeslotAvailabiltiy(){
        var hourCurrent = moment().hour();
        console.log(hourCurrent)

        $(".time-block").each(function(){
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log(hourBlock, hourCurrent)

            if (hourBlock < hourCurrent){
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }else if (hourBlock === hourCurrent) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }else{
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
            
        })
    } 
    timeslotAvailabiltiy();
})
