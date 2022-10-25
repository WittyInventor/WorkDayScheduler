var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

var timeblocksEl = document.querySelectorAll(".description")
var saveButtonsEl = document.querySelectorAll(".saveBtn")
console.log(saveButtonsEl)
moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(timeblocksEl[0].getAttribute("data-whatever"))
$(".time-block").each(function
    (index) {
        saveButtonsEl[index].addEventListener("click",function(){
            console.log(timeblocksEl[index].value)
            localStorage.setItem(key, value);
        })
  


    // console.log(timeblocksEl[])
    if (moment().format("H") == timeblocksEl[index].getAttribute("data-hour")) {
        timeblocksEl[index].setAttribute("class", "description present")
    } else if (moment().format("H") < timeblocksEl[index].getAttribute("data-hour")) {
        timeblocksEl[index].setAttribute("class", "description future")
    } else {
        timeblocksEl[index].setAttribute("class", "description past")
    }
});




