
const display = document.getElementById('display');

function DisplayAppend(input){

    display.value += input;

}

function Delete(){
    display.value = "";
}

function Calculate(){

    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }
}