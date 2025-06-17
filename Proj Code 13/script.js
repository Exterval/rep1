//Build a Palindrome Checker
let test = prompt("Enter words or sumn:");
let reuslt = test.toLowerCase();
let testomg = '';

const checker = reuslt.replace(/\s+/g, "");
console.log(checker);

testomg = [...checker.toString()];
switch(testomg.length){
    case 4:
        if(testomg[0]===testomg[testomg.length-1] && testomg[1]===testomg[testomg.length-2]){
            console.log(`Palindrome: ${checker}`);
        }else{
            console.log("Not a palindrome");
        }
    break;

    default:
    if(testomg[0]===testomg[testomg.length-1]){
    console.log(`Palindrome: ${checker}`);
    }else{
    console.log("Not a palindrome");
    }
    break;
}


alert(`You entered ${reuslt}`);
