var dayScheduler = moment("04/7/22", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(dayScheduler);

$("#currentDay").text(moment().format("dddd, MMM Do"));

$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})
