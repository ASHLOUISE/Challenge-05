$(document).ready(function(){
    
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings('.description').val();
        var time =$(this).parent().attr("id");

        localStorage.setItem(time, value);


        showNotification("Appointment saved to local storage");
    });
    

    function showNotification(message) {
        var notification = $(".notification");
        notification.text(message);
        notification.css('display', 'block');

        setTimeout(function() {
            notification.css('display', 'none');
        }, 3000); 
    }
    
    function hourUpdate(){
        var currentHour = moment().hours();
        

    
        $(".time-block").each(function () {
            var timeBlockId = $(this).attr("id");
            var storedValue = localStorage.getItem(timeBlockId);
    
            if (storedValue) {
                $(this).find(".description").val(storedValue);
            }
        });
    }
 

    hourUpdate()

    var interval = setInterval(hourUpdate, 15000)

    $("hour-9 .description").val(localStorage.getItem("hour-9"))
    $("hour-10 .description").val(localStorage.getItem("hour-10"))
    $("hour-11 .description").val(localStorage.getItem("hour-11"))
    $("hour-12 .description").val(localStorage.getItem("hour-12"))
    $("hour-13 .description").val(localStorage.getItem("hour-13"))
    $("hour-14 .description").val(localStorage.getItem("hour-14"))
    $("hour-15 .description").val(localStorage.getItem("hour-15"))
    $("hour-16 .description").val(localStorage.getItem("hour-16"))
    $("hour-17 .description").val(localStorage.getItem("hour-17"))

    $("#currentDay").text(moment().format("dddd, MMMM Do"));


});



