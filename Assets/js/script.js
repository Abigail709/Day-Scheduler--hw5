var dayScheduler = moment("04/7/22", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(dayScheduler);

$("#currentDay").text(moment().format("dddd, MMM Do"));

$(".saveBtn").on("click", function () {
   
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

function timeTracker() {
    
    var currentTime = moment().hour();

    $(".time-block").each(function () {
        var time = parseInt($(this).attr("id").split("hour")[1])
        console.log(time, currentTime)

        if (time < currentTime) {
            
            $(this).removeClass("future");
        }
        else if (time === currentTime) {
            
            $(this).addClass("present");
           
        }
        else {
            $(this).removeClass("past");
            $(this).addClass("future");

           

        };
    });
};



function savelocal() {
    $("#nueve .description").val(localStorage.getItem("nueve"));
    $("#diez .description").val(localStorage.getItem("diez"));
    $("#once .description").val(localStorage.getItem("once"));
    $("#doce .description").val(localStorage.getItem("doce"));
    $("#uno .description").val(localStorage.getItem("uno"));
    $("#dos .description").val(localStorage.getItem("dos"));
    $("#tres .description").val(localStorage.getItem("tres"));
    $("#cuatro .description").val(localStorage.getItem("cuatro"));
    $("#cinco .description").val(localStorage.getItem("cinco"));

}


savelocal();
timeTracker();