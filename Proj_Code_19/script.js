// memory card game 3x3

let values = ['💀', '👿', '😭'];
let currentSelections = [];
let isAPair;
const box = document.querySelector('.box');

for(let i = 0; i<9; i++){
    const elem = document.createElement("div");
    elem.id = `elem-${i}`;
    elem.textContent = values[Math.floor(Math.random()*values.length-1)+1];
    box.append(elem);
}

Array.from(box.children).forEach((el)=>{
    el.addEventListener('click', clickedBox);
});

function disable(bool){
    console.log('disable called');
    if(bool){
        currentSelections[0].removeEventListener('click', clickedBox);
        currentSelections[1].removeEventListener('click', clickedBox);
    }else{
        currentSelections[0].style.backgroundColor = "darkred";
        currentSelections[1].style.backgroundColor = "darkred";
       setTimeout(() => {
        currentSelections[0].style.backgroundColor = "hsl(26, 88%, 70%)";
        currentSelections[1].style.backgroundColor = "hsl(26, 88%, 70%)";
    }, 1000);
        currentSelections[0].classList.remove("disabled");
        currentSelections[1].classList.remove("disabled");        
    }     
    return setTimeout(() => {
            currentSelections.splice(0,2);
        }, 1000);
}

function pair(arr){
    if (arr.length < 2) return console.error('More items are needed to assess!');
    else isAPair = check(arr);
    disable(isAPair);
}

//check for elems if a pair is matched
function check(arr){
    console.log(arr);
    if(arr[0].innerText === arr[1].innerText){
        console.log('ts true'); 
        return true;
    } 
    else{
        return false;
    }
}

function clickedBox(evt){ //USE EVT FOR EXPLICIT FUNCTIONS INSIDE ADDEVENTLISTENERS
    evt.target.classList.add('disabled');
    evt.target.disable = true;
    if(currentSelections.length !== 0 && evt.target.id === currentSelections[0].id){
        return alert('Choose a different element.');
    } 
    currentSelections.push(evt.target);
    const pairID = setTimeout(pair(currentSelections), 500);
}

