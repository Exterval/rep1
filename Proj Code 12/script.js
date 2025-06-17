/*Note to self: I know little about javascript DOM manipulation yet so
reference from here: https://www.geeksforgeeks.org/javascript-calculator/
*/ 

//VARIABLES
let currentInput;
let prevInput;
let operation;
let result;

//BUTTONS INITIALIZED
const one = document.querySelector("#one");
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const zero = document.querySelector('#zero');
const calcScreen = document.querySelector('#text');
const equal = document.querySelector('#equal');

//IF EQUAL
function equ(){
    console.log("Equal is pressed");
    calculate();
}

//CALCULATE
function calculate(){
    switch(operation){
        case '+':
            result =  parseFloat(prevInput) + parseFloat(currentInput);
        break;
        case '-':
            result =  parseFloat(prevInput) - parseFloat(currentInput);
        break;
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput);
        break;
        case '/':
            if(currentInput == '0' || currentInput === 0){
                console.log("Tried to divide by zero");
                alert("Cannot divide by zero.");
                return;
            }
            result =  parseFloat(prevInput) / parseFloat(currentInput);
        break;
        default:
        return;
    }
    console.log(result);
    calcScreen.innerText = result;
    currentInput = result.toString();
    prevInput = '';
    currentOperation = '';
}

//NUMBERS APPEND TO DISPLAY
function numberPlace(num){
    if(currentInput === undefined){
        currentInput = num;
    }else{
        currentInput += num;
    }
    calcScreen.innerText += num;
    console.log(currentInput);
}

//OPERATION APPEND TO DISPLAY AND INPUT SWITCHING
function operationPlace(oper){
    if(currentInput === ''){
        return;
    } 
    if(prevInput !== ''){
        calculate();
    }
    operation = oper;
    prevInput = currentInput;
    currentInput = '';
    //display to calculator
    calcScreen.innerText += operation;
}

//CHECK INPUT
function uno(){
    console.log("One is clicked");
}

function dos(){
    console.log("Two is clicked");
}

function tres(){
    console.log("Three is clicked");
}

function quatro(){
    console.log("Four is clicked");
}

function cinco(){
    console.log("Five is clicked");
}

function sais(){
    console.log("Six is clicked");
}

function siete(){
    console.log("Seven is clicked");
}

function ocho(){
    console.log("Eight is clicked");
}

function nueve(){
    console.log("Nine is clicked");
}

function none(){
    console.log("Zero is clicked");
}

