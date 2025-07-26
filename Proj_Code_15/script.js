//algo for Roman Numeral Converter
let num = 0;
//reference for roman numerals
const table =[["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10],
    ["IX", 9], ["V", 5], ["IV", 4],["I", 1]
];
let roman = [];
let string;

let userInput = Number(prompt("Enter a number"));
if(isNaN(userInput) || userInput === undefined || userInput === null || userInput === ''){
   alert("What are you doing");
}else{
    //debug this
    while(userInput !== 0){
    table.forEach(x=>{
        if(x[1] <= userInput){
            console.log(x[1]);
            num += x[1];
            userInput -= x[1];
            roman.push(x[0]);
            string = roman.join("");
        }
    });
    }
    
}
console.log(num, userInput, roman, string);


//