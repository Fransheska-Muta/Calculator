//this says that whatever value is clicked on, display it on the input
const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}

//this clears the values once AC is clicked
function clearDisplay(){
    display.value = "";
}

//this is the function that calculates teh values
function calculate(){
    display.value = eval(display.value)
}