//algo for Roman Numeral Converter
const userInput = document.getElementById('number');
let num = 0;
//reference for roman numerals
const table =[["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10],
    ["IX", 9], ["V", 5], ["IV", 4],["I", 1]
];
let roman = [];
let string;

const assess = (val) =>{
    reset();
    val = userInput.value;
if(isNaN(val) || val === undefined || val === null || val === ''){
   alert("What are you doing");
}else{
    table.forEach(x=>{
        while(x[1] <= val){
            console.log(x[1]);
            roman.push(x[0]);
            num += x[1];
            val -= x[1];
        }
        return string = roman.join("");
    });
    document.getElementById('output').textContent = string;
    }
    console.log(num, val, roman, string);
}

const reset = () =>{
    roman.splice(0, roman.length);
    document.getElementById('output').textContent = "";
}

