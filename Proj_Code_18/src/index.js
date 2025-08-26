
/*import "@fontsource/inter";*/ //DOES NOT WORK WITH STANDALONE LOCALHOST, NEED VITE, WEBPACK, ETC.

// MAKE A US TELEPHONE NUMBER VALIDATOR //

const input = document.getElementById('user-input');
const clear = document.getElementById('clear-btn');
const check =  document.getElementById('check-btn');
const resultDiv = document.getElementById('results-div');
const result = document.createElement('p');
// US NUMBERS = (XXX) YYY-ZZZZ

const regex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})(\s?[-]?\s?)([0-9]{3})(\s?[-]?\s?)([0-9]{4})$/;

function isValid(inp){
    console.log(inp);
    return regex.test(inp);
}

check.addEventListener("click", ()=>{
    if(input.value === '') return alert("Please provide a phone number");
    result.textContent = isValid(input.value) ? `Valid US Number: ${input.value}` : `Invalid US Number: ${input.value}`;
    resultDiv.appendChild(result);
});

clear.addEventListener("click", ()=>{
    input.value = '';
    if(resultDiv.textContent === '') return;
    else resultDiv.textContent = '';
})