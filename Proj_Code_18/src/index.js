
/*import "@fontsource/inter";*/ //DOES NOT WORK WITH STANDALONE LOCALHOST, NEED VITE, WEBPACK, ETC.

// MAKE A US TELEPHONE NUMBER VALIDATOR //

const input = document.getElementById('user-input');
const clear = document.getElementById('clear-btn');
const check =  document.getElementById('check-btn');
const result = document.getElementById('result-div');

check.addEventListener("click", ()=>{
    if(input.value === '') alert("Please provide a phone number");
    else{

    }
});

clear.addEventListener("click", ()=>{
    input.value = '';
    result.value = '';
})