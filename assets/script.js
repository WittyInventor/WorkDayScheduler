// initializing and getting moment from current day
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

var timeblocksEl = document.querySelectorAll(".description")
// initializing the timeblocksEl defining the query selector of the description text area.
// var means the first time I'm defining.

var saveButtonsEl = document.querySelectorAll(".saveBtn")

// initializing the saveButtonsEl (arrayofelements) to = the query selector of class of saveBtn.

// console.log(timeblocksEl)
// console.log means the computer screen is reading back to the user what we logged.
// console.log(timeblocksEl[0].getAttribute("data-whatever"))

// using a loop to target every index of the list of the text areas/time blocks for each function
//  each stands for= foreach = for loop
$(".time-block").each(function
    (index) {
        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        // adding an event listener to the saveButtonsEl as the index (the hard brackets[] means
        // targeting specific index) and make the saveButtons clickable.Call back function is the response of the event listener.
        saveButtonsEl[index].addEventListener("click",function(){

            // console.log(timeblocksEl[index].value)
            // console.log([index])
            localStorage.setItem("loop" + index, timeblocksEl[index].value);
        })
        // local storage saves the specific item of the timeblocks and the order of the text areas to the browser, the .value is the action of retrieval but no saving thats the job of local storage.
        // method of data retrieval acting like a function
  
timeblocksEl[index].value  = localStorage.getItem("loop" + index)
// timeblocksEl [index].value is redefining to what has already been saved on local storage and getting the item with the expression + string which equals to 1 argument which creates loop results. 
// the = equal symbol sign means to redefine or define. 
 
    // console.log(timeblocksEl[])
    if (moment().format("H") == timeblocksEl[index].getAttribute("data-hour")) {
        // getting the H which means military hour of moment format to compare against
        // timeblocksEl index to get the attribute of the hour cycle.
        // 2 == equal signs means comparing values.  3 === equal signs means conditional or comparison values and types. So get attribute means to refer and get the html element within the array of elements. The getAttribute is the action of retrieval of the data of the data hour which is located in HTML element. 

        timeblocksEl[index].setAttribute("class", "description present")
        // calling out the single text area meaning index of the time blocks.then set the attribute means I'm defining the data of class and then changing the value/definition to description present.
        // the following code is the same thing but changing the description past and future.
    } else if (moment().format("H") < timeblocksEl[index].getAttribute("data-hour")) {
        timeblocksEl[index].setAttribute("class", "description future")
    } else {
        timeblocksEl[index].setAttribute("class", "description past")
    }
});




