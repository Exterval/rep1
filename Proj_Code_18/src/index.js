
/*import "@fontsource/inter";*/ //DOES NOT WORK WITH STANDALONE LOCALHOST, NEED VITE, WEBPACK, ETC.

// MAKE A US TELEPHONE NUMBER VALIDATOR //

const input = document.getElementById('user-input');
const clear = document.getElementById('clear-btn');
const check =  document.getElementById('check-btn');
const result = document.createElement('p');

// US NUMBERS = (XXX) YYY-ZZZZ

const regex = /^(1\\s?)?(\([0-9]{3}\)|[0-9]{3})([-]?)([0-9]{3})([-]?)([0-9]{4})/;

function isValid(){
    const test = `1 1111111111`;
    console.log(test);
    console.log(regex.test(test));
}

check.addEventListener("click", ()=>{
    if(input.value === '') return alert("Please provide a phone number");
    else{
        isValid();
    }
    result.id = 'results-div';
    result.textContent = 'testing';
    document.body.appendChild(result);
});

clear.addEventListener("click", ()=>{
    input.value = '';
    if(!document.body.contains(result)) return;
    else document.body.removeChild(result);
})