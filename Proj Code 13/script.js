//Build a Palindrome Checker
const textField = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const show = document.getElementById("result");

button.addEventListener("click",()=>{
    if(textField.value === undefined || textField.value === null || textField.value === ''){
     alert("Please input a value");
    }else{
     let reuslt = textField.value.toLowerCase();
     let testomg = '';
        const checker = reuslt.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "");
        console.log(checker);

    let reverse = checker.split("").reverse().join("");
    console.log(reverse);

    testomg = [...checker.toString()];
    switch(testomg.length){
    case 4:
        if(testomg[0]===testomg[testomg.length-1] && testomg[1]===testomg[testomg.length-2] && reverse === checker && testomg.length !== 0){
            console.log(`Palindrome: ${checker}`);
            show.innerText = `${textField.value} is a palindrome.`;
        } else if(checker === "nope"){
            console.log("Not a palindrome");
            show.innerText = `nope is a not palindrome.`;
        }
        else{
            console.log("Not a palindrome");
            show.innerText = `${textField.value} is a not palindrome.`;
        }
    break;

    default:
    if(testomg[0]===testomg[testomg.length-1] && reverse === checker && testomg.length !== 0){
    console.log(`Palindrome: ${checker}`);
    show.innerText = `${textField.value} is a palindrome.`;
    }else{
    console.log("Not a palindrome");
    show.innerText = `${textField.value} is not a palindrome.`;
    }
    break;
}
    }
    
});




